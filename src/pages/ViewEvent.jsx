import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './ViewEvent.css';

const _apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_BASE_URL = _apiUrl.startsWith('http') ? _apiUrl.replace(/\/api$/, '') : '';

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

function sanitizeEventContent(html) {
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
                <div className="sidebar-skeleton-card" key={n}>
                    <div className="sidebar-skeleton__thumb" />
                    <div className="sidebar-skeleton__lines">
                        <div className="sidebar-skeleton__line" />
                        <div className="sidebar-skeleton__line" />
                        <div className="sidebar-skeleton__line" />
                    </div>
                </div>
            ))}
        </>
    );
}

// ── Single sidebar event card ───────────────────────────────────────────────
function SidebarEventCard({ event }) {
    const imgUrl      = resolveImage(event.image);
    const formattedDate = formatDate(event.event_date);
    const desc        = stripHtml(event.description);
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
        <Link to={`/view-event/${event.slug || event.id}`} className="sidebar-event-card">
            <div className="sidebar-event-card__thumb" style={{ width: `${thumbWidth}px`, minWidth: `${thumbWidth}px` }}>
                {imgUrl ? (
                    <img loading="lazy"
                        src={imgUrl}
                        alt={event.title}
                        onError={(e) => {
                            e.target.closest('.sidebar-event-card__thumb').innerHTML =
                                '<div class="sidebar-event-card__no-img"><i class="fas fa-calendar-alt"></i></div>';
                        }}
                    />
                ) : (
                    <div className="sidebar-event-card__no-img">
                        <i className="fas fa-calendar-alt" />
                    </div>
                )}
            </div>

            <div className="sidebar-event-card__info">
                {formattedDate && (
                    <div className="sidebar-event-card__date">
                        <i className="fas fa-calendar-alt" />
                        {formattedDate}
                    </div>
                )}
                <p className="sidebar-event-card__title">{event.title}</p>
                <span className="sidebar-event-card__cta">
                    View Details <i className="fas fa-arrow-right" />
                </span>
            </div>
        </Link>
    );
}

