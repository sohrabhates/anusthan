import React, { useState } from 'react';
import PageHero from '../components/PageHero/PageHero';
import './BlogPage.css';

export const BlogPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "How Modern Rice Milling Ensures Better Grain Quality",
      category: "Milling Technology",
      image: "/images/factory/f1.jpg",
      excerpt: "Modern rice milling combines multi-stage cleaning, husking, whitening, and polishing. Controlled processing prevents grain breakage, preserving natural nutrients, aroma, and essential starch structure for optimal cooking results.",
      content: "Modern rice milling has transformed paddy processing from basic husking to a highly sophisticated science. Multi-stage cleaning removes all field debris, stones, and dust before the paddy enters precision rubber-roller huskers. Gradual abrasive whitening layers ensure the nutritional core remains intact while achieving a pristine pearl finish. The result is rice with uniform length, superior shelf stability, and consistent cooking performance."
    },
    {
      id: 2,
      title: "From Paddy to Rice: Understanding the Rice Milling Process",
      category: "Agro Processing",
      image: "/images/factory/f3.jpg",
      excerpt: "The transformation from harvested paddy to refined kitchen rice involves precise steps including de-stoning, moisture-controlled drying, husking, polishing, and length grading to deliver pure, uniform grains.",
      content: "Every grain of rice undergoes a carefully monitored journey before reaching consumer packaging. Starting with paddy intake from verified farms, grains are tested for optimum moisture content (12–14%). After husk removal, brown rice undergoes controlled whitening to remove bran layers. Precision length graders separate whole grains from broken rice, ensuring uniform grade quality for every cooking occasion."
    },
    {
      id: 3,
      title: "Why Optical Color Sorting Matters for Premium Rice",
      category: "Quality Assurance",
      image: "/images/factory/f6.jpg",
      excerpt: "High-resolution optical color sorters inspect thousands of rice grains per second, removing discolored, chalky, or immature grains to guarantee 100% visual and purity standards in every bag.",
      content: "Optical color sorting represents the pinnacle of modern quality assurance in grain processing. Advanced RGB cameras scan flowing streams of rice at ultra-high speed, detecting subtle variations in shade, discolored spots, or chalky grains. Micro-air jets instantly eject defective grains into separate streams. This ensures that only 100% color-pure, flawless grains make it into final packaging."
    }
  ];

  return (
    <div className="anusthan-blog-page">
      {/* Page Hero */}
      <PageHero 
        eyebrow="KNOWLEDGE & INSIGHTS"
        title="Rice & Milling Industry Blog"
        description="Explore educational articles on grain parboiling, optical color sorting, and modern milling technology."
        breadcrumb="Blog"
      />

      {/* Articles Grid Section */}
      <section className="blog-articles-section">
        <div className="blog-container">
          <div className="articles-grid">
            {articles.map((art) => (
              <article key={art.id} className="blog-card">
                <div className="blog-card-img-wrap">
                  <img src={art.image} alt={art.title} className="blog-card-img" />
                  <span className="blog-category-badge">{art.category}</span>
                </div>
                <div className="blog-card-body">
                  <h2 className="blog-card-title">{art.title}</h2>
                  <p className="blog-card-excerpt">{art.excerpt}</p>
                  <button 
                    className="read-article-link" 
                    onClick={() => setSelectedArticle(art)}
                    type="button"
                  >
                    <span>Read Article</span>
                    <span className="link-arrow">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Detail Lightbox Modal */}
      {selectedArticle && (
        <div className="blog-modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="blog-modal-close" onClick={() => setSelectedArticle(null)} type="button">✕</button>
            <img src={selectedArticle.image} alt={selectedArticle.title} className="blog-modal-img" />
            <span className="blog-category-badge modal-badge">{selectedArticle.category}</span>
            <h2 className="blog-modal-title">{selectedArticle.title}</h2>
            <p className="blog-modal-text">{selectedArticle.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
