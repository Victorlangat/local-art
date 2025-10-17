import { useState } from 'react';
import "./home.css";

export function Home() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`🎉 Thanks for subscribing with ${email}! We'll keep you updated on local art events.`);
      setEmail('');
    }
  };

  const handleGetStarted = () => {
    alert("🚀 Let's get started! You'll be redirected to our gallery.");
    // In real app, navigate to gallery page
  };

  const handleLearnMore = () => {
    const missionSection = document.getElementById('mission');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              🎨 Discover Local Talent
            </div>
            <h1 className="hero-title">
              Where Local Art
              <span className="hero-highlight"> Comes to Life</span>
            </h1>
            <p className="hero-subtitle">
              Connect with talented artists in your community. Discover unique artwork, 
              support local creativity, and find pieces that tell your story.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleGetStarted}>
                Explore Artwork
              </button>
              <button className="btn-secondary" onClick={handleLearnMore}>
                Learn More
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Local Artists</div>
              </div>
              <div className="stat">
                <div className="stat-number">2,000+</div>
                <div className="stat-label">Artworks</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Happy Collectors</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-art art-1">🖼️</div>
            <div className="floating-art art-2">👩‍🎨</div>
            <div className="floating-art art-3">✨</div>
            <div className="floating-art art-4">🎭</div>
            <div className="floating-art art-5">🌈</div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="mission-section">
        <div className="section-container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-title">
                Supporting Local Creativity, 
                <span className="text-gradient"> One Piece at a Time</span>
              </h2>
              <p className="mission-description">
                LocalArt is more than just a gallery—it's a movement. We believe every community 
                has incredible artistic talent waiting to be discovered. Our platform connects 
                art lovers with local creators, making art accessible to everyone while supporting 
                the artists who make our neighborhoods vibrant.
              </p>
              <div className="mission-features">
                <div className="feature">
                  <div className="feature-icon">💫</div>
                  <div className="feature-text">
                    <h3>Discover Hidden Gems</h3>
                    <p>Find unique artwork from emerging local talents</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">🤝</div>
                  <div className="feature-text">
                    <h3>Support Local Economy</h3>
                    <p>100% of art sales go directly to the artists</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">🎯</div>
                  <div className="feature-text">
                    <h3>Curated Selection</h3>
                    <p>Every piece is carefully selected for quality and originality</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <div className="visual-grid">
                <div className="grid-item item-1">🦄</div>
                <div className="grid-item item-2">🚀</div>
                <div className="grid-item item-3">🌻</div>
                <div className="grid-item item-4">🎪</div>
                <div className="grid-item item-5">🦋</div>
                <div className="grid-item item-6">🎡</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">How LocalArt Works</h2>
            <p className="section-subtitle">
              Simple steps to discover and own amazing local artwork
            </p>
          </div>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-icon">🔍</div>
              <h3>Browse & Discover</h3>
              <p>Explore artwork from local artists in your area. Filter by style, medium, or artist.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-icon">❤️</div>
              <h3>Fall in Love</h3>
              <p>Find pieces that speak to you. Save your favorites and learn about the artists.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-icon">🏠</div>
              <h3>Bring Home</h3>
              <p>Purchase securely and receive your artwork with careful packaging and fast shipping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="section-container">
          <div className="community-content">
            <div className="community-visual">
              <div className="community-art">🎨</div>
              <div className="community-art">🌟</div>
              <div className="community-art">🦄</div>
            </div>
            <div className="community-text">
              <h2 className="section-title">
                Join Our Growing
                <span className="text-gradient"> Art Community</span>
              </h2>
              <p className="community-description">
                Become part of a vibrant community that celebrates local art. Attend virtual exhibitions, 
                meet artists, share your collection, and connect with fellow art enthusiasts.
              </p>
              <div className="community-stats">
                <div className="community-stat">
                  <div className="community-number">10K+</div>
                  <div className="community-label">Community Members</div>
                </div>
                <div className="community-stat">
                  <div className="community-number">50+</div>
                  <div className="community-label">Cities</div>
                </div>
                <div className="community-stat">
                  <div className="community-number">100+</div>
                  <div className="community-label">Events Yearly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Discover
              <span className="cta-highlight"> Your Next Favorite Piece?</span>
            </h2>
            <p className="cta-subtitle">
              Join thousands of art lovers who've found their perfect artwork through LocalArt
            </p>
            <div className="cta-buttons">
              <button className="btn-primary-large" onClick={handleGetStarted}>
                Start Exploring Now
              </button>
              <button className="btn-secondary-large">
                Meet Our Artists
              </button>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="newsletter-section">
            <div className="newsletter-card">
              <div className="newsletter-icon">📧</div>
              <h3>Stay in the Loop</h3>
              <p>Get updates on new artists, exclusive collections, and local art events</p>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}