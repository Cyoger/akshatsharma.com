import React from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialLinks = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Cyoger', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/akshat8d/', label: 'LinkedIn' },
    { icon: FaXTwitter, url: 'https://x.com/Cy0ger', label: 'X' },
  ];

  return (
    <>
      {/* Desktop social links */}
      <div className="fixed bottom-6 left-6 md:bottom-10 md:left-10 flex space-x-4 z-40 bg-black/30 p-2 rounded backdrop-blur-sm hidden md:flex">
        {socialLinks.map((social, index) => (
          <a 
            key={index}
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/70 hover:text-green-400 transition-all duration-300 hover:-translate-y-1"
            aria-label={social.label}
          >
            <social.icon size={24} />
          </a>
        ))}
      </div>

      {/* Mobile social links at top */}
      <div className="fixed top-6 right-6 z-40 flex space-x-3 md:hidden">
        {socialLinks.map((social, index) => (
          <a 
            key={index}
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/70 hover:text-green-400 transition-all duration-300 bg-black/30 p-1.5 rounded-full backdrop-blur-sm"
            aria-label={social.label}
          >
            <social.icon size={18} />
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialLinks;