// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: "Abstract Print Shirt",
    image: "/images/Seven1.jpg",
    hoverImage: "/images/Seven2.jpg"
  },
  {
    id: 2,
    name: "Patterned Loose Fit Pants",
    image: "/images/TwentyNine1.jpg",
    hoverImage: "/images/TwentyNine2.jpg"
  },
  {
    id: 3,
    name: "Oversized Cotton Blazer",
    image: "/images/ThirtyThree1.jpg",
    hoverImage: "/images/ThirtyThree2.jpg"
  },
  {
    id: 4,
    name: "Geometric Print Jacket",
    image: "/images/Six1.jpg",
    hoverImage: "/images/Six2.jpg"
  }
];

const BestSeller = () => {
  const [isHovering, setIsHovering] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imageIndices, setImageIndices] = useState(products.map(() => 0));
  const [isLinkHovered, setIsLinkHovered] = useState(false);
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

  return (
    <div className="w-full mx-auto sm:py-16 px-4 py-11">
      <h2 className="text-3xl sm:text-4xl leading-tight text-center font-normal mb-11 sm:mb-16">Best Sellers</h2>

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
          <div
            key={product.id}
            className={`${
              isMobile ? 'w-1/2' : 'w-1/4'
            } flex-shrink-0 px-2`}
            onMouseEnter={() => !isMobile && setIsHovering(index)}
            onMouseLeave={() => !isMobile && setIsHovering(null)}
          >
            <div className="relative overflow-hidden group">
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
            <div className="mt-4 space-y-1">
              <h3 className="font-medium">{product.name}</h3>
            </div>
          </div>
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
        <a href="/Products">
            <button className="border border-black mt-12 px-8 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300">
              Find Your Perfect Style
            </button>
        </a>
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
  );
};

export default BestSeller;