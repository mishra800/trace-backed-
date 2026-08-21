import { useEffect } from 'react';

export const useStickyHeader = () => {
  useEffect(() => {
    let header = document.querySelector('.stricky-header');
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;
        if (!header) {
          header = document.querySelector('.stricky-header');
        }
        if (!header) return;

        if (window.scrollY > 100) {
          if (!header.classList.contains('stricked-menu')) {
            header.classList.add('stricked-menu');
          }
        } else {
          if (header.classList.contains('stricked-menu')) {
            header.classList.remove('stricked-menu');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

