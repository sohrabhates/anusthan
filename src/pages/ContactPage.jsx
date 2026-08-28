import React, { useState } from 'react';
import PageHero from '../components/PageHero/PageHero';
import './ContactPage.css';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    variety: 'General Enquiry',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="anusthan-contact-page">
      {/* Page Hero */}
      <PageHero 
        eyebrow="GET IN TOUCH"
        title="Contact Anusthan & Goodpoint Agro"
        description="Have questions about bulk orders, export inquiries, or distribution partnerships? Reach out to our expert team."
        breadcrumb="Contact"
      />

      {/* Main Two-Column Contact Section */}
      <section className="contact-main-section">
        <div className="contact-container">
          <div className="contact-grid">
            
            {/* LEFT: Contact Form */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                <span className="section-eyebrow">SEND AN ENQUIRY</span>
                <h2 className="contact-card-title">How Can We Help You?</h2>
                <p className="contact-card-sub">Fill out the form below and our team will respond within 24 hours.</p>

                {formSubmitted ? (
                  <div className="form-success-banner">
                    <span className="success-icon">✓</span>
                    <h3>Thank You for Your Enquiry!</h3>
                    <p>We have received your message regarding <strong>{formData.variety}</strong>. Our trade team will get in touch with you shortly.</p>
                    <button className="submit-another-btn" onClick={() => setFormSubmitted(false)} type="button">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form className="anusthan-contact-form" onSubmit={handleSubmit}>
                    
                    <div className="form-row-2col">
                      <div className="form-group">
                        <label htmlFor="name">Your Name *</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          required
                          placeholder="e.g. Rajesh Kumar"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone"
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-row-2col">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          required
                          placeholder="e.g. name@company.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="variety">Rice Variety Interest</label>
                        <select 
                          id="variety"
                          name="variety"
                          value={formData.variety}
                          onChange={handleChange}
                        >
                          <option value="General Enquiry">General Enquiry</option>
                          <option value="Superior Miniket">Superior Miniket</option>
                          <option value="Special Banskati">Special Banskati</option>
                          <option value="Ratna Premium">Ratna Premium</option>
                          <option value="Special Jeerakati">Special Jeerakati</option>
                          <option value="1010 Parboiled Rice">1010 Parboiled Rice</option>
                          <option value="Bulk Agro Export">Bulk Agro Export</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Your Message or Enquiry Details *</label>
                      <textarea 
                        id="message"
                        name="message"
                        rows="5"
                        required
                        placeholder="Please share quantity requirements, destination port, or specific questions..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button type="submit" className="contact-submit-btn">
                      <span>Submit Trade Enquiry</span>
                      <span className="btn-arrow">→</span>
                    </button>

                  </form>
                )}

              </div>
            </div>

            {/* RIGHT: Contact Information Cards */}
            <div className="contact-info-col">
              
              {/* Phone Card */}
              <div className="info-card phone-info-card">
                <div className="info-card-icon">📞</div>
                <div className="info-card-content">
                  <span className="info-label">Direct Phone / Hotline</span>
                  <a href="tel:+919647155570" className="info-main-link">+91 9647155570</a>
                  <span className="info-subtext">Click to call directly • Available Mon–Sat</span>
                </div>
              </div>

              {/* Location Card */}
              <div className="info-card location-info-card">
                <div className="info-card-icon">📍</div>
                <div className="info-card-content">
                  <span className="info-label">Milling Facility & Office</span>
                  <h3 className="info-main-title">Purba Bardhaman, West Bengal, India</h3>
                  <span className="info-subtext">Heart of Bengal's Premier Rice Belt</span>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="info-card whatsapp-info-card">
                <div className="info-card-icon">💬</div>
                <div className="info-card-content">
                  <span className="info-label">Instant WhatsApp Desk</span>
                  <a 
                    href="https://wa.me/919647155570?text=Hello%20Anusthan!%20I%20would%20like%20to%20enquire%20about%20your%20rice%20products." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="info-whatsapp-btn"
                  >
                    Chat on WhatsApp Directly
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="info-card hours-info-card">
                <div className="info-card-icon">🕒</div>
                <div className="info-card-content">
                  <span className="info-label">Business Hours</span>
                  <p className="hours-text">Monday – Saturday: 9:00 AM – 7:00 PM IST</p>
                  <span className="info-subtext">Sunday: Closed</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
