const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const supabase = require('../db');

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_change_me';

// ─── POST /api/auth/login ─────────────────────────────────────
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    try {
        // Look up admin in Supabase
        const { data: user, error } = await supabase
            .from('admin_users')
            .select('id, username, password')
            .eq('username', username)
            .single();

        if (error || !user) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        const token = jwt.sign(
            { id: user.id, username: user.username },
            JWT_SECRET,
            { expiresIn: '1d' }
        );

        return res.json({ success: true, token, username: user.username });
    } catch (err) {
        console.error('Login error:', err);
        return res.status(500).json({ message: 'Login failed. Please try again.' });
    }
});

// ─── GET /api/auth/me ─────────────────────────────────────────
router.get('/me', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided.' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        res.json({ id: decoded.id, username: decoded.username });
    } catch (_) {
        res.status(401).json({ message: 'Invalid or expired token.' });
    }
});

// ─── POST /api/auth/change-password  (optional utility) ──────
router.post('/change-password', async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided.' });
    }

    let decoded;
    try {
        decoded = jwt.verify(authHeader.split(' ')[1], JWT_SECRET);
    } catch (_) {
        return res.status(401).json({ message: 'Invalid or expired token.' });
    }

    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
        return res.status(400).json({ message: 'currentPassword and newPassword are required.' });
    }

    try {
        const { data: user, error } = await supabase
            .from('admin_users')
            .select('id, password')
            .eq('id', decoded.id)
            .single();

        if (error || !user) return res.status(404).json({ message: 'User not found.' });

        const valid = await bcrypt.compare(currentPassword, user.password);
        if (!valid) return res.status(401).json({ message: 'Current password is incorrect.' });

        const hashed = await bcrypt.hash(newPassword, 10);
        await supabase.from('admin_users').update({ password: hashed }).eq('id', decoded.id);

        res.json({ success: true, message: 'Password updated successfully.' });
    } catch (err) {
        console.error('Change password error:', err);
        res.status(500).json({ message: 'Failed to update password.' });
    }
});

module.exports = router;
