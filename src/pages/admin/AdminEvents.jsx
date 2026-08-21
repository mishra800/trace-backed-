import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { eventAPI } from '../../services/api';
import SEO from '../../components/SEO';
import './AdminEvents.css';

// Derive base URL for /uploads image paths.
// Production: VITE_API_URL is a full https URL — strip /api suffix.
// Local dev:  VITE_API_URL is /api (Vite proxy) — use '' so /uploads stays relative.
const _apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_BASE_URL = _apiUrl.startsWith('http') ? _apiUrl.replace(/\/api$/, '') : '';

function getEventImage(event) {
    if (event.image) {
        return event.image.startsWith('http') || event.image.startsWith('data:') ? event.image : `${API_BASE_URL}${event.image}`;
    }
    if (event.image_path) return event.image_path;
    return null;
}

export default function AdminEvents() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('adminToken')) {
            navigate('/admin');
        }
        fetchEvents();
    }, [navigate]);

    const fetchEvents = async () => {
        try {
            setLoading(true);
            const data = await eventAPI.getAll();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this event? This action cannot be undone.')) {
            try {
                await eventAPI.delete(id);
                fetchEvents();
            } catch (error) {
                console.error('Error deleting event:', error);
                alert('Failed to delete event');
            }
        }
    };

    const filteredEvents = events
        .filter(event => 
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (event.description && event.description.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .sort((a, b) => {
            if (sortBy === 'newest') {
                return new Date(b.created_at || b.id) - new Date(a.created_at || a.id);
            } else if (sortBy === 'oldest') {
                return new Date(a.created_at || a.id) - new Date(b.created_at || b.id);
            } else if (sortBy === 'title') {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });

    return (
        <div className="admin-events-page">
            <SEO
                title="Admin Events Management | Trace Network & Engineering"
                description="Manage events, webinars, workshops, and training sessions for Trace Network & Engineering."
                keywords="admin events, event management, webinars, workshops, trace network events"
            />
            {/* Header */}
            <header className="admin-events-header">
                <div className="header-content">
                    <div className="header-left">
                        <div className="page-icon">
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <div className="page-title-section">
                            <h1 className="page-title" style={{ color: '#1a202c' }}>Manage Events</h1>
                            <p className="page-subtitle" style={{ color: '#718096' }}>
                                {events.length} {events.length === 1 ? 'event' : 'events'} total
                            </p>
                        </div>
                    </div>
                    <div className="header-actions">
                        <Link to="/admin/dashboard" className="btn btn-secondary">
                            <i className="fas fa-arrow-left"></i>
                            <span>Back to Dashboard</span>
                        </Link>
                        <Link to="/admin/events/create" className="btn btn-primary">
                            <i className="fas fa-plus"></i>
                            <span>Add New Event</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="admin-events-main">
                <div className="events-container">
                    {/* Filters Section */}
                    <div className="filters-section">
                        <div className="search-box">
                            <i className="fas fa-search"></i>
                            <input
                                type="text"
                                placeholder="Search events by title or description..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {searchTerm && (
                                <button 
                                    className="clear-search"
                                    onClick={() => setSearchTerm('')}
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            )}
                        </div>
                        <div className="sort-box">
                            <i className="fas fa-sort"></i>
                            <select 
                                value={sortBy} 
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="title">Title (A-Z)</option>
                            </select>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="stats-cards">
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-calendar-check"></i>
                            </div>
                            <div className="stat-info">
                                <h3>{events.length}</h3>
                                <p>Total Events</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className="stat-info">
                                <h3>{events.filter(e => new Date(e.created_at) > new Date(Date.now() - 30*24*60*60*1000)).length}</h3>
                                <p>This Month</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-search"></i>
                            </div>
                            <div className="stat-info">
                                <h3>{filteredEvents.length}</h3>
                                <p>Search Results</p>
                            </div>
                        </div>
                    </div>

                    {/* Events Grid */}
                    {loading ? (
                        <div className="loading-state">
                            <div className="spinner"></div>
                            <p>Loading events...</p>
                        </div>
                    ) : filteredEvents.length > 0 ? (
                        <div className="events-grid">
                            {filteredEvents.map((event, index) => (
                                <div key={event.id} className="event-card">
                                    <div className="event-card-header">
                                        <div className="event-number">#{index + 1}</div>
                                        <div className="event-badge">
                                            <i className="fas fa-calendar"></i>
                                            Event
                                        </div>
                                    </div>
                                    
                                    {getEventImage(event) && (
                                        <div className="event-image">
                                            <img loading="lazy" 
                                                src={getEventImage(event)} 
                                                alt={event.title}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    )}
                                    
                                    <div className="event-card-body">
                                        <h3 className="event-title">{event.title}</h3>
                                        {event.description && (
                                            <p className="event-description">
                                                {event.description.substring(0, 100)}...
                                            </p>
                                        )}
                                        {event.event_date && (
                                            <div className="event-date">
                                                <i className="fas fa-calendar-day"></i>
                                                <span>{new Date(event.event_date).toLocaleDateString('en-US', { 
                                                    month: 'long', 
                                                    day: 'numeric', 
                                                    year: 'numeric' 
                                                })}</span>
                                            </div>
                                        )}
                                        {event.location && (
                                            <div className="event-location">
                                                <i className="fas fa-map-marker-alt"></i>
                                                <span>{event.location}</span>
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="event-card-footer">
                                        <Link 
                                            to={`/admin/events/edit/${event.id}`} 
                                            className="btn-action btn-edit"
                                        >
                                            <i className="fas fa-edit"></i>
                                            <span>Edit</span>
                                        </Link>
                                        <button 
                                            onClick={() => handleDelete(event.id)} 
                                            className="btn-action btn-delete"
                                        >
                                            <i className="fas fa-trash"></i>
                                            <span>Delete</span>
                                        </button>
                                        <Link 
                                            to={`/view-event/${event.slug || event.id}`}
                                            target="_blank"
                                            className="btn-action btn-view"
                                        >
                                            <i className="fas fa-eye"></i>
                                            <span>View</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            <div className="empty-icon">
                                <i className="fas fa-calendar-times"></i>
                            </div>
                            <h3>No events found</h3>
                            <p>
                                {searchTerm 
                                    ? `No events match your search "${searchTerm}"`
                                    : "You haven't created any events yet. Start by scheduling your first event!"
                                }
                            </p>
                            {!searchTerm && (
                                <Link to="/admin/events/create" className="btn btn-primary">
                                    <i className="fas fa-plus"></i>
                                    <span>Create Your First Event</span>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
