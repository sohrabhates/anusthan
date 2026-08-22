import React, { useState } from 'react';
import { getProductImage } from '../../data/productImageMap';
import './ProductCard.css';

export const ProductCard = ({ product, onClick }) => {
  const [isElevated, setIsElevated] = useState(false);

  if (!product) return null;

  const { name } = product;
  const imageSrc = getProductImage(product);

  const handleClick = (e) => {
    setIsElevated(true);
    setTimeout(() => {
      setIsElevated(false);
    }, 320);

    if (onClick) {
      onClick(product, e);
    }
  };

  return (
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
  );
};

export default ProductCard;
