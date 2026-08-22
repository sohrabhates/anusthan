import React from 'react';
import Hero from '../components/Hero/Hero';
import BrandIntro from '../components/BrandIntro/BrandIntro';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import VideoSection from '../components/VideoSection/VideoSection';
import PuritySection from '../components/PuritySection/PuritySection';
import QualityProcess from '../components/QualityProcess/QualityProcess';
import WhyAnusthan from '../components/WhyAnusthan/WhyAnusthan';
import CertificateSection from '../components/CertificateSection/CertificateSection';

export const HomePage = ({ onSelectProduct }) => {
  return (
    <main className="anusthan-home-page">
      <Hero />
      <BrandIntro />
      <ProductCarousel onSelectProduct={onSelectProduct} />
      <VideoSection />
      <PuritySection />
      <QualityProcess />
      <WhyAnusthan />
      <CertificateSection />
    </main>
  );
};

export default HomePage;
