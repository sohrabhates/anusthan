import React from 'react';
import './VideoSection.css';

export const VideoSection = () => {
  return (
    <section className="anusthan-video-section" id="brand-video">
      <div className="anusthan-video-container">
        {/* Restrained Editorial Header */}
        <div className="anusthan-video-header">
          <span className="video-eyebrow">OUR BRAND STORY</span>
          <h2 className="video-title">The Spirit of Anusthan</h2>
          <p className="video-subtitle">
            Experience the care, heritage, and tradition behind every grain of rice.
          </p>
        </div>

        {/* Cinematic Video Showcase Frame */}
        <div className="anusthan-video-frame-wrapper">
          <div className="anusthan-video-responsive">
            <iframe
              src="https://www.youtube-nocookie.com/embed/BajlRuIzteI?rel=0&modestbranding=1&autoplay=0"
              title="Anusthan Brand Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
