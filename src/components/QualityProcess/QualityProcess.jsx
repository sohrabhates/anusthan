import React from 'react';
import { qualityProcess } from '../../data/content';
import './QualityProcess.css';

export const QualityProcess = () => {
  const { eyebrow, title, paragraph, mainImage, mainImageAlt, steps } = qualityProcess;

  return (
    <section className="anusthan-quality-section" id="quality">
      <div className="anusthan-quality-container">
        
        {/* Section Header */}
        <div className="quality-header">
          <span className="quality-eyebrow">{eyebrow}</span>
          <h2 className="quality-title">{title}</h2>
          <p className="quality-paragraph">{paragraph}</p>
        </div>

        {/* Feature Hero Process Banner */}
        <div className="quality-banner-frame">
          <img 
            src={mainImage} 
            alt={mainImageAlt} 
            className="quality-banner-img"
            loading="lazy"
          />
          <div className="quality-banner-overlay"></div>
        </div>

        {/* 3 Real Photography Process Moments */}
        <div className="quality-steps-grid">
          {steps.map((step) => (
            <div key={step.id} className="quality-step-card">
              <div className="quality-step-img-box">
                <img 
                  src={step.image} 
                  alt={step.imageAlt} 
                  className="quality-step-img"
                  loading="lazy"
                />
              </div>
              <div className="quality-step-label-box">
                <span className="quality-step-label">{step.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default QualityProcess;
