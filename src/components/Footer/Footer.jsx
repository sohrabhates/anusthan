import React from 'react';
import { Link } from 'react-router-dom';
import { brandInfo } from '../../data/content';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="anusthan-footer">
      <div className="footer-top-gold-bar"></div>
      <div className="footer-container">
        
        {/* Brand & Mission Column */}
        <div className="footer-col footer-brand-col">
          <Link to="/" className="footer-logo-link">
            <img src={brandInfo.logo} alt={brandInfo.name} className="footer-logo-img" />
          </Link>
          <p className="footer-brand-desc">
            Cultivating excellence and setting the benchmark for 100% pure Indian rice. Goodpoint Agro Industries delivers authentic grain perfection from our modern milling facility to global kitchens.
          </p>
          <div className="footer-cert-badges">
            <span className="cert-badge-tag">ISO 22000</span>
            <span className="cert-badge-tag">FSSAI Certified</span>
            <span className="cert-badge-tag">APEDA Registered</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/our-rice">Our Rice Catalogue</Link></li>
            <li><Link to="/gallery">Milling & Facility</Link></li>
            <li><Link to="/blog">Blog & Articles</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Product Varieties Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">Featured Rice</h4>
          <ul className="footer-links-list">
            <li><Link to="/our-rice">Superior Miniket</Link></li>
            <li><Link to="/our-rice">Special Banskati</Link></li>
            <li><Link to="/our-rice">Ratna Premium</Link></li>
            <li><Link to="/our-rice">Classic Long Grain</Link></li>
            <li><Link to="/our-rice">Swarna Quality</Link></li>
            <li><Link to="/our-rice">1010 Parboiled Rice</Link></li>
          </ul>
        </div>

        {/* Contact Information Column */}
        <div className="footer-col footer-contact-col">
          <h4 className="footer-col-title">Contact & Facility</h4>
          <div className="footer-contact-info">
            <div className="contact-info-row">
              <span className="info-icon">📍</span>
              <span>Goodpoint Agro Industries, Purba Bardhaman, West Bengal, India</span>
            </div>
            <div className="contact-info-row">
              <span className="info-icon">📞</span>
              <a href="tel:+919647155570" className="footer-phone-link">+91 9647155570</a>
            </div>
            <div className="contact-info-row">
              <span className="info-icon">💬</span>
              <a 
                href="https://wa.me/919647155570?text=Hello%20Anusthan!%20I%20would%20like%20to%20enquire%20about%20your%20rice%20products." 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-whatsapp-link"
              >
                WhatsApp Instant Enquiry
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p>© {new Date().getFullYear()} Anusthan — Goodpoint Agro Industries. All Rights Reserved.</p>
          <p className="footer-credits">Pure Indian Rice • Processed with Care</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
