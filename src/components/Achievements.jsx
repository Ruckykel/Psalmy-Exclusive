import React from 'react';

const Achievements = () => {
  const pressLinks = [
    {
      url: "https://fashionbombdaily.com/2025/01/22/psalmy-exclusive-redefining-nigerian-fashion-with-bold-innovation/",
      title: "Fashion Bomb Daily: Psalmy Exclusive Redefining Nigerian Fashion"
    },
    {
      url: "https://www.fashionghana.com/site/psalmy-exclusive-accra-fashion-week-2024/",
      title: "Fashion Ghana: Psalmy Exclusive at Accra Fashion Week"
    },
    {
      url: "https://allure.vanguardngr.com/2024/11/samuel-awonugas-psalmy-exclusive-where-african-heritage-meets-contemporary-style/",
      title: "Allure: Samuel Awonuga's Psalmy Exclusive - Where African Heritage Meets Style"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-normal tracking-extra uppercase mb-12 text-center">
        Featured Press
      </h1>
      <div className="max-w-2xl mx-auto">
        {pressLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="block mb-6 p-4 rounded-lg transition-all duration-300 hover:translate-x-2"
          >
            <div className="text-lg text-gray-900 hover:text-gray-800 transition-colors duration-300 text-center underline">
              {link.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Achievements;