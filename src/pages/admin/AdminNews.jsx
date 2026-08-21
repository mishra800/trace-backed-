import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { newsAPI } from '../../services/api';
import SEO from '../../components/SEO';
import './AdminBlogs.css'; // Reuse dashboard blogs list styles

const _apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_BASE_URL = _apiUrl.startsWith('http') ? _apiUrl.replace(/\/api$/, '') : '';

function getNewsImage(item) {
    if (item.image) {
        return item.image.startsWith('http') || item.image.startsWith('data:') ? item.image : `${API_BASE_URL}${item.image}`;
    }
    return null;
}

export default function AdminNews() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('adminToken')) {
            navigate('/admin');
        }
        fetchNews();
    }, [navigate]);

    const fetchNews = async () => {
        try {
            setLoading(true);
            const data = await newsAPI.getAll();
            setNews(data);
        } catch (error) {
            console.error('Error fetching news:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this news article? This action cannot be undone.')) {
            try {
                await newsAPI.delete(id);
                fetchNews();
            } catch (error) {
                console.error('Error deleting news:', error);
                alert('Failed to delete news article');
            }
        }
    };

    const filteredNews = news
        .filter(item => 
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.tag && item.tag.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .sort((a, b) => {
            if (sortBy === 'newest') {
                return new Date(b.created_at) - new Date(a.created_at);
            } else if (sortBy === 'oldest') {
                return new Date(a.created_at) - new Date(b.created_at);
            } else if (sortBy === 'title') {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });

    return (
        <div className="admin-blogs-page">
            <SEO
                title="Admin News Management | Trace Network & Engineering"
                description="Manage news articles, updates, and press releases for the website."
                keywords="admin news, press releases, website management, trace network news"
            />
            {/* Header */}
            <header className="admin-blogs-header">
                <div className="header-content">
                    <div className="header-left">
                        <div className="page-icon">
                            <i className="fas fa-newspaper"></i>
                        </div>
                        <div className="page-title-section">
                            <h1 className="page-title" style={{ color: '#1a202c' }}>Manage News</h1>
                            <p className="page-subtitle" style={{ color: '#718096' }}>
                                {news.length} {news.length === 1 ? 'news article' : 'news articles'} total
                            </p>
                        </div>
                    </div>
                    <div className="header-actions">
                        <Link to="/admin/dashboard" className="btn btn-secondary">
                            <i className="fas fa-arrow-left"></i>
                            <span>Back to Dashboard</span>
                        </Link>
                        <Link to="/admin/news/create" className="btn btn-primary">
                            <i className="fas fa-plus"></i>
                            <span>Add New News</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="admin-blogs-main">
                <div className="blogs-container">
                    {/* Filters Section */}
                    <div className="filters-section">
                        <div className="search-box">
                            <i className="fas fa-search"></i>
                            <input
                                type="text"
                                placeholder="Search news by title or publisher tag..."
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
                            <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 100%)' }}>
                                <i className="fas fa-newspaper"></i>
                            </div>
                            <div className="stat-info">
                                <h3>{news.length}</h3>
                                <p>Total News</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #38a169 0%, #2f855a 100%)' }}>
                                <i className="fas fa-calendar-check"></i>
                            </div>
                            <div className="stat-info">
                                <h3>{news.filter(n => new Date(n.created_at) > new Date(Date.now() - 30*24*60*60*1000)).length}</h3>
                                <p>This Month</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #d69e2e 0%, #b7791f 100%)' }}>
                                <i className="fas fa-search"></i>
                            </div>
                            <div className="stat-info">
                                <h3>{filteredNews.length}</h3>
                                <p>Search Results</p>
                            </div>
                        </div>
                    </div>

                    {/* News Grid */}
                    {loading ? (
                        <div className="loading-state">
                            <div className="spinner"></div>
                            <p>Loading news articles...</p>
                        </div>
                    ) : filteredNews.length > 0 ? (
                        <div className="blogs-grid">
                            {filteredNews.map((item, index) => (
                                <div key={item.id} className="blog-card">
                                    <div className="blog-card-header" style={{ background: 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 100%)' }}>
                                        <div className="blog-number">#{index + 1}</div>
                                        <div className="blog-date">
                                            <i className="fas fa-calendar"></i>
                                            {new Date(item.created_at).toLocaleDateString('en-US', { 
                                                month: 'short', 
                                                day: 'numeric', 
                                                year: 'numeric' 
                                            })}
                                        </div>
                                    </div>
                                    
                                    {getNewsImage(item) ? (
                                        <div className="blog-image">
                                            <img loading="lazy" 
                                                src={getNewsImage(item)} 
                                                alt={item.title}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <div className="blog-image" style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#edf2f7' }}>
                                            <i className="fas fa-newspaper" style={{ fontSize: '3rem', color: '#cbd5e0' }}></i>
                                        </div>
                                    )}
                                    
                                    <div className="blog-card-body">
                                        <span style={{ 
                                            display: 'inline-block',
                                            background: '#ebf8ff',
                                            color: '#2b6cb0',
                                            padding: '2px 8px',
                                            borderRadius: '4px',
                                            fontSize: '11px',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            marginBottom: '8px'
                                        }}>{item.tag || 'Press Release'}</span>
                                        <h3 className="blog-title" style={{ fontSize: '1.1rem' }}>{item.title}</h3>
                                    </div>
                                    
                                    <div className="blog-card-footer">
                                        <Link 
                                            to={`/admin/news/edit/${item.id}`} 
                                            className="btn-action btn-edit"
                                        >
                                            <i className="fas fa-edit"></i>
                                            <span>Edit</span>
                                        </Link>
                                        <button 
                                            onClick={() => handleDelete(item.id)} 
                                            className="btn-action btn-delete"
                                        >
                                            <i className="fas fa-trash"></i>
                                            <span>Delete</span>
                                        </button>
                                        {item.link && (
                                            <a 
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-action btn-view"
                                                style={{ background: '#3182ce' }}
                                            >
                                                <i className="fas fa-external-link-alt"></i>
                                                <span>Link</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            <div className="empty-icon" style={{ background: 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 100%)' }}>
                                <i className="fas fa-inbox"></i>
                            </div>
                            <h3>No news articles found</h3>
                            <p>
                                {searchTerm 
                                    ? `No news articles match your search "${searchTerm}"`
                                    : "You haven't created any news articles yet. Start by adding your first press release!"
                                }
                            </p>
                            {!searchTerm && (
                                <Link to="/admin/news/create" className="btn btn-primary">
                                    <i className="fas fa-plus"></i>
                                    <span>Create News Article</span>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
