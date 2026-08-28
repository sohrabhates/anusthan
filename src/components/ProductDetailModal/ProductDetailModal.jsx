import React, { useEffect } from 'react';
import { getProductImage } from '../../data/productImageMap';
import { WHATSAPP_NUMBER } from '../WhatsAppFloat/WhatsAppFloat';
import './ProductDetailModal.css';

export const ProductDetailModal = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [product, onClose]);

  if (!product) return null;

  const imageSrc = getProductImage(product);
  const messageText = `Hi, I'm interested in Anusthan ${product.name} rice. I would like to know more about this product.`;
  const encodedMsg = encodeURIComponent(messageText);
  const whatsappUrl = WHATSAPP_NUMBER 
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`
    : `https://api.whatsapp.com/send?text=${encodedMsg}`;

  return (
    <div 
      className="anusthan-product-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} Details`}
    >
      <div className="product-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className="product-modal-close-btn" 
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Desktop Left / Mobile Top: Uncropped Product Image */}
        <div className="product-modal-image-col">
          <div className="product-modal-image-frame">
            <img 
              src={imageSrc} 
              alt={product.name} 
              className="product-modal-img"
            />
          </div>
        </div>

        {/* Desktop Right / Mobile Bottom: Details & Dynamic Enquiry CTA */}
        <div className="product-modal-info-col">
          <span className="product-modal-eyebrow">THE ANUSTHAN COLLECTION</span>
          <h2 className="product-modal-title">{product.name}</h2>
          
          <div className="product-modal-specs">
            <div className="spec-item">
              <span className="spec-label">Grain Quality</span>
              <span className="spec-value">Silky Sortex Cleaned & Polished</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Manufacturer</span>
              <span className="spec-value">Goodpoint Agro Products</span>
            </div>
          </div>

          {/* Dynamic WhatsApp Enquiry CTA */}
          <div className="product-modal-actions">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="product-modal-enquire-btn"
            >
              <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor">
                <path d="M16 2A13.94 13.94 0 002.11 16.03a13.78 13.78 0 001.88 7L2 30l7.21-1.89A14 14 0 1016 2zm0 25.5a11.45 11.45 0 01-5.87-1.61l-.42-.25-4.36 1.14 1.16-4.25-.28-.44a11.51 11.51 0 119.77 5.41zm6.32-8.63c-.35-.17-2.05-1-2.37-1.12s-.55-.17-.79.17-.92 1.12-1.13 1.36-.42.27-.77.1a9.7 9.7 0 01-2.85-1.76 10.7 10.7 0 01-1.97-2.46c-.2-.35-.02-.54.15-.71.16-.16.35-.42.53-.63s.24-.35.35-.59.06-.44-.03-.63-.79-1.9-.11-2.61c-.31-.7-.63-.6-.86-.6h-.73a1.41 1.41 0 00-1 .47A4.27 4.27 0 009.6 13a7.43 7.43 0 001.55 3.94A17 17 0 0017.7 22.3c2.61.91 3.65.91 4.54.78a3.86 3.86 0 002.55-1.8 3.16 3.16 0 00.22-1.8c-.08-.14-.32-.23-.67-.41z" />
              </svg>
              <span>Enquire About This Product</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
