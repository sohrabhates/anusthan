import React from 'react';
import { Link } from 'react-router-dom';
import './PageHero.css';

export const PageHero = ({ eyebrow, title, description, breadcrumb, bgImage }) => {
  const customBgStyle = bgImage ? {
    backgroundImage: `radial-gradient(circle at 50% 30%, rgba(198, 161, 91, 0.12) 0%, rgba(28, 25, 23, 0.72) 70%), url('${bgImage}')`
  } : {};

  return (
    <section className="anusthan-page-hero" style={customBgStyle}>
      <div className="page-hero-overlay"></div>
      <div className="page-hero-container">
        
        {/* Breadcrumb Trail */}
        {breadcrumb && (
          <nav className="page-hero-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">{breadcrumb}</span>
          </nav>
        )}

        {/* Eyebrow Label */}
        {eyebrow && <span className="page-hero-eyebrow">{eyebrow}</span>}

        {/* Main Heading */}
        <h1 className="page-hero-title">{title}</h1>

        {/* Optional Intro Description */}
        {description && <p className="page-hero-description">{description}</p>}

      </div>
    </section>
  );
};

export default PageHero;
