import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { blogAPI } from '../../services/api';
import SEO from '../../components/SEO';
import './AdminBlogs.css';

// Derive base URL for /uploads image paths.
// Production: VITE_API_URL is a full https URL — strip /api suffix.
// Local dev:  VITE_API_URL is /api (Vite proxy) — use '' so /uploads stays relative.
const _apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_BASE_URL = _apiUrl.startsWith('http') ? _apiUrl.replace(/\/api$/, '') : '';

function getBlogImage(blog) {
    if (blog.image1) {
        return blog.image1.startsWith('http') || blog.image1.startsWith('data:') ? blog.image1 : `${API_BASE_URL}${blog.image1}`;
    }
    if (blog.image1_url) return blog.image1_url;
    if (blog.hero_image_link) return blog.hero_image_link;
    return null;
}

// Strip HTML tags and decode entities for plain-text previews
function stripHtml(html) {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

export default function AdminBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('adminToken')) {
            navigate('/admin');
        }
        fetchBlogs();
    }, [navigate]);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const data = await blogAPI.getAll();
            setBlogs(data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog? This action cannot be undone.')) {
            try {
                await blogAPI.delete(id);
                fetchBlogs();
            } catch (error) {
                console.error('Error deleting blog:', error);
                alert('Failed to delete blog');
            }
        }
    };

    const filteredBlogs = blogs
        .filter(blog => 
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.content.toLowerCase().includes(searchTerm.toLowerCase())
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
                title="Admin Blogs Management | Trace Network & Engineering"
                description="Manage blog posts, articles, and content for Trace Network & Engineering website."
                keywords="admin blogs, blog management, content management, trace network blogs"
            />
            {/* Header */}
            <header className="admin-blogs-header">
                <div className="header-content">
                    <div className="header-left">
                        <div className="page-icon">
                            <i className="fas fa-blog"></i>
                        </div>
                        <div className="page-title-section">
                            <h1 className="page-title" style={{ color: '#1a202c' }}>Manage Blogs</h1>
                            <p className="page-subtitle" style={{ color: '#718096' }}>
                                {blogs.length} {blogs.length === 1 ? 'blog post' : 'blog posts'} total
                            </p>
                        </div>
                    </div>
                    <div className="header-actions">
                        <Link to="/admin/dashboard" className="btn btn-secondary">
                            <i className="fas fa-arrow-left"></i>
                            <span>Back to Dashboard</span>
                        </Link>
                        <Link to="/admin/blogs/create" className="btn btn-primary">
                            <i className="fas fa-plus"></i>
                            <span>Add New Blog</span>
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
                                placeholder="Search blogs by title or content..."
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
                                <i className="fas fa-file-alt"></i>
                            </div>
                            <div className="stat-info">
                                <h3>{blogs.length}</h3>
                                <p>Total Blogs</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-calendar-check"></i>
                            </div>
                            <div className="stat-info">
                                <h3>{blogs.filter(b => new Date(b.created_at) > new Date(Date.now() - 30*24*60*60*1000)).length}</h3>
                                <p>This Month</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-search"></i>
                            </div>
                            <div className="stat-info">
                                <h3>{filteredBlogs.length}</h3>
                                <p>Search Results</p>
                            </div>
                        </div>
                    </div>

                    {/* Blogs Grid/List */}
                    {loading ? (
                        <div className="loading-state">
                            <div className="spinner"></div>
                            <p>Loading blogs...</p>
                        </div>
                    ) : filteredBlogs.length > 0 ? (
                        <div className="blogs-grid">
                            {filteredBlogs.map((blog, index) => (
                                <div key={blog.id} className="blog-card">
                                    <div className="blog-card-header">
                                        <div className="blog-number">#{index + 1}</div>
                                        <div className="blog-date">
                                            <i className="fas fa-calendar"></i>
                                            {new Date(blog.created_at).toLocaleDateString('en-US', { 
                                                month: 'short', 
                                                day: 'numeric', 
                                                year: 'numeric' 
                                            })}
                                        </div>
                                    </div>
                                    
                                    {getBlogImage(blog) && (
                                        <div className="blog-image">
                                            <img loading="lazy" 
                                                src={getBlogImage(blog)} 
                                                alt={blog.title}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    )}
                                    
                                    <div className="blog-card-body">
                                        <h3 className="blog-title">{blog.title}</h3>
                                        <p className="blog-excerpt">
                                            {stripHtml(blog.content).substring(0, 120)}...
                                        </p>
                                    </div>
                                    
                                    <div className="blog-card-footer">
                                        <Link 
                                            to={`/admin/blogs/edit/${blog.id}`} 
                                            className="btn-action btn-edit"
                                        >
                                            <i className="fas fa-edit"></i>
                                            <span>Edit</span>
                                        </Link>
                                        <button 
                                            onClick={() => handleDelete(blog.id)} 
                                            className="btn-action btn-delete"
                                        >
                                            <i className="fas fa-trash"></i>
                                            <span>Delete</span>
                                        </button>
                                        <Link 
                                            to={`/view-blog/${blog.slug || blog.id}`}
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
                                <i className="fas fa-inbox"></i>
                            </div>
                            <h3>No blogs found</h3>
                            <p>
                                {searchTerm 
                                    ? `No blogs match your search "${searchTerm}"`
                                    : "You haven't created any blogs yet. Start by adding your first blog post!"
                                }
                            </p>
                            {!searchTerm && (
                                <Link to="/admin/blogs/create" className="btn btn-primary">
                                    <i className="fas fa-plus"></i>
                                    <span>Create Your First Blog</span>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
