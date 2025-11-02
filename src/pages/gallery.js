import { useState } from 'react';
import "./gallery.css";


export function Gallery({onViewDetails}) {

 
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Sample gallery data
  const [artworks, setArtworks] = useState([
    {
      id: 1,
      title: "Abstract Harmony",
      artist: "Sarah Chen",
      price: 299,
      image: "🎨",
      category: "abstract",
      description: "A vibrant exploration of color and form that captures emotional depth through abstract expression.",
      isFeatured: true,
      dateAdded: "2024-01-15"
    },
    {
      id: 2,
      title: "Urban Landscape",
      artist: "Marcus Johnson",
      price: 450,
      image: "🏙️",
      category: "cityscape",
      description: "Capturing the dynamic energy and architectural beauty of modern city life.",
      isFeatured: true,
      dateAdded: "2024-01-10"
    },
    {
      id: 3,
      title: "Ocean Dreams",
      artist: "Elena Rodriguez",
      price: 375,
      image: "🌊",
      category: "seascape",
      description: "Serene ocean waves meeting the golden hour in this breathtaking seascape.",
      isFeatured: false,
      dateAdded: "2024-01-08"
    },
    {
      id: 4,
      title: "Mountain Majesty",
      artist: "David Kim",
      price: 520,
      image: "⛰️",
      category: "landscape",
      description: "Majestic mountain ranges under the dramatic play of light and shadow.",
      isFeatured: true,
      dateAdded: "2024-01-05"
    },
    {
      id: 5,
      title: "Floral Symphony",
      artist: "Maria Garcia",
      price: 280,
      image: "🌺",
      category: "botanical",
      description: "A delicate dance of colors and textures in this floral masterpiece.",
      isFeatured: false,
      dateAdded: "2024-01-03"
    },
    {
      id: 6,
      title: "Desert Soul",
      artist: "Ahmed Hassan",
      price: 390,
      image: "🏜️",
      category: "landscape",
      description: "The raw beauty and spiritual essence of desert landscapes captured in warm tones.",
      isFeatured: true,
      dateAdded: "2024-01-01"
    },
    {
      id: 7,
      title: "Cosmic Dance",
      artist: "Luna Park",
      price: 620,
      image: "🌌",
      category: "abstract",
      description: "A celestial journey through space and time in this cosmic abstract piece.",
      isFeatured: false,
      dateAdded: "2023-12-28"
    },
    {
      id: 8,
      title: "Portrait of Silence",
      artist: "James Wilson",
      price: 480,
      image: "👤",
      category: "portrait",
      description: "An intimate portrait capturing the quiet moments of human contemplation.",
      isFeatured: false,
      dateAdded: "2023-12-25"
    }
  ]);

  const categories = [
    { id: 'all', label: 'All Artworks' },
    { id: 'abstract', label: 'Abstract' },
    { id: 'landscape', label: 'Landscape' },
    { id: 'cityscape', label: 'Cityscape' },
    { id: 'seascape', label: 'Seascape' },
    { id: 'portrait', label: 'Portrait' },
    { id: 'botanical', label: 'Botanical' }
  ];

  const sortOptions = [
    { id: 'newest', label: 'Newest First' },
    { id: 'oldest', label: 'Oldest First' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'featured', label: 'Featured First' }
  ];

  const filteredArtworks = artworks.filter(artwork => 
    selectedCategory === 'all' || artwork.category === selectedCategory
  );

  const sortedArtworks = [...filteredArtworks].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      case 'oldest':
        return new Date(a.dateAdded) - new Date(b.dateAdded);
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'featured':
        return (b.isFeatured === a.isFeatured) ? 0 : b.isFeatured ? -1 : 1;
      default:
        return 0;
    }
  });

  const handleAddToCart = (artworkId) => {
    alert(`🛒 Added artwork #${artworkId} to cart!`);
    // In real app, update cart state
  };

  const handleViewDetails = (artwork) => {
    alert(`🔍 ${artwork.title} by ${artwork.artist}\n\n${artwork.description}\n\nPrice: $${artwork.price}`);
    // In real app, navigate to detail page or open modal
  };

  const handleQuickView = (artwork) => {
    alert(`👁️ Quick View: ${artwork.title}\nArtist: ${artwork.artist}\nPrice: $${artwork.price}`);
  };

  return (
    <div className="gallery-page">
      {/* Gallery Header */}
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <h1 className="gallery-title">Art Gallery</h1>
          <p className="gallery-subtitle">
            Discover incredible artwork from talented local artists. 
            Each piece tells a unique story waiting to be part of your collection.
          </p>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="gallery-controls">
        <div className="controls-container">
          {/* Category Filter */}
          <div className="filter-group">
            <label className="filter-label">Category</label>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="sort-group">
            <label className="sort-label">Sort by</label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Artworks Grid */}
      <section className="artworks-section">
        <div className="artworks-container">
          <div className="artworks-grid">
            {sortedArtworks.map(artwork => (
              <div key={artwork.id} className="artwork-card">
                <div className="artwork-image">
                  {artwork.image}
                  {artwork.isFeatured && (
                    <div className="featured-badge">Featured</div>
                  )}
                  <div className="artwork-overlay">
                    <button 
                      className="quick-view-btn"
                      onClick={() => handleQuickView(artwork)}
                    >
                      👁️ Quick View
                    </button>
                  </div>
                </div>
                
                <div className="artwork-info">
                  <h3 className="artwork-title">{artwork.title}</h3>
                  <p className="artwork-artist">By {artwork.artist}</p>
                  <p className="artwork-category">{artwork.category}</p>
                  <p className="artwork-description">{artwork.description}</p>
                  
                  <div className="artwork-footer">
                    <div className="artwork-price">${artwork.price}</div>
                    <div className="artwork-actions">
                    <button 
                      className="view-details-btn"
                      onClick={() => onViewDetails(artwork.id)}
                    >
                      View Details
                    </button>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(artwork.id)}
                    >
                      Add to Cart
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {sortedArtworks.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">🎨</div>
              <h3>No artworks found</h3>
              <p>Try selecting a different category or check back later for new additions.</p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="gallery-stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">{artworks.length}</div>
            <div className="stat-label">Total Artworks</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              {artworks.filter(art => art.isFeatured).length}
            </div>
            <div className="stat-label">Featured Pieces</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{categories.length - 1}</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              {new Set(artworks.map(art => art.artist)).size}
            </div>
            <div className="stat-label">Local Artists</div>
          </div>
        </div>
      </section>
    </div>
  );
}