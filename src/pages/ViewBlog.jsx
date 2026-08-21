import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogAPI } from '../services/api';
import SEO from '../components/SEO';
import './ViewBlog.css';

const _apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_BASE_URL = _apiUrl.startsWith('http') ? _apiUrl.replace(/\/api$/, '') : '';

// Resolve the hero image from whichever field the blog object uses
function getBlogImage(blog) {
    if (!blog) return null;
    if (blog.image1)          return blog.image1.startsWith('http') || blog.image1.startsWith('data:') ? blog.image1 : `${API_BASE_URL}${blog.image1}`;
    if (blog.image1_url)      return blog.image1_url;
    if (blog.hero_image_link) return blog.hero_image_link;
    return null;
}

function resolveImage(url) {
    if (!url) return null;
    return url.startsWith('http') || url.startsWith('data:') ? url : `${API_BASE_URL}${url}`;
}

function stripHtml(html) {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

function formatDate(dateStr) {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    if (isNaN(d)) return null;
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

function parseColorToRgb(colorStr) {
    if (!colorStr) return null;
    const trimmed = colorStr.trim().toLowerCase();
    if (trimmed.startsWith('rgb')) {
        const match = trimmed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
    }
    if (trimmed.startsWith('#')) {
        const hex = trimmed.substring(1);
        if (hex.length === 3) {
            const r = parseInt(hex[0] + hex[0], 16);
            const g = parseInt(hex[1] + hex[1], 16);
            const b = parseInt(hex[2] + hex[2], 16);
            return [r, g, b];
        }
        if (hex.length === 6) {
            const r = parseInt(hex.substring(0, 2), 16);
            const g = parseInt(hex.substring(2, 4), 16);
            const b = parseInt(hex.substring(4, 6), 16);
            return [r, g, b];
        }
    }
    const names = {
        black: [0, 0, 0],
        darkgray: [169, 169, 169],
        darkgrey: [169, 169, 169],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        gray: [128, 128, 128],
        grey: [128, 128, 128],
    };
    if (names[trimmed]) return names[trimmed];
    return null;
}

function sanitizeBlogContent(html) {
    if (!html) return '';
    const div = document.createElement('div');
    div.innerHTML = html;
    
    const styledElements = div.querySelectorAll('[style]');
    styledElements.forEach(el => {
        const color = el.style.color;
        if (color) {
            const rgb = parseColorToRgb(color);
            if (rgb) {
                const [r, g, b] = rgb;
                const brightness = (r * 299 + g * 587 + b * 114) / 1000;
                if (brightness < 120) {
                    el.style.color = 'inherit';
                }
            }
        }
        
        const bgColor = el.style.backgroundColor;
        if (bgColor) {
            const rgb = parseColorToRgb(bgColor);
            if (rgb) {
                const [r, g, b] = rgb;
                const brightness = (r * 299 + g * 587 + b * 114) / 1000;
                if (brightness > 200) {
                    el.style.backgroundColor = 'transparent';
                }
            }
        }
    });
    
    return div.innerHTML;
}


// ── Sidebar skeleton ────────────────────────────────────────────────────────
function SidebarSkeleton() {
    return (
        <>
            {[1, 2, 3].map(n => (
                <div className="blog-sidebar-skeleton-card" key={n}>
                    <div className="blog-sidebar-skeleton__thumb" />
                    <div className="blog-sidebar-skeleton__lines">
                        <div className="blog-sidebar-skeleton__line" />
                        <div className="blog-sidebar-skeleton__line" />
                        <div className="blog-sidebar-skeleton__line" />
                    </div>
                </div>
            ))}
        </>
    );
}

// ── Single sidebar blog card ────────────────────────────────────────────────
function SidebarBlogCard({ blog }) {
    const imgUrl        = getBlogImage(blog);
    const formattedDate = formatDate(blog.created_at);
    const [thumbWidth, setThumbWidth] = useState(72);

    useEffect(() => {
        if (imgUrl) {
            const img = new Image();
            img.src = imgUrl;
            img.onload = () => {
                const aspect = img.width / img.height;
                if (aspect > 1) {
                    const calculatedWidth = Math.min(120, Math.round(72 * aspect));
                    setThumbWidth(calculatedWidth);
                } else {
                    setThumbWidth(72);
                }
            };
        }
    }, [imgUrl]);

    return (
        <Link to={`/view-blog/${blog.slug || blog.id}`} className="sidebar-blog-card">
            <div className="sidebar-blog-card__thumb" style={{ width: `${thumbWidth}px`, minWidth: `${thumbWidth}px` }}>
                {imgUrl ? (
                    <img loading="lazy"
                        src={imgUrl}
                        alt={blog.title}
                        onError={(e) => {
                            e.target.closest('.sidebar-blog-card__thumb').innerHTML =
                                '<div class="sidebar-blog-card__no-img"><i class="fas fa-newspaper"></i></div>';
                        }}
                    />
                ) : (
                    <div className="sidebar-blog-card__no-img">
                        <i className="fas fa-newspaper" />
                    </div>
                )}
            </div>

            <div className="sidebar-blog-card__info">
                {formattedDate && (
                    <div className="sidebar-blog-card__date">
                        <i className="fas fa-calendar-alt" />
                        {formattedDate}
                    </div>
                )}
                <p className="sidebar-blog-card__title">{blog.title}</p>
                <span className="sidebar-blog-card__cta">
                    Read More <i className="fas fa-arrow-right" />
                </span>
            </div>
        </Link>
    );
}

// ── Main Component ──────────────────────────────────────────────────────────
export default function ViewBlog() {
    const { id } = useParams();
    const [blog,        setBlog]        = useState(null);
    const [loading,     setLoading]     = useState(true);
    const [recentBlogs, setRecentBlogs] = useState([]);
    const [recentLoading, setRecentLoading] = useState(true);

    // Fetch current blog
    useEffect(() => {
        setLoading(true);
        blogAPI.getById(id)
            .then(data => { setBlog(data); setLoading(false); })
            .catch(err => { console.error(err); setLoading(false); });
    }, [id]);

    // Fetch other blogs for sidebar
    useEffect(() => {
        setRecentLoading(true);
        blogAPI.getAll()
            .then(data => {
                const all = Array.isArray(data) ? data : [];
                const others = all
                    .filter(b => String(b.id) !== String(id))
                    .sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0))
                    .slice(0, 5); // show up to 5 in sidebar
                setRecentBlogs(others);
                setRecentLoading(false);
            })
            .catch(err => { console.error(err); setRecentLoading(false); });
    }, [id]);

    // ── Loading state ───────────────────────────────────────────────────────
    if (loading) {
        return (
            <div style={{ padding: '120px 20px', textAlign: 'center', color: '#fff', background: '#0d1117', minHeight: '60vh' }}>
                <div style={{
                    width: '48px', height: '48px',
                    border: '4px solid rgba(255,255,255,0.1)',
                    borderTop: '4px solid #ff7a00',
                    borderRadius: '50%',
                    animation: 'spin 0.9s linear infinite',
                    margin: '0 auto 20px'
                }} />
                <p style={{ color: '#aaa', fontSize: '16px' }}>Loading blog…</p>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    // ── Not found ───────────────────────────────────────────────────────────
    if (!blog || blog.message) {
        return (
            <div style={{ padding: '120px 20px', textAlign: 'center', color: '#fff', background: '#0d1117', minHeight: '60vh' }}>
                <i className="fas fa-newspaper" style={{ fontSize: '52px', color: '#444', marginBottom: '20px', display: 'block' }} />
                <p style={{ fontSize: '18px', color: '#aaa' }}>Blog not found.</p>
                <Link to="/blogs" style={{ color: '#ff7a00', marginTop: '16px', display: 'inline-block' }}>← Back to Blogs</Link>
            </div>
        );
    }

    const heroImage = getBlogImage(blog);
    const plainText = stripHtml(blog.content);
    const postedDate = formatDate(blog.created_at);

    return (
        <>
            <SEO
                title={blog.meta_title || `${blog.title} | Trace Network & Engineering Pvt Ltd`}
                description={blog.meta_description || (plainText ? plainText.substring(0, 160).replace(/\s+/g, ' ').trim() : 'Read expert insights on cybersecurity, network infrastructure, cloud solutions, and IT services from Trace Network & Engineering Pvt Ltd.')}
                keywords={blog.meta_keywords || "IT blog, cybersecurity article, network security, technology insights, trace network blog"}
                ogTitle={blog.title}
                ogDescription={plainText ? plainText.substring(0, 160).replace(/\s+/g, ' ').trim() : 'Read expert insights on cybersecurity and IT services from Trace Network & Engineering.'}
                ogImage={heroImage || '/assets/images/logoo.png'}
            />

            {/* Breadcrumb header */}
            <section className="page-header">
                <div className="page-header__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)' }} />
                <div className="container">
                    <div className="page-header__inner">
                        <h2>{blog.title}</h2>
                        <div className="thm-breadcrumb__box">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><Link to="/"><i className="fas fa-home" />Home</Link></li>
                                <li><span className="icon-right-arrow-1" /></li>
                                <li><Link to="/blogs">Blogs</Link></li>
                                <li><span className="icon-right-arrow-1" /></li>
                                <li>{blog.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Two-column body ── */}
            <div className="view-blog-wrapper">
                <div className="view-blog-layout">

                    {/* ── LEFT: blog content ── */}
                    <main className="view-blog-main">

                        {heroImage && (
                            <img loading="lazy"
                                src={heroImage}
                                alt={blog.title}
                                className="view-blog-hero-img"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        )}

                        <h1 className="view-blog-title">{blog.title}</h1>

                        <div className="view-blog-meta">
                            {postedDate && (
                                <span className="view-blog-meta-item">
                                    <i className="fas fa-calendar-alt" />
                                    {postedDate}
                                </span>
                            )}
                        </div>

                        <div className="view-blog-divider" />

                        {/* Rich-text content */}
                        <div
                            className="view-blog-body"
                            dangerouslySetInnerHTML={{ __html: sanitizeBlogContent(blog.content) }}
                        />

                        {/* Gallery */}
                        {blog.gallery_images && blog.gallery_images.length > 0 && (
                            <div className="view-blog-gallery">
                                <h3 className="view-blog-section-heading">
                                    <i className="fas fa-images" />
                                    Photo Gallery
                                </h3>
                                <div className="view-blog-gallery-grid">
                                    {blog.gallery_images.map((imgUrl, index) => {
                                        const url = resolveImage(imgUrl);
                                        return (
                                            <div
                                                key={index}
                                                className="view-blog-gallery-item"
                                                onClick={() => window.open(url, '_blank')}
                                                title="Click to view full size"
                                            >
                                                <img loading="lazy" src={url} alt={`Gallery photo ${index + 1}`} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        <Link to="/blogs" className="view-blog-back-btn">
                            <i className="fas fa-arrow-left" />
                            Back to Blogs
                        </Link>
                    </main>

                    {/* ── RIGHT: recent blogs sidebar ── */}
                    <aside className="view-blog-sidebar">

                        <div className="blog-sidebar-heading">
                            <span className="blog-sidebar-heading__tag">More Articles</span>
                            <h3>Recent <span>Blogs</span></h3>
                        </div>

                        {recentLoading ? (
                            <SidebarSkeleton />
                        ) : recentBlogs.length > 0 ? (
                            <>
                                {recentBlogs.map(b => (
                                    <SidebarBlogCard key={b.id} blog={b} />
                                ))}
                                <div className="blog-sidebar-view-all">
                                    <Link to="/blogs">
                                        <i className="fas fa-th-large" />
                                        View All Blogs
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <div className="blog-sidebar-empty">
                                <i className="fas fa-newspaper" style={{ fontSize: '28px', marginBottom: '8px', display: 'block', opacity: 0.3 }} />
                                No other blogs yet.
                            </div>
                        )}
                    </aside>

                </div>
            </div>
        </>
    );
}
