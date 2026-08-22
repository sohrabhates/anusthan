import React, { useState, useEffect, useCallback } from 'react';
import { heroSlides } from '../../data/content';
import './Hero.css';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  }, []);

  // Autoplay with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  };

  return (
    <section 
      className="anusthan-hero-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Brand Hero Showcase"
    >
      <div className="hero-slides-wrapper">
        {heroSlides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div 
              key={slide.id} 
              className={`hero-slide ${isActive ? 'active' : ''}`}
              aria-hidden={!isActive}
            >
              {/* Full Width Imagery */}
              <div className="hero-image-box">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="hero-img"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
                <div className="hero-overlay"></div>
              </div>

              {/* Restrained Editorial Content */}
              <div className="hero-content-container">
                <div className="hero-content-inner">
                  <span className="hero-eyebrow">{slide.eyebrow}</span>
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-subtitle">{slide.subtitle}</p>
                  <div className="hero-cta-wrapper">
                    <a href={slide.ctaLink} className="hero-cta-btn">
                      <span>{slide.ctaText}</span>
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Prev / Next Controls */}
      <button 
        className="hero-arrow prev" 
        onClick={prevSlide}
        aria-label="Previous slide"
        type="button"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>

      <button 
        className="hero-arrow next" 
        onClick={nextSlide}
        aria-label="Next slide"
        type="button"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="hero-dots">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            className={`hero-dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            type="button"
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
