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

  // Close mobile dropdown when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
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

        {/* Desktop Navigation Links (>860px) */}
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

        {/* Mobile/Tablet Menu Button (<=860px) */}
        <button 
          className="anusthan-mobile-toggle-btn"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          type="button"
        >
          {mobileMenuOpen ? (
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>

      </div>

      {/* Clean Mobile/Tablet Top Dropdown Menu (In normal document flow, pushes hero down naturally!) */}
      {mobileMenuOpen && (
        <nav className="anusthan-mobile-dropdown-nav" aria-label="Mobile Navigation Dropdown">
          <div className="mobile-dropdown-links">
            <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => `mobile-dropdown-item ${isActive ? 'active' : ''}`} end>
              Home
            </NavLink>
            <NavLink to="/about" onClick={closeMobileMenu} className={({ isActive }) => `mobile-dropdown-item ${isActive ? 'active' : ''}`}>
              About Us
            </NavLink>
            <NavLink to="/our-rice" onClick={closeMobileMenu} className={({ isActive }) => `mobile-dropdown-item ${isActive ? 'active' : ''}`}>
              Our Rice
            </NavLink>
            <NavLink to="/gallery" onClick={closeMobileMenu} className={({ isActive }) => `mobile-dropdown-item ${isActive ? 'active' : ''}`}>
              Gallery
            </NavLink>
            <NavLink to="/blog" onClick={closeMobileMenu} className={({ isActive }) => `mobile-dropdown-item ${isActive ? 'active' : ''}`}>
              Blog
            </NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu} className={({ isActive }) => `mobile-dropdown-item ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
