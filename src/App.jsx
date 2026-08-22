import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';
import ProductDetailModal from './components/ProductDetailModal/ProductDetailModal';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurRicePage from './pages/OurRicePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';

export function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <BrowserRouter>
      <div className="anusthan-app">
        <ScrollToTop />

        {/* Global Navigation Header */}
        <Header />

        {/* Multi-Page SPA Routes */}
        <Routes>
          <Route 
            path="/" 
            element={<HomePage onSelectProduct={handleSelectProduct} />} 
          />
          <Route 
            path="/about" 
            element={<AboutPage />} 
          />
          <Route 
            path="/our-rice" 
            element={<OurRicePage onSelectProduct={handleSelectProduct} />} 
          />
          <Route 
            path="/gallery" 
            element={<GalleryPage />} 
          />
          <Route 
            path="/contact" 
            element={<ContactPage />} 
          />
          <Route 
            path="/blog" 
            element={<BlogPage />} 
          />
          <Route 
            path="*" 
            element={<Navigate to="/" replace />} 
          />
        </Routes>

        {/* Global Product Detail & Enquiry Modal */}
        {selectedProduct && (
          <ProductDetailModal 
            product={selectedProduct} 
            onClose={handleCloseModal} 
          />
        )}

        {/* Global Footer */}
        <Footer />

        {/* Fixed WhatsApp Query Float Button */}
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}

export default App;
