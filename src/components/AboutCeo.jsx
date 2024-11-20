// eslint-disable-next-line no-unused-vars
import React from 'react'


const AboutCeo = () => {
    const achievements = [
    "Heritage Fashion Show- Mr Tourism Africa (September 2024)",
    "Music Video Africa Awards, Lagos Nigeria (September 2024)",
    "Men's Fashion Week Nigeria- Abuja Nigeria (August 2024)",
    "Adjafi Show, Lome, Togo (August, 2024)",
    "Africa Fashion Week London- London UK (October 2023)"
  ];
    return (
        <>
          <main className="bg-white duration-300 mt-24 sm:mt-8">
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
                     Ceo Psalmy Exclusive clothing
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

            <div className="container py-16">
  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12">
    {/* Achievements Column */}
    <div className="group">
      <h1 className="text-black text-3xl tracking-wider md:text-left sm:text-4xl font-normal uppercase mb-8">
        Achievements
      </h1>
      <div>
        <ul className="space-y-4">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-center space-x-3 group/item transition-all duration-300 hover:translate-x-1">
              <div className="w-1.5 h-1.5 bg-black group-hover/item:w-2 group-hover/item:h-2 transition-all duration-300" />
              <span className="font-normal text-md tracking-wide">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Fashion Show Article */}
    <div className="group">
      <div className="overflow-hidden mb-4">
        <img 
          src="/images/FashionShow.png" 
          alt="Fashion Show" 
          className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <a 
        className="inline-block underline text-sm font-normal tracking-wide  transition-all duration-300 hover:translate-x-2" 
        href=""
      >
        Psalmy Exclusive stands out at designers headline Africa fashion week in London
      </a>
    </div>

    {/* Fashion Week Article */}
    <div className="group">
      <div className="overflow-hidden mb-4">
        <img 
          src="/images/FashionWeek.png" 
          alt="Fashion Week" 
          className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <a 
        className=" underline inline-block text-sm font-normal tracking-wide  transition-all duration-300 hover:translate-x-2" 
        href=""
      >
        Psalmy Exclusive Shines At Men's Fashion Week Nigeria With Exquisite Designs
      </a>
    </div>
  </div>
</div>
          </main>
        </>
      );
}

export default AboutCeo