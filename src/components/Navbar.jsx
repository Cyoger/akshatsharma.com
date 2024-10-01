import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#e1e1e1' }} className="shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Akshat Sharma Logo" className="h-10 w-10 mr-2" />
          <Link to="home" smooth={true} duration={500} className="text-2xl font-bold" style={{ color: '#1f2947' }}>
            Akshat Sharma
          </Link>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500" style={{ color: '#1f2947' }}>Home</Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500" style={{ color: '#1f2947' }}>About</Link>
          <Link to="portfolio" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500" style={{ color: '#1f2947' }}>Portfolio</Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500" style={{ color: '#1f2947' }}>Skills</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500" style={{ color: '#1f2947' }}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
