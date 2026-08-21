import { useEffect } from 'react';

export const useCustomCursor = () => {
  useEffect(() => {
    // Check if device supports hover (not mobile/tablet)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
      const cursors = document.querySelectorAll('.custom-cursor__cursor, .custom-cursor__cursor-two');
      cursors.forEach(cursor => {
        if (cursor) cursor.style.display = 'none';
      });
      return;
    }

    const cursor = document.querySelector('.custom-cursor__cursor');
    const cursorTwo = document.querySelector('.custom-cursor__cursor-two');

    if (!cursor || !cursorTwo) return;

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let cursorTwoX = -100;
    let cursorTwoY = -100;
    let isMoving = false;
    let rafId = null;
    let idleTimer = null;

    const updateCursor = () => {
      // Smooth follow for main cursor
      cursorX += (mouseX - cursorX) * 0.25;
      cursorY += (mouseY - cursorY) * 0.25;
      
      // Slower follow for second cursor
      cursorTwoX += (mouseX - cursorTwoX) * 0.12;
      cursorTwoY += (mouseY - cursorTwoY) * 0.12;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      cursorTwo.style.transform = `translate3d(${cursorTwoX}px, ${cursorTwoY}px, 0)`;

      // Stop RAF loop when position has virtually converged
      const dist = Math.abs(mouseX - cursorX) + Math.abs(mouseY - cursorY) +
                   Math.abs(mouseX - cursorTwoX) + Math.abs(mouseY - cursorTwoY);

      if (dist > 0.1 && isMoving) {
        rafId = requestAnimationFrame(updateCursor);
      } else {
        rafId = null;
      }
    };

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;

      if (!rafId) {
        rafId = requestAnimationFrame(updateCursor);
      }

      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isMoving = false;
      }, 1000);
    };

    // Single event delegation for hover states instead of binding 100s of nodes
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .btn-get-started, input, textarea, select, [role="button"]');
      if (target) {
        cursor.classList.add('cursor-hover');
        cursorTwo.classList.add('cursor-hover');
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, .btn-get-started, input, textarea, select, [role="button"]');
      if (target) {
        cursor.classList.remove('cursor-hover');
        cursorTwo.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    document.body.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.body.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(idleTimer);
    };
  }, []);
};

