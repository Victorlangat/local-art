import { useState } from 'react';
import "./header.css";

export function Header({ cartItemCount, onCartClick, onExploreClick, onNavigation }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = () => {
    onNavigation('home');
    setIsMenuOpen(false);
  };

  const handleMissionClick = () => {
    onNavigation('mission');
    setIsMenuOpen(false);
  };

  const handleGalleryClick = () => {
    onNavigation('gallery');
    setIsMenuOpen(false);
  };

  const handleArtistsClick = () => {
    onNavigation('artists');
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home', action: handleHomeClick },
   
    { id: 'gallery', label: 'Gallery', action: handleGalleryClick },
    { id: 'artists', label: 'Artists', action: handleArtistsClick }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🎨</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">LocalArt</h1>
              <p className="text-xs text-gray-500 -mt-1">Gallery</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={link.action}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <span className="text-xl">🛒</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Explore Button - Desktop */}
            <button
              onClick={onExploreClick}
              className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Explore Art
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              <span className="text-xl">☰</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg">
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg font-bold text-gray-900">Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <span className="text-xl">✕</span>
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={link.action}
                    className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                
                {/* Explore Button - Mobile */}
                <button
                  onClick={() => {
                    onExploreClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Explore Art
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}