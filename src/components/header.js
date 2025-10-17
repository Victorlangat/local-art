import { useState } from 'react';
import "./header.css";

export function Header({ cartItemCount, onCartClick, onExploreClick, onNavigation }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    onNavigation(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                🎨
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">LocalArt</div>
                <div className="text-xs text-gray-500 -mt-1">Gallery</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => handleNavClick('home')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('gallery')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => handleNavClick('artists')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Artists
              </button>
              <button 
                onClick={() => handleNavClick('mission')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </button>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Cart */}
              <button 
                onClick={onCartClick}
                className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                🛒
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Explore Button */}
              <button 
                onClick={onExploreClick}
                className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Explore Art
              </button>

              {/* Mobile menu button */}
              <button 
                onClick={handleMobileMenu}
                className="md:hidden p-2 text-gray-700 hover:text-gray-900"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Menu Panel */}
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg p-6">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-bold text-gray-900">Menu</h3>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <nav className="space-y-6">
              <button 
                onClick={() => handleNavClick('home')}
                className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('gallery')}
                className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => handleNavClick('artists')}
                className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Artists
              </button>
              <button 
                onClick={() => handleNavClick('mission')}
                className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={onExploreClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Explore Art
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}