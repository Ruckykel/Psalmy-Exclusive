// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

const TikTokIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={props.className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const SocialMedia = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      link: 'mailto:psalmy01@outlook.com',
      handle: 'psalmy01@outlook.com'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      link: 'https://instagram.com/psalmyexclusive',
      handle: '@psalmyexclusive'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      link: 'https://www.linkedin.com/in/samuel-awonuga-02847687',
      handle: 'Samuel Awonuga'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      link: 'https://twitter.com/psalmyexclusive',
      handle: '@psalmyexclusive'
    },
    {
      name: 'TikTok',
      icon: <TikTokIcon className="w-6 h-6" />,
      link: 'https://tiktok.com/@psalmyexclusive',
      handle: '@psalmyexclusive'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-black py-6">
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 mb-8">
            Connect with us through our social channels or send us an email.
          </p>
          <div className="h-px bg-black w-16 mx-auto"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-6 border border-black hover:bg-black hover:text-white transition-all duration-300 flex flex-col items-center gap-4">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
                <h3 className="text-xl font-semibold">{social.name}</h3>
                <p className="text-sm opacity-80">{social.handle}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center mb-20">
          <p className="text-sm text-gray-600 mb-4">
            We typically respond within 24-48 hours
          </p>
          <div className="h-px bg-black w-16 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;