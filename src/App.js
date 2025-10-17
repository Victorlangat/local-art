import { useState } from 'react';
import { Header } from './components/header';
import { Home } from './pages/home';
import { Gallery } from './pages/gallery';
import { Artists } from './pages/artist';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState(3);
  const [currentPage, setCurrentPage] = useState('home');

  const handleCartClick = () => {
    alert(`🛒 Cart clicked! You have ${cartItems} items in your cart.`);
  };

  const handleExploreClick = () => {
    if (currentPage === 'home') {
      const gallerySection = document.getElementById('gallery');
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      alert("🎨 You're already exploring our collection!");
    }
  };

  const handleHomeClick = () => {
    setCurrentPage('home');
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
  };

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
          const missionSection = document.getElementById('mission');
          if (missionSection) {
            missionSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
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

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'gallery':
        return <Gallery />;
      case 'artists':
        return <Artists />;
      default:
        return <Home />;
    }
  };

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
      <Header 
        cartItemCount={cartItems}
        onCartClick={handleCartClick}
        onExploreClick={handleExploreClick}
        onNavigation={handleHeaderNavigation}
      />

      <main className="main-content">
        {renderCurrentPage()}
      </main>

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