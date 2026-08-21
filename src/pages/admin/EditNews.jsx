import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { newsAPI } from '../../services/api';
import SEO from '../../components/SEO';
import './CreateNews.css';

const _apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_BASE_URL = _apiUrl.startsWith('http') ? _apiUrl.replace(/\/api$/, '') : '';

function resolveImage(url) {
    if (!url) return '';
    return url.startsWith('http') || url.startsWith('data:') ? url : `${API_BASE_URL}${url}`;
}

export default function EditNews() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('');
    const [link, setLink] = useState('');
    const [existingImage, setExistingImage] = useState('');
    const [newImage, setNewImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('adminToken')) {
            navigate('/admin');
        }
        fetchNewsDetail();
    }, [id, navigate]);

    const fetchNewsDetail = async () => {
        try {
            setLoading(true);
            const data = await newsAPI.getById(id);
            setTitle(data.title || '');
            setTag(data.tag || '');
            setLink(data.link || '');
            setExistingImage(data.image || '');
            if (data.image) {
                setImagePreview(resolveImage(data.image));
            }
        } catch (error) {
            console.error('Error fetching news details:', error);
            alert('Failed to load news article details');
            navigate('/admin/news');
        } finally {
            setLoading(false);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            alert('Title is required.');
            return;
        }

        setSubmitting(true);
        try {
            const formData = new FormData();
            formData.append('title', title.trim());
            if (tag.trim()) formData.append('tag', tag.trim());
            if (link.trim()) formData.append('link', link.trim());
            
            if (newImage) {
                formData.append('image', newImage);
            } else {
                formData.append('image_url', existingImage);
            }

            await newsAPI.update(id, formData);
            navigate('/admin/news');
        } catch (error) {
            console.error('Error updating news article:', error);
            alert('Failed to update news article. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="create-news-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', color: 'white' }}>
                <div style={{ textAlign: 'center' }}>
                    <div className="spinner" style={{ margin: '0 auto 20px', borderTopColor: '#fff' }}></div>
                    <p>Loading news article details...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <SEO
                title="Edit News Article | Admin Dashboard | Trace Network"
                description="Modify existing press releases and articles on the website."
                keywords="edit news, update article, admin portal, trace network"
                robots="noindex, nofollow"
            />
            <div className="create-news-page">
                {/* Header */}
                <header className="create-news-header">
                    <div className="header-content">
                        <div className="header-left">
                            <div className="page-icon">
                                <i className="fas fa-edit"></i>
                            </div>
                            <div className="page-title-section">
                                <h1 className="page-title">Edit News Article</h1>
                                <p className="page-subtitle">Update press release details or article link</p>
                            </div>
                        </div>
                        <div className="header-actions">
                            <Link to="/admin/news" className="btn btn-secondary">
                                <i className="fas fa-arrow-left"></i>
                                <span>Back to News</span>
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="create-news-main">
                    <div className="form-container">
                        {/* Form */}
                        <form onSubmit={handleSubmit} className="news-form">
                            <div className="form-header" style={{ background: 'linear-gradient(135deg, #2b6cb0 0%, #2c5282 100%)' }}>
                                <div className="form-icon">
                                    <i className="fas fa-save"></i>
                                </div>
                                <div>
                                    <h2>News Details</h2>
                                    <p>Fill in the fields below to update the news item</p>
                                </div>
                            </div>

                            <div className="form-body">
                                {/* Title */}
                                <div className="form-group">
                                    <label className="form-label" htmlFor="title">
                                        <i className="fas fa-heading"></i> Article Title *
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        className="form-input"
                                        placeholder="e.g. Sophos Honors Top Partners at India and SAARC Awards"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Tag */}
                                <div className="form-group">
                                    <label className="form-label" htmlFor="tag">
                                        <i className="fas fa-tag"></i> Publisher Tag / Category
                                    </label>
                                    <input
                                        type="text"
                                        id="tag"
                                        className="form-input"
                                        placeholder="e.g. Sophos, CRN, CXO Today"
                                        value={tag}
                                        onChange={(e) => setTag(e.target.value)}
                                    />
                                    <span className="form-hint">Used as a pill/badge showing who published the news</span>
                                </div>

                                {/* External Link */}
                                <div className="form-group">
                                    <label className="form-label" htmlFor="link">
                                        <i className="fas fa-link"></i> External Article Link (URL)
                                    </label>
                                    <input
                                        type="url"
                                        id="link"
                                        className="form-input"
                                        placeholder="https://example.com/news-story"
                                        value={link}
                                        onChange={(e) => setLink(e.target.value)}
                                    />
                                    <span className="form-hint">URL where users will be redirected to read the full story</span>
                                </div>

                                {/* Image Upload */}
                                <div className="form-group">
                                    <label className="form-label">
                                        <i className="fas fa-image"></i> Featured Image
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="form-input"
                                        style={{ display: 'none' }}
                                        id="news-image-upload"
                                    />
                                    <label
                                        htmlFor="news-image-upload"
                                        className="btn btn-secondary"
                                        style={{ display: 'inline-flex', cursor: 'pointer' }}
                                    >
                                        <i className="fas fa-upload"></i> Choose New Image File
                                    </label>

                                    {/* Preview */}
                                    {imagePreview && (
                                        <div className="image-preview">
                                            <img loading="lazy" src={imagePreview} alt="Preview" />
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                style={{
                                                    position: 'absolute',
                                                    top: '10px',
                                                    right: '10px',
                                                    background: 'rgba(255, 255, 255, 0.9)',
                                                    borderColor: 'transparent',
                                                    color: '#e53e3e',
                                                    padding: '5px 10px',
                                                    fontSize: '12px'
                                                }}
                                                onClick={() => {
                                                    setNewImage(null);
                                                    setExistingImage('');
                                                    setImagePreview('');
                                                }}
                                            >
                                                <i className="fas fa-trash"></i> Remove Image
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="form-footer">
                                <Link to="/admin/news" className="btn btn-cancel">
                                    Cancel
                                </Link>
                                <button type="submit" className="btn btn-submit" disabled={submitting}>
                                    {submitting ? (
                                        <>
                                            <i className="fas fa-spinner fa-spin"></i> Saving...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-save"></i> Save Changes
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>

                        {/* Sidebar Info Card */}
                        <aside className="info-card">
                            <div className="info-header">
                                <i className="fas fa-info-circle"></i>
                                <h3>Publishing Info</h3>
                            </div>
                            <ul className="info-list">
                                <li>
                                    <i className="fas fa-check-circle"></i>
                                    <span>Provide a clean title highlighting the news milestone.</span>
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i>
                                    <span>Pills (like "Sophos" or "CRN") help categorize the press release.</span>
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i>
                                    <span>If you leave the external link blank, clicking the card will not redirect anywhere, but it's recommended to link to the source.</span>
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i>
                                    <span>Upload a high-quality landscape image (ratio 16:9 is recommended).</span>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </main>
            </div>
        </>
    );
}
