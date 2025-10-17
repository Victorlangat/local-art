import { useState } from 'react';
import { Header } from './components/header';
import { Home } from './pages/home';
import { Gallery } from './pages/gallery';
import { Artists } from './pages/artist';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState(3); // Example cart count
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'gallery', or 'artists'

  const handleCartClick = () => {
    alert(`🛒 Cart clicked! You have ${cartItems} items in your cart.`);
    // In real app, this would open cart modal/sidebar
  };

  const handleExploreClick = () => {
    if (currentPage === 'home') {
      // Scroll to gallery section on home page
      const gallerySection = document.getElementById('gallery');
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If already on gallery or artists page, just show a message
      alert("🎨 You're already exploring our collection!");
    }
  };

  const handleHomeClick = () => {
    setCurrentPage('home');
    // Scroll to top when switching pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGalleryClick = () => {
    setCurrentPage('gallery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleArtistsClick = () => {
    setCurrentPage('artists');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (artId) => {
    setCartItems(prev => prev + 1);
    alert(`🎨 Added artwork #${artId} to cart! Total items: ${cartItems + 1}`);
  };

  const handleViewDetails = (artId) => {
    alert(`🔍 Viewing details for artwork #${artId}`);
    // In real app, this would navigate to detail page or open modal
  };

  // Navigation handler for header
  const handleHeaderNavigation = (sectionId) => {
    switch (sectionId) {
      case 'home':
        handleHomeClick();
        break;
      case 'gallery':
        handleGalleryClick();
        break;
      case 'artists':
        handleArtistsClick();
        break;
      case 'mission':
        if (currentPage === 'home') {
          // Scroll to mission section on home page
          const missionSection = document.getElementById('mission');
          if (missionSection) {
            missionSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // If on another page, switch to home first then scroll
          handleHomeClick();
          setTimeout(() => {
            const missionSection = document.getElementById('mission');
            if (missionSection) {
              missionSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
        break;
      default:
        handleHomeClick();
    }
  };

  // Render current page content
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home 
            onAddToCart={handleAddToCart}
            onViewDetails={handleViewDetails}
          />
        );
      case 'gallery':
        return (
          <Gallery 
            onAddToCart={handleAddToCart}
            onViewDetails={handleViewDetails}
          />
        );
      case 'artists':
        return (
          <Artists 
            onAddToCart={handleAddToCart}
            onViewDetails={handleViewDetails}
          />
        );
      default:
        return (
          <Home 
            onAddToCart={handleAddToCart}
            onViewDetails={handleViewDetails}
          />
        );
    }
  };

  // Get current page title for footer
  const getCurrentPageTitle = () => {
    switch (currentPage) {
      case 'home': return 'Home';
      case 'gallery': return 'Gallery';
      case 'artists': return 'Artists';
      default: return 'Home';
    }
  };

  return (
    <div className="App">
      {/* Header with navigation */}
      <Header 
        cartItemCount={cartItems}
        onCartClick={handleCartClick}
        onExploreClick={handleExploreClick}
        onNavigation={handleHeaderNavigation}
      />

      {/* Main content - Dynamic page rendering */}
      <main className="main-content">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">🎨</div>
              <div>
                <h3>LocalArt Gallery</h3>
                <p>Bringing local art to your space</p>
                <p className="current-page-indicator">
                  Currently viewing: <strong>{getCurrentPageTitle()}</strong>
                </p>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Explore</h4>
                <button 
                  onClick={handleHomeClick} 
                  className={`footer-link ${currentPage === 'home' ? 'current-page' : ''}`}
                >
                  Home
                </button>
                <button 
                  onClick={handleGalleryClick} 
                  className={`footer-link ${currentPage === 'gallery' ? 'current-page' : ''}`}
                >
                  Gallery
                </button>
                <button 
                  onClick={handleArtistsClick} 
                  className={`footer-link ${currentPage === 'artists' ? 'current-page' : ''}`}
                >
                  Artists
                </button>
              </div>
              
              <div className="footer-column">
                <h4>Support</h4>
                <button 
                  onClick={() => handleHeaderNavigation('mission')} 
                  className="footer-link"
                >
                  About Us
                </button>
                <button className="footer-link">
                  Contact
                </button>
                <button className="footer-link">
                  FAQ
                </button>
              </div>
              
              <div className="footer-column">
                <h4>Legal</h4>
                <button className="footer-link">
                  Privacy Policy
                </button>
                <button className="footer-link">
                  Terms of Service
                </button>
                <button className="footer-link">
                  Shipping Info
                </button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 LocalArt Gallery. All rights reserved.</p>
            <div className="social-links">
              <span>Follow us: </span>
              <button className="social-link" aria-label="Instagram">📸</button>
              <button className="social-link" aria-label="Facebook">📘</button>
              <button className="social-link" aria-label="Twitter">🐦</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;