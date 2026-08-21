import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { eventAPI } from '../../services/api';
import SEO from '../../components/SEO';
import './CreateEvent.css';

/* ─── Slug Generation Utility ─────────────────────────────────────────────── */
function generateSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/[\s_-]+/g, '-') // Replace spaces/underscores with hyphens
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/* ─── Reusable WYSIWYG Editor ─────────────────────────────────────────────── */
const TEXT_COLORS = [
    { name: 'Default', value: '#111827' },
    { name: 'Gray', value: '#4b5563' },
    { name: 'Light Gray', value: '#9ca3af' },
    { name: 'Red', value: '#dc2626' },
    { name: 'Orange-Red', value: '#ea580c' },
    { name: 'Orange', value: '#d44a00' },
    { name: 'Yellow', value: '#eab308' },
    { name: 'Green', value: '#16a34a' },
    { name: 'Teal', value: '#0d9488' },
    { name: 'Blue', value: '#2563eb' },
    { name: 'Purple', value: '#7c3aed' },
    { name: 'Pink', value: '#db2777' },
    { name: 'White', value: '#ffffff' },
];

const BACK_COLORS = [
    { name: 'None', value: 'transparent' },
    { name: 'Light Gray', value: '#f1f5f9' },
    { name: 'Light Red', value: '#fee2e2' },
    { name: 'Light Orange', value: '#ffedd5' },
    { name: 'Light Yellow', value: '#fef08a' },
    { name: 'Light Green', value: '#dcfce7' },
    { name: 'Light Teal', value: '#ccfbf1' },
    { name: 'Light Blue', value: '#dbeafe' },
    { name: 'Light Purple', value: '#f3e8ff' },
    { name: 'Light Pink', value: '#fce7f3' },
];

