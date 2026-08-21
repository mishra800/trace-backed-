import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { eventAPI } from '../services/api';

import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';

// Derive base URL for /uploads image paths.
// Production: VITE_API_URL is a full https URL — strip /api suffix.
// Local dev:  VITE_API_URL is /api (Vite proxy) — use '' so /uploads stays relative.
const _apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_BASE_URL = _apiUrl.startsWith('http') ? _apiUrl.replace(/\/api$/, '') : '';

function getEventImage(event) {
    if (!event.image) return null;
    return event.image.startsWith('http') || event.image.startsWith('data:') ? event.image : `${API_BASE_URL}${event.image}`;
}

function stripHtml(html) {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

export default function Events() {
  const seoData = getSEOData('events');

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 8;

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);
                const data = await eventAPI.getAll();
                setEvents(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error('Error fetching events:', err);
                setEvents([]);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    const filteredEvents = useMemo(() => {
        if (!searchTerm) return events;
        return events.filter(event =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (event.description && event.description.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    }, [events, searchTerm]);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
    const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    return (
        <>

      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

            <section className="page-header">
                <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}>
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <h2>Events</h2>
                        <div className="thm-breadcrumb__box">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><Link to="/"><i className="fas fa-home"></i>Home</Link></li>
                                <li><span className="icon-right-arrow-1"></span></li>
                                <li>Events</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ background: '#1a1a2e', padding: '60px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    <div className="section-title text-center">
                        <h2 className="section-title__title" style={{ color: '#fff', marginBottom: '40px' }}>
                            All <span>Events</span>
                        </h2>
                    </div>

                    {/* Search Bar */}
                    <div style={{ maxWidth: '600px', margin: '0 auto 40px', display: 'flex', gap: '10px' }}>
                        <input
                            type="text"
                            placeholder="Search events by title or description..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            style={{
                                flex: 1,
                                padding: '12px 20px',
                                fontSize: '16px',
                                border: '2px solid #ff7a00',
                                borderRadius: '25px',
                                outline: 'none',
                                backgroundColor: 'rgba(255,255,255,0.9)',
                                color: '#333'
                            }}
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                style={{
                                    padding: '12px 24px',
                                    background: '#ff7a00',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '25px',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                    fontWeight: 'bold'
                                }}
                            >
                                Clear
                            </button>
                        )}
                    </div>

                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '60px', color: '#fff' }}>
                            <div style={{
                                border: '4px solid rgba(255,255,255,0.1)',
                                borderTop: '4px solid #ff7a00',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                animation: 'spin 1s linear infinite',
                                margin: '0 auto'
                            }}></div>
                            <p style={{ marginTop: '20px' }}>Loading events...</p>
                        </div>
                    ) : (
                        <>
                            {/* Results count */}
                            {filteredEvents.length > 0 && (
                                <p style={{ textAlign: 'center', color: '#ccc', marginBottom: '30px', fontSize: '14px' }}>
                                    {filteredEvents.length === events.length
                                        ? `Showing all ${events.length} event${events.length !== 1 ? 's' : ''}`
                                        : `Found ${filteredEvents.length} event${filteredEvents.length !== 1 ? 's' : ''} matching "${searchTerm}"`
                                    }
                                </p>
                            )}

                            {/* Event Grid */}
                            {currentEvents.length > 0 ? (
                                <div className="event-grid">
                                    {currentEvents.map(event => (
                                        <div className="event-card" key={event.id}>
                                            {getEventImage(event) && (
                                                <img loading="lazy"
                                                    src={getEventImage(event)}
                                                    alt={event.title}
                                                    onError={(e) => { e.target.style.display = 'none'; }}
                                                />
                                            )}
                                            <h3>{event.title}</h3>
                                            {event.event_date && (
                                                <p style={{ color: '#aaa', fontSize: '0.85rem', margin: '4px 0 8px' }}>
                                                    <i className="fas fa-calendar-alt" style={{ marginRight: '6px', color: '#ff7a00' }}></i>
                                                    {new Date(event.event_date).toLocaleDateString()}
                                                </p>
                                            )}
                                            {event.description && (
                                                <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0 0 10px' }}>
                                                    {stripHtml(event.description).substring(0, 100)}...
                                                </p>
                                            )}
                                            <Link to={`/view-event/${event.slug || event.id}`}>Read More</Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div style={{ textAlign: 'center', padding: '60px', color: '#ccc' }}>
                                    <p style={{ fontSize: '18px' }}>
                                        {searchTerm
                                            ? `No events found matching "${searchTerm}"`
                                            : 'No events available yet. Check back soon!'
                                        }
                                    </p>
                                </div>
                            )}

                            {/* Pagination */}
                            {filteredEvents.length > eventsPerPage && (
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '10px',
                                    marginTop: '50px',
                                    flexWrap: 'wrap'
                                }}>
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        style={{
                                            padding: '10px 20px',
                                            background: currentPage === 1 ? '#333' : '#ff7a00',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '25px',
                                            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                            fontSize: '14px',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Previous
                                    </button>
                                    {[...Array(totalPages)].map((_, index) => (
                                        <button
                                            key={index + 1}
                                            onClick={() => handlePageChange(index + 1)}
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                background: currentPage === index + 1 ? '#ff7a00' : 'transparent',
                                                color: '#fff',
                                                border: currentPage === index + 1 ? 'none' : '2px solid #555',
                                                borderRadius: '50%',
                                                cursor: 'pointer',
                                                fontSize: '14px',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        style={{
                                            padding: '10px 20px',
                                            background: currentPage === totalPages ? '#333' : '#ff7a00',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '25px',
                                            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                                            fontSize: '14px',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .event-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 20px;
                    padding: 0 10px;
                }
                @media (min-width: 600px) {
                    .event-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (min-width: 900px) {
                    .event-grid { grid-template-columns: repeat(3, 1fr); }
                }
                @media (min-width: 1200px) {
                    .event-grid { grid-template-columns: repeat(4, 1fr); }
                }
                .event-card {
                    border: 1px solid #ddd;
                    border-radius: 12px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.06);
                    padding: 16px;
                    text-align: center;
                    transition: transform 0.2s ease-in-out;
                }
                .event-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 6px 14px rgba(0,0,0,0.1);
                }
                .event-card img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 8px;
                    margin-bottom: 12px;
                }
                .event-card h3 {
                    font-size: 1.2rem;
                    color: white;
                    margin-bottom: 10px;
                }
                .event-card a {
                    display: inline-block;
                    margin-top: 10px;
                    padding: 8px 16px;
                    background-color: #d44a00;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 6px;
                    font-size: 0.95rem;
                    transition: background-color 0.2s ease;
                }
                .event-card a:hover {
                    background-color: #c94600;
                }
                @media (max-width: 400px) {
                    .event-grid { padding: 0 5px; }
                    .event-card { padding: 12px; }
                    .event-card h3 { font-size: 1rem; }
                    .event-card a { padding: 6px 12px; font-size: 0.85rem; }
                }
            `}</style>
        </>
    );
}
