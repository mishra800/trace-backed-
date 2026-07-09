const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const supabase = require('../db');

const upload = multer({ storage: multer.memoryStorage() });

const RESUME_BUCKET = 'resumes';

// ─── Nodemailer transporter ───────────────────────────────────
const createTransporter = () =>
    nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
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

        // 2. Send email notification
        const transporter = createTransporter();
        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.CONTACT_TO_EMAIL || 'connect@tracenetwork.in, Support@tracenetwork.in',
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

        // 2. Send email notification (resume as attachment if file was uploaded)
        const transporter = createTransporter();
        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.CAREER_TO_EMAIL || 'hr@tracenetwork.in',
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

        await transporter.sendMail(mailOptions);

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

        // 2. Send email notification
        const transporter = createTransporter();
        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.CONTACT_TO_EMAIL || 'connect@tracenetwork.in, Support@tracenetwork.in',
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
        });

        res.json({ success: true, message: 'Service request sent successfully!' });
    } catch (error) {
        console.error('Service request error:', error);
        res.status(500).json({ success: false, message: 'Request sending failed. Please try again.' });
    }
});

module.exports = router;
