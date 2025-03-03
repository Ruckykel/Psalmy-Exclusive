import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navigationItems = [
    { name: 'HOME', href: '/' },
    { name: 'COLLECTION', href: '/Collection' },
    { name: 'CONTACT', href: '/Contact' },
  ];

  return (
    <nav 
      className={`fixed w-full bg-white transition-transform duration-300 z-50 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand logo */}
          <a href="/">
            <img src={Logo} alt="Logo" className="w-32 hover:cursor-pointer" />
          </a>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative py-2 text-black hover:text-black transition-all duration-200 group tracking-extra text-xs"
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-black rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:w-4" />
              </a>
            ))}
            {/* Shop button with better icon - desktop */}
            <a 
              href="https://psalmyexclusive.myshopify.com/collections/all"
              target="_blank" rel="noopener noreferrer"
              className="bg-black text-white px-6 py-1.5 text-xs hover:opacity-80 transition-opacity tracking-widest flex items-center gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              SHOP
            </a>
          </div>

          {/* Mobile navigation controls */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Shop icon for mobile - black with border */}
            <a 
              href="https://psalmyexclusive.myshopify.com/collections/all"
              target="_blank" rel="noopener noreferrer"
              className="text-black hover:opacity-70 transition-opacity border border-black p-1.5 rounded"
            >
              <ShoppingCart className="h-4 w-4" />
            </a>
            
            {/* Hamburger menu button */}
            <button 
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - without shop button */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2.5 text-xs font-medium text-black hover:text-black hover:pl-4 transition-all duration-200 tracking-extra"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;