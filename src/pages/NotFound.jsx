import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';

export default function NotFound() {
  const seoData = getSEOData('notFound');
  return (
    <>
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        robots={seoData.robots || 'noindex, nofollow'}
      />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        color: '#fff',
        padding: '20px',
        textAlign: 'center'
      }}>
      <div style={{
        maxWidth: '600px',
        animation: 'fadeIn 0.5s ease-in'
      }}>
        <h1 style={{
          fontSize: '120px',
          fontWeight: 'bold',
          margin: '0',
          background: 'linear-gradient(45deg, #ff7a00, #ff5500)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 0 30px rgba(255, 122, 0, 0.3)'
        }}>
          404
        </h1>
        
        <h2 style={{
          fontSize: '32px',
          marginTop: '20px',
          marginBottom: '15px',
          fontWeight: '600'
        }}>
          Page Not Found
        </h2>
        
        <p style={{
          fontSize: '18px',
          color: '#ccc',
          marginBottom: '40px',
          lineHeight: '1.6'
        }}>
          Oops! The page you're looking for doesn't exist. 
          It might have been moved or deleted.
        </p>

        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link 
            to="/" 
            style={{
              display: 'inline-block',
              padding: '15px 35px',
              background: '#ff7a00',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 20px rgba(255, 122, 0, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#ff5500';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(255, 122, 0, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#ff7a00';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 5px 20px rgba(255, 122, 0, 0.4)';
            }}
          >
            <i className="fas fa-home"></i> Go Home
          </Link>

          <Link 
            to="/contact-us" 
            style={{
              display: 'inline-block',
              padding: '15px 35px',
              background: 'transparent',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: 'bold',
              border: '2px solid #ff7a00',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#ff7a00';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <i className="fas fa-envelope"></i> Contact Us
          </Link>
        </div>

        <div style={{
          marginTop: '50px',
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <p style={{ 
            fontSize: '14px', 
            color: '#aaa',
            margin: '0 0 15px 0'
          }}>
            Quick Links:
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/blogs" style={{ color: '#ff7a00', textDecoration: 'none', fontSize: '14px' }}>
              Blogs
            </Link>
            <Link to="/events" style={{ color: '#ff7a00', textDecoration: 'none', fontSize: '14px' }}>
              Events
            </Link>
            <Link to="/company-profile" style={{ color: '#ff7a00', textDecoration: 'none', fontSize: '14px' }}>
              About Us
            </Link>
            <Link to="/partners" style={{ color: '#ff7a00', textDecoration: 'none', fontSize: '14px' }}>
              Partners
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
    </>
  );
}
