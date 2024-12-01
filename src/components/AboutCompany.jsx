// eslint-disable-next-line no-unused-vars
import React from 'react';

const AboutCompany = () => {
  return (
    <>
      <main className="bg-black duration-300 mt-8 sm:mt-24 pb-8 pt-4">
        <div className="container flex mt-10 sm:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-2 mb-2 sm:mt-16 sm:mb-10 place-items-center">

            {/* Image Section */}
            <div className="relative order-1 lg:order-2 w-full flex justify-center">
              <img 
                src="/images/AboutLogo.svg"
                alt="Hero"
                className=""
              />
            </div>

            {/* Text Content Section */}
            <div className="space-y-5 xl:pr-11 order-2 lg:order-1">
              <h1 className="text-white text-3xl md:text-left sm:text-4xl font-normal uppercase">
                 Psalmy Exclusive
              </h1>
              <p className="text-white font-normal text-md  md:text-left">
              Psalmy Exclusive is a distinguished fashion brand based in Lagos, Nigeria, that caters to the refined tastes of the sophisticated African gentleman. Committed to producing stylish, high-quality, and affordable clothing, the brand draws inspiration from both traditional and contemporary aesthetics, crafting each piece with a perfect blend of innovation and cultural pride. Psalmy Exclusive's collections reflect the elegance and versatility desired by today’s modern man, offering an array of meticulously designed outfits that resonate with classic African style and international trends. With an emphasis on creativity, Psalmy Exclusive encourages clients to express their individuality through personalized customization options. Each garment can be tailored to meet specific tastes, allowing customers to bring their style vision to life with the brand’s professional expertise. This focus on personalization sets Psalmy Exclusive apart, making it a favorite among gentlemen who value both quality craftsmanship and the freedom to define their own fashion identity.
              </p>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default AboutCompany;