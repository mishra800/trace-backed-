import { useEffect } from 'react';

export const useOdometer = () => {
  useEffect(() => {
    // Dynamically import odometer to avoid SSR issues
    let Odometer;
    
    const initOdometer = async () => {
      try {
        // Import odometer dynamically
        const odometerModule = await import('odometer');
        Odometer = odometerModule.default;
        
        // Import CSS
        await import('odometer/themes/odometer-theme-default.css');

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !entry.target.classList.contains('odometer-initialized')) {
                const targetValue = entry.target.getAttribute('data-count');
                
                if (targetValue && Odometer) {
                  const od = new Odometer({
                    el: entry.target,
                    value: 0,
                    format: 'd',
                    duration: 2000,
                  });

                  entry.target.classList.add('odometer-initialized');
                  
                  // Trigger animation after a small delay
                  setTimeout(() => {
                    od.update(parseInt(targetValue, 10));
                  }, 100);
                  
                  observer.unobserve(entry.target);
                }
              }
            });
          },
          { threshold: 0.5 }
        );

        document.querySelectorAll('.odometer').forEach((el) => {
          observer.observe(el);
        });

        return () => observer.disconnect();
      } catch (error) {
        console.error('Error loading odometer:', error);
      }
    };

    initOdometer();
  }, []);
};
