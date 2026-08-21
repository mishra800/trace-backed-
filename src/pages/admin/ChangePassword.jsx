import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../../services/api';
import SEO from '../../components/SEO';
import './CreateNews.css'; // Reuse form card container layout

export default function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('adminToken')) {
            navigate('/admin');
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (!currentPassword || !newPassword || !confirmPassword) {
            setError('All fields are required.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('New password and confirm password do not match.');
            return;
        }

        if (newPassword.length < 6) {
            setError('New password must be at least 6 characters long.');
            return;
        }

        setSubmitting(true);
        try {
            await authAPI.changePassword({
                currentPassword,
                newPassword
            });
            setMessage('Password updated successfully! Redirecting back to dashboard...');
            setTimeout(() => {
                navigate('/admin/dashboard');
            }, 2000);
        } catch (err) {
            console.error('Error changing password:', err);
            setError(err.response?.data?.message || 'Failed to update password. Ensure your current password is correct.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <SEO
                title="Change Password | Admin Dashboard | Trace Network"
                description="Change administrator password."
                keywords="change password, security, admin portal, trace network"
                robots="noindex, nofollow"
            />
            <div className="create-news-page">
                {/* Header */}
                <header className="create-news-header">
                    <div className="header-content">
                        <div className="header-left">
                            <div className="page-icon" style={{ background: 'linear-gradient(135deg, #e53e3e 0%, #b83280 100%)', boxShadow: '0 8px 20px rgba(229, 62, 62, 0.3)' }}>
                                <i className="fas fa-key"></i>
                            </div>
                            <div className="page-title-section">
                                <h1 className="page-title">Change Password</h1>
                                <p className="page-subtitle">Update administrator account password</p>
                            </div>
                        </div>
                        <div className="header-actions">
                            <Link to="/admin/dashboard" className="btn btn-secondary" style={{ color: '#e53e3e', borderColor: '#e53e3e' }}>
                                <i className="fas fa-arrow-left"></i>
                                <span>Back to Dashboard</span>
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="create-news-main">
                    <div className="form-container">
                        {/* Form */}
                        <form onSubmit={handleSubmit} className="news-form">
                            <div className="form-header" style={{ background: 'linear-gradient(135deg, #e53e3e 0%, #b83280 100%)' }}>
                                <div className="form-icon">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <div>
                                    <h2>Security Settings</h2>
                                    <p>Enter your passwords below to update your credentials</p>
                                </div>
                            </div>

                            <div className="form-body">
                                {error && (
                                    <div style={{
                                        background: '#fff5f5',
                                        color: '#c53030',
                                        padding: '12px 16px',
                                        borderRadius: '8px',
                                        marginBottom: '20px',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        border: '1px solid #fed7d7',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}>
                                        <i className="fas fa-exclamation-circle"></i>
                                        <span>{error}</span>
                                    </div>
                                )}

                                {message && (
                                    <div style={{
                                        background: '#f0fff4',
                                        color: '#2f855a',
                                        padding: '12px 16px',
                                        borderRadius: '8px',
                                        marginBottom: '20px',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        border: '1px solid #c6f6d5',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}>
                                        <i className="fas fa-check-circle"></i>
                                        <span>{message}</span>
                                    </div>
                                )}

                                {/* Current Password */}
                                <div className="form-group">
                                    <label className="form-label" htmlFor="currentPassword">
                                        <i className="fas fa-lock"></i> Current Password *
                                    </label>
                                    <input
                                        type="password"
                                        id="currentPassword"
                                        className="form-input"
                                        placeholder="Enter current account password"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* New Password */}
                                <div className="form-group">
                                    <label className="form-label" htmlFor="newPassword">
                                        <i className="fas fa-key"></i> New Password *
                                    </label>
                                    <input
                                        type="password"
                                        id="newPassword"
                                        className="form-input"
                                        placeholder="Enter new password (min. 6 characters)"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Confirm Password */}
                                <div className="form-group">
                                    <label className="form-label" htmlFor="confirmPassword">
                                        <i className="fas fa-lock-open"></i> Confirm New Password *
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        className="form-input"
                                        placeholder="Confirm your new password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-footer">
                                <Link to="/admin/dashboard" className="btn btn-cancel">
                                    Cancel
                                </Link>
                                <button type="submit" className="btn btn-submit" style={{ background: 'linear-gradient(135deg, #e53e3e 0%, #b83280 100%)', boxShadow: '0 4px 15px rgba(229, 62, 62, 0.3)' }} disabled={submitting}>
                                    {submitting ? (
                                        <>
                                            <i className="fas fa-spinner fa-spin"></i> Saving...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-save"></i> Change Password
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>

                        {/* Sidebar Info Card */}
                        <aside className="info-card">
                            <div className="info-header">
                                <i className="fas fa-shield-alt" style={{ color: '#e53e3e' }}></i>
                                <h3>Password Rules</h3>
                            </div>
                            <ul className="info-list">
                                <li>
                                    <i className="fas fa-check-circle" style={{ color: '#e53e3e' }}></i>
                                    <span>Password must be at least 6 characters in length.</span>
                                </li>
                                <li>
                                    <i className="fas fa-check-circle" style={{ color: '#e53e3e' }}></i>
                                    <span>Avoid reusing passwords from other systems.</span>
                                </li>
                                <li>
                                    <i className="fas fa-check-circle" style={{ color: '#e53e3e' }}></i>
                                    <span>Updating your password will automatically synchronize to the database.</span>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </main>
            </div>
        </>
    );
}
