import React, { useState, useEffect, useCallback } from 'react';
import { heroSlides } from '../../data/content';
import './Hero.css';

// Helper function to split text into individual animated word spans with natural CSS word spacing
const renderAnimatedWords = (text, baseClass, startDelay = 0.1, delayStep = 0.12) => {
  if (!text) return null;
  const words = text.split(' ');
  return words.map((word, wIdx) => {
    const delay = (startDelay + wIdx * delayStep).toFixed(2);
    return (
      <span 
        key={`${word}-${wIdx}`} 
        className={`${baseClass}-word hero-word-animate`}
        style={{ animationDelay: `${delay}s` }}
      >
        {word}
      </span>
    );
  });
};

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
          const titleWordCount = slide.title ? slide.title.split(' ').length : 0;
          const subtitleDelay = (0.2 + titleWordCount * 0.12).toFixed(2);
          const subtitleWordCount = slide.subtitle ? slide.subtitle.split(' ').length : 0;
          const ctaDelay = (parseFloat(subtitleDelay) + subtitleWordCount * 0.10 + 0.1).toFixed(2);

          return (
            <div 
              key={slide.id} 
              className={`hero-slide ${slide.id} ${isActive ? 'active' : ''}`}
              aria-hidden={!isActive}
            >
              {/* Full Width Imagery — Completely Stable (NO image animation) */}
              <div className="hero-image-box">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="hero-img"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
                <div className="hero-overlay"></div>
              </div>

              {/* Sequential Word-by-Word Text Entrance Overlay */}
              <div className="hero-content-container">
                <div className="hero-content-inner" key={`hero-text-${currentSlide}-${slide.id}`}>
                  
                  {/* Eyebrow Label */}
                  <span className="hero-eyebrow">
                    {renderAnimatedWords(slide.eyebrow, 'hero-eyebrow', 0.05, 0.1)}
                  </span>

                  {/* Main Heading Word-by-Word */}
                  <h1 className="hero-title">
                    {renderAnimatedWords(slide.title, 'hero-title', 0.18, 0.12)}
                  </h1>

                  {/* Subtitle Word-by-Word */}
                  <p className="hero-subtitle">
                    {renderAnimatedWords(slide.subtitle, 'hero-subtitle', parseFloat(subtitleDelay), 0.1)}
                  </p>

                  {/* CTA Button Fade-Up After Text Finishes */}
                  <div 
                    className="hero-cta-wrapper hero-cta-animate"
                    style={{ animationDelay: `${ctaDelay}s` }}
                  >
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
