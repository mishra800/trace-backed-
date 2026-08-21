const express = require('express');
const router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const supabase = require('../db');

const upload = multer({ storage: multer.memoryStorage() });

const BUCKET = 'event-images';

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

async function deleteFromStorage(publicUrl) {
    if (!publicUrl || publicUrl.startsWith('data:')) return;
    try {
        const url = new URL(publicUrl);
        const parts = url.pathname.split(`/object/public/${BUCKET}/`);
        if (parts.length > 1) {
            await supabase.storage.from(BUCKET).remove([parts[1]]);
        }
    } catch (_) { /* ignore */ }
}

// ─── GET all events ───────────────────────────────────────────
router.get('/', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('events')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        const events = (data || []).map(e => ({
            ...e,
            gallery_images: Array.isArray(e.gallery_images) ? e.gallery_images : [],
        }));

        res.json(events);
    } catch (err) {
        console.error('Error fetching events:', err);
        res.status(500).json({ error: err.message });
    }
});

// ─── GET single event ─────────────────────────────────────────
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let query = supabase.from('events').select('*');

        if (/^\d+$/.test(id)) {
            query = query.or(`id.eq.${id},slug.eq.${id}`);
        } else {
            query = query.eq('slug', id);
        }

        const { data, error } = await query.single();

        if (error) {
            if (error.code === 'PGRST116') return res.status(404).json({ message: 'Event not found' });
            throw error;
        }

        res.json({
            ...data,
            gallery_images: Array.isArray(data.gallery_images) ? data.gallery_images : [],
        });
    } catch (err) {
        console.error('Error fetching event:', err);
        res.status(500).json({ error: err.message });
    }
});

// ─── POST create event ────────────────────────────────────────
router.post('/', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'gallery', maxCount: 6 }]), async (req, res) => {
    try {
        const {
            title, slug, description,
            event_date, date,
            location, location_url,
            image_path, existing_gallery,
            meta_title, meta_description, meta_keywords,
        } = req.body;

        if (!title) return res.status(400).json({ error: 'Title is required.' });

        let image = image_path || '';
        if (req.files?.['image']?.[0]) {
            image = await uploadToStorage(req.files['image'][0], 'covers');
        }

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
            .from('events')
            .insert({
                title,
                slug: finalSlug,
                description: description || '',
                event_date: event_date || date || null,
                location: location || null,
                location_url: location_url || null,
                image,
                image_path: image_path || null,
                gallery_images,
                meta_title: meta_title || null,
                meta_description: meta_description || null,
                meta_keywords: meta_keywords || null,
            })
            .select('id')
            .single();

        if (error) throw error;

        res.json({ success: true, id: data.id });
    } catch (err) {
        console.error('Error creating event:', err);
        res.status(500).json({ error: err.message });
    }
});

// ─── PUT update event ─────────────────────────────────────────
router.put('/:id', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'gallery', maxCount: 6 }]), async (req, res) => {
    try {
        const {
            title, slug, description,
            event_date, date,
            location, location_url,
            image_path, existing_gallery,
            meta_title, meta_description, meta_keywords,
        } = req.body;

        const { data: existing, error: fetchErr } = await supabase
            .from('events')
            .select('*')
            .eq('id', req.params.id)
            .single();

        if (fetchErr) {
            if (fetchErr.code === 'PGRST116') return res.status(404).json({ message: 'Event not found' });
            throw fetchErr;
        }

        let image = image_path || existing.image;
        if (req.files?.['image']?.[0]) {
            await deleteFromStorage(existing.image);
            image = await uploadToStorage(req.files['image'][0], 'covers');
        }

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
            .from('events')
            .update({
                title,
                slug: finalSlug,
                description: description || '',
                event_date: event_date || date || null,
                location: location || null,
                location_url: location_url || null,
                image,
                image_path: image_path || null,
                gallery_images,
                meta_title: meta_title || null,
                meta_description: meta_description || null,
                meta_keywords: meta_keywords || null,
            })
            .eq('id', req.params.id);

        if (error) throw error;

        res.json({ success: true });
    } catch (err) {
        console.error('Error updating event:', err);
        res.status(500).json({ error: err.message });
    }
});

// ─── DELETE event ─────────────────────────────────────────────
router.delete('/:id', async (req, res) => {
    try {
        const { data: event } = await supabase
            .from('events')
            .select('image, gallery_images')
            .eq('id', req.params.id)
            .single();

        if (event) {
            await deleteFromStorage(event.image);
            const gallery = Array.isArray(event.gallery_images) ? event.gallery_images : [];
            await Promise.all(gallery.map(url => deleteFromStorage(url)));
        }

        const { error } = await supabase
            .from('events')
            .delete()
            .eq('id', req.params.id);

        if (error) throw error;

        res.json({ success: true });
    } catch (err) {
        console.error('Error deleting event:', err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
