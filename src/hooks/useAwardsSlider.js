import { useEffect } from 'react';

export const useAwardsSlider = () => {
  useEffect(() => {
    const track = document.querySelector('.awards-track');
    
    if (!track) return;

    const cards = Array.from(track.querySelectorAll('.award-card'));
    
    if (cards.length === 0) return;

    // Clone cards for infinite scroll (only if not already cloned)
    if (!track.dataset.cloned) {
      cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
      });
      track.dataset.cloned = 'true';
    }

    // Calculate animation duration based on number of cards
    const gap = 30; // matches CSS gap
    const cardWidth = cards[0].offsetWidth + gap;
    const totalWidth = cardWidth * cards.length;
    const duration = totalWidth / 50; // speed: pixels per second

    // Set CSS animation matching legacy design
    const styleSheet = document.createElement('style');
    styleSheet.id = 'awards-slider-style';
    styleSheet.textContent = `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-${totalWidth}px);
        }
      }

      .awards-track {
        animation: scroll ${duration}s linear infinite;
      }

      .awards-track:hover {
        animation-play-state: paused;
      }
    `;

    // Remove any previously injected style
    const existing = document.getElementById('awards-slider-style');
    if (existing) existing.remove();

    document.head.appendChild(styleSheet);

    return () => {
      const el = document.getElementById('awards-slider-style');
      if (el) el.remove();
    };
  }, []);
};
