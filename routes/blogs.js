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
async function uploadToStorage(file, folder = 'covers') {
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

// ─── GET all blogs ────────────────────────────────────────────
router.get('/', async (req, res) => {
    try {
        res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.set('Pragma', 'no-cache');
        res.set('Expires', '0');

        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        // Normalise gallery_images — Supabase returns JSONB already parsed
        const blogs = (data || []).map(b => ({
            ...b,
            gallery_images: Array.isArray(b.gallery_images) ? b.gallery_images : [],
        }));

        res.json(blogs);
    } catch (err) {
        console.error('Error fetching blogs:', err);
        res.status(500).json({ error: err.message });
    }
});

// ─── GET single blog ──────────────────────────────────────────
router.get('/:id', async (req, res) => {
    try {
        res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.set('Pragma', 'no-cache');
        res.set('Expires', '0');

        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .eq('id', req.params.id)
            .single();

        if (error) {
            if (error.code === 'PGRST116') return res.status(404).json({ message: 'Blog not found' });
            throw error;
        }

        res.json({
            ...data,
            gallery_images: Array.isArray(data.gallery_images) ? data.gallery_images : [],
        });
    } catch (err) {
        console.error('Error fetching blog:', err);
        res.status(500).json({ error: err.message });
    }
});

// ─── POST create blog ─────────────────────────────────────────
router.post('/', upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'gallery', maxCount: 6 }]), async (req, res) => {
    try {
        const {
            title, slug, content, author,
            image1_url, hero_image_link, existing_gallery,
            meta_title, meta_description, meta_keywords,
        } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required.' });
        }

        // Upload cover image
        let image1 = image1_url || '';
        if (req.files?.['image1']?.[0]) {
            image1 = await uploadToStorage(req.files['image1'][0], 'covers');
        }

        // Upload gallery images
        let gallery_images = [];
        if (req.files?.['gallery']?.length) {
            gallery_images = await Promise.all(
                req.files['gallery'].map(f => uploadToStorage(f, 'gallery'))
            );
        } else if (existing_gallery) {
            try { gallery_images = JSON.parse(existing_gallery); } catch (_) {}
        }

        const finalSlug = slug?.trim() || null;

        const { data, error } = await supabase
            .from('blogs')
            .insert({
                title,
                slug: finalSlug,
                content,
                image1,
                image1_url: image1_url || null,
                hero_image_link: hero_image_link || null,
                gallery_images,
                author: author || null,
                meta_title: meta_title || null,
                meta_description: meta_description || null,
                meta_keywords: meta_keywords || null,
            })
            .select('id')
            .single();

        if (error) throw error;

        res.json({ success: true, id: data.id });
    } catch (err) {
        console.error('Error creating blog:', err);
        res.status(500).json({ error: err.message });
    }
});

// ─── PUT update blog ──────────────────────────────────────────
router.put('/:id', upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'gallery', maxCount: 6 }]), async (req, res) => {
    try {
        const {
            title, slug, content, author,
            image1_url, hero_image_link, existing_gallery,
            meta_title, meta_description, meta_keywords,
        } = req.body;

        // Fetch existing record
        const { data: existing, error: fetchErr } = await supabase
            .from('blogs')
            .select('*')
            .eq('id', req.params.id)
            .single();

        if (fetchErr) {
            if (fetchErr.code === 'PGRST116') return res.status(404).json({ message: 'Blog not found' });
            throw fetchErr;
        }

        // Handle cover image
        let image1 = image1_url || existing.image1;
        if (req.files?.['image1']?.[0]) {
            await deleteFromStorage(existing.image1); // remove old cover from storage
            image1 = await uploadToStorage(req.files['image1'][0], 'covers');
        }

        // Handle gallery
        let gallery_images = Array.isArray(existing.gallery_images) ? existing.gallery_images : [];
        if (existing_gallery) { try { gallery_images = JSON.parse(existing_gallery); } catch (_) {} }
        if (req.files?.['gallery']?.length) {
            const newImages = await Promise.all(
                req.files['gallery'].map(f => uploadToStorage(f, 'gallery'))
            );
            gallery_images = [...gallery_images, ...newImages];
        }

        const finalSlug = slug?.trim() || existing.slug || null;

        const { error } = await supabase
            .from('blogs')
            .update({
                title,
                slug: finalSlug,
                content,
                image1,
                image1_url: image1_url || null,
                hero_image_link: hero_image_link || null,
                gallery_images,
                author: author || null,
                meta_title: meta_title || null,
                meta_description: meta_description || null,
                meta_keywords: meta_keywords || null,
            })
            .eq('id', req.params.id);

        if (error) throw error;

        res.json({ success: true });
    } catch (err) {
        console.error('Error updating blog:', err);
        res.status(500).json({ error: err.message });
    }
});

// ─── DELETE blog ──────────────────────────────────────────────
router.delete('/:id', async (req, res) => {
    try {
        // Fetch first so we can clean up storage files
        const { data: blog } = await supabase
            .from('blogs')
            .select('image1, gallery_images')
            .eq('id', req.params.id)
            .single();

        if (blog) {
            await deleteFromStorage(blog.image1);
            const gallery = Array.isArray(blog.gallery_images) ? blog.gallery_images : [];
            await Promise.all(gallery.map(url => deleteFromStorage(url)));
        }

        const { error } = await supabase
            .from('blogs')
            .delete()
            .eq('id', req.params.id);

        if (error) throw error;

        res.json({ success: true });
    } catch (err) {
        console.error('Error deleting blog:', err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
