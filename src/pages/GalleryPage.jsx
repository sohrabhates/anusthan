import React, { useState } from 'react';
import PageHero from '../components/PageHero/PageHero';
import './GalleryPage.css';

export const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const factoryImages = [
    { id: 1, src: '/images/factory/f1.jpg', title: 'State-of-the-Art Milling Plant' },
    { id: 2, src: '/images/factory/f2.jpg', title: 'High Precision Optical Sorter' },
    { id: 3, src: '/images/factory/f3.jpg', title: 'Automated Processing Line' },
    { id: 4, src: '/images/factory/f4.jpg', title: 'Paddy Cleaning & De-stoning Unit' },
    { id: 5, src: '/images/factory/f5.jpg', title: 'Multi-Stage Grain Polishing' },
    { id: 6, src: '/images/factory/f6.jpg', title: 'Laser Color Sorting System' },
    { id: 7, src: '/images/factory/f7.jpg', title: 'Hygienic Packaging Pipeline' },
    { id: 8, src: '/images/factory/f8.jpg', title: 'Quality Assurance Laboratory' },
    { id: 9, src: '/images/factory/f9.jpg', title: 'Climate Controlled Warehouse' },
    { id: 10, src: '/images/factory/f10.jpg', title: 'High Capacity Grain Silos' },
    { id: 11, src: '/images/factory/f11.jpg', title: 'Eco-Friendly Bio-Mass Dryer' },
    { id: 12, src: '/images/factory/f12.jpg', title: 'Precision Length Graders' },
    { id: 13, src: '/images/factory/f13.jpg', title: 'Automated Bagging & Sealing' },
    { id: 14, src: '/images/factory/f14.jpg', title: 'Global Logistics Dispatch Hub' }
  ];

  return (
    <div className="anusthan-gallery-page">
      {/* Page Hero */}
      <PageHero 
        eyebrow="FROM PADDY TO PREMIUM RICE"
        title="Manufacturing & Milling Facility"
        description="Witness the journey of the finest grains, processed with precision and care at Goodpoint Agro Industries."
        breadcrumb="Gallery"
      />

      {/* Manufacturing Excellence Header Section */}
      <section className="gallery-excellence-section">
        <div className="gallery-container">
          <div className="excellence-grid">
            <div className="excellence-text-col">
              <span className="section-eyebrow">MANUFACTURING EXCELLENCE</span>
              <h2 className="section-title">Setting the Gold Standard in Rice Milling</h2>
              <p className="journey-lead-text">
                At Goodpoint Agro, we combine traditional wisdom with cutting-edge technology to produce rice that is unmatched in quality, aroma, and taste. Our state-of-the-art facility is designed for maximum efficiency and hygiene.
              </p>
              
              <div className="excellence-stats-row">
                <div className="excellence-stat-card">
                  <span className="exc-stat-num">150T</span>
                  <span className="exc-stat-label">Daily Capacity</span>
                </div>
                <div className="excellence-stat-card">
                  <span className="exc-stat-num">100%</span>
                  <span className="exc-stat-label">Automated</span>
                </div>
              </div>
            </div>

            <div className="excellence-img-col">
              <div className="excellence-featured-frame">
                <img src="/images/factory/f1.jpg" alt="Goodpoint Agro Milling Plant" className="excellence-hero-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid Showcase */}
      <section className="gallery-photos-section">
        <div className="gallery-container">
          <div className="section-header-center">
            <span className="section-eyebrow">FACILITY SHOWCASE</span>
            <h2 className="section-title">Inside Our Modern Processing Plant</h2>
            <p className="section-subtitle">Take a visual tour of our machinery, silos, sorting labs, and packaging units.</p>
          </div>

          <div className="factory-photos-grid">
            {factoryImages.map((img) => (
              <div 
                key={img.id} 
                className="factory-photo-card"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img.src} alt={img.title} className="factory-card-img" />
                <div className="factory-card-overlay">
                  <span className="zoom-icon">🔍</span>
                  <h4 className="factory-card-title">{img.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Practices & Machinery Highlights */}
      <section className="gallery-sustainability-section">
        <div className="gallery-container">
          <div className="sustainability-grid">
            
            {/* Sustainable Practices */}
            <div className="sustain-card">
              <span className="section-eyebrow">SUSTAINABLE MILLING PRACTICES</span>
              <h3 className="sustain-title">Eco-Friendly Operations</h3>
              <p className="sustain-text">
                We are committed to eco-friendly operations. From husk-powered energy generation to water recycling systems, we ensure our process is as green as the fields our rice comes from.
              </p>
              <ul className="sustain-bullets">
                <li>🌱 Zero Effluent Discharge</li>
                <li>📦 Eco-friendly Packaging</li>
              </ul>
            </div>

            {/* Modern Machinery */}
            <div className="sustain-card machinery-card">
              <span className="section-eyebrow">POWERED BY MODERN MACHINERY</span>
              <h3 className="sustain-title">World-Class Equipment</h3>
              <p className="sustain-text">
                Our facility features the latest technology from world-class manufacturers. High-precision color sorters, automated milling units, and computerized quality checks define our excellence.
              </p>
              <ul className="sustain-bullets">
                <li>🤖 PLC Controlled Milling</li>
                <li>📊 Real-time Monitoring</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div className="gallery-lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content-wrap" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setSelectedImage(null)} type="button">✕</button>
            <img src={selectedImage.src} alt={selectedImage.title} className="lightbox-img" />
            <h3 className="lightbox-caption">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
