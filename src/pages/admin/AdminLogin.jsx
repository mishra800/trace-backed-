import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { authAPI } from '../../services/api';
import SEO from '../../components/SEO';
import './AdminLogin.css';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isWarmingUp, setIsWarmingUp] = useState(false);
    const navigate = useNavigate();
    const { login, isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/admin/dashboard');
        }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        // Ping backend to wake it up in case it's on a Render cold start
        const wakeUpBackend = async () => {
            setIsWarmingUp(true);
            try {
                await authAPI.ping();
            } catch (err) {
                console.log('Pre-warm ping finished/failed:', err);
            } finally {
                setIsWarmingUp(false);
            }
        };
        wakeUpBackend();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const result = await login({ username, password });
            if (result.success) {
                navigate('/admin/dashboard');
            } else {
                setError(result.error || 'Login failed. Please check your credentials.');
            }
        } catch (err) {
            setError('Server error. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-login-page">
            <SEO
                title="Admin Login | Trace Network & Engineering"
                description="Secure admin login portal for Trace Network & Engineering website administration."
                keywords="admin login, secure login, website administration, trace network admin"
            />
            {/* Animated Background */}
            <div className="login-background">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
                <div className="floating-shape shape-4"></div>
            </div>

            {/* Login Container */}
            <div className="login-wrapper">
                <div className="login-card">
                    {/* Logo Section */}
                    <div className="login-header">
                        <div className="logo-container">
                            <Link to="/" title="Go to website home">
                                <img loading="lazy" src="/assets/images/logoo.png" alt="Trace Network" />
                            </Link>
                        </div>
                        <h1 className="login-title">Welcome Back</h1>
                        <p className="login-subtitle">Sign in to access your dashboard</p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="login-form">
                        {/* Username Field */}
                        <div className="form-group">
                            <label htmlFor="username" className="form-label">
                                <i className="fas fa-user"></i>
                                Username
                            </label>
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    id="username"
                                    className="form-input"
                                    placeholder="admin"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    disabled={loading}
                                    autoComplete="username"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">
                                <i className="fas fa-lock"></i>
                                Password
                            </label>
                            <div className="input-wrapper">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="form-input"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    disabled={loading}
                                    autoComplete="current-password"
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                    disabled={loading}
                                >
                                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </button>
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="error-message">
                                <i className="fas fa-exclamation-circle"></i>
                                <span>{error}</span>
                            </div>
                        )}

                        {/* Warming Up Indicator */}
                        {isWarmingUp && (
                            <div className="info-message">
                                <i className="fas fa-circle-notch fa-spin"></i>
                                <span>Connecting to server... Warming up backend (takes up to 1 minute).</span>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button type="submit" className="login-button" disabled={loading}>
                            {loading ? (
                                <>
                                    <i className="fas fa-spinner fa-spin"></i>
                                    <span>Signing in...</span>
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-sign-in-alt"></i>
                                    <span>Sign In</span>
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="login-footer">
                        <Link to="/" className="back-link">
                            <i className="fas fa-arrow-left"></i>
                            <span>Back to Website</span>
                        </Link>
                    </div>
                </div>

                {/* Info Card */}
                <div className="info-card">
                    <div className="info-icon">
                        <i className="fas fa-shield-alt"></i>
                    </div>
                    <h3>Secure Access</h3>
                    <p>Your credentials are encrypted and protected with industry-standard security measures.</p>
                    <div className="features-list">
                        <div className="feature-item">
                            <i className="fas fa-check-circle"></i>
                            <span>256-bit Encryption</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-check-circle"></i>
                            <span>Secure Authentication</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-check-circle"></i>
                            <span>Protected Dashboard</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
