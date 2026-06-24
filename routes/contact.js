const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

// Create reusable transporter
const createTransporter = () => {
    return nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
};

// General Contact Form Route (matches legacy sendemail.php)
router.post('/send', async (req, res) => {
    try {
        const { name, email, Phone, subject, message } = req.body;

        // Validate required fields
        if (!name || !email || !Phone || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'All fields are required' 
            });
        }

        const transporter = createTransporter();

        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.CONTACT_TO_EMAIL || 'Support@tracenetwork.in',
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h3>You have received a new message from your website contact form.</h3>
                <br>
                <p><strong>Full Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${Phone}</p>
                <p><strong>Service:</strong> ${subject || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Message sending failed. Please try again.' 
        });
    }
});

// Career Application Route (WorkWithUs page)
router.post('/submit', upload.single('resume'), async (req, res) => {
    try {
        const { name, email, whyTrace } = req.body;
        const file = req.file;

        const transporter = createTransporter();

        let mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.CONTACT_TO_EMAIL || 'Support@tracenetwork.in',
            subject: 'New Career Application',
            html: `
                <h3>New Career Application Received</h3>
                <br>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Why do you want to be part of Team Trace:</strong></p>
                <p>${whyTrace.replace(/\n/g, '<br>')}</p>
            `
        };

        if (file) {
            mailOptions.attachments = [{
                filename: file.originalname,
                path: file.path
            }];
        }

        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Application sent successfully!' });
    } catch (error) {
        console.error('Career application error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Mailer Error: ' + error.message 
        });
    }
});

// Service Request Route (VAPT Offer Form)
router.post('/service-request', async (req, res) => {
    try {
        const { name, email, phone, company, service, message } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !service) {
            return res.status(400).json({ 
                success: false, 
                message: 'Name, email, phone, and service are required' 
            });
        }

        const transporter = createTransporter();

        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.CONTACT_TO_EMAIL || 'Support@tracenetwork.in',
            subject: `New Service Request: ${service} - ${name}`,
            html: `
                <h3>New Service Request Received</h3>
                <br>
                <p><strong>Full Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                <p><strong>Service Interested In:</strong> ${service}</p>
                ${message ? `
                <p><strong>Additional Information:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                ` : ''}
                <br>
                <p style="color: #ff7a00; font-weight: bold;">This request is from the Free VAPT Offer popup.</p>
            `
        };

        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Service request sent successfully!' });
    } catch (error) {
        console.error('Service request error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Request sending failed. Please try again.' 
        });
    }
});

module.exports = router;
