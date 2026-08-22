import React from 'react';
import { brandIntro } from '../../data/content';
import './BrandIntro.css';

export const BrandIntro = () => {
  const { eyebrow, title, paragraph1, paragraph2, highlights, ctaText, ctaLink, image, imageAlt } = brandIntro;

  return (
    <section className="anusthan-brand-intro-section" id="about">
      {/* Editorial Typographic Watermark */}
      <div className="brand-intro-watermark" aria-hidden="true">ANUSTHAN</div>

      <div className="anusthan-brand-intro-container">
        
        {/* Editorial Visual Column (55% Width) */}
        <div className="brand-intro-image-column">
          <div className="brand-intro-image-frame">
            <img 
              src={image} 
              alt={imageAlt} 
              className="brand-intro-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* Editorial Copy Column */}
        <div className="brand-intro-content-column">
          <span className="brand-intro-eyebrow">{eyebrow}</span>
          <h2 className="brand-intro-title">{title}</h2>
          
          <p className="brand-intro-paragraph">{paragraph1}</p>
          {paragraph2 && <p className="brand-intro-paragraph">{paragraph2}</p>}

          {highlights && highlights.length > 0 && (
            <ul className="brand-intro-highlights">
              {highlights.map((item, idx) => (
                <li key={idx} className="brand-intro-highlight-item">
                  <span className="highlight-icon">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {ctaText && (
            <a href={ctaLink} className="brand-intro-cta">
              <span>{ctaText}</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          )}
        </div>

      </div>
    </section>
  );
};

export default BrandIntro;
