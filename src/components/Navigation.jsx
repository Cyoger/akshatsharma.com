import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button 
        className="fixed top-6 left-6 z-50 md:hidden bg-black/30 p-2 rounded-full backdrop-blur-sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </button>

      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 hidden md:flex justify-center items-center h-16 bg-black/50 backdrop-blur-md">
        <div className="container max-w-6xl mx-auto px-4 flex justify-center space-x-8">
          <a href="#home" className="text-white/60 hover:text-green-400 hover:border-b hover:border-green-400/50 py-1 transition-all duration-300">Home</a>
          <a href="#about" className="text-white/60 hover:text-green-400 hover:border-b hover:border-green-400/50 py-1 transition-all duration-300">About</a>
          <a href="#projects" className="text-white/60 hover:text-green-400 hover:border-b hover:border-green-400/50 py-1 transition-all duration-300">Projects</a>
          <a href="#skills" className="text-white/60 hover:text-green-400 hover:border-b hover:border-green-400/50 py-1 transition-all duration-300">Skills</a>
          <a href="#contact" className="text-white/60 hover:text-green-400 hover:border-b hover:border-green-400/50 py-1 transition-all duration-300">Contact</a>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-black/90 backdrop-blur-lg z-40 flex flex-col items-center justify-center ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'} transition-all duration-300 md:hidden`}
      >
        <nav className="flex flex-col items-center space-y-8">
          <a 
            href="#home" 
            className="text-white/80 text-2xl hover:text-green-400 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-white/80 text-2xl hover:text-green-400 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#projects" 
            className="text-white/80 text-2xl hover:text-green-400 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="text-white/80 text-2xl hover:text-green-400 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a 
            href="#contact" 
            className="text-white/80 text-2xl hover:text-green-400 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navigation;