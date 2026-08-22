import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { brandInfo } from '../../data/content';
import './Header.css';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`anusthan-header ${scrolled ? 'scrolled' : ''} ${!isHomePage ? 'inner-header' : ''}`}>
      <div className="anusthan-header-container">
        
        {/* Brand Logo */}
        <Link to="/" className="anusthan-logo-link" onClick={closeMobileMenu}>
          <img 
            src={brandInfo.logo} 
            alt={brandInfo.name} 
            className="anusthan-logo-img"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="anusthan-desktop-nav" aria-label="Main Navigation">
          <NavLink to="/" className={({ isActive }) => `anusthan-nav-item ${isActive ? 'active' : ''}`} end>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `anusthan-nav-item ${isActive ? 'active' : ''}`}>
            About Us
          </NavLink>
          <NavLink to="/our-rice" className={({ isActive }) => `anusthan-nav-item ${isActive ? 'active' : ''}`}>
            Our Rice
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => `anusthan-nav-item ${isActive ? 'active' : ''}`}>
            Gallery
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => `anusthan-nav-item ${isActive ? 'active' : ''}`}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `anusthan-nav-item ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="anusthan-mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          type="button"
        >
          {mobileMenuOpen ? (
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`anusthan-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <Link to="/" onClick={closeMobileMenu}>
            <img src={brandInfo.logo} alt={brandInfo.name} className="mobile-logo-img" />
          </Link>
          <button className="mobile-close-btn" onClick={closeMobileMenu} aria-label="Close menu" type="button">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mobile-nav-links">
          <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`} end>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMobileMenu} className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
            About Us
          </NavLink>
          <NavLink to="/our-rice" onClick={closeMobileMenu} className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
            Our Rice
          </NavLink>
          <NavLink to="/gallery" onClick={closeMobileMenu} className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
            Gallery
          </NavLink>
          <NavLink to="/blog" onClick={closeMobileMenu} className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
            Blog
          </NavLink>
          <NavLink to="/contact" onClick={closeMobileMenu} className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>
        <div className="mobile-drawer-footer">
          <a href="tel:+919647155570" className="mobile-contact-link">
            📞 +91 9647155570
          </a>
          <span className="mobile-location-text">📍 Purba Bardhaman, India</span>
        </div>
      </div>

      {/* Backdrop Overlay */}
      {mobileMenuOpen && (
        <div className="anusthan-mobile-overlay" onClick={closeMobileMenu}></div>
      )}
    </header>
  );
};

export default Header;
