// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const HomeHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "/images/HeroPictureOne.png",
      alt: "First Collection"
    },
    {
      src: "/images/HeroPictureTwo.png",
      alt: "Second Collection"
    },
    {
      src: "/images/HeroPictureThree.png",
      alt: "Third Collection"
    },
    {
      src: "/images/HeroPictureFour.png",
      alt: "Fourth Collection"
    }
  ];

  // Creating a duplicate of images for continuous scrolling
  const extendedImages = [...images, ...images];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        // When we reach the end of original images, quickly reset to start
        if (prev + 2 >= images.length) {
          return 0;
        }
        return prev + 2;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="w-full min-h-screen bg-white mt-8 relative">
      {/* Desktop Layout - Show all images in a row */}
      <div className="hidden lg:block">
        <div className={`w-screen h-[85vh] flex transform transition-all duration-[1200ms] ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {images.map((image, index) => (
            <div
              key={index}
              className="w-1/4 h-full"
              style={{ marginRight: index !== 3 ? '-1px' : '0' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Desktop Text Content - Below Images */}
        <div 
          className={`container mx-auto px-4 py-12 transform transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[3.5rem] leading-tight font-light mb-6">
              Welcome to <br />
              <span className="font-normal">Psalmy Exclusive clothing</span>
            </h1>
            <p className="text-lg text-gray-600 font-light mb-8 max-w-2xl mx-auto">
              Experience the finest in contemporary design and craftsmanship. 
              Our collections embody the perfect blend of tradition and innovation.
            </p>
            <a href="/Products">
            <button className="border border-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300">
              Explore Collections
            </button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout - Forward-Only Slideshow with Overlay */}
      <div className="lg:hidden relative">
        <div className={`relative h-[85vh] overflow-hidden ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <div 
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ 
              transform: `translateX(-${currentSlide * 50}%)`,
              transitionTimingFunction: 'linear'
            }}
          >
            {extendedImages.map((image, index) => (
              <div key={index} className="w-1/2 flex-shrink-0 h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Mobile Overlay Text Content */}
          <div 
            className={`absolute inset-0 flex items-center justify-center bg-black/30 transform transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="text-center px-4">
              <h1 className="text-3xl leading-tight font-light mb-6 text-white drop-shadow-lg">
                Welcome to <br />
                <span className="font-normal">Psalmy Exclusive clothing</span>
              </h1>
              <a href="/Products">
                <button className="bg-white/90 hover:bg-white border border-white px-8 py-3 text-sm uppercase tracking-wider transition-colors duration-300">
                  Explore Collections
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;