function RichEditor({ id, placeholder, minHeight = 140, onChange, initialValue = '' }) {
    const editorRef = useRef(null);
    const [showTextColor, setShowTextColor] = useState(false);
    const [showBackColor, setShowBackColor] = useState(false);

    useEffect(() => {
        if (editorRef.current && initialValue) {
            editorRef.current.innerHTML = initialValue;
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const exec = (cmd, value = null) => {
        editorRef.current?.focus();
        document.execCommand(cmd, false, value);
        onChange(editorRef.current?.innerHTML || '');
    };

    const handleInput = () => onChange(editorRef.current?.innerHTML || '');

    const handleHeading = (tag) => {
        editorRef.current?.focus();
        document.execCommand('formatBlock', false, tag);
        onChange(editorRef.current?.innerHTML || '');
    };

    const handleLink = () => {
        const sel = window.getSelection();
        const selectedText = sel?.toString() || '';
        const url = window.prompt('Enter URL:', 'https://');
        if (url) {
            editorRef.current?.focus();
            if (selectedText) {
                document.execCommand('createLink', false, url);
            } else {
                document.execCommand('insertHTML', false,
                    `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`);
            }
            onChange(editorRef.current?.innerHTML || '');
        }
    };

    const handleTextColor = (color) => {
        editorRef.current?.focus();
        document.execCommand('foreColor', false, color);
        onChange(editorRef.current?.innerHTML || '');
        setShowTextColor(false);
    };

    const handleBackColor = (color) => {
        editorRef.current?.focus();
        if (color === 'transparent') {
            document.execCommand('removeFormat', false);
        } else {
            document.execCommand('hiliteColor', false, color);
        }
        onChange(editorRef.current?.innerHTML || '');
        setShowBackColor(false);
    };

    const handleClear = () => {
        if (editorRef.current) {
            editorRef.current.innerHTML = '';
            editorRef.current.focus();
            onChange('');
        }
    };

    return (
        <div className="rich-editor">
            <div className="rich-toolbar">
                <button type="button" className="rich-btn rich-btn--h1" title="Heading 1" onMouseDown={(e) => { e.preventDefault(); handleHeading('h1'); }}>H1</button>
                <button type="button" className="rich-btn rich-btn--h2" title="Heading 2" onMouseDown={(e) => { e.preventDefault(); handleHeading('h2'); }}>H2</button>
                <button type="button" className="rich-btn rich-btn--h3" title="Heading 3" onMouseDown={(e) => { e.preventDefault(); handleHeading('h3'); }}>H3</button>
                <div className="rich-divider" />
                <button type="button" className="rich-btn rich-btn--bold"   title="Bold"        onMouseDown={(e) => { e.preventDefault(); exec('bold'); }}><b>B</b></button>
                <button type="button" className="rich-btn rich-btn--italic" title="Italic"      onMouseDown={(e) => { e.preventDefault(); exec('italic'); }}><i>I</i></button>
                <button type="button" className="rich-btn rich-btn--under"  title="Underline"   onMouseDown={(e) => { e.preventDefault(); exec('underline'); }}><u>U</u></button>
                <button type="button" className="rich-btn rich-btn--strike" title="Strikethrough" onMouseDown={(e) => { e.preventDefault(); exec('strikeThrough'); }}><s>S</s></button>
                <div className="rich-divider" />
                
                {/* Text Color Dropdown */}
                <div className="rich-dropdown">
                    <button type="button" className="rich-btn" title="Text Color" onClick={() => { setShowTextColor(!showTextColor); setShowBackColor(false); }}>
                        <span style={{ marginRight: '4px', fontWeight: 'bold', color: '#4b5563' }}>A</span> Color
                    </button>
                    {showTextColor && (
                        <div className="rich-dropdown-menu">
                            {TEXT_COLORS.map(c => (
                                <button
                                    key={c.value}
                                    type="button"
                                    className="rich-color-swatch"
                                    style={{ backgroundColor: c.value }}
                                    title={c.name}
                                    onMouseDown={(e) => { e.preventDefault(); handleTextColor(c.value); }}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Highlight/Background Color Dropdown */}
                <div className="rich-dropdown">
                    <button type="button" className="rich-btn" title="Background Color" onClick={() => { setShowBackColor(!showBackColor); setShowTextColor(false); }}>
                        <span style={{ marginRight: '4px' }}>🖊</span> Highlight
                    </button>
                    {showBackColor && (
                        <div className="rich-dropdown-menu">
                            {BACK_COLORS.map(c => (
                                <button
                                    key={c.value}
                                    type="button"
                                    className="rich-color-swatch"
                                    style={{ backgroundColor: c.value, border: c.value === 'transparent' ? '1px dashed #94a3b8' : '1px solid #e2e8f0' }}
                                    title={c.name}
                                    onMouseDown={(e) => { e.preventDefault(); handleBackColor(c.value); }}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <button type="button" className="rich-btn"                 title="Insert link"  onMouseDown={(e) => { e.preventDefault(); handleLink(); }}>🔗 Link</button>
                <div className="rich-divider" />
                <button type="button" className="rich-btn"                 title="Bullet list"  onMouseDown={(e) => { e.preventDefault(); exec('insertUnorderedList'); }}>• Bullet</button>
                <button type="button" className="rich-btn"                 title="Numbered list" onMouseDown={(e) => { e.preventDefault(); exec('insertOrderedList'); }}>1. Number</button>
                <div className="rich-divider" />
                <button type="button" className="rich-btn rich-btn--clear" title="Clear"        onMouseDown={(e) => { e.preventDefault(); handleClear(); }}>✕ Clear</button>
            </div>
            <div
                id={id}
                ref={editorRef}
                className="rich-area"
                contentEditable
                suppressContentEditableWarning
                onInput={handleInput}
                style={{ minHeight }}
                data-placeholder={placeholder}
            />
        </div>
    );
}

/* ─── CreateEvent Page ────────────────────────────────────────────────────── */
export default function CreateEvent() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);
    const [galleryPreviews, setGalleryPreviews] = useState([]);
    const [description, setDescription] = useState('');
    const [slug, setSlug] = useState('');
    const [customSlug, setCustomSlug] = useState(false);
    const [slugPreview, setSlugPreview] = useState('');
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [metaKeywords, setMetaKeywords] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        event_date: '',
        location: '',
        location_url: '',
    });

    // Auto-generate slug from title
    useEffect(() => {
        if (!customSlug && formData.title) {
            const generatedSlug = generateSlug(formData.title);
            setSlug(generatedSlug);
            setSlugPreview(generatedSlug);
        }
    }, [formData.title, customSlug]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle manual slug editing
    const handleSlugChange = (e) => {
        const newSlug = generateSlug(e.target.value);
        setSlug(newSlug);
        setSlugPreview(newSlug);
        setCustomSlug(true);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleGalleryChange = (e) => {
        const files = Array.from(e.target.files);
        if (galleryImages.length + files.length > 6) {
            alert('You can upload a maximum of 6 gallery images.');
            return;
        }
        setGalleryImages(prev => [...prev, ...files]);
        setGalleryPreviews(prev => [...prev, ...files.map(f => URL.createObjectURL(f))]);
    };

    const removeGalleryImage = (idx) => {
        setGalleryImages(prev => prev.filter((_, i) => i !== idx));
        setGalleryPreviews(prev => prev.filter((_, i) => i !== idx));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.title.trim()) {
            alert('Please enter an event title');
            return;
        }
        try {
            setLoading(true);
            const data = new FormData();
            data.append('title', formData.title);
            data.append('slug', slug);
            data.append('description', description);
            data.append('event_date', formData.event_date);
            data.append('location', formData.location);
            data.append('location_url', formData.location_url);
            if (imageFile) data.append('image', imageFile);
            galleryImages.forEach(file => data.append('gallery', file));
            if (metaTitle) data.append('meta_title', metaTitle);
            if (metaDescription) data.append('meta_description', metaDescription);
            if (metaKeywords) data.append('meta_keywords', metaKeywords);

            await eventAPI.create(data);
            alert('Event created successfully!');
            navigate('/admin/events');
        } catch (error) {
            console.error('Error creating event:', error);
            alert('Failed to create event. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="create-event-page">
            <SEO
                title="Create Event | Admin | Trace Network & Engineering"
                description="Create new events, webinars, and workshops for Trace Network & Engineering."
                keywords="create event, add event, event creation, admin panel, trace network"
            />
            <style>{RICH_STYLES}</style>

            {/* Header */}
            <header className="create-event-header">
                <div className="header-content">
                    <div className="header-left">
                        <div className="page-icon">
                            <i className="fas fa-calendar-plus"></i>
                        </div>
                        <div className="page-title-section">
                            <h1 className="page-title">Create New Event</h1>
                            <p className="page-subtitle">Schedule and publish a new event</p>
                        </div>
                    </div>
                    <div className="header-actions">
                        <Link to="/admin/events" className="btn btn-secondary">
                            <i className="fas fa-arrow-left"></i>
                            <span>Back to Events</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="create-event-main">
                <div className="form-container">
                    <form onSubmit={handleSubmit} className="event-form">
                        {/* Form Header */}
                        <div className="form-header">
                            <div className="form-icon">
                                <i className="fas fa-edit"></i>
                            </div>
                            <div>
                                <h2>Event Details</h2>
                                <p>Fill in the information below to create your event</p>
                            </div>
                        </div>

                        <div className="form-body">
                            {/* Title */}
                            <div className="form-group">
                                <label htmlFor="title" className="form-label">
                                    <i className="fas fa-heading"></i>
                                    Event Title *
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Enter event title..."
                                    className="form-input"
                                    required
                                />
                                <span className="form-hint">Give your event a clear, descriptive title</span>
                            </div>

                            {/* URL Slug Preview & Edit */}
                            <div className="form-group">
                                <label className="form-label">
                                    <i className="fas fa-link"></i>
                                    URL Slug
                                </label>
                                <div className="slug-preview-container">
                                    <div className="slug-preview">
                                        <span className="slug-base">yoursite.com/events/</span>
                                        <span className="slug-path">{slugPreview || 'your-event-title'}</span>
                                    </div>
                                    <button type="button" 
                                        className="slug-edit-btn" 
                                        onClick={() => setCustomSlug(!customSlug)}
                                    >
                                        <i className="fas fa-edit"></i>
                                        {customSlug ? 'Auto-generate' : 'Edit'}
                                    </button>
                                </div>
                                {customSlug && (
                                    <div className="slug-edit-container">
                                        <input 
                                            type="text" 
                                            className="form-input slug-input"
                                            value={slug}
                                            onChange={handleSlugChange}
                                            placeholder="custom-url-slug"
                                        />
                                        <span className="form-hint">URL-friendly characters only (letters, numbers, hyphens)</span>
                                    </div>
                                )}
                            </div>

                            {/* Description — RichEditor */}
                            <div className="form-group">
                                <label className="form-label">
                                    <i className="fas fa-align-left"></i>
                                    Event Description
                                </label>
                                <RichEditor
                                    id="event_description"
                                    placeholder="Describe your event — use H1/H2/H3 for headings, Bold, lists, links..."
                                    minHeight={160}
                                    onChange={setDescription}
                                />
                                <span className="form-hint">Provide details about the event</span>
                            </div>

                            {/* Date and Location Row */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="event_date" className="form-label">
                                        <i className="fas fa-calendar-day"></i>
                                        Event Date
                                    </label>
                                    <input
                                        type="date"
                                        id="event_date"
                                        name="event_date"
                                        value={formData.event_date}
                                        onChange={handleChange}
                                        className="form-input"
                                    />
                                    <span className="form-hint">When will the event take place?</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location" className="form-label">
                                        <i className="fas fa-map-marker-alt"></i>
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="Event location..."
                                        className="form-input"
                                    />
                                    <span className="form-hint">Where will it be held?</span>
                                </div>
                            </div>

                            {/* Location URL */}
                            <div className="form-group">
                                <label htmlFor="location_url" className="form-label">
                                    <i className="fas fa-map"></i>
                                    Location URL
                                </label>
                                <input
                                    type="url"
                                    id="location_url"
                                    name="location_url"
                                    value={formData.location_url}
                                    onChange={handleChange}
                                    placeholder="https://maps.google.com/..."
                                    className="form-input"
                                />
                                <span className="form-hint">Paste a Google Maps or any location link (optional)</span>
                            </div>

                            {/* Main Image */}
                            <div className="form-group">
                                <label htmlFor="image" className="form-label">
                                    <i className="fas fa-image"></i>
                                    Event Main Image
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="form-input"
                                    style={{ padding: '8px 12px', cursor: 'pointer' }}
                                />
                                <span className="form-hint">Upload a main featured image (JPG, PNG, WebP)</span>
                            </div>

                            {/* Gallery */}
                            <div className="form-group">
                                <label htmlFor="gallery" className="form-label">
                                    <i className="fas fa-images"></i>
                                    Gallery Images (Up to 6)
                                </label>
                                <input
                                    type="file"
                                    id="gallery"
                                    name="gallery"
                                    accept="image/*"
                                    multiple
                                    onChange={handleGalleryChange}
                                    className="form-input"
                                    style={{ padding: '8px 12px', cursor: 'pointer' }}
                                />
                                <span className="form-hint">Upload additional gallery photos (Max 6 total)</span>
                                {galleryPreviews.length > 0 && (
                                    <div className="gallery-previews">
                                        {galleryPreviews.map((preview, index) => (
                                            <div key={index} className="gallery-preview-item">
                                                <img loading="lazy" src={preview} alt={`Gallery preview ${index + 1}`} />
                                                <button type="button" className="gallery-preview-item__remove" onClick={() => removeGalleryImage(index)}>✕</button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Image Preview */}
                            {imagePreview && (
                                <div className="image-preview-section">
                                    <label className="form-label">
                                        <i className="fas fa-eye"></i>
                                        Image Preview
                                    </label>
                                    <div className="image-preview">
                                        <img loading="lazy" src={imagePreview} alt="Event preview" />
                                    </div>
                                </div>
                            )}

                            {/* SEO / Meta Tags */}
                            <div className="form-group event-meta-section">
                                <div className="event-meta-heading">
                                    <span>🔍</span>
                                    <span>SEO &amp; Meta Tags</span>
                                </div>

                                <label htmlFor="meta_title" className="form-label" style={{ marginTop: '4px' }}>
                                    <i className="fas fa-tag"></i>
                                    Meta Title
                                </label>
                                <input
                                    type="text"
                                    id="meta_title"
                                    className="form-input"
                                    placeholder="SEO title for browser tab and search results (50–60 chars recommended)"
                                    value={metaTitle}
                                    onChange={(e) => setMetaTitle(e.target.value)}
                                    maxLength={120}
                                />
                                <span className="form-hint">{metaTitle.length}/120 characters</span>

                                <label htmlFor="meta_description" className="form-label" style={{ marginTop: '14px' }}>
                                    <i className="fas fa-align-left"></i>
                                    Meta Description
                                </label>
                                <textarea
                                    id="meta_description"
                                    className="form-input form-textarea"
                                    placeholder="Brief summary for search engines (150–160 chars recommended)"
                                    value={metaDescription}
                                    onChange={(e) => setMetaDescription(e.target.value)}
                                    maxLength={320}
                                    rows={3}
                                />
                                <span className="form-hint">{metaDescription.length}/320 characters</span>

                                <label htmlFor="meta_keywords" className="form-label" style={{ marginTop: '14px' }}>
                                    <i className="fas fa-key"></i>
                                    Meta Keywords
                                </label>
                                <input
                                    type="text"
                                    id="meta_keywords"
                                    className="form-input"
                                    placeholder="keyword1, keyword2, keyword3 (comma-separated)"
                                    value={metaKeywords}
                                    onChange={(e) => setMetaKeywords(e.target.value)}
                                />
                                <span className="form-hint">Separate keywords with commas</span>
                            </div>
                        </div>

                        {/* Form Footer */}
                        <div className="form-footer">
                            <button
                                type="button"
                                onClick={() => navigate('/admin/events')}
                                className="btn btn-cancel"
                                disabled={loading}
                            >
                                <i className="fas fa-times"></i>
                                <span>Cancel</span>
                            </button>
                            <button
                                type="submit"
                                className="btn btn-submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <><i className="fas fa-spinner fa-spin"></i><span>Creating...</span></>
                                ) : (
                                    <><i className="fas fa-check"></i><span>Create Event</span></>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Info Card */}
                    <div className="info-card">
                        <div className="info-header">
                            <i className="fas fa-info-circle"></i>
                            <h3>Quick Tips</h3>
                        </div>
                        <ul className="info-list">
                            <li><i className="fas fa-check-circle"></i><span>Use H1/H2/H3 in the description for structure</span></li>
                            <li><i className="fas fa-check-circle"></i><span>Use a clear, descriptive title</span></li>
                            <li><i className="fas fa-check-circle"></i><span>Include event date and location</span></li>
                            <li><i className="fas fa-check-circle"></i><span>Add a Google Maps URL for easy navigation</span></li>
                            <li><i className="fas fa-check-circle"></i><span>Fill in Meta Tags for better SEO</span></li>
                            <li><i className="fas fa-check-circle"></i><span>Add a high-quality image</span></li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}

/* ─── Rich Editor + Meta Styles ───────────────────────────────────────────── */
const RICH_STYLES = `
.rich-editor {
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
    background: #fff;
    transition: border-color .18s, box-shadow .18s;
}
.rich-editor:focus-within {
    border-color: #f093fb;
    box-shadow: 0 0 0 3px rgba(240,147,251,.1);
}
.rich-toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    padding: 8px 10px;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}
.rich-btn {
    border: 1px solid #e5e7eb;
    background: #fff;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 13px;
    cursor: pointer;
    line-height: 1.4;
    transition: background .15s, border-color .15s;
    white-space: nowrap;
}
.rich-btn:hover  { background: #f3f4f6; border-color: #d1d5db; }
.rich-btn:active { background: #e5e7eb; }
.rich-btn--bold   { font-weight: 700; min-width: 30px; text-align: center; }
.rich-btn--italic { font-style: italic; min-width: 30px; text-align: center; }
.rich-btn--under  { text-decoration: underline; min-width: 30px; text-align: center; }
.rich-btn--strike { text-decoration: line-through; min-width: 30px; text-align: center; }
.rich-btn--hl     { background: #fef9c3; border-color: #fde047; }
.rich-btn--hl:hover { background: #fef08a; }
.rich-btn--clear  { color: #6b7280; font-size: 12px; }
.rich-btn--h1     { font-weight: 800; font-size: 13px; min-width: 30px; text-align: center; color: #1a1a2e; }
.rich-btn--h2     { font-weight: 700; font-size: 12px; min-width: 30px; text-align: center; color: #333; }
.rich-btn--h3     { font-weight: 600; font-size: 12px; min-width: 30px; text-align: center; color: #555; }

/* ── Color Palette Dropdowns ── */
.rich-dropdown {
    position: relative;
    display: inline-block;
}

.rich-dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 100;
    background: #fff;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    padding: 8px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 6px;
    margin-top: 4px;
    width: max-content;
}

.rich-color-swatch {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #cbd5e1;
    cursor: pointer;
    padding: 0;
    transition: transform 0.1s ease;
}

.rich-color-swatch:hover {
    transform: scale(1.2);
}

.rich-divider { width: 1px; height: 20px; background: #e5e7eb; margin: 0 2px; }
.rich-area {
    padding: 12px 14px;
    font-size: 14px;
    line-height: 1.75;
    color: #111827;
    outline: none;
    font-family: inherit;
    overflow-y: auto;
}
.rich-area:empty::before { content: attr(data-placeholder); color: #9ca3af; pointer-events: none; }
.rich-area b, .rich-area strong { font-weight: 700; }
.rich-area i, .rich-area em     { font-style: italic; }
.rich-area u                    { text-decoration: underline; }
.rich-area s                    { text-decoration: line-through; }
.rich-area a                    { color: #f5576c; text-decoration: underline; }
.rich-area ul                   { padding-left: 22px; margin: 6px 0; list-style: disc; }
.rich-area ol                   { padding-left: 22px; margin: 6px 0; list-style: decimal; }
.rich-area li                   { margin-bottom: 3px; }
.rich-area mark                 { background: #fef08a; padding: 0 2px; border-radius: 2px; }
.rich-area h1                   { font-size: 1.8em; font-weight: 800; margin: 10px 0 6px; }
.rich-area h2                   { font-size: 1.4em; font-weight: 700; margin: 8px 0 5px; }
.rich-area h3                   { font-size: 1.15em; font-weight: 600; margin: 6px 0 4px; }

/* Meta section */
.event-meta-section {
    background: #f8faff;
    border: 1px solid #dbeafe;
    border-radius: 12px;
    padding: 18px 16px 14px;
}
.event-meta-heading {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    font-weight: 700;
    color: #1e3a5f;
    margin-bottom: 14px;
}

/* ── Slug Preview Styles ── */
.slug-preview-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 6px;
}

.slug-preview {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 8px 12px;
    font-family: 'Courier New', monospace;
    font-size: 13px;
    color: #475569;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.slug-base {
    color: #94a3b8;
    font-weight: 500;
}

.slug-path {
    color: #0f172a;
    font-weight: 600;
}

.slug-edit-btn {
    background: #f59e0b;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: background-color 0.2s;
    white-space: nowrap;
}

.slug-edit-btn:hover {
    background: #d97706;
}

.slug-edit-btn i {
    font-size: 11px;
}

.slug-edit-container {
    margin-top: 8px;
}

.slug-input {
    font-family: 'Courier New', monospace !important;
    font-size: 13px !important;
}
`;
