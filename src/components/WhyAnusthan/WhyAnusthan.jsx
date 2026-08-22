import React from 'react';
import { whyAnusthan } from '../../data/content';
import './WhyAnusthan.css';

export const WhyAnusthan = () => {
  const { eyebrow, title, paragraph, points } = whyAnusthan;

  return (
    <section className="anusthan-why-section" id="why-anusthan">
      <div className="anusthan-why-container">
        
        {/* Editorial Statement Column */}
        <div className="why-statement-column">
          <span className="why-eyebrow">{eyebrow}</span>
          <h2 className="why-title">{title}</h2>
          <p className="why-paragraph">{paragraph}</p>
        </div>

        {/* Value Points Column */}
        <div className="why-points-column">
          {points.map((point) => (
            <div key={point.number} className="why-point-card">
              <span className="why-point-number">{point.number}</span>
              <div className="why-point-content">
                <h3 className="why-point-title">{point.title}</h3>
                <p className="why-point-desc">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyAnusthan;