// ── Main Component ──────────────────────────────────────────────────────────
export default function ViewEvent() {
    const { id } = useParams();
    const [event,      setEvent]      = useState(null);
    const [loading,    setLoading]    = useState(true);
    const [prevEvents, setPrevEvents] = useState([]);
    const [prevLoading,setPrevLoading]= useState(true);

    // Fetch current event
    useEffect(() => {
        setLoading(true);
        fetch(`${API_BASE_URL}/api/events/${id}`)
            .then(res => res.json())
            .then(data => { setEvent(data); setLoading(false); })
            .catch(err => { console.error(err); setLoading(false); });
    }, [id]);

    // Fetch other events for sidebar
    useEffect(() => {
        setPrevLoading(true);
        fetch(`${API_BASE_URL}/api/events`)
            .then(res => res.json())
            .then(data => {
                const all = Array.isArray(data) ? data : [];
                const others = all
                    .filter(e => String(e.id) !== String(id))
                    .sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0))
                    .slice(0, 5); // show up to 5 in sidebar
                setPrevEvents(others);
                setPrevLoading(false);
            })
            .catch(err => { console.error(err); setPrevLoading(false); });
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
                <p style={{ color: '#aaa', fontSize: '16px' }}>Loading event…</p>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    // ── Not found ───────────────────────────────────────────────────────────
    if (!event || event.message) {
        return (
            <div style={{ padding: '120px 20px', textAlign: 'center', color: '#fff', background: '#0d1117', minHeight: '60vh' }}>
                <i className="fas fa-calendar-times" style={{ fontSize: '52px', color: '#444', marginBottom: '20px', display: 'block' }} />
                <p style={{ fontSize: '18px', color: '#aaa' }}>Event not found.</p>
                <Link to="/events" style={{ color: '#ff7a00', marginTop: '16px', display: 'inline-block' }}>← Back to Events</Link>
            </div>
        );
    }

    const plainDesc  = stripHtml(event.description);
    const heroImgUrl = resolveImage(event.image);
    const eventDate  = formatDate(event.event_date);

    return (
        <>
            <SEO
                title={event.meta_title || `${event.title} | Trace Network & Engineering Pvt Ltd`}
                description={event.meta_description || (plainDesc ? plainDesc.substring(0, 160).replace(/\s+/g, ' ').trim() : 'Stay updated with the latest events, webinars, and workshops on cybersecurity and IT technologies from Trace Network & Engineering Pvt Ltd.')}
                keywords={event.meta_keywords || "IT event, cybersecurity event, webinar, workshop, trace network event"}
                ogTitle={event.title}
                ogDescription={plainDesc ? plainDesc.substring(0, 160).replace(/\s+/g, ' ').trim() : 'Stay updated with the latest events from Trace Network & Engineering.'}
                ogImage={heroImgUrl || '/assets/images/logoo.png'}
            />

            {/* Breadcrumb header */}
            <section className="page-header">
                <div className="page-header__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)' }} />
                <div className="container">
                    <div className="page-header__inner">
                        <h2>{event.title}</h2>
                        <div className="thm-breadcrumb__box">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><Link to="/"><i className="fas fa-home" />Home</Link></li>
                                <li><span className="icon-right-arrow-1" /></li>
                                <li><Link to="/events">Events</Link></li>
                                <li><span className="icon-right-arrow-1" /></li>
                                <li>{event.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Two-column body ── */}
            <div className="view-event-wrapper">
                <div className="view-event-layout">

                    {/* ── LEFT: event content ── */}
                    <main className="view-event-main">

                        {heroImgUrl && (
                            <img loading="lazy"
                                src={heroImgUrl}
                                alt={event.title}
                                className="view-event-hero-img"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        )}

                        <h1 className="view-event-title">{event.title}</h1>

                        <div className="view-event-meta">
                            {eventDate && (
                                <span className="view-event-meta-item">
                                    <i className="fas fa-calendar-alt" />
                                    {eventDate}
                                </span>
                            )}
                            {event.location && (
                                <a
                                    href={event.location_url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="view-event-meta-item view-event-meta-item--link"
                                    title="Open in Google Maps"
                                >
                                    <i className="fas fa-map-marker-alt" />
                                    {event.location}
                                    <i className="fas fa-external-link-alt view-event-meta-item__ext" />
                                </a>
                            )}
                        </div>

                        <div className="view-event-divider" />

                        {event.description && (
                            <div
                                className="view-event-body"
                                dangerouslySetInnerHTML={{ __html: sanitizeEventContent(event.description) }}
                            />
                        )}

                        {/* Gallery */}
                        {event.gallery_images && event.gallery_images.length > 0 && (
                            <div className="view-event-gallery">
                                <h3 className="view-event-section-heading">
                                    <i className="fas fa-images" />
                                    Event Gallery
                                </h3>
                                <div className="view-event-gallery-grid">
                                    {event.gallery_images.map((imgUrl, index) => {
                                        const url = resolveImage(imgUrl);
                                        return (
                                            <div
                                                key={index}
                                                className="view-event-gallery-item"
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

                        <Link to="/events" className="view-event-back-btn">
                            <i className="fas fa-arrow-left" />
                            Back to Events
                        </Link>
                    </main>

                    {/* ── RIGHT: previous events sidebar ── */}
                    <aside className="view-event-sidebar">

                        <div className="sidebar-heading">
                            <div>
                                <div className="sidebar-heading__tag">More Events</div>
                                <h3>Previous <span>Events</span></h3>
                            </div>
                        </div>

                        {prevLoading ? (
                            <SidebarSkeleton />
                        ) : prevEvents.length > 0 ? (
                            <>
                                {prevEvents.map(e => (
                                    <SidebarEventCard key={e.id} event={e} />
                                ))}
                                <div className="sidebar-view-all">
                                    <Link to="/events">
                                        <i className="fas fa-th-large" />
                                        View All Events
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <div className="sidebar-empty">
                                <i className="fas fa-calendar-times" style={{ fontSize: '28px', marginBottom: '8px', display: 'block', opacity: 0.3 }} />
                                No other events yet.
                            </div>
                        )}
                    </aside>

                </div>
            </div>
        </>
    );
}
