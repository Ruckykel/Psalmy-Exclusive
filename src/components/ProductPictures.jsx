// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductData } from './ProductData';

const ImageModal = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextImage();
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      prevImage();
    }
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
      >
        <X size={24} />
      </button>

      <div className="relative w-full max-w-2xl aspect-[3/4] max-h-[90vh]">
        <button 
          onClick={prevImage} 
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
        >
          <ChevronLeft size={24} />
        </button>

        <img 
          src={images[currentIndex]} 
          alt={`Product view ${currentIndex + 1}`} 
          className="w-full h-full object-contain"
        />

        <button 
          onClick={nextImage} 
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const ProductPictures = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [selectedProductImages, setSelectedProductImages] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const productsPerPage = 12;
  const totalPages = Math.ceil(ProductData.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = ProductData.slice(indexOfFirstProduct, indexOfLastProduct);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setWindowWidth(window.innerWidth);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleProductClick = (product) => {
    const images = [product.mainImage, product.hoverImage];
    setSelectedProductImages(images);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-2xl sm:text-3xl leading-tight text-center font-normal mb-11 sm:mb-16 uppercase tracking-extra">Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentProducts.map((product) => (
          <motion.div
            key={product.id}
            className="relative overflow-hidden cursor-pointer group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleProductClick(product)}
            onMouseEnter={() => !isMobile && setHoveredId(product.id)}
            onMouseLeave={() => !isMobile && setHoveredId(null)}
          >
            <div className="relative overflow-hidden aspect-[3/4]">
              {/* Main Image - Always visible */}
              <img
                src={product.mainImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Hover Image - Only on desktop */}
              {windowWidth >= 1024 && (
                <img
                  src={product.hoverImage}
                  alt={`${product.name} alternate view`}
                  className={`
                    absolute inset-0 w-full h-full object-cover 
                    transition-opacity duration-[800ms] ease-in-out
                    ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}
                  `}
                />
              )}
            </div>

            <div className="mt-4 space-y-2">
              <h3 className="font-medium uppercase tracking-extra text-xs">{product.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-12 mb-8">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={`
              w-10 h-10 rounded-full text-sm font-medium
              transition-all duration-200 ease-in-out
              ${currentPage === pageNum
                ? 'bg-gray-100 text-black'
                : 'text-gray-500 hover:text-black hover:bg-gray-50'
              }
            `}
          >
            {pageNum}
          </button>
        ))}
      </div>

      {/* Image Modal */}
      {selectedProductImages && (
        <ImageModal 
          images={selectedProductImages}
          initialIndex={0}
          onClose={() => setSelectedProductImages(null)}
        />
      )}
    </div>
  );
};

export default ProductPictures;