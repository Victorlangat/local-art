import { useState } from 'react';
import "./artist.css";

export function Artists() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample artists data
  const [artists, setArtists] = useState([
    {
      id: 1,
      name: "Sarah Chen",
      specialty: "Abstract & Modern Art",
      location: "New York, NY",
      experience: "8 years",
      artworks: 24,
      rating: 4.9,
      image: "👩‍🎨",
      bio: "Creating vibrant abstract pieces that explore color and emotion. Sarah's work has been featured in multiple local exhibitions and private collections.",
      categories: ["abstract", "modern"],
      isFeatured: true,
      social: {
        instagram: "@sarahchenart",
        website: "sarahchen.com"
      }
    },
    {
      id: 2,
      name: "Marcus Johnson",
      specialty: "Urban Landscapes",
      location: "Chicago, IL",
      experience: "12 years",
      artworks: 18,
      rating: 4.8,
      image: "👨‍🎨",
      bio: "Capturing the energy and rhythm of city life through painting. Marcus focuses on architectural beauty and urban storytelling.",
      categories: ["cityscape", "landscape"],
      isFeatured: true,
      social: {
        instagram: "@marcusj_art",
        website: "marcusjohnson.studio"
      }
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      specialty: "Seascapes & Nature",
      location: "Miami, FL",
      experience: "6 years",
      artworks: 32,
      rating: 4.7,
      image: "👩‍🎨",
      bio: "Bringing the tranquility of nature to life on canvas. Elena's seascapes are known for their calming presence and vibrant colors.",
      categories: ["seascape", "landscape"],
      isFeatured: false,
      social: {
        instagram: "@elenas_ocean",
        website: "elenarodriguez.art"
      }
    },
    {
      id: 4,
      name: "David Kim",
      specialty: "Mountain Landscapes",
      location: "Denver, CO",
      experience: "10 years",
      artworks: 15,
      rating: 5.0,
      image: "👨‍🎨",
      bio: "Majestic mountain ranges and dramatic landscapes. David's work captures the raw power and beauty of nature's grandest scenes.",
      categories: ["landscape"],
      isFeatured: true,
      social: {
        instagram: "@davidkim_mountains",
        website: "davidkim.art"
      }
    },
    {
      id: 5,
      name: "Maria Garcia",
      specialty: "Botanical Art",
      location: "Austin, TX",
      experience: "7 years",
      artworks: 28,
      rating: 4.6,
      image: "👩‍🎨",
      bio: "A delicate dance of colors and textures in floral masterpieces. Maria's botanical art brings the beauty of nature indoors.",
      categories: ["botanical"],
      isFeatured: false,
      social: {
        instagram: "@mariagarcia_flowers",
        website: "mariagarcia.botanical"
      }
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      specialty: "Desert Landscapes",
      location: "Phoenix, AZ",
      experience: "9 years",
      artworks: 21,
      rating: 4.8,
      image: "👨‍🎨",
      bio: "The raw beauty and spiritual essence of desert landscapes captured in warm tones. Ahmed's work evokes peace and contemplation.",
      categories: ["landscape"],
      isFeatured: true,
      social: {
        instagram: "@ahmedhassan_desert",
        website: "ahmedhassan.art"
      }
    },
    {
      id: 7,
      name: "Luna Park",
      specialty: "Cosmic Abstract",
      location: "Portland, OR",
      experience: "5 years",
      artworks: 19,
      rating: 4.5,
      image: "👩‍🎨",
      bio: "A celestial journey through space and time in cosmic abstract pieces. Luna's art explores the mysteries of the universe.",
      categories: ["abstract"],
      isFeatured: false,
      social: {
        instagram: "@lunapark_cosmic",
        website: "lunapark.gallery"
      }
    },
    {
      id: 8,
      name: "James Wilson",
      specialty: "Portrait Art",
      location: "Boston, MA",
      experience: "15 years",
      artworks: 36,
      rating: 4.9,
      image: "👨‍🎨",
      bio: "Intimate portraits capturing the quiet moments of human contemplation. James specializes in emotional depth and character.",
      categories: ["portrait"],
      isFeatured: false,
      social: {
        instagram: "@jameswilson_portraits",
        website: "jameswilson.portraits"
      }
    }
  ]);

  const categories = [
    { id: 'all', label: 'All Artists' },
    { id: 'abstract', label: 'Abstract' },
    { id: 'landscape', label: 'Landscape' },
    { id: 'cityscape', label: 'Cityscape' },
    { id: 'seascape', label: 'Seascape' },
    { id: 'portrait', label: 'Portrait' },
    { id: 'botanical', label: 'Botanical' }
  ];

  // Filter and search artists
  const filteredArtists = artists.filter(artist => {
    const matchesCategory = selectedCategory === 'all' || artist.categories.includes(selectedCategory);
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleViewPortfolio = (artist) => {
    alert(`🎨 Opening portfolio for ${artist.name}\n\nSpecialty: ${artist.specialty}\nLocation: ${artist.location}\nExperience: ${artist.experience}\n\nWebsite: ${artist.social.website}\nInstagram: ${artist.social.instagram}`);
  };

  const handleContactArtist = (artist) => {
    alert(`📧 Contacting ${artist.name}\n\nWe'll help you get in touch with ${artist.name} to discuss commissions or purchases.`);
  };

  const handleFollowArtist = (artist) => {
    alert(`✅ Following ${artist.name}\n\nYou'll receive updates when they add new artwork!`);
  };

  return (
    <div className="artists-page">
      {/* Artists Hero */}
      <section className="artists-hero">
        <div className="artists-hero-content">
          <h1 className="artists-title">Meet Our Artists</h1>
          <p className="artists-subtitle">
            Discover the talented local artists behind every masterpiece. 
            Each artist brings a unique perspective and story to their work.
          </p>
        </div>
      </section>

      {/* Artists Controls */}
      <section className="artists-controls">
        <div className="controls-container">
          {/* Search Bar */}
          <div className="search-group">
            <div className="search-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search artists by name, specialty, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="filter-group">
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
        </div>
      </section>

      {/* Artists Grid */}
      <section className="artists-section">
        <div className="artists-container">
          <div className="artists-grid">
            {filteredArtists.map(artist => (
              <div key={artist.id} className="artist-card">
                <div className="artist-header">
                  <div className="artist-avatar">
                    {artist.image}
                    {artist.isFeatured && (
                      <div className="featured-badge">Featured</div>
                    )}
                  </div>
                  <div className="artist-rating">
                    <span className="rating-stars">⭐</span>
                    <span className="rating-value">{artist.rating}</span>
                  </div>
                </div>

                <div className="artist-info">
                  <h3 className="artist-name">{artist.name}</h3>
                  <p className="artist-specialty">{artist.specialty}</p>
                  <p className="artist-location">📍 {artist.location}</p>
                  
                  <div className="artist-stats">
                    <div className="artist-stat">
                      <span className="stat-value">{artist.experience}</span>
                      <span className="stat-label">Experience</span>
                    </div>
                    <div className="artist-stat">
                      <span className="stat-value">{artist.artworks}</span>
                      <span className="stat-label">Artworks</span>
                    </div>
                  </div>

                  <p className="artist-bio">{artist.bio}</p>

                  <div className="artist-categories">
                    {artist.categories.map(category => (
                      <span key={category} className="category-tag">
                        {category}
                      </span>
                    ))}
                  </div>

                  <div className="artist-social">
                    <span className="social-handle">📷 {artist.social.instagram}</span>
                    <span className="social-handle">🌐 {artist.social.website}</span>
                  </div>
                </div>

                <div className="artist-actions">
                  <button 
                    className="portfolio-btn"
                    onClick={() => handleViewPortfolio(artist)}
                  >
                    View Portfolio
                  </button>
                  <button 
                    className="contact-btn"
                    onClick={() => handleContactArtist(artist)}
                  >
                    Contact
                  </button>
                  <button 
                    className="follow-btn"
                    onClick={() => handleFollowArtist(artist)}
                  >
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredArtists.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">🎨</div>
              <h3>No artists found</h3>
              <p>Try adjusting your search or filter criteria to find more artists.</p>
            </div>
          )}
        </div>
      </section>

      {/* Join Artist Community */}
      <section className="join-community">
        <div className="community-container">
          <div className="community-content">
            <h2 className="community-title">Are You an Artist?</h2>
            <p className="community-subtitle">
              Join our community of local artists and showcase your work to art lovers worldwide.
            </p>
            <div className="community-benefits">
              <div className="benefit">
                <span className="benefit-icon">🎯</span>
                <span>Reach new collectors</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">💼</span>
                <span>Professional exposure</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">🤝</span>
                <span>Community support</span>
              </div>
            </div>
            <button className="join-btn">
              Apply to Join
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}