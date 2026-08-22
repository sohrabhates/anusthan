import React, { useRef, useState } from 'react';
import { products } from '../../data/products';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductDetailModal } from '../ProductDetailModal/ProductDetailModal';
import './ProductCarousel.css';

export const ProductCarousel = ({ onSelectProduct }) => {
  const trackRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -560, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 560, behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') scrollLeft();
    if (e.key === 'ArrowRight') scrollRight();
  };

  const handleCardClick = (product) => {
    if (onSelectProduct) {
      onSelectProduct(product);
    } else {
      setSelectedProduct(product);
    }
  };

  return (
    <section className="anusthan-carousel-section" id="products">
      <div className="anusthan-carousel-container">
        
        {/* Section Header */}
        <div className="anusthan-carousel-header">
          <div className="anusthan-carousel-title-group">
            <span className="anusthan-carousel-eyebrow">THE ANUSTHAN COLLECTION</span>
            <h2 className="anusthan-carousel-title">Rice for Every Table</h2>
            <p className="anusthan-carousel-desc">An expansive portfolio of Bengali rice varieties crafted for daily kitchen staples and distinct dining occasions.</p>
          </div>

          {/* Navigation Arrow Controls */}
          <div className="anusthan-carousel-controls">
            <button 
              className="anusthan-carousel-arrow prev" 
              onClick={scrollLeft} 
              aria-label="Previous products"
              type="button"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button 
              className="anusthan-carousel-arrow next" 
              onClick={scrollRight} 
              aria-label="Next products"
              type="button"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Track Scroll Wrapper */}
        <div 
          className="anusthan-carousel-track-wrapper"
          ref={trackRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-label="Product Showcase Carousel"
        >
          <div className="anusthan-carousel-track">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Floating Product Detail & Enquiry Modal */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

export default ProductCarousel;
