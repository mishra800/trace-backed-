import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { newsAPI } from '../../services/api';
import SEO from '../../components/SEO';
import './CreateNews.css';

export default function CreateNews() {
    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('adminToken')) {
            navigate('/admin');
        }
    }, [navigate]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
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
            if (image) formData.append('image', image);

            await newsAPI.create(formData);
            navigate('/admin/news');
        } catch (error) {
            console.error('Error creating news article:', error);
            alert('Failed to create news article. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <SEO
                title="Create News Article | Admin Dashboard | Trace Network"
                description="Publish new press releases and articles to the website."
                keywords="create news, publish article, admin portal, trace network"
                robots="noindex, nofollow"
            />
            <div className="create-news-page">
                {/* Header */}
                <header className="create-news-header">
                    <div className="header-content">
                        <div className="header-left">
                            <div className="page-icon">
                                <i className="fas fa-newspaper"></i>
                            </div>
                            <div className="page-title-section">
                                <h1 className="page-title">Create News Article</h1>
                                <p className="page-subtitle">Publish a new press release or article link</p>
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
                            <div className="form-header">
                                <div className="form-icon">
                                    <i className="fas fa-plus"></i>
                                </div>
                                <div>
                                    <h2>News Details</h2>
                                    <p>Fill in the fields below to add a news item</p>
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
                                        <i className="fas fa-upload"></i> Choose Image File
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
                                                    setImage(null);
                                                    setImagePreview('');
                                                }}
                                            >
                                                <i className="fas fa-trash"></i> Remove
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
                                            <i className="fas fa-save"></i> Publish Article
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
