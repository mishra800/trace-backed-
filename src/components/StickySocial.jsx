import React from 'react';
import './StickySocial.css';

const StickySocial = () => {
  return (
    <div className="sticky-social-sidebar">
      <h4 className="sticky-social-title">Follow Us:</h4>
      <div className="sticky-social-icons">
        <a 
          href="https://www.facebook.com/tracenetworksolutions/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="sticky-social-link facebook"
        >
          <span className="fab fa-facebook"></span>
        </a>
        <a 
          href="https://www.youtube.com/@Tracenetworksolutions" 
          target="_blank" 
          rel="noopener noreferrer"
          className="sticky-social-link youtube"
        >
          <span className="fab fa-youtube"></span>
        </a>
        <a 
          href="https://www.linkedin.com/company/tracenetwork/posts/?feedView=all" 
          target="_blank" 
          rel="noopener noreferrer"
          className="sticky-social-link linkedin"
        >
          <span className="fab fa-linkedin"></span>
        </a>
        <a 
          href="https://wa.me/919000314411" 
          target="_blank" 
          rel="noopener noreferrer"
          className="sticky-social-link whatsapp"
        >
          <span className="fab fa-whatsapp"></span>
        </a>
      </div>
    </div>
  );
};

export default StickySocial;
