import React, { useState, useEffect } from 'react';
import './CertificateSection.css';

export const certificatesData = [
  {
    id: "fssai-cert",
    title: "FSSAI Food Safety License",
    subtitle: "Food Safety and Standards Authority of India",
    image: "/images/certificate/FSSAI License Certificate.png"
  },
  {
    id: "iec-cert",
    title: "IEC Import Export Certificate",
    subtitle: "Directorate General of Foreign Trade, Govt. of India",
    image: "/images/certificate/IEC Certificate.png"
  },
  {
    id: "apeda-cert",
    title: "APEDA Export Registration",
    subtitle: "Agricultural & Processed Food Products Export Development Authority",
    image: "/images/certificate/apeda.png"
  },
  {
    id: "udyam-cert",
    title: "Udyam MSME Registration",
    subtitle: "Ministry of Micro, Small & Medium Enterprises, Govt. of India",
    image: "/images/certificate/udyam.png"
  }
];

export const CertificateSection = () => {
  const [activeCert, setActiveCert] = useState(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveCert(null);
      }
    };
    if (activeCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeCert]);

  const openLightbox = (cert) => {
    setActiveCert(cert);
  };

  const closeLightbox = () => {
    setActiveCert(null);
  };

  return (
    <section className="anusthan-cert-section" id="certificates">
      <div className="anusthan-cert-container">
        {/* Section Header */}
        <div className="anusthan-cert-header">
          <span className="cert-eyebrow">OUR CERTIFICATIONS</span>
          <h2 className="cert-title">Quality You Can Trust</h2>
          <p className="cert-subtitle">
            Every grain is backed by standards, care and responsible practices.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="anusthan-cert-grid">
          {certificatesData.map((cert) => (
            <article 
              key={cert.id}
              className="anusthan-cert-card"
              onClick={() => openLightbox(cert)}
              role="button"
              tabIndex={0}
              aria-label={`View ${cert.title}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(cert)}
            >
              <div className="cert-image-frame">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="cert-img"
                  loading="lazy"
                />
                <div className="cert-zoom-overlay">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                  <span>Click to Enlarge Certificate</span>
                </div>
              </div>
              <div className="cert-card-body">
                <h3 className="cert-card-title">{cert.title}</h3>
                <p className="cert-card-sub">{cert.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {activeCert && (
        <div 
          className="anusthan-cert-lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged Certificate Viewer"
        >
          <div className="cert-lightbox-box" onClick={(e) => e.stopPropagation()}>
            <button 
              className="cert-lightbox-close-btn" 
              onClick={closeLightbox}
              aria-label="Close Lightbox"
              type="button"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="cert-lightbox-img-wrap">
              <img 
                src={activeCert.image} 
                alt={activeCert.title} 
                className="cert-lightbox-img"
              />
            </div>
            <div className="cert-lightbox-info">
              <h3 className="cert-lightbox-title">{activeCert.title}</h3>
              <p className="cert-lightbox-desc">{activeCert.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificateSection;
