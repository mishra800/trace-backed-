import React, { useState, useEffect } from 'react';
import { registerUser, loginUser, isOfficialEmail, getLastRegistrationData, saveLastRegistrationData, clearLastRegistrationData } from '../utils/userAuth';
import './CertAuthModal.css';

export default function CertAuthModal({ isOpen, onClose, course, onSuccess }) {
  const [view, setView] = useState('select'); // 'select' | 'login' | 'signup' | 'thankyou'
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Sign Up form state
  const [fullName, setFullName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const resetFormFields = () => {
    setFullName('');
    setSignUpEmail('');
    setContactNumber('');
    setCompanyName('');
    setSignUpPassword('');
    setLoginEmail('');
    setLoginPassword('');
    clearLastRegistrationData();
  };

  useEffect(() => {
    if (isOpen) {
      resetFormFields();
      setErrorMsg('');
      setSuccessMsg('');
    }
  }, [isOpen]);

  const updateSignUpField = (field, value) => {
    if (field === 'fullName') setFullName(value);
    if (field === 'signUpEmail') setSignUpEmail(value);
    if (field === 'contactNumber') setContactNumber(value);
    if (field === 'companyName') setCompanyName(value);
    if (field === 'signUpPassword') setSignUpPassword(value);
  };

  if (!isOpen) return null;

  const handleClose = () => {
    setErrorMsg('');
    setSuccessMsg('');
    setView('select');
    resetFormFields();
    onClose();
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!loginEmail || !loginPassword) {
      setErrorMsg('Please enter both Official Email ID and Password.');
      return;
    }

    const res = loginUser({ email: loginEmail, password: loginPassword });
    if (!res.success) {
      setErrorMsg(res.message);
      return;
    }

    // Success login -> redirect to Zoho Desk signin portal
    if (onSuccess) onSuccess(res.user);
    resetFormFields();
    handleClose();
    window.location.href = 'https://tracenetwork.zohodesk.in/portal/en/signin';
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName || !signUpEmail || !contactNumber || !companyName || !signUpPassword) {
      setErrorMsg('All fields are mandatory. Please fill in Full Name, Official Email ID, Contact Number, Company Name, and Password.');
      return;
    }

    if (!isOfficialEmail(signUpEmail)) {
      setErrorMsg('Please enter an Official Corporate Email ID. Personal webmail domains (like @gmail.com) are not allowed.');
      return;
    }

    const res = registerUser({
      fullName,
      email: signUpEmail,
      phone: contactNumber,
      company: companyName,
      password: signUpPassword
    });

    if (!res.success) {
      if (res.isPending || res.isExisting) {
        setSuccessMsg(res.message);
        setView('thankyou');
        resetFormFields();
        return;
      } else {
        setErrorMsg(res.message);
        return;
      }
    }

    // Clear form state & localStorage preview data upon submission
    resetFormFields();

    // Show Thank You view only
    setSuccessMsg(res.message || 'Thank you for submitting your details- Trace team shortly contact you.');
    setView('thankyou');
  };

  return (
    <div className="cert-auth-overlay">
      <div className="cert-auth-modal">
        <button className="cert-auth-modal__close" onClick={handleClose} title="Close">
          <i className="fas fa-times"></i>
        </button>

        {/* Brand Banner */}
        <div className="cert-auth-modal__header">
          <div className="cert-auth-badge">
            <i className="fas fa-shield-alt"></i> Trace Network Academy
          </div>
        </div>

        {errorMsg && (
          <div className="cert-auth-alert error">
            <i className="fas fa-exclamation-circle"></i> {errorMsg}
          </div>
        )}

        {/* ── VIEW 1: SELECT (LOGIN or SIGN UP) ── */}
        {view === 'select' && (
          <div className="cert-auth-body select-view">
            <h2 className="cert-auth-title">Access Certification Details</h2>
            <p className="cert-auth-sub">
              To view curriculum modules, course materials, and training schedules, please sign in or register your account.
            </p>

            <div className="cert-auth-btn-group">
              <button
                className="cert-auth-btn primary-btn"
                onClick={() => { setErrorMsg(''); setView('login'); }}
              >
                <i className="fas fa-sign-in-alt"></i> Login
              </button>
              <button
                className="cert-auth-btn secondary-btn"
                onClick={() => { setErrorMsg(''); setView('signup'); }}
              >
                <i className="fas fa-user-plus"></i> Sign Up
              </button>
            </div>
            <p className="cert-auth-footnote">
              New User? Click <strong>Sign Up</strong> to create an account.<br />
              Existing User? Click <strong>Login</strong> to access your account.
            </p>
          </div>
        )}

        {/* ── VIEW 2: LOGIN ── */}
        {view === 'login' && (
          <div className="cert-auth-body form-view">
            <h2 className="cert-auth-title">User Login</h2>
            <p className="cert-auth-sub">Enter your registered official email and password to log in.</p>

            <form onSubmit={handleLoginSubmit} className="cert-auth-form">
              <div className="cert-form-group">
                <label>Official Email ID <span className="req">*</span></label>
                <div className="cert-input-icon">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="e.g. name@company.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="cert-form-group">
                <label>Password <span className="req">*</span></label>
                <div className="cert-input-icon">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="cert-auth-submit-btn">
                <i className="fas fa-sign-in-alt"></i> Log In &amp; Access Details
              </button>
            </form>

            <div className="cert-auth-switch">
              Don't have an account?{' '}
              <button onClick={() => { setErrorMsg(''); setView('signup'); }}>Sign Up</button>
            </div>
          </div>
        )}

        {/* ── VIEW 3: SIGN UP ── */}
        {view === 'signup' && (
          <div className="cert-auth-body form-view">
            <h2 className="cert-auth-title">Create Account (Sign Up)</h2>
            <p className="cert-auth-sub">Fill in your details to register for certification access. All fields are mandatory.</p>

            <form onSubmit={handleSignUpSubmit} className="cert-auth-form">
              <div className="cert-form-group">
                <label>Full Name <span className="req">*</span></label>
                <div className="cert-input-icon">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => updateSignUpField('fullName', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="cert-form-group">
                <label>Official Email ID <span className="req">*</span></label>
                <div className="cert-input-icon">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Official Email ID (e.g. name@company.com)"
                    value={signUpEmail}
                    onChange={(e) => updateSignUpField('signUpEmail', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="cert-form-row">
                <div className="cert-form-group">
                  <label>Contact Number <span className="req">*</span></label>
                  <div className="cert-input-icon">
                    <i className="fas fa-phone"></i>
                    <input
                      type="tel"
                      placeholder="Contact Number"
                      value={contactNumber}
                      onChange={(e) => updateSignUpField('contactNumber', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="cert-form-group">
                  <label>Company Name <span className="req">*</span></label>
                  <div className="cert-input-icon">
                    <i className="fas fa-building"></i>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={companyName}
                      onChange={(e) => updateSignUpField('companyName', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="cert-form-group">
                <label>Set Password <span className="req">*</span></label>
                <div className="cert-input-icon">
                  <i className="fas fa-key"></i>
                  <input
                    type="password"
                    placeholder="Create Password"
                    value={signUpPassword}
                    onChange={(e) => updateSignUpField('signUpPassword', e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="cert-auth-submit-btn">
                <i className="fas fa-check-circle"></i> Submit Details
              </button>
            </form>

            <div className="cert-auth-switch">
              Existing user?{' '}
              <button onClick={() => { setErrorMsg(''); setView('login'); }}>Log in</button>
            </div>
          </div>
        )}

        {/* ── VIEW 4: THANK YOU CONFIRMATION ── */}
        {view === 'thankyou' && (
          <div className="cert-auth-body thankyou-view">
            <div className="thankyou-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2 className="cert-auth-title">Thank You!</h2>
            <p className="thankyou-msg">{successMsg}</p>

            <button className="cert-auth-submit-btn" onClick={handleClose}>
              <i className="fas fa-check"></i> Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
