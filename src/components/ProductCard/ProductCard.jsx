import React, { useState } from 'react';
import { getProductImage } from '../../data/productImageMap';
import './ProductCard.css';

export const ProductCard = ({ product, onClick }) => {
  const [isElevated, setIsElevated] = useState(false);

  if (!product) return null;

  const { name } = product;
  const imageSrc = getProductImage(product);

  const message = encodeURIComponent(`Hello Anusthan, I would like to enquire about ${name}.`);
  const whatsappUrl = `https://wa.me/919647155570?text=${message}`;

  const handleClick = (e) => {
    setIsElevated(true);
    setTimeout(() => {
      setIsElevated(false);
    }, 320);

    if (onClick) {
      onClick(product, e);
    }
  };

  const handleWhatsAppClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="anusthan-product-card-wrapper">
      <article 
        className={`anusthan-product-card ${onClick ? 'interactive' : ''} ${isElevated ? 'elevated' : ''}`}
        onClick={handleClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
      >
        <div className="product-card-image-wrap">
          <img 
            src={imageSrc} 
            alt={name} 
            className="product-card-image"
            loading="lazy"
          />
        </div>
        <div className="product-card-body">
          <h3 className="product-card-title">{name}</h3>
        </div>
      </article>

      {/* Enquire on WhatsApp Action Button Directly Below Product Card */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="product-card-wa-btn"
        onClick={handleWhatsAppClick}
        aria-label={`Enquire on WhatsApp about ${name}`}
      >
        <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor">
          <path d="M16 2A13.94 13.94 0 002.11 16.03a13.78 13.78 0 001.88 7L2 30l7.21-1.89A14 14 0 1016 2zm0 25.5a11.45 11.45 0 01-5.87-1.61l-.42-.25-4.36 1.14 1.16-4.25-.28-.44a11.51 11.51 0 119.77 5.41zm6.32-8.63c-.35-.17-2.05-1-2.37-1.12s-.55-.17-.79.17-.92 1.12-1.13 1.36-.42.27-.77.1a9.7 9.7 0 01-2.85-1.76 10.7 10.7 0 01-1.97-2.46c-.2-.35-.02-.54.15-.71.16-.16.35-.42.53-.63s.24-.35.35-.59.06-.44-.03-.63-.79-1.9-.11-2.61c-.31-.7-.63-.6-.86-.6h-.73a1.41 1.41 0 00-1 .47A4.27 4.27 0 009.6 13a7.43 7.43 0 001.55 3.94A17 17 0 0017.7 22.3c2.61.91 3.65.91 4.54.78a3.86 3.86 0 002.55-1.8 3.16 3.16 0 00.22-1.8c-.08-.14-.32-.23-.67-.41z" />
        </svg>
        <span>Enquire on WhatsApp</span>
      </a>
    </div>
  );
};

export default ProductCard;
