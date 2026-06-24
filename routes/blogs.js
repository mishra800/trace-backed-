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

// Ensure meta + slug columns exist and modify image1 to support Base64
(async () => {
    try {
        await db.query(`ALTER TABLE blogs MODIFY COLUMN image1 LONGTEXT`);
        await db.query(`ALTER TABLE blogs ADD COLUMN IF NOT EXISTS meta_title VARCHAR(255) DEFAULT NULL`);
        await db.query(`ALTER TABLE blogs ADD COLUMN IF NOT EXISTS meta_description TEXT DEFAULT NULL`);
        await db.query(`ALTER TABLE blogs ADD COLUMN IF NOT EXISTS meta_keywords TEXT DEFAULT NULL`);
        await db.query(`ALTER TABLE blogs ADD COLUMN IF NOT EXISTS slug VARCHAR(500) DEFAULT NULL`);
        // Best-effort unique index — ignore if already exists
        await db.query(`CREATE UNIQUE INDEX IF NOT EXISTS idx_blogs_slug ON blogs (slug)`).catch(() => {});
    } catch (e) {
        // Column may already exist on older MySQL — ignore
    }
})();

// GET all blogs
router.get('/', async (req, res) => {
    try {
        // Prevent browsers and CDNs from caching the blog list
        res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.set('Pragma', 'no-cache');
        res.set('Expires', '0');
        res.set('Surrogate-Control', 'no-store');

        const [rows] = await db.query('SELECT * FROM blogs ORDER BY created_at DESC');
        const blogs = rows.map(b => {
            let gallery_images = [];
            if (b.gallery_images) {
                try { gallery_images = JSON.parse(b.gallery_images); } catch (e) { gallery_images = []; }
            }
            return { ...b, gallery_images };
        });
        res.json(blogs);
    } catch (err) {
        console.error('Error fetching blogs:', err);
        res.status(500).json({ error: err.message });
    }
});

// GET single blog
router.get('/:id', async (req, res) => {
    try {
        // Prevent caching of individual blog pages so edits appear immediately
        res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.set('Pragma', 'no-cache');
        res.set('Expires', '0');

        const [rows] = await db.query('SELECT * FROM blogs WHERE id = ?', [req.params.id]);
        if (!rows.length) return res.status(404).json({ message: 'Blog not found' });
        let gallery_images = [];
        if (rows[0].gallery_images) {
            try { gallery_images = JSON.parse(rows[0].gallery_images); } catch (e) { gallery_images = []; }
        }
        const blog = { ...rows[0], gallery_images };
        res.json(blog);
    } catch (err) {
        console.error('Error fetching blog:', err);
        res.status(500).json({ error: err.message });
    }
});

// POST create blog
router.post('/', upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'gallery', maxCount: 6 }]), async (req, res) => {
    try {
        const { title, slug, content, author, image1_url, hero_image_link, existing_gallery, meta_title, meta_description, meta_keywords } = req.body;
        if (!title || !content) return res.status(400).json({ error: 'Title and content are required.' });

        const image1 = req.files && req.files['image1']
            ? fileToBase64(req.files['image1'][0])
            : (image1_url || '');

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
            'INSERT INTO blogs (title, slug, content, image1, gallery_images, author, image1_url, hero_image_link, meta_title, meta_description, meta_keywords, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())',
            [title, finalSlug, content, image1, JSON.stringify(gallery_images), author || null, image1_url || null, hero_image_link || null, meta_title || null, meta_description || null, meta_keywords || null]
        );

        // If a slug was provided and a duplicate key collision silently occurred,
        // assign a guaranteed-unique fallback of slug-{insertId}
        if (finalSlug) {
            await db.query(
                'UPDATE blogs SET slug = ? WHERE id = ? AND slug != ?',
                [`${finalSlug}-${result.insertId}`, result.insertId, finalSlug]
            ).catch(() => {});
        }

        res.json({ success: true, id: result.insertId });
    } catch (err) {
        console.error('Error creating blog:', err);
        res.status(500).json({ error: err.message });
    }
});

// PUT update blog
router.put('/:id', upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'gallery', maxCount: 6 }]), async (req, res) => {
    try {
        const { title, slug, content, author, image1_url, hero_image_link, existing_gallery, meta_title, meta_description, meta_keywords } = req.body;
        const [rows] = await db.query('SELECT * FROM blogs WHERE id = ?', [req.params.id]);
        if (!rows.length) return res.status(404).json({ message: 'Blog not found' });

        const existing = rows[0];
        const image1 = req.files && req.files['image1']
            ? fileToBase64(req.files['image1'][0])
            : (image1_url || existing.image1);

        let gallery_images = [];
        if (existing.gallery_images) {
            try { gallery_images = JSON.parse(existing.gallery_images); } catch (e) { gallery_images = []; }
        }
        if (existing_gallery) { try { gallery_images = JSON.parse(existing_gallery); } catch (e) {} }
        if (req.files && req.files['gallery'] && req.files['gallery'].length > 0) {
            gallery_images = [...gallery_images, ...req.files['gallery'].map(f => fileToBase64(f))];
        }

        // Use submitted slug if provided, otherwise keep the existing one
        const finalSlug = (slug && slug.trim()) ? slug.trim() : (existing.slug || null);

        await db.query(
            'UPDATE blogs SET title=?, slug=?, content=?, image1=?, gallery_images=?, author=?, image1_url=?, hero_image_link=?, meta_title=?, meta_description=?, meta_keywords=?, updated_at=NOW() WHERE id=?',
            [title, finalSlug, content, image1, JSON.stringify(gallery_images), author || null, image1_url || null, hero_image_link || null, meta_title || null, meta_description || null, meta_keywords || null, req.params.id]
        );
        res.json({ success: true });
    } catch (err) {
        console.error('Error updating blog:', err);
        res.status(500).json({ error: err.message });
    }
});

// DELETE blog
router.delete('/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM blogs WHERE id = ?', [req.params.id]);
        res.json({ success: true });
    } catch (err) {
        console.error('Error deleting blog:', err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
