import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UseCaseSlider.css';

/**
 * Professional Use Case Slider Component
 * Displays use cases in a modern slider/grid format with professional images
 * Based on "Trusted by the Best" design pattern
 */
export default function UseCaseSlider({ useCases = [], partnerColor = '#0078d4', title = 'Use Cases', subtitle = 'Trusted by the Best' }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying || useCases.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % useCases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, useCases.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length);
    setIsAutoPlaying(false);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % useCases.length);
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  if (!useCases || useCases.length === 0) {
    return null;
  }

  const currentCase = useCases[currentSlide];

  return (
    <section className="use-case-slider-section" style={{ '--partner-color': partnerColor }}>
      <div className="container">
        {/* Section Header */}
        <div className="use-case-slider-header" data-aos="fade-up">
          <h2 className="use-case-slider-title">{title}</h2>
          <p className="use-case-slider-subtitle">{subtitle}</p>
        </div>

        {/* Slider Container */}
        <div className="use-case-slider-container" data-aos="fade-up" data-aos-delay="200">
          {/* Navigation Arrows */}
          <button 
            className="use-case-slider-nav use-case-slider-nav-prev"
            onClick={handlePrevSlide}
            aria-label="Previous slide"
            style={{ '--partner-color': partnerColor }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            className="use-case-slider-nav use-case-slider-nav-next"
            onClick={handleNextSlide}
            aria-label="Next slide"
            style={{ '--partner-color': partnerColor }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          <div className="use-case-slider-wrapper">
            
            {/* Left Content Panel */}
            <div className="use-case-slider-left">
              <div className="use-case-category-badge">
                <i className={currentCase.icon}></i>
                {currentCase.category}
              </div>
              
              <h3 className="use-case-slider-case-title">{currentCase.title}</h3>
              
              <p className="use-case-slider-description">{currentCase.description}</p>
              
              {currentCase.linkTo && (
                <Link to={currentCase.linkTo} className="use-case-slider-read-more">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              )}
            </div>

            {/* Right Image Panel */}
            <div className="use-case-slider-right">
              <div className="use-case-slider-image">
                {currentCase.image ? (
                  <img 
                    src={currentCase.image} 
                    alt={currentCase.title}
                    loading="eager"
                    decoding="async"
                    className="use-case-slider-img"
                  />
                ) : (
                  <div className="use-case-image-placeholder">
                    <i className={currentCase.icon}></i>
                  </div>
                )}
              </div>
              
              {/* Preload next image */}
              {useCases[(currentSlide + 1) % useCases.length]?.image && (
                <link 
                  rel="prefetch" 
                  as="image" 
                  href={useCases[(currentSlide + 1) % useCases.length].image}
                />
              )}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="use-case-slider-dots">
            {useCases.map((_, index) => (
              <button
                key={index}
                className={`use-case-slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
                style={{ '--partner-color': partnerColor }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
