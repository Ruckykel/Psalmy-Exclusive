import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Heritage Collection",
    image: "/images/Heritage1.webp",
    hoverImage: "/images/Heritage2.webp",
    link: "https://www.behance.net/gallery/218152483/Heritage-Collection"
  },
  {
    id: 2,
    name: "Tweed x Abstract Series",
    image: "/images/Tweed1.webp",
    hoverImage: "/images/Tweed2.webp",
    link: "https://www.behance.net/gallery/218153119/Tweed-x-Abstract-Series"
  },
  {
    id: 3,
    name: "Tweed x Abstract Series",
    image: "/images/Tweed3.webp",
    hoverImage: "/images/Tweed4.webp",
    link: "https://www.behance.net/gallery/218153119/Tweed-x-Abstract-Series"
  },
  {
    id: 4,
    name: "SS23 Collection",
    image: "/images/SS2.webp",
    hoverImage: "/images/SS2.webp",
    link: "https://www.behance.net/gallery/217504075/SS23-Collection"
  }
];

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

const BestSeller = () => {
  const [isHovering, setIsHovering] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imageIndices, setImageIndices] = useState(products.map(() => 0));
  const [selectedProductImages, setSelectedProductImages] = useState(null);
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setImageIndices(prev => prev.map(index => (index === 0 ? 1 : 0)));
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const handleScroll = (e) => {
    const container = e.target;
    const scrollPercentage = (container.scrollLeft / (container.scrollWidth - container.clientWidth)) * 100;
    setScrollProgress(scrollPercentage);
  };

  const openModal = (product) => {
    setSelectedProductImages([product.image, product.hoverImage]);
  };

  return (
    <>
      <div className="w-full mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl leading-tight text-center font-normal mb-11 sm:mb-11 uppercase tracking-extra">Explore Collections</h2>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto hide-scrollbar scroll-smooth"
          onScroll={handleScroll}
          style={{
            scrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {products.map((product, index) => (
            <a
              key={product.id}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isMobile ? 'w-1/2' : 'w-1/4'
              } flex-shrink-0 px-2`}
              onMouseEnter={() => !isMobile && setIsHovering(index)}
              onMouseLeave={() => !isMobile && setIsHovering(null)}
            >
              <div 
                className="relative overflow-hidden group cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  openModal(product);
                }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} alternate view`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[800ms] ease-in-out ${
                      (isMobile && imageIndices[index] === 1) || (!isMobile && isHovering === index)
                        ? 'opacity-100'
                        : 'opacity-0'
                    }`}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 group/arrow">
                  <h3 className="font-medium uppercase tracking-extra text-xs group-hover/arrow:underline transition-all duration-300">{product.name}</h3>
                  <ArrowRight 
                    size={16}
                    className="transform transition-transform duration-300 group-hover/arrow:translate-x-2"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        {isMobile && (
          <div className="flex justify-center mt-6">
            <div className="w-24 h-0.5 bg-gray-200">
              <div 
                className="h-full bg-black"
                style={{ 
                  width: `${scrollProgress}%`,
                  transition: 'none'
                }}
              />
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <button className="border border-black mt-12 px-8 py-3 text-xs uppercase tracking-extra hover:bg-black hover:text-white transition-colors duration-300">
            Find Your Perfect Style
          </button>
        </div>

        <style jsx>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      {/* Image Modal */}
      {selectedProductImages && (
        <ImageModal 
          images={selectedProductImages}
          initialIndex={0}
          onClose={() => setSelectedProductImages(null)}
        />
      )}
    </>
  );
};

export default BestSeller;