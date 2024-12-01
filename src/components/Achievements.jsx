// eslint-disable-next-line no-unused-vars
import React from 'react'

const Achievements = () => {
    const achievements = [
        "Heritage Fashion Show- Mr Tourism Africa (September 2024)",
        "Music Video Africa Awards, Lagos Nigeria (September 2024)",
        "Men's Fashion Week Nigeria- Abuja Nigeria (August 2024)",
        "Adjafi Show, Lome, Togo (August, 2024)",
        "Africa Fashion Week London- London UK (October 2023)"
      ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12 container pb-16 pt-8 sm:pt-16">
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
  )
}

export default Achievements