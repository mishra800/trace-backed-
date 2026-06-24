const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');

// Hardcoded admin credentials (plain-text — used when DB is unavailable)
// These match the passwords seeded via create-admin.php (bcrypt in DB)
const HARDCODED_USERS = [
    { id: 1, username: 'admin',  password: 'admin@123'   },
    { id: 2, username: 'admin2', password: 'admin@Trace2' },
    { id: 3, username: 'admin3', password: 'admin@Trace3' },
    { id: 4, username: 'admin4', password: 'admin@Trace4' },
    { id: 5, username: 'admin5', password: 'admin@Trace5' },
];

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

// POST /api/auth/login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    // Hardcoded credentials (no DB required)
    const match = HARDCODED_USERS.find(
        u => u.username === username && u.password === password
    );

    if (!match) {
        return res.status(401).json({ message: 'Invalid username or password.' });
    }

    const token = jwt.sign(
        { id: match.id, username: match.username },
        JWT_SECRET,
        { expiresIn: '1d' }
    );
    return res.json({ success: true, token, username: match.username });
});

// GET /api/auth/me
router.get('/me', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided.' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        res.json({ id: decoded.id, username: decoded.username });
    } catch (err) {
        res.status(401).json({ message: 'Invalid or expired token.' });
    }
});

module.exports = router;
