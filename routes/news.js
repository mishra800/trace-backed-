const express = require('express');
const router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const supabase = require('../db');

// Store files in memory so we can upload to Supabase Storage
const upload = multer({ storage: multer.memoryStorage() });

const BUCKET = 'blog-images';

/**
 * Upload a file buffer to Supabase Storage and return its public URL.
 * Returns an empty string if no file is provided.
 */
async function uploadToStorage(file, folder = 'news') {
    if (!file || !file.buffer) return '';
    const ext = file.originalname.split('.').pop();
    const path = `${folder}/${uuidv4()}.${ext}`;

    const { error } = await supabase.storage
        .from(BUCKET)
        .upload(path, file.buffer, {
            contentType: file.mimetype,
            upsert: false,
        });

    if (error) throw new Error(`Storage upload failed: ${error.message}`);

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
    return data.publicUrl;
}

/**
 * Delete a file from Supabase Storage given its full public URL.
 * Silently ignores errors (e.g. file already removed).
 */
async function deleteFromStorage(publicUrl) {
    if (!publicUrl || publicUrl.startsWith('data:')) return; // skip base64 / empty
    try {
        const url = new URL(publicUrl);
        // Path after /storage/v1/object/public/<bucket>/
        const parts = url.pathname.split(`/object/public/${BUCKET}/`);
        if (parts.length > 1) {
            await supabase.storage.from(BUCKET).remove([parts[1]]);
        }
    } catch (_) { /* ignore */ }
}

// ─── GET all news ─────────────────────────────────────────────
router.get('/', async (req, res) => {
    try {
        res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.set('Pragma', 'no-cache');
        res.set('Expires', '0');

        const { data, error } = await supabase
            .from('news')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        res.json(data || []);
    } catch (err) {
        console.error('Error fetching news:', err);
        res.status(500).json({ error: err.message });
    }
});

// ─── GET single news ──────────────────────────────────────────
router.get('/:id', async (req, res) => {
    try {
        res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.set('Pragma', 'no-cache');
        res.set('Expires', '0');

        const { data, error } = await supabase
            .from('news')
            .select('*')
            .eq('id', req.params.id)
            .single();

        if (error) {
            if (error.code === 'PGRST116') return res.status(404).json({ message: 'News article not found' });
            throw error;
        }

        res.json(data);
    } catch (err) {
        console.error('Error fetching news:', err);
        res.status(500).json({ error: err.message });
    }
});

// ─── POST create news ─────────────────────────────────────────
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { title, tag, link, image_url } = req.body;

        if (!title) {
            return res.status(400).json({ error: 'Title is required.' });
        }

        // Upload cover image
        let image = image_url || '';
        if (req.file) {
            image = await uploadToStorage(req.file, 'news');
        }

        const { data, error } = await supabase
            .from('news')
            .insert({
                title,
                tag: tag || null,
                link: link || null,
                image: image || null
            })
            .select('id')
            .single();

        if (error) throw error;

        res.json({ success: true, id: data.id });
    } catch (err) {
        console.error('Error creating news:', err);
        res.status(500).json({ error: err.message });
    }
});

// ─── PUT update news ──────────────────────────────────────────
router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        const { title, tag, link, image_url } = req.body;

        if (!title) {
            return res.status(400).json({ error: 'Title is required.' });
        }

        // Fetch existing record
        const { data: existing, error: fetchErr } = await supabase
            .from('news')
            .select('*')
            .eq('id', req.params.id)
            .single();

        if (fetchErr) {
            if (fetchErr.code === 'PGRST116') return res.status(404).json({ message: 'News article not found' });
            throw fetchErr;
        }

        // Handle image
        let image = image_url || existing.image;
        if (req.file) {
            await deleteFromStorage(existing.image); // remove old image
            image = await uploadToStorage(req.file, 'news');
        }

        const { error } = await supabase
            .from('news')
            .update({
                title,
                tag: tag || null,
                link: link || null,
                image: image || null
            })
            .eq('id', req.params.id);

        if (error) throw error;

        res.json({ success: true });
    } catch (err) {
        console.error('Error updating news:', err);
        res.status(500).json({ error: err.message });
    }
});

// ─── DELETE news ──────────────────────────────────────────────
router.delete('/:id', async (req, res) => {
    try {
        // Fetch first so we can clean up storage files
        const { data: newsItem } = await supabase
            .from('news')
            .select('image')
            .eq('id', req.params.id)
            .single();

        if (newsItem && newsItem.image) {
            await deleteFromStorage(newsItem.image);
        }

        const { error } = await supabase
            .from('news')
            .delete()
            .eq('id', req.params.id);

        if (error) throw error;

        res.json({ success: true });
    } catch (err) {
        console.error('Error deleting news:', err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
