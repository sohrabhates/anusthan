import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import CertificateSection from '../components/CertificateSection/CertificateSection';
import './AboutPage.css';

export const AboutPage = () => {
  const millingSteps = [
    { num: '01', title: 'Premium Paddy Selection', desc: 'We source only the finest paddy directly from verified farmers. Each batch is inspected for moisture, maturity, and purity before entering our mill.' },
    { num: '02', title: 'Advanced Grain Cleaning', desc: 'Using vibrating sifters and de-stoners, we remove all impurities, dust, and stones to ensure a clean starting point for the milling process.' },
    { num: '03', title: 'Precision Drying Process', desc: 'Controlled drying at specific temperatures ensures that the grains reach the ideal moisture level (12-14%) for perfect husking and long shelf life.' },
    { num: '04', title: 'Efficient Husk Removal', desc: 'Rubber-roll huskers gently remove the outer husk from the paddy, revealing the brown rice while minimizing grain breakage.' },
    { num: '05', title: 'Modern Rice Milling', desc: 'Our multi-stage milling process uses abrasive rollers to gradually remove the bran layer, resulting in clean, white grains.' },
    { num: '06', title: 'Superior Rice Whitening', desc: 'Vertical whitening machines refine the grain surface to achieve the desired degree of whiteness while preserving the nutritional core.' },
    { num: '07', title: 'High-Quality Rice Polishing', desc: 'Mist polishers give our rice its signature silky finish and pearly shine, enhancing its visual appeal and storage stability.' },
    { num: '08', title: 'Smart Grain Sorting', desc: 'Laser color sorters detect and remove discolored, yellow, or immature grains at high speed, ensuring 100% color purity.' },
    { num: '09', title: 'Accurate Quality Grading', desc: 'Our length graders separate broken grains from whole grains, allowing us to offer various grades from 100% whole to mixed varieties.' },
    { num: '10', title: 'Strict Quality Assurance', desc: 'Every batch undergoes rigorous lab testing for moisture, aroma, and average grain length (AGL) before being cleared for packing.' },
    { num: '11', title: 'Hygienic Packaging System', desc: 'Fully automated packing machines ensure precision weight and hygienic sealing in moisture-proof bags.' },
    { num: '12', title: 'Safe Warehouse Management', desc: 'Our climate-controlled warehouses protect the finished product from pests and moisture, maintaining its peak freshness.' },
    { num: '13', title: 'Reliable Supply Chain', desc: 'A dedicated logistics network ensures timely delivery to our domestic and international clients across 20+ countries.' }
  ];

  const testimonials = [
    {
      quote: "Goodpoint Agro has been our exclusive Basmati supplier for 7 years. The consistency in quality, grain length, and aroma is simply unmatched by any other mill we have tried.",
      author: "Ahmed Al-Rashid",
      role: "Director, Al Noor Foods",
      location: "Dubai"
    },
    {
      quote: "We import 500 tonnes every quarter and not once have we had a quality complaint. Their documentation, packaging, and delivery timelines are absolutely professional.",
      author: "Tan Wei Ming",
      role: "CEO, Pacific Grain Co",
      location: "Singapore"
    },
    {
      quote: "The Sona Masuri from Goodpoint is our bestselling brand in our supermarket chain. Customers love it and reorder it constantly. Truly exceptional product quality!",
      author: "Priya Nair",
      role: "Procurement Head, FreshMart",
      location: "Kochi"
    }
  ];

  return (
    <div className="anusthan-about-page">
      {/* Page Hero */}
      <PageHero 
        eyebrow="WHO WE ARE"
        title="Our Legacy of Purity"
        description="Combining decades of agricultural heritage with world-class milling innovation to bring nature's purest grains to your table."
        breadcrumb="About Us"
      />

      {/* The Goodpoint Journey Section */}
      <section className="about-journey-section">
        <div className="about-container">
          <div className="journey-grid">
            
            {/* Story Text */}
            <div className="journey-content-col">
              <span className="section-eyebrow">THE GOODPOINT JOURNEY</span>
              <h2 className="section-title">Cultivating Excellence Since 2022</h2>
              
              <p className="journey-lead-text">
                What started as a small local milling unit in the heart of the rice belt has grown into a global powerhouse in the agro-export industry. Founded by visionaries who believed that quality should never be compromised, Goodpoint Agro has stayed true to its roots for over two decades.
              </p>
              <p className="journey-body-text">
                Our journey is one of continuous innovation. From traditional milling to state-of-the-art laser sorting technology, we have always been ahead of the curve to ensure that only the finest grains reach your table.
              </p>

              {/* Stats Highlights */}
              <div className="journey-stats-row">
                <div className="about-stat-card">
                  <span className="stat-number">2022</span>
                  <span className="stat-label">Founded</span>
                </div>
                <div className="about-stat-card">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Tons Yearly</span>
                </div>
              </div>
            </div>

            {/* Editorial Image Showcase */}
            <div className="journey-image-col">
              <div className="about-image-frame">
                <img src="/images/factory/f1.jpg" alt="Goodpoint Agro Milling Facility" className="about-hero-img" />
                <div className="about-image-badge">
                  <span className="badge-title">Pure Purity</span>
                  <span className="badge-subtitle">State of the Art Facility</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="about-vm-section">
        <div className="about-container">
          <div className="vm-grid">
            
            {/* Vision Card */}
            <div className="vm-card vision-card">
              <div className="vm-icon">👁️</div>
              <span className="vm-eyebrow">OUR DIRECTION</span>
              <h3 className="vm-title">Our Vision</h3>
              <p className="vm-text">
                To be the world's most trusted provider of premium rice, setting global standards for quality, sustainability, and ethical agricultural practices while empowering the farming community.
              </p>
            </div>

            {/* Mission Card */}
            <div className="vm-card mission-card">
              <div className="vm-icon">🎯</div>
              <span className="vm-eyebrow">OUR PURPOSE</span>
              <h3 className="vm-title">Our Mission</h3>
              <p className="vm-text">
                To deliver the authentic taste of nature through advanced processing technology, ensuring every grain meets the highest purity standards and providing exceptional value to our global partners.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Edge Section */}
      <section className="about-edge-section">
        <div className="about-container">
          <div className="section-header-center">
            <span className="section-eyebrow">OUR EDGE</span>
            <h2 className="section-title">Why Partner With Goodpoint?</h2>
            <p className="section-subtitle">Pioneering quality standards that redefine rice excellence.</p>
          </div>

          <div className="edge-cards-grid">
            
            <div className="edge-card">
              <div className="edge-card-number">01</div>
              <h3 className="edge-card-title">Purest Grains</h3>
              <p className="edge-card-desc">
                We source only the finest paddy directly from the fields, ensuring zero adulteration and 100% purity in every grain.
              </p>
            </div>

            <div className="edge-card">
              <div className="edge-card-number">02</div>
              <h3 className="edge-card-title">Perfectly Aged</h3>
              <p className="edge-card-desc">
                Our Basmati varieties are aged for up to 24 months in temperature-controlled warehouses to develop maximum aroma and length.
              </p>
            </div>

            <div className="edge-card">
              <div className="edge-card-number">03</div>
              <h3 className="edge-card-title">Precision Milling</h3>
              <p className="edge-card-desc">
                Utilizing Swiss-engineered milling technology to preserve the nutritional value while achieving a silky, pearl finish.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* The Milling Journey (13 Step Step-by-Step Process) */}
      <section className="about-milling-journey-section">
        <div className="about-container">
          <div className="section-header-center">
            <span className="section-eyebrow">THE MILLING JOURNEY</span>
            <h2 className="section-title">Step-by-Step Process</h2>
            <p className="section-subtitle">13 precision steps from farm paddy harvest to sealed grain perfection.</p>
          </div>

          <div className="about-timeline-grid">
            {millingSteps.map((step) => (
              <div key={step.num} className="about-step-card">
                <div className="about-step-num">{step.num}</div>
                <h3 className="about-step-title">{step.title}</h3>
                <p className="about-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Distinction Section */}
      <section className="about-distinction-section">
        <div className="about-container">
          <div className="distinction-grid">
            
            <div className="distinction-img-col">
              <div className="distinction-image-wrapper">
                <img src="/images/factory/f3.jpg" alt="Milling Precision Technology" className="distinction-img" />
              </div>
            </div>

            <div className="distinction-content-col">
              <span className="section-eyebrow">THE DISTINCTION</span>
              <h2 className="section-title">What Makes Us Different?</h2>
              <p className="journey-lead-text">
                Unlike traditional mills, Goodpoint Agro combines decades of heritage with cutting-edge digital monitoring. Every batch is traceable back to its origin, ensuring that the rice on your table is ethical, sustainable, and superior in every sensory aspect.
              </p>

              <ul className="distinction-feature-list">
                <li>
                  <span className="check-icon">✓</span>
                  <span>Multi-stage Optical Color Sorting</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Sustainable Energy Driven Facility</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Direct Farmer-to-Mill Supply Chain</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Client Voices / Testimonials */}
      <section className="about-testimonials-section">
        <div className="about-container">
          <div className="section-header-center">
            <span className="section-eyebrow">CLIENT VOICES</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Trusted by global distributors, supermarket chains, and food leaders.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="quote-mark">“</div>
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-author-block">
                  <h4 className="author-name">{t.author}</h4>
                  <span className="author-role">{t.role} — {t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Certificates */}
      <CertificateSection />
    </div>
  );
};

export default AboutPage;
