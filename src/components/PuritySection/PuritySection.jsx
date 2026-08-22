import React, { useState, useEffect } from 'react';
import './PuritySection.css';

export const PuritySection = () => {
  const [activeImage, setActiveImage] = useState(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveImage(null);
      }
    };
    if (activeImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeImage]);

  const openLightbox = (src, alt) => {
    setActiveImage({ src, alt });
  };

  const closeLightbox = () => {
    setActiveImage(null);
  };

  const primaryImgSrc = "/images/rice3.webp";
  const primaryImgAlt = "Anusthan 100% Pure & Hygienic Rice Grain Photography";
  const secondaryImgSrc = "/images/factory/f8.jpg";
  const secondaryImgAlt = "Purba Bardhaman Mill Heritage & Organic Selection";

  return (
    <section className="anusthan-purity-section" id="purity">
      <div className="anusthan-purity-container">
        {/* LEFT COLUMN: Large Clickable Rice Photography */}
        <div className="purity-column purity-left-column">
          <div 
            className="purity-image-card primary-card"
            onClick={() => openLightbox(primaryImgSrc, primaryImgAlt)}
            role="button"
            tabIndex={0}
            aria-label="Click to enlarge 100% Pure Rice Grain photo"
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(primaryImgSrc, primaryImgAlt)}
          >
            <img 
              src={primaryImgSrc} 
              alt={primaryImgAlt} 
              className="purity-img primary-img"
              loading="lazy"
            />
            <div className="purity-zoom-badge">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
              <span>Click to Enlarge</span>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: Editorial Content & Quality Points */}
        <div className="purity-column purity-center-column">
          <span className="purity-eyebrow">Farming With Care</span>
          <h2 className="purity-title">The Best Standard<br />Of Purity</h2>

          <div className="purity-quality-points">
            <div className="purity-point-item">
              <div className="purity-point-icon">✦</div>
              <h3 className="purity-point-text">100% Pure & Hygienic Rice</h3>
            </div>
            <div className="purity-point-item">
              <div className="purity-point-icon">✦</div>
              <h3 className="purity-point-text">Carefully Selected Premium Grains</h3>
            </div>
          </div>

          <p className="purity-body-text">
            At Onusthan, purity isn't just a claim; it's a promise woven into every grain. We are dedicated to providing you with the wholesome goodness of 99.9% organic rice, cultivated with meticulous care and sustainable practices. Our commitment extends beyond mere certification, embodying a 20-year legacy of unwavering quality and trust that families across the region have come to rely on.
          </p>

          {/* Desktop/Tablet CTA Button */}
          <div className="purity-cta-wrapper desktop-cta">
            <a href="#products" className="purity-cta-btn">
              <span>Discover More</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Experience Badge & Secondary Clickable Image */}
        <div className="purity-column purity-right-column">
          {/* 20+ Years Legacy Badge */}
          <div className="purity-experience-card">
            <div className="experience-number">20+</div>
            <div className="experience-text">
              <strong>YEARS OF</strong>
              <span>EXPERIENCE & TRUST</span>
            </div>
          </div>

          {/* Secondary Clickable Image */}
          <div 
            className="purity-image-card secondary-card"
            onClick={() => openLightbox(secondaryImgSrc, secondaryImgAlt)}
            role="button"
            tabIndex={0}
            aria-label="Click to enlarge Purba Bardhaman Mill photo"
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(secondaryImgSrc, secondaryImgAlt)}
          >
            <img 
              src={secondaryImgSrc} 
              alt={secondaryImgAlt} 
              className="purity-img secondary-img"
              loading="lazy"
            />
            <div className="purity-zoom-badge mini">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
          </div>

          {/* Mobile CTA Button */}
          <div className="purity-cta-wrapper mobile-cta">
            <a href="#products" className="purity-cta-btn">
              <span>Discover More</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL OVERLAY */}
      {activeImage && (
        <div 
          className="anusthan-lightbox-overlay" 
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged Image Viewer"
        >
          <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close-btn" 
              onClick={closeLightbox}
              aria-label="Close Lightbox"
              type="button"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <img 
              src={activeImage.src} 
              alt={activeImage.alt} 
              className="lightbox-img"
            />
            <p className="lightbox-caption">{activeImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PuritySection;
