// eslint-disable-next-line no-unused-vars
import React from 'react';

const HomeAbout = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl text-black leading-tight text-center font-normal ">
          About Us
        </h2>
        
        <div className="flex flex-row items-center gap-8 max-w-4xl mx-auto mt-5 md:mt-5 lg:mt-0">
          {/* Image container */}
          <div className="w-1/2 flex items-center justify-center">
            <div className="w-full">
              <img
                src="/images/AboutLogo.svg"
                alt="Connect with us"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          {/* Content container */}
          <div className="w-1/2 space-y-4">
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
             Psalmy Exclusive is a distinguished fashion brand based in Lagos, Nigeria, that caters to the refined tastes of the sophisticated African gentleman. Committed to producing stylish, high-quality, and affordable clothing, the brand draws inspiration from both traditional and contemporary aesthetics, crafting each piece with a perfect blend of innovation and...
            </p>
            
            <div className="flex gap-3">
              
            <a href="/About">
            <button className="bg-black text-white px-8 py-3 text-sm uppercase tracking-wider hover:px-9 hover:py-4 transition-all duration-300 ease-in-out">
            Learn more about us
            </button>
            </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;