const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const supabase = require('../db');

const upload = multer({ storage: multer.memoryStorage() });

const RESUME_BUCKET = 'resumes';

// ─── Helper to parse email recipients ─────────────────────────
const getContactRecipients = () => {
    const envEmails = process.env.CONTACT_TO_EMAIL;
    if (envEmails) {
        return envEmails.split(',').map(email => email.trim()).filter(Boolean);
    }
    return ['connect@tracenetwork.in'];
};

const getCareerRecipients = () => {
    const envEmails = process.env.CAREER_TO_EMAIL;
    if (envEmails) {
        return envEmails.split(',').map(email => email.trim()).filter(Boolean);
    }
    return ['hr@tracenetwork.in'];
};

const getCertificateRecipients = () => {
    const envEmails = process.env.CERTIFICATE_TO_EMAIL;
    if (envEmails) {
        return envEmails.split(',').map(email => email.trim()).filter(Boolean);
    }
    return [
        'Vaibhav@tracenetwork.in',
        'ranadeep@tracenetwork.in',
        'ravi@tracenetwork.in',
        'abhishekmishra.it216@gmail.com'
    ];
};

// ─── Nodemailer transporter ──────────────────────────────────
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT, 10) || 587,
    secure: process.env.EMAIL_SECURE === 'true', // true for port 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});

// ─── Upload resume to Supabase Storage ───────────────────────
async function uploadResume(file) {
    if (!file || !file.buffer) return null;
    const ext = file.originalname.split('.').pop();
    const path = `${uuidv4()}.${ext}`;

    const { error } = await supabase.storage
        .from(RESUME_BUCKET)
        .upload(path, file.buffer, {
            contentType: file.mimetype,
            upsert: false,
        });

    if (error) {
        console.error('Resume upload error:', error.message);
        return null; // non-fatal — email still sends
    }

    const { data } = supabase.storage.from(RESUME_BUCKET).getPublicUrl(path);
    return data.publicUrl;
}

// ─── POST /api/contact/send  (General contact form) ──────────
router.post('/send', async (req, res) => {
    try {
        const { name, email, Phone, subject, message } = req.body;

        if (!name || !email || !Phone || !message) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        // 1. Persist to Supabase
        const { error: dbErr } = await supabase
            .from('contact_submissions')
            .insert({
                name,
                email,
                phone: Phone,
                subject: subject || null,
                message,
                type: 'contact',
            });

        if (dbErr) console.error('DB insert error (contact):', dbErr.message);

        transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: getContactRecipients(),
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h3>New message from your website contact form.</h3>
                <p><strong>Full Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${Phone}</p>
                <p><strong>Service:</strong> ${subject || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        }).catch(err => {
            console.error('Email send failure (contact):', err);
        });

        // Send confirmation email to the submitter
        transporter.sendMail({
            from: `"Trace Network & Engineering" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Thank you for contacting Trace Network & Engineering',
            html: `
                <h3>Hello ${name},</h3>
                <p>Thank you for reaching out to us. We have received your message and our team will get back to you shortly.</p>
                <p><strong>Your Message details:</strong></p>
                <hr>
                <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <br>
                <p>Best regards,</p>
                <p><strong>Trace Network & Engineering Team</strong></p>
            `,
        }).catch(err => {
            console.error('Confirmation email send failure (contact):', err);
        });

        res.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ success: false, message: 'Message sending failed. Please try again.' });
    }
});

// ─── POST /api/contact/submit  (Career application) ──────────
router.post('/submit', upload.single('resume'), async (req, res) => {
    try {
        const { name, email, whyTrace } = req.body;

        // Upload resume file to Supabase Storage (if provided)
        const resumeUrl = req.file ? await uploadResume(req.file) : null;

        // 1. Persist to Supabase
        const { error: dbErr } = await supabase
            .from('career_applications')
            .insert({
                name,
                email,
                why_trace: whyTrace || null,
                resume_url: resumeUrl,
            });

        if (dbErr) console.error('DB insert error (career):', dbErr.message);

        // 2. Send email notification in the background (non-blocking)
        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: getCareerRecipients(),
            subject: 'New Career Application',
            html: `
                <h3>New Career Application Received</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Why Team Trace:</strong></p>
                <p>${(whyTrace || '').replace(/\n/g, '<br>')}</p>
                ${resumeUrl ? `<p><strong>Resume:</strong> <a href="${resumeUrl}">${resumeUrl}</a></p>` : ''}
            `,
        };

        // Attach file buffer directly to email as well
        if (req.file) {
            mailOptions.attachments = [{
                filename: req.file.originalname,
                content: req.file.buffer,
            }];
        }

        transporter.sendMail(mailOptions).catch(err => {
            console.error('Email send failure (career):', err);
        });

        // Send confirmation email to the applicant
        transporter.sendMail({
            from: `"Trace Career Team" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Application Received - Trace Network & Engineering',
            html: `
                <h3>Hello ${name},</h3>
                <p>Thank you for submitting your application to join Trace Network & Engineering. We have received your resume and details successfully.</p>
                <p>Our HR team will review your application and contact you if your profile matches our requirements.</p>
                <br>
                <p>Best regards,</p>
                <p><strong>HR & Careers Team</strong><br>Trace Network & Engineering</p>
            `,
        }).catch(err => {
            console.error('Confirmation email send failure (career):', err);
        });

        res.json({ success: true, message: 'Application sent successfully!' });
    } catch (error) {
        console.error('Career application error:', error);
        res.status(500).json({ success: false, message: 'Mailer Error: ' + error.message });
    }
});

