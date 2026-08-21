import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../config/api';

export default function ServiceOfferForm({ show, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'VAPT',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (show) {
      setTimeout(() => setAnimate(true), 50);
    } else {
      setAnimate(false);
    }
  }, [show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(API_ENDPOINTS.CONTACT_SERVICE_REQUEST, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          handleClose();
          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: 'VAPT',
            message: ''
          });
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      onClose();
      setSubmitStatus(null);
    }, 300);
  };

  if (!show) return null;

  return (
    <div 
      style={{
        display: 'flex',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 1000000,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: animate ? 1 : 0,
        transition: 'opacity 0.3s ease',
        overflowY: 'auto',
        padding: '20px',
      }}
      onClick={handleClose}
    >
      <div 
        style={{
          background: 'linear-gradient(135deg,#081a2f,#0f2c4d)',
          color: '#fff',
          padding: '35px',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '500px',
          position: 'relative',
          boxShadow: '0 10px 60px rgba(0,150,255,0.3)',
          transform: animate ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
          transition: 'all 0.3s ease',
          margin: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            cursor: 'pointer',
            fontSize: '24px',
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            color: '#fff',
            padding: '5px',
            borderRadius: '50%',
            width: '35px',
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: '0.3s',
          }}
          onMouseEnter={(e) => e.target.style.background = '#ff7a00'}
          onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
        >
          ✕
        </button>

        {/* Header */}
        <h2 style={{
          marginBottom: '10px',
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#ff7a00',
          textAlign: 'center',
        }}>
          Avail Free VAPT Offer
        </h2>
        
        <p style={{
          textAlign: 'center',
          color: '#ccc',
          fontSize: '14px',
          marginBottom: '25px',
        }}>
          Fill in your details to get started
        </p>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div style={{
            background: 'rgba(0,255,0,0.1)',
            border: '1px solid rgba(0,255,0,0.3)',
            borderRadius: '10px',
            padding: '15px',
            marginBottom: '20px',
            textAlign: 'center',
            color: '#00ff00',
          }}>
            ✓ Request submitted successfully! We'll contact you soon.
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div style={{
            background: 'rgba(255,0,0,0.1)',
            border: '1px solid rgba(255,0,0,0.3)',
            borderRadius: '10px',
            padding: '15px',
            marginBottom: '20px',
            textAlign: 'center',
            color: '#ff6b6b',
          }}>
            ✗ Something went wrong. Please try again.
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div style={{ marginBottom: '18px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              color: '#ccc',
            }}>
              Full Name <span style={{ color: '#ff7a00' }}>*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
                transition: '0.3s',
              }}
              onFocus={(e) => e.target.style.borderColor = '#ff7a00'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
            />
          </div>

          {/* Email Field */}
          <div style={{ marginBottom: '18px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              color: '#ccc',
            }}>
              Email Address <span style={{ color: '#ff7a00' }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
                transition: '0.3s',
              }}
              onFocus={(e) => e.target.style.borderColor = '#ff7a00'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
            />
          </div>

          {/* Phone Field */}
          <div style={{ marginBottom: '18px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              color: '#ccc',
            }}>
              Phone Number <span style={{ color: '#ff7a00' }}>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
                transition: '0.3s',
              }}
              onFocus={(e) => e.target.style.borderColor = '#ff7a00'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
            />
          </div>

          {/* Company Field */}
          <div style={{ marginBottom: '18px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              color: '#ccc',
            }}>
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
                transition: '0.3s',
              }}
              onFocus={(e) => e.target.style.borderColor = '#ff7a00'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
            />
          </div>

          {/* Service Selection */}
          <div style={{ marginBottom: '18px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              color: '#ccc',
            }}>
              Service Interested In <span style={{ color: '#ff7a00' }}>*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
                transition: '0.3s',
                cursor: 'pointer',
              }}
              onFocus={(e) => e.target.style.borderColor = '#ff7a00'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
            >
              <option value="VAPT" style={{ background: '#0f2c4d' }}>VAPT (Free for 5 IPs)</option>
              <option value="Penetration Testing" style={{ background: '#0f2c4d' }}>Penetration Testing</option>
              <option value="Security Audit" style={{ background: '#0f2c4d' }}>Security Audit</option>
              <option value="Compliance Assessment" style={{ background: '#0f2c4d' }}>Compliance Assessment</option>
              <option value="Other" style={{ background: '#0f2c4d' }}>Other</option>
            </select>
          </div>

          {/* Message Field */}
          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              color: '#ccc',
            }}>
              Additional Information
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
                transition: '0.3s',
                resize: 'vertical',
                fontFamily: 'inherit',
              }}
              onFocus={(e) => e.target.style.borderColor = '#ff7a00'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
              placeholder="Tell us more about your requirements..."
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              background: isSubmitting ? '#666' : '#ff7a00',
              color: 'white',
              padding: '14px',
              border: 'none',
              borderRadius: '10px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 20px rgba(255,122,0,0.4)',
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.target.style.background = '#ff5500';
                e.target.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) {
                e.target.style.background = '#ff7a00';
                e.target.style.transform = 'translateY(0)';
              }
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
}
