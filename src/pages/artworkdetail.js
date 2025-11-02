import React, { useState, useEffect, useMemo } from 'react';
import './artworkdetail.css';

export const ArtworkDetail = ({ artworkId, onBack, onNavigateToCheckout }) => {
  const [quantity, setQuantity] = useState(1);
  const [artwork, setArtwork] = useState(null);

  const sampleArtworks = useMemo(() => [
    {
      id: 1,
      title: "Abstract Harmony",
      artist: "Sarah Chen",
      price: 299,
      description: "A vibrant abstract piece exploring color relationships.",
      image: "/api/placeholder/400/500",
      size: "24x36 inches",
      medium: "Acrylic on Canvas",
      year: 2024,
      category: "Abstract",
      tags: ["abstract", "colorful", "modern"],
      rating: 4.8,
      stock: 5
    },
    {
      id: 2,
      title: "Urban Reflections",
      artist: "Marcus Rodriguez",
      price: 450,
      description: "Cityscapes reflected in rain-soaked streets.",
      image: "/api/placeholder/400/500",
      size: "30x40 inches",
      medium: "Oil on Canvas",
      year: 2023,
      category: "Urban",
      tags: ["cityscape", "reflection", "urban"],
      rating: 4.9,
      stock: 2
    },
    {
      id: 3,
      title: "Mountain Serenity",
      artist: "Emily Watson",
      price: 375,
      description: "Peaceful mountain landscape at dawn.",
      image: "/api/placeholder/400/500",
      size: "20x30 inches",
      medium: "Watercolor",
      year: 2024,
      category: "Landscape",
      tags: ["landscape", "mountains", "serene"],
      rating: 4.7,
      stock: 8
    }
  ], []);

  useEffect(() => {
    const foundArtwork = sampleArtworks.find(art => art.id === parseInt(artworkId));
    setArtwork(foundArtwork || sampleArtworks[0]);
  }, [artworkId, sampleArtworks]);

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  if (!artwork) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">🎨</div>
        <h2>Loading Artwork...</h2>
      </div>
    );
  }

  return (
    <div className="artwork-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <button onClick={onBack} className="breadcrumb-link">
          Gallery
        </button>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{artwork.title}</span>
      </div>

      {/* Main Content */}
      <div className="artwork-detail-container">
        {/* Image Gallery */}
        <div className="artwork-gallery">
          <div className="main-image">
            <div className="image-display">
              {artwork.image ? (
                <img src={artwork.image} alt={artwork.title} />
              ) : (
                <span>🖼️</span>
              )}
            </div>
            {artwork.stock === 0 && (
              <div className="sold-overlay">
                <div className="sold-badge">SOLD OUT</div>
              </div>
            )}
          </div>
          <div className="image-thumbnails">
            <div className="thumbnail active">🖼️</div>
            <div className="thumbnail">🎨</div>
            <div className="thumbnail">✨</div>
          </div>
        </div>

        {/* Artwork Info */}
        <div className="artwork-info">
          <div className="artwork-header">
            <h1 className="artwork-title">{artwork.title}</h1>
            <div className="artwork-actions">
              <button className="icon-btn">❤️</button>
              <button className="icon-btn">📤</button>
            </div>
          </div>

          <div className="artist-info">
            <span className="by-text">by</span>
            <button className="artist-link">{artwork.artist}</button>
            <span className="rating">⭐ {artwork.rating}</span>
          </div>

          <div className="artwork-meta">
            <span className="category-tag">{artwork.category}</span>
            <span className="medium-tag">{artwork.medium}</span>
            <span className="original-badge">Original</span>
          </div>

          <div className="artwork-price-section">
            <div className="price">${artwork.price}</div>
            {artwork.stock > 0 ? (
              <span className="stock-info">
                {artwork.stock} in stock
              </span>
            ) : (
              <span className="stock-info" style={{background: 'var(--accent-pink)', color: 'white'}}>
                Out of stock
              </span>
            )}
          </div>

          <div className="artwork-description">
            <p>{artwork.description}</p>
            <p className="detailed-description">
              This unique piece showcases the artist's distinctive style and attention to detail. 
              Each brushstroke tells a story of creative expression and technical mastery.
            </p>
          </div>

          {/* Details Grid */}
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Dimensions</span>
              <span className="detail-value">{artwork.size}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Medium</span>
              <span className="detail-value">{artwork.medium}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Year Created</span>
              <span className="detail-value">{artwork.year}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Condition</span>
              <span className="detail-value">Excellent</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Frame</span>
              <span className="detail-value">Not Included</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Shipping</span>
              <span className="detail-value">7-10 days</span>
            </div>
          </div>

          {/* Tags */}
          <div className="artwork-tags">
            {artwork.tags.map((tag, index) => (
              <span key={index} className="tag">#{tag}</span>
            ))}
          </div>

          {/* Purchase Section */}
          {artwork.stock > 0 ? (
            <div className="purchase-section">
              <div className="quantity-selector">
                <label>Quantity:</label>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(-1)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => handleQuantityChange(1)}>+</button>
                </div>
              </div>
              
              <div className="purchase-buttons">
                <button className="btn-cart">
                  🛒 Add to Cart
                </button>
                <button 
                  onClick={() => onNavigateToCheckout({
                    artwork: artwork,
                    quantity: quantity,
                    total: artwork.price * quantity
                  })} 
                  className="btn-buy"
                >
                  🎨 Buy Now (${artwork.price * quantity})
                </button>
              </div>
              
              <button className="btn-contact">
                💬 Contact Artist
              </button>
            </div>
          ) : (
            <div className="sold-message">
              <h3>This artwork has been sold</h3>
              <p>Contact us to commission a similar piece or explore other works by this artist.</p>
              <button className="btn-contact" style={{marginTop: '1rem'}}>
                💬 Contact About Commission
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Artist Section */}
      <div className="artist-section">
        <div className="section-container">
          <h2>About the Artist</h2>
          <div className="artist-card">
            <div className="artist-avatar">👩‍🎨</div>
            <div className="artist-details">
              <h3>{artwork.artist}</h3>
              <p className="artist-location">📍 New York, NY</p>
              <p className="artist-stats">⭐ 4.8 • 🎨 42 works • 👥 128 followers</p>
              <p className="artist-bio">
                {artwork.artist} is a passionate artist known for their unique style that blends 
                traditional techniques with modern expressions. With over 10 years of experience, 
                their work has been featured in galleries across the country.
              </p>
              <div className="artist-actions">
                <button className="btn-outline">Follow Artist</button>
                <button className="btn-outline">View Portfolio</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Artworks */}
      <div className="similar-artworks">
        <div className="section-container">
          <h2>Similar Artworks</h2>
          <div className="similar-grid">
            {sampleArtworks.filter(art => art.id !== artwork.id).slice(0, 3).map(similarArt => (
              <div key={similarArt.id} className="similar-card">
                <div className="similar-image">🖼️</div>
                <h4>{similarArt.title}</h4>
                <p>by {similarArt.artist}</p>
                <div className="price">${similarArt.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};