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
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 container pb-16 pt-8 sm:pt-16">
    {/* Achievements Column */}
    <div className="group hidden">
      <h1 className="text-black text-2xl md:text-left sm:text-3xl font-normal uppercase mb-8 tracking-extra">
        Achievements
      </h1>
      <div>
        <ul className="space-y-4">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-center space-x-3 group/item transition-all duration-300 hover:translate-x-1">
              <div className="w-1.5 h-1.5 bg-black group-hover/item:w-2 group-hover/item:h-2 transition-all duration-300" />
              <span className="font-normal text-md tracking-wide text-sm">{achievement}</span>
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
        href="https://www.fashionghana.com/site/psalmy-exclusive-accra-fashion-week-2024/"
      >
        https://www.fashionghana.com/site/psalmy-exclusive-accra-fashion-week-2024/
      </a>
      <a 
        className="inline-block underline text-sm font-normal tracking-wide  transition-all duration-300 hover:translate-x-2 mt-4" 
        href="https://allure.vanguardngr.com/2024/11/samuel-awonugas-psalmy-exclusive-where-african-heritage-meets-contemporary-style/"
      >
        https://allure.vanguardngr.com/2024/11/samuel-awonugas-psalmy-exclusive-where-african-heritage-meets-contemporary-style/
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
        href="https://fashionbombdaily.com/2025/01/22/psalmy-exclusive-redefining-nigerian-fashion-with-bold-innovation/"
      >
        https://fashionbombdaily.com/2025/01/22/psalmy-exclusive-redefining-nigerian-fashion-with-bold-innovation/
      </a>
    </div>
  </div>
  )
}

export default Achievements