// eslint-disable-next-line no-unused-vars
import React from 'react'


const AboutCeo = () => {
    return (
        <>
          <main className="bg-white duration-300 mt-8 sm:mt-24 mb-8">
            <div className="container flex mt-10 sm:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-2 mb-2 sm:mt-20 sm:mb-10 place-items-center">
    
                {/* Image Section */}
                <div className="relative w-full flex justify-center">
                  <img 
                    src="/images/PsalmyPicture.png"
                    alt="Hero"
                    className=""
                  />
                </div>
                
                {/* Text Content Section */}
                <div className="space-y-5 xl:pl-11 ">
                  <h1 className="text-black text-lg md:text-left sm:text-xl font-normal uppercase">
                     Ceo Psalmy Exclusive
                  </h1>
                  <p className="text-black text-3xl md:text-left sm:text-4xl font-normal ">
                     Samuel Awonuga
                  </p>
                  <p className="text-gray-600 font-normal text-md  md:text-left">
                   Accomplished Fashion Designer with 9+ years of expertise in crafting innovative,
                   market-driven collections. My track record demonstrates the ability to merge artistic
                   vision with commercial success, fostering brand growth and profitability. Proficient in
                   design development, market analysis, and brand identity, I consistently deliver
                   trend-forward designs that engage diverse audiences. A strategic, creative approach
                   ensures successful execution from concept to final product. Thriving in collaborative
                   environments, I am passionate about pushing creative limits while staying attuned to
                   market trends.
                  </p>
                </div>
    
              </div>
            </div>

           
          </main>
        </>
      );
}

export default AboutCeo