// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Logo.png'

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
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/Products' },
    { name: 'Contact', href: '/Contact' },
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
            <img src={Logo} alt="Logo" className='w-32 hover:cursor-pointer' />
          </a>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative py-2 text-gray-700 hover:text-black transition-all duration-200 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-black rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:w-4" />
              </a>
            ))}
            {/* Contact button - desktop only */}
            <a 
              href="https://flutterwave.com/store/psalmyexclusive"
              target="_blank" rel="noopener noreferrer"
              className="hidden lg:block bg-black text-white px-3 py-1.5 text-sm hover:opacity-80 transition-opacity"
            >
              SHOP
            </a>
          </div>

          {/* Hamburger menu button */}
          <button 
            className="lg:hidden hover:opacity-70 transition-opacity"
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:text-black hover:pl-4 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://flutterwave.com/store/psalmyexclusive"
              target="_blank" rel="noopener noreferrer"
              className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:text-black hover:pl-4 transition-all duration-200"
            >
              SHOP
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;