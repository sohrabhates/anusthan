import React, { useState } from 'react';
import PageHero from '../components/PageHero/PageHero';
import ProductCard from '../components/ProductCard/ProductCard';
import productsData from '../data/products';
import './OurRicePage.css';

export const OurRicePage = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'ALL', label: 'All Varieties' },
    { id: 'MINIKET', label: 'Miniket' },
    { id: 'RATNA', label: 'Ratna' },
    { id: 'BANSKATI', label: 'Banskati & Jeerakati' },
    { id: '1010', label: '1010 Rice' }
  ];

  const filterProducts = (product) => {
    const name = product.name.toLowerCase();
    const matchesSearch = name.includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (activeCategory === 'ALL') return true;

    if (activeCategory === 'MINIKET') return name.includes('miniket') || name.includes('minikit');
    if (activeCategory === 'RATNA') return name.includes('ratna');
    if (activeCategory === 'BANSKATI') return name.includes('banskati') || name.includes('jeerakati');
    if (activeCategory === '1010') return name.includes('1010');

    return true;
  };

  const filteredProducts = productsData.filter(filterProducts);

  return (
    <div className="anusthan-our-rice-page">
      {/* Page Hero */}
      <PageHero 
        eyebrow="THE ANUSTHAN COLLECTION"
        title="Our Rice Catalogue"
        description="Explore our complete line of 100% pure Indian rice varieties, meticulously parboiled, aged, and polished to perfection."
        breadcrumb="Our Rice"
        bgImage="/images/hero/hero1.jpeg"
      />

      {/* Catalogue Filter & Search Bar */}
      <section className="catalogue-filter-section">
        <div className="catalogue-container">
          
          <div className="filter-controls-row">
            
            {/* Category Filter Tabs */}
            <div className="category-tabs-group" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  type="button"
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Quick Search */}
            <div className="catalogue-search-wrap">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search rice variety..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="catalogue-search-input"
              />
              {searchQuery && (
                <button 
                  className="search-clear-btn" 
                  onClick={() => setSearchQuery('')}
                  type="button"
                >
                  ✕
                </button>
              )}
            </div>

          </div>

          <div className="results-count-bar">
            <span>Showing <strong>{filteredProducts.length}</strong> of <strong>{productsData.length}</strong> Premium Rice Varieties</span>
          </div>

        </div>
      </section>

      {/* Product Grid Showcase */}
      <section className="catalogue-grid-section">
        <div className="catalogue-container">
          
          {filteredProducts.length > 0 ? (
            <div className="catalogue-products-grid">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  product={product} 
                  onClick={(p) => onSelectProduct && onSelectProduct(p)}
                />
              ))}
            </div>
          ) : (
            <div className="catalogue-no-results">
              <p>No rice variety found matching "{searchQuery}".</p>
              <button className="reset-filter-btn" onClick={() => { setActiveCategory('ALL'); setSearchQuery(''); }}>
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default OurRicePage;
