import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const STORAGE_KEY = 'vaptPopupDismissed';

export default function VaptPopup() {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    
    // Skip admin, login, and contact-us pages
    if (path.includes('admin') || path.includes('login') || path.includes('contact-us')) {
      setShow(false);
      setAnimate(false);
      return;
    }

    // If user already dismissed it in this session, don't show
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    // Show after 5 seconds
    const timer = setTimeout(() => {
      setShow(true);
      // Small delay so CSS transition fires after mount
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleClose = () => {
    // Mark dismissed in sessionStorage so it doesn't show again in this session
    sessionStorage.setItem(STORAGE_KEY, 'true');
    setAnimate(false);
    setTimeout(() => setShow(false), 400);
  };


  if (!show) return null;

  return (
    <div
      onClick={handleClose}
      style={{
        display: 'flex',
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 999999,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: animate ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(135deg, #081a2f, #0f2c4d)',
          color: '#fff',
          padding: '42px',
          borderRadius: '22px',
          width: '90%',
          maxWidth: '460px',
          textAlign: 'center',
          position: 'relative',
          boxShadow: '0 10px 60px rgba(0,150,255,0.25)',
          transform: animate ? 'scale(1) translateY(0)' : 'scale(0.7) translateY(30px)',
          transition: 'all 0.45s ease',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close popup"
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            cursor: 'pointer',
            fontSize: '18px',
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            transition: 'background 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#ff7a00'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        >
          ✕
        </button>

        {/* Heading */}
        <h2 style={{
          marginBottom: '14px',
          fontSize: '32px',
          fontWeight: 'bold',
          display: 'inline-block',
          padding: '10px 22px',
          borderRadius: '14px',
          background: 'rgba(255,122,0,0.1)',
          color: '#ff7a00',
          border: '1px solid rgba(255,122,0,0.5)',
          boxShadow: '0 0 20px rgba(255,122,0,0.6)',
          animation: 'vaptGlow 2s infinite',
        }}>
          Free VAPT
        </h2>

        <p style={{ margin: '10px 0 18px', color: '#ccc', fontSize: '16px' }}>
          Secure More, Risk Less
        </p>

        {/* Badge */}
        <div style={{
          display: 'inline-block',
          padding: '10px 24px',
          margin: '15px 0',
          fontSize: '17px',
          fontWeight: 'bold',
          color: '#00eaff',
          background: 'rgba(0,212,255,0.1)',
          border: '1px solid rgba(0,212,255,0.4)',
          borderRadius: '30px',
          boxShadow: '0 0 25px rgba(0,212,255,0.5)',
          animation: 'glowPulse 2s infinite',
        }}>
          Free for 5 IPs
        </div>

        <p style={{ color: '#bbb', fontSize: '15px', lineHeight: '1.7', marginTop: '12px' }}>
          Stay one step ahead of cyber threats with our expert security testing.
        </p>

        {/* Avail Offer — navigates to /contact-us via React Router */}
        <Link
          to="/contact-us"
          onClick={handleClose}
          style={{
            display: 'inline-block',
            background: '#ff7a00',
            color: '#fff',
            padding: '14px 36px',
            borderRadius: '35px',
            marginTop: '22px',
            fontSize: '16px',
            fontWeight: 'bold',
            textDecoration: 'none',
            transition: 'background 0.3s, transform 0.3s',
            boxShadow: '0 5px 20px rgba(255,122,0,0.4)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#ff5500';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ff7a00';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Avail Offer
        </Link>

        <style>{`
          @keyframes vaptGlow {
            0%,100% { box-shadow: 0 0 10px rgba(255,122,0,0.3); transform: scale(1); }
            50%      { box-shadow: 0 0 30px rgba(255,122,0,0.9); transform: scale(1.05); }
          }
          @keyframes glowPulse {
            0%,100% { box-shadow: 0 0 10px rgba(0,212,255,0.2); }
            50%      { box-shadow: 0 0 35px rgba(0,212,255,0.8); }
          }
        `}</style>
      </div>
    </div>
  );
}