// ─── POST /api/contact/service-request  (VAPT offer form) ────
router.post('/service-request', async (req, res) => {
    try {
        const { name, email, phone, company, service, message } = req.body;

        if (!name || !email || !phone || !service) {
            return res.status(400).json({ success: false, message: 'Name, email, phone, and service are required' });
        }

        // 1. Persist to Supabase
        const { error: dbErr } = await supabase
            .from('contact_submissions')
            .insert({
                name,
                email,
                phone,
                subject: service,
                message: `Company: ${company || 'N/A'}\n\n${message || ''}`,
                type: 'service_request',
            });

        if (dbErr) console.error('DB insert error (service-request):', dbErr.message);

        // 2. Send email notification in the background (non-blocking)
        transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: getContactRecipients(),
            subject: `New Service Request: ${service} - ${name}`,
            html: `
                <h3>New Service Request Received</h3>
                <p><strong>Full Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                <p><strong>Service Interested In:</strong> ${service}</p>
                ${message ? `<p><strong>Additional Info:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
                <br><p style="color:#ff7a00;font-weight:bold;">From the Free VAPT Offer popup.</p>
            `,
        }).catch(err => {
            console.error('Email send failure (service-request):', err);
        });

        // Send confirmation email to the submitter
        transporter.sendMail({
            from: `"Trace Network & Engineering" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Free VAPT Offer Request Received - Trace Network',
            html: `
                <h3>Hello ${name},</h3>
                <p>Thank you for requesting our Free VAPT offer. We have received your request and our security team will get back to you shortly to begin the assessment.</p>
                <p><strong>Request Details:</strong></p>
                <hr>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <hr>
                <br>
                <p>Best regards,</p>
                <p><strong>Security Operations Team</strong><br>Trace Network & Engineering</p>
            `,
        }).catch(err => {
            console.error('Confirmation email send failure (service-request):', err);
        });

        res.json({ success: true, message: 'Service request sent successfully!' });
    } catch (error) {
        console.error('Service request error:', error);
        res.status(500).json({ success: false, message: 'Request sending failed. Please try again.' });
    }
});

// ─── POST /api/contact/certificate-register (Certificate Account Registration) ──
router.post('/certificate-register', async (req, res) => {
    try {
        const fullName = req.body.fullName || req.body.name;
        const email = req.body.email || req.body.officialEmail;
        const phone = req.body.phone || req.body.contactNumber;
        const company = req.body.company || req.body.companyName;

        if (!fullName || !email || !phone || !company) {
            return res.status(400).json({ success: false, message: 'Full Name, Official Email ID, Contact Number, and Company Name are required' });
        }

        // 1. Persist to Supabase cert_users or contact_submissions table
        try {
            const { error: dbErr } = await supabase
                .from('cert_users')
                .insert({
                    full_name: fullName,
                    email: email,
                    phone: phone,
                    company: company,
                    status: 'pending',
                    access_allowed: false
                });

            if (dbErr) {
                console.error('DB insert error (cert_users):', dbErr.message);
                await supabase
                    .from('contact_submissions')
                    .insert({
                        name: fullName,
                        email: email,
                        phone: phone,
                        subject: `Certificate Account Registration: ${company}`,
                        message: `Company Name: ${company}`,
                        type: 'certificate_registration',
                    }).catch(err => console.error('Fallback DB insert error:', err.message));
            }
        } catch (dbEx) {
            console.error('DB insert exception (certificate-registration):', dbEx);
        }

        // 2. Send email notification to certificate recipients
        transporter.sendMail({
            from: `"${fullName}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: getCertificateRecipients(),
            subject: `New Certificate Account Registration - ${fullName}`,
            html: `
                <h3>New Certificate Account Registration Received</h3>
                <p>A new user has created an account on the Certificate & Training portal with the following details:</p>
                <hr>
                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Official Email ID:</strong> ${email}</p>
                <p><strong>Contact Number:</strong> ${phone}</p>
                <p><strong>Company Name:</strong> ${company}</p>
                <hr>
                <p style="font-size: 12px; color: #666;">This notification was automatically sent upon new account creation.</p>
            `,
        }).catch(err => {
            console.error('Email send failure (certificate-registration):', err);
        });

        // 3. Send confirmation email to the user
        transporter.sendMail({
            from: `"Trace Network Academy" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Certificate Account Registration Received - Trace Network',
            html: `
                <h3>Hello ${fullName},</h3>
                <p>Thank you for creating an account with Trace Network Academy.</p>
                <p>We have received your account registration details:</p>
                <hr>
                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Official Email ID:</strong> ${email}</p>
                <p><strong>Contact Number:</strong> ${phone}</p>
                <p><strong>Company Name:</strong> ${company}</p>
                <hr>
                <p>Our team will review your registration and contact you shortly.</p>
                <br>
                <p>Best regards,</p>
                <p><strong>Trace Network & Engineering Team</strong></p>
            `,
        }).catch(err => {
            console.error('Confirmation email send failure (certificate-registration):', err);
        });

        res.json({ success: true, message: 'Account registration details submitted successfully!' });
    } catch (error) {
        console.error('Certificate registration error:', error);
        res.status(500).json({ success: false, message: 'Registration email failed. Please try again.' });
    }
});

module.exports = router;
