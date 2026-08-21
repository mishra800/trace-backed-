import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import SEO from '../../components/SEO';
import './AdminDashboard.css';

export default function AdminDashboard() {
    const navigate = useNavigate();
    const { admin, logout } = useAuth();
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        if (!localStorage.getItem('adminToken')) {
            navigate('/admin');
        }
    }, [navigate]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleLogout = () => {
        logout();
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', { 
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="admin-dashboard">
            <SEO
                title="Admin Dashboard | Trace Network & Engineering"
                description="Admin dashboard for managing content, blogs, events, and website administration."
                keywords="admin dashboard, content management, website administration, trace network admin"
            />
            {/* Header */}
            <header className="admin-header">
                <div className="admin-header-content">
                    <div className="admin-logo">
                        <Link to="/" title="Go to website home">
                            <img loading="lazy" src="/assets/images/logoo.png" alt="Trace Network" />
                        </Link>
                        <span className="admin-badge">Admin Panel</span>
                    </div>
                    <div className="admin-header-right">
                        <div className="admin-time">
                            <div className="time-display">{formatTime(currentTime)}</div>
                            <div className="date-display">{formatDate(currentTime)}</div>
                        </div>
                        <div className="admin-user">
                            <div className="user-avatar">
                                <i className="fas fa-user-shield"></i>
                            </div>
                            <div className="user-info">
                                <span className="user-name">{admin?.username || 'Admin'}</span>
                                <span className="user-role">Administrator</span>
                            </div>
                        </div>
                        <Link to="/admin/change-password" className="change-pwd-btn">
                            <i className="fas fa-key"></i>
                            <span>Change Password</span>
                        </Link>
                        <button className="logout-btn" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="admin-main">
                <div className="admin-container">
                    {/* Welcome Section */}
                    <div className="welcome-section">
                        <div className="welcome-content">
                            <h1 className="welcome-title">
                                Welcome back, <span className="highlight">{admin?.username || 'Admin'}</span>
                            </h1>
                            <p className="welcome-subtitle">
                                Manage your content and monitor your website from this dashboard
                            </p>
                        </div>
                        <div className="welcome-illustration">
                            <div className="floating-icon icon-1">
                                <i className="fas fa-blog"></i>
                            </div>
                            <div className="floating-icon icon-2">
                                <i className="fas fa-calendar-alt"></i>
                            </div>
                            <div className="floating-icon icon-3">
                                <i className="fas fa-chart-line"></i>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="stats-grid">
                        <div className="stat-card stat-primary">
                            <div className="stat-icon">
                                <i className="fas fa-blog"></i>
                            </div>
                            <div className="stat-content">
                                <h3 className="stat-title">Blog Posts</h3>
                                <p className="stat-value">Manage</p>
                                <p className="stat-description">Create, edit, and publish blog posts</p>
                            </div>
                            <div className="stat-trend">
                                <i className="fas fa-arrow-up"></i>
                            </div>
                        </div>

                        <div className="stat-card stat-success">
                            <div className="stat-icon">
                                <i className="fas fa-calendar-alt"></i>
                            </div>
                            <div className="stat-content">
                                <h3 className="stat-title">Events</h3>
                                <p className="stat-value">Manage</p>
                                <p className="stat-description">Schedule and manage events</p>
                            </div>
                            <div className="stat-trend">
                                <i className="fas fa-arrow-up"></i>
                            </div>
                        </div>

                        <div className="stat-card stat-info">
                            <div className="stat-icon">
                                <i className="fas fa-newspaper"></i>
                            </div>
                            <div className="stat-content">
                                <h3 className="stat-title">News & Press</h3>
                                <p className="stat-value">Manage</p>
                                <p className="stat-description">Publish news and press releases</p>
                            </div>
                            <div className="stat-trend">
                                <i className="fas fa-arrow-up"></i>
                            </div>
                        </div>
                    </div>

                    {/* Management Cards */}
                    <div className="management-section">
                        <h2 className="section-title">Content Management</h2>
                        <div className="management-grid">
                            {/* Blogs Card */}
                            <div className="management-card blogs-card">
                                <div className="card-header">
                                    <div className="card-icon">
                                        <i className="fas fa-blog"></i>
                                    </div>
                                    <div className="card-badge">Active</div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Manage Blogs</h3>
                                    <p className="card-description">
                                        Create, edit, and publish blog posts. Share insights and updates with your audience.
                                    </p>
                                    <ul className="card-features">
                                        <li><i className="fas fa-check"></i> Create new posts</li>
                                        <li><i className="fas fa-check"></i> Edit existing content</li>
                                        <li><i className="fas fa-check"></i> Manage categories</li>
                                        <li><i className="fas fa-check"></i> SEO optimization</li>
                                    </ul>
                                </div>
                                <div className="card-footer">
                                    <Link to="/admin/blogs" className="card-btn primary-btn">
                                        <span>Go to Blogs</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>

                            {/* Events Card */}
                            <div className="management-card events-card">
                                <div className="card-header">
                                    <div className="card-icon">
                                        <i className="fas fa-calendar-alt"></i>
                                    </div>
                                    <div className="card-badge">Active</div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Manage Events</h3>
                                    <p className="card-description">
                                        Schedule and manage events, webinars, and workshops. Keep your audience engaged.
                                    </p>
                                    <ul className="card-features">
                                        <li><i className="fas fa-check"></i> Schedule events</li>
                                        <li><i className="fas fa-check"></i> Manage registrations</li>
                                        <li><i className="fas fa-check"></i> Send notifications</li>
                                        <li><i className="fas fa-check"></i> Track attendance</li>
                                    </ul>
                                </div>
                                <div className="card-footer">
                                    <Link to="/admin/events" className="card-btn success-btn">
                                        <span>Go to Events</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>

                            {/* News Card */}
                            <div className="management-card news-card">
                                <div className="card-header" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                                    <div className="card-icon">
                                        <i className="fas fa-newspaper"></i>
                                    </div>
                                    <div className="card-badge">Active</div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Manage News</h3>
                                    <p className="card-description">
                                        Publish press releases, news mentions, and media articles to keep stakeholders informed.
                                    </p>
                                    <ul className="card-features">
                                        <li><i className="fas fa-check"></i> Post media coverage</li>
                                        <li><i className="fas fa-check"></i> Share achievements & milestones</li>
                                        <li><i className="fas fa-check"></i> Redirect to external publishers</li>
                                        <li><i className="fas fa-check"></i> Upload feature banners</li>
                                    </ul>
                                </div>
                                <div className="card-footer">
                                    <Link to="/admin/news" className="card-btn info-btn" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white' }}>
                                        <span>Go to News</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>

                            {/* Certification Users Card */}
                            <div className="management-card users-card">
                                <div className="card-header" style={{ background: 'linear-gradient(135deg, #FF512F 0%, #DD2476 100%)' }}>
                                    <div className="card-icon">
                                        <i className="fas fa-users-cog"></i>
                                    </div>
                                    <div className="card-badge">Active</div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Manage Certification Users</h3>
                                    <p className="card-description">
                                        View registered users, control certification details access, activate/deactivate accounts, and reset user passwords.
                                    </p>
                                    <ul className="card-features">
                                        <li><i className="fas fa-check"></i> View full user registrations</li>
                                        <li><i className="fas fa-check"></i> Toggle access &amp; deactivations</li>
                                        <li><i className="fas fa-check"></i> Delete unauthorized users</li>
                                        <li><i className="fas fa-check"></i> Secure password resets</li>
                                    </ul>
                                </div>
                                <div className="card-footer">
                                    <Link to="/admin/users" className="card-btn primary-btn" style={{ background: 'linear-gradient(135deg, #FF512F 0%, #DD2476 100%)', color: 'white' }}>
                                        <span>Go to User Portal</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="quick-actions-section">
                        <h2 className="section-title">Quick Actions</h2>
                        <div className="quick-actions-grid">
                            <Link to="/admin/users" className="quick-action-card">
                                <div className="quick-action-icon" style={{ color: '#FF512F' }}>
                                    <i className="fas fa-users-cog"></i>
                                </div>
                                <div className="quick-action-content">
                                    <h4>Manage Certification Users</h4>
                                    <p>Control user access &amp; reset passwords</p>
                                </div>
                            </Link>

                            <Link to="/admin/blogs/create" className="quick-action-card">
                                <div className="quick-action-icon">
                                    <i className="fas fa-plus-circle"></i>
                                </div>
                                <div className="quick-action-content">
                                    <h4>New Blog Post</h4>
                                    <p>Create a new blog post</p>
                                </div>
                            </Link>

                            <Link to="/admin/events/create" className="quick-action-card">
                                <div className="quick-action-icon">
                                    <i className="fas fa-calendar-plus"></i>
                                </div>
                                <div className="quick-action-content">
                                    <h4>New Event</h4>
                                    <p>Schedule a new event</p>
                                </div>
                            </Link>

                            <Link to="/admin/news/create" className="quick-action-card">
                                <div className="quick-action-icon">
                                    <i className="fas fa-newspaper"></i>
                                </div>
                                <div className="quick-action-content">
                                    <h4>New News Article</h4>
                                    <p>Publish a news milestone</p>
                                </div>
                            </Link>

                            <Link to="/admin/blogs" className="quick-action-card">
                                <div className="quick-action-icon">
                                    <i className="fas fa-list"></i>
                                </div>
                                <div className="quick-action-content">
                                    <h4>View All Blogs</h4>
                                    <p>Manage existing posts</p>
                                </div>
                            </Link>

                            <Link to="/admin/events" className="quick-action-card">
                                <div className="quick-action-icon">
                                    <i className="fas fa-calendar-check"></i>
                                </div>
                                <div className="quick-action-content">
                                    <h4>View All Events</h4>
                                    <p>Manage scheduled events</p>
                                </div>
                            </Link>

                            <Link to="/admin/news" className="quick-action-card">
                                <div className="quick-action-icon">
                                    <i className="fas fa-list-alt"></i>
                                </div>
                                <div className="quick-action-content">
                                    <h4>View All News</h4>
                                    <p>Manage press releases</p>
                                </div>
                            </Link>

                            <Link to="/admin/change-password" className="quick-action-card">
                                <div className="quick-action-icon">
                                    <i className="fas fa-key"></i>
                                </div>
                                <div className="quick-action-content">
                                    <h4>Change Password</h4>
                                    <p>Update security credentials</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="admin-footer">
                <div className="admin-footer-content">
                    <p>&copy; 2006-{new Date().getFullYear()} Trace Network & Engineering Pvt Ltd. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="/" target="_blank" rel="noopener noreferrer">Visit Website</a>
                        <span>•</span>
                        <a href="/contact-us" target="_blank" rel="noopener noreferrer">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
