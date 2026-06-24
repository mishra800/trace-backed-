const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db = require('../db');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const fileToBase64 = (file) => {
    if (!file || !file.buffer) return '';
    return `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
};

// Ensure meta + slug columns exist and modify image columns to LONGTEXT
(async () => {
    try {
        await db.query(`ALTER TABLE events MODIFY COLUMN image LONGTEXT`);
        await db.query(`ALTER TABLE events MODIFY COLUMN image_path LONGTEXT`);
        await db.query(`ALTER TABLE events ADD COLUMN IF NOT EXISTS meta_title VARCHAR(255) DEFAULT NULL`);
        await db.query(`ALTER TABLE events ADD COLUMN IF NOT EXISTS meta_description TEXT DEFAULT NULL`);
        await db.query(`ALTER TABLE events ADD COLUMN IF NOT EXISTS meta_keywords TEXT DEFAULT NULL`);
        await db.query(`ALTER TABLE events ADD COLUMN IF NOT EXISTS location_url VARCHAR(500) DEFAULT NULL`);
        await db.query(`ALTER TABLE events ADD COLUMN IF NOT EXISTS slug VARCHAR(500) DEFAULT NULL`);
        // Best-effort unique index — ignore if already exists
        await db.query(`CREATE UNIQUE INDEX IF NOT EXISTS idx_events_slug ON events (slug)`).catch(() => {});
    } catch (e) {
        // Column may already exist on older MySQL — ignore
    }
})();

// GET all events
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM events ORDER BY created_at DESC');
        const events = rows.map(e => ({
            ...e,
            gallery_images: e.gallery_images ? JSON.parse(e.gallery_images) : []
        }));
        res.json(events);
    } catch (err) {
        console.error('Error fetching events:', err);
        res.status(500).json({ error: err.message });
    }
});

// GET single event
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM events WHERE id = ?', [req.params.id]);
        if (!rows.length) return res.status(404).json({ message: 'Event not found' });
        const event = { ...rows[0], gallery_images: rows[0].gallery_images ? JSON.parse(rows[0].gallery_images) : [] };
        res.json(event);
    } catch (err) {
        console.error('Error fetching event:', err);
        res.status(500).json({ error: err.message });
    }
});

// POST create event
router.post('/', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'gallery', maxCount: 6 }]), async (req, res) => {
    try {
        const { title, slug, description, event_date, date, location, location_url, image_path, existing_gallery, meta_title, meta_description, meta_keywords } = req.body;
        if (!title) return res.status(400).json({ error: 'Title is required.' });

        const image = req.files && req.files['image']
            ? fileToBase64(req.files['image'][0])
            : (image_path || '');

        let gallery_images = [];
        if (req.files && req.files['gallery']) {
            gallery_images = req.files['gallery'].map(f => fileToBase64(f));
        } else if (existing_gallery) {
            try { gallery_images = JSON.parse(existing_gallery); } catch (e) {}
        }

        // Generate final slug — append insertId suffix only if no slug provided,
        // to guarantee uniqueness without a follow-up UPDATE race condition
        let finalSlug = (slug && slug.trim()) ? slug.trim() : null;

        const [result] = await db.query(
            'INSERT INTO events (title, slug, description, event_date, location, location_url, image, image_path, gallery_images, meta_title, meta_description, meta_keywords, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())',
            [title, finalSlug, description || '', event_date || date || null, location || null, location_url || null, image, image_path || null, JSON.stringify(gallery_images), meta_title || null, meta_description || null, meta_keywords || null]
        );

        // If a slug was provided and a duplicate key collision silently occurred,
        // assign a guaranteed-unique fallback of slug-{insertId}
        if (finalSlug) {
            await db.query(
                'UPDATE events SET slug = ? WHERE id = ? AND slug != ?',
                [`${finalSlug}-${result.insertId}`, result.insertId, finalSlug]
            ).catch(() => {});
        }

        res.json({ success: true, id: result.insertId });
    } catch (err) {
        console.error('Error creating event:', err);
        res.status(500).json({ error: err.message });
    }
});

// PUT update event
router.put('/:id', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'gallery', maxCount: 6 }]), async (req, res) => {
    try {
        const { title, slug, description, event_date, date, location, location_url, image_path, existing_gallery, meta_title, meta_description, meta_keywords } = req.body;
        const [rows] = await db.query('SELECT * FROM events WHERE id = ?', [req.params.id]);
        if (!rows.length) return res.status(404).json({ message: 'Event not found' });

        const existing = rows[0];
        const image = req.files && req.files['image']
            ? fileToBase64(req.files['image'][0])
            : (image_path || existing.image);

        let gallery_images = existing.gallery_images ? JSON.parse(existing.gallery_images) : [];
        if (existing_gallery) { try { gallery_images = JSON.parse(existing_gallery); } catch (e) {} }
        if (req.files && req.files['gallery'] && req.files['gallery'].length > 0) {
            gallery_images = [...gallery_images, ...req.files['gallery'].map(f => fileToBase64(f))];
        }

        // Use submitted slug if provided, otherwise keep the existing one
        const finalSlug = (slug && slug.trim()) ? slug.trim() : (existing.slug || null);

        await db.query(
            'UPDATE events SET title=?, slug=?, description=?, event_date=?, location=?, location_url=?, image=?, image_path=?, gallery_images=?, meta_title=?, meta_description=?, meta_keywords=?, updated_at=NOW() WHERE id=?',
            [title, finalSlug, description || '', event_date || date || null, location || null, location_url || null, image, image_path || null, JSON.stringify(gallery_images), meta_title || null, meta_description || null, meta_keywords || null, req.params.id]
        );
        res.json({ success: true });
    } catch (err) {
        console.error('Error updating event:', err);
        res.status(500).json({ error: err.message });
    }
});

// DELETE event
router.delete('/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM events WHERE id = ?', [req.params.id]);
        res.json({ success: true });
    } catch (err) {
        console.error('Error deleting event:', err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
