import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import SEO from '../../components/SEO';
import {
  getRegisteredUsers,
  approveUser,
  toggleUserAccess,
  deleteUser,
  resetUserPassword
} from '../../utils/userAuth';
import './AdminUsers.css';

export default function AdminUsers() {
  const navigate = useNavigate();
  const { admin, logout } = useAuth();
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUserForReset, setSelectedUserForReset] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [actionMsg, setActionMsg] = useState('');
  const [showPasswords, setShowPasswords] = useState({});

  useEffect(() => {
    if (!localStorage.getItem('adminToken')) {
      navigate('/admin');
    } else {
      loadUsers();
    }
  }, [navigate]);

  const loadUsers = () => {
    const data = getRegisteredUsers();
    setUsers(data);
  };

  const handleLogout = () => {
    logout();
  };

  const togglePasswordVisibility = (userId) => {
    setShowPasswords((prev) => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  const handleApprove = (userId, currentName) => {
    const updated = approveUser(userId);
    setUsers(updated);
    setActionMsg(`Approved registration request for ${currentName}. User status is now Active / Allowed.`);
    setTimeout(() => setActionMsg(''), 4000);
  };

  const handleToggleStatus = (userId, currentName) => {
    const updated = toggleUserAccess(userId);
    setUsers(updated);
    const updatedUser = updated.find((u) => u.id === userId);
    const statusText = updatedUser?.status === 'active' ? 'Active / Allowed' : 'Deactivated';
    setActionMsg(`Updated access status for ${currentName} to "${statusText}".`);
    setTimeout(() => setActionMsg(''), 4000);
  };

  const handleDelete = (userId, currentName) => {
    if (window.confirm(`Are you sure you want to delete user account "${currentName}"?`)) {
      const updated = deleteUser(userId);
      setUsers(updated);
      setActionMsg(`Deleted user account ${currentName}.`);
      setTimeout(() => setActionMsg(''), 4000);
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!selectedUserForReset || !newPassword) return;

    resetUserPassword(selectedUserForReset.id, newPassword);
    loadUsers();
    setActionMsg(`Password successfully reset for ${selectedUserForReset.fullName}.`);
    setSelectedUserForReset(null);
    setNewPassword('');
    setTimeout(() => setActionMsg(''), 4000);
  };

  const filteredUsers = users.filter((u) => {
    const term = searchTerm.toLowerCase();
    return (
      (u.fullName || '').toLowerCase().includes(term) ||
      (u.email || '').toLowerCase().includes(term) ||
      (u.company || '').toLowerCase().includes(term) ||
      (u.phone || '').includes(term)
    );
  });

  return (
    <div className="admin-users-page">
      <SEO
        title="Manage Certification Users | Admin Dashboard"
        description="Admin panel to manage user accounts, accept registration requests, and view credentials."
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
            <div className="admin-user">
              <div className="user-avatar">
                <i className="fas fa-user-shield"></i>
              </div>
              <div className="user-info">
                <span className="user-name">{admin?.username || 'Admin'}</span>
                <span className="user-role">Administrator</span>
              </div>
            </div>
            <Link to="/admin/dashboard" className="change-pwd-btn">
              <i className="fas fa-arrow-left"></i>
              <span>Dashboard</span>
            </Link>
            <button className="logout-btn" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="admin-main">
        <div className="admin-container">
          <div className="admin-users-top">
            <div>
              <h1 className="admin-users-title">
                <i className="fas fa-users-cog"></i> Certification Registered Users
              </h1>
              <p className="admin-users-sub">
                Review new user registration requests, approve login access, view passwords, and manage permissions.
              </p>
            </div>

            <div className="admin-users-search">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search user, email, company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {actionMsg && (
            <div className="admin-users-alert">
              <i className="fas fa-check-circle"></i> {actionMsg}
            </div>
          )}

          {/* Users Table */}
          <div className="admin-users-card">
            <div className="table-responsive">
              <table className="admin-users-table">
                <thead>
                  <tr>
                    <th>User Details</th>
                    <th>Official Email ID</th>
                    <th>Contact &amp; Company</th>
                    <th>Password</th>
                    <th>Access Status</th>
                    <th>Registered Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="no-users">
                        No registered users found.
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map((user) => {
                      const isRevealed = showPasswords[user.id];
                      return (
                        <tr key={user.id} className={user.status === 'deactivated' ? 'row-deactivated' : user.status === 'pending' ? 'row-pending' : ''}>
                          <td>
                            <div className="user-cell-name">{user.fullName}</div>
                            <span className="user-cell-id">ID: {user.id}</span>
                          </td>
                          <td>
                            <a href={`mailto:${user.email}`} className="user-cell-email">
                              <i className="fas fa-envelope"></i> {user.email}
                            </a>
                          </td>
                          <td>
                            <div className="user-cell-company"><i className="fas fa-building"></i> {user.company || 'N/A'}</div>
                            <div className="user-cell-phone"><i className="fas fa-phone"></i> {user.phone || 'N/A'}</div>
                          </td>
                          <td>
                            <div className="password-cell-box">
                              <span className={`password-display ${isRevealed ? 'revealed' : 'masked'}`}>
                                <i className={`fas ${isRevealed ? 'fa-key' : 'fa-lock'}`}></i>{' '}
                                {isRevealed ? (user.passwordPlain || 'Trace@2026') : '••••••••'}
                              </span>
                              <button
                                type="button"
                                className="pwd-toggle-btn"
                                onClick={() => togglePasswordVisibility(user.id)}
                                title={isRevealed ? 'Hide Password' : 'Show Password'}
                              >
                                <i className={`fas ${isRevealed ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                              </button>
                            </div>
                          </td>
                          <td>
                            <span className={`status-badge ${user.status}`}>
                              <i className={`fas ${user.status === 'active' ? 'fa-check-circle' : user.status === 'pending' ? 'fa-hourglass-half' : 'fa-ban'}`}></i>
                              {user.status === 'active' ? 'Active / Allowed' : user.status === 'pending' ? 'Pending Admin Approval' : 'Deactivated'}
                            </span>
                          </td>
                          <td className="user-cell-date">
                            {new Date(user.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </td>
                          <td>
                            <div className="admin-user-actions">
                              {user.status === 'pending' && (
                                <button
                                  className="action-btn-approve"
                                  onClick={() => handleApprove(user.id, user.fullName)}
                                  title="Approve User Registration"
                                >
                                  <i className="fas fa-check-double"></i> Accept &amp; Approve
                                </button>
                              )}

                              <button
                                className={`action-btn-toggle ${user.status}`}
                                onClick={() => handleToggleStatus(user.id, user.fullName)}
                                title={user.status === 'active' ? 'Deactivate Account' : 'Activate Account'}
                              >
                                <i className={`fas ${user.status === 'active' ? 'fa-toggle-on' : 'fa-toggle-off'}`}></i>
                                {user.status === 'active' ? ' Deactivate' : ' Activate'}
                              </button>

                              <button
                                className="action-btn-reset"
                                onClick={() => { setSelectedUserForReset(user); setNewPassword(''); }}
                                title="Reset User Password"
                              >
                                <i className="fas fa-key"></i> Reset Pwd
                              </button>

                              <button
                                className="action-btn-delete"
                                onClick={() => handleDelete(user.id, user.fullName)}
                                title="Delete Account"
                              >
                                <i className="fas fa-trash-alt"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Password Reset Modal */}
      {selectedUserForReset && (
        <div className="admin-reset-overlay" onClick={() => setSelectedUserForReset(null)}>
          <div className="admin-reset-modal" onClick={(e) => e.stopPropagation()}>
            <h3><i className="fas fa-key"></i> Reset User Password</h3>
            <p>
              Set a new password for user <strong>{selectedUserForReset.fullName}</strong> ({selectedUserForReset.email}).
            </p>

            <form onSubmit={handleResetPassword}>
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>

              <div className="reset-modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setSelectedUserForReset(null)}>
                  Cancel
                </button>
                <button type="submit" className="btn-save">
                  Save New Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
