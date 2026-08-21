import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const useAOS = () => {
  const location = useLocation();

  useEffect(() => {
    // Only re-init when route changes so SPA navigations pick up new DOM elements.
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: 'ease-in-out',
    });

    AOS.refresh();
  }, [location.pathname]);
};

