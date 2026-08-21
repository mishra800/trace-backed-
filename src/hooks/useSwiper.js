import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const useSwiper = (selector, options = {}) => {
  useEffect(() => {
    // Add a small delay to ensure DOM is fully ready
    const timer = setTimeout(() => {
      const swiperElement = document.querySelector(selector);
      
      if (!swiperElement) {
        console.warn(`Swiper element not found: ${selector}`);
        return;
      }

      const defaultOptions = {
        modules: [Navigation, Pagination, Autoplay, EffectFade],
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        autoplay: {
          delay: 8000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '#main-slider__swiper-button-next',
          prevEl: '#main-slider__swiper-button-prev',
        },
        pagination: {
          el: '#main-slider-pagination',
          type: 'bullets',
          clickable: true,
        },
      };

      try {
        const swiper = new Swiper(selector, {
          ...defaultOptions,
          ...options,
        });

        console.log('Swiper initialized successfully:', selector);

        return () => {
          if (swiper && swiper.destroy) {
            swiper.destroy(true, true);
          }
        };
      } catch (error) {
        console.error('Error initializing Swiper:', error);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [selector]);
};
