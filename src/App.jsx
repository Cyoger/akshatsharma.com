// File: src/App.jsx
import React from 'react';
import Navigation from './components/Navigation';
import SocialLinks from './components/SocialLinks';
import Clock from './components/Clock';
import AsciiArt from './components/AsciiArt';
import ProjectsSection from './components/ProjectsSection';
import AsciiRain from './components/AsciiRain';
import BlurMotion from './components/BlurMotion';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-red-800/60 mix-blend-overlay z-10"></div>
      
      {/* Blur Motion Effect */}
      <BlurMotion />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Social Media Links */}
      <SocialLinks />
      
      {/* Clock (Wong Kar-wai time motif) */}
      <Clock />
      
      {/* Main Content Container */}
      <div className="relative w-full mx-auto px-4 pb-20">
        {/* ASCII Art Container */}
        <AsciiArt />

        {/* About Section */}
        <section id="about" className="relative mt-24 md:mt-32 w-full max-w-6xl mx-auto z-30 px-4 md:px-5">
          <h2 className="text-2xl text-center md:text-left uppercase tracking-widest mb-4 md:mb-6 text-white/90">About</h2>
          <div className="bg-black/30 backdrop-blur-sm p-4 md:p-6 rounded">
            <p className="text-white/80 mb-4">
              I craft digital experiences at the intersection of functionality and aesthetics. With a focus on modern web technologies and innovative solutions, I bring ideas to life through clean, efficient code.
            </p>
            <p className="text-white/80">
              My approach draws inspiration from cinematic storytelling - creating immersive digital spaces that engage and resonate. Each project is a composition of technical precision and creative expression.
            </p>
          </div>
        </section>
        
        {/* Projects Section */}
        <ProjectsSection />

        {/* Skills Section */}
        <section id="skills" className="relative mt-24 md:mt-32 w-full max-w-6xl mx-auto z-30 px-4 md:px-5">
          <h2 className="text-2xl text-center md:text-left uppercase tracking-widest mb-4 md:mb-6 text-white/90">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Languages */}
            <div className="bg-black/30 backdrop-blur-sm p-5 rounded">
              <h3 className="text-xl border-b border-green-400/30 pb-2 mb-4 text-green-400">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['C', 'C++', 'Python', 'Go', 'Java', 'JavaScript', 'TypeScript', 'SQL'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-black/20 text-white/80 hover:text-yellow-400 hover:bg-black/40 rounded-full text-sm transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Frontend */}
            <div className="bg-black/30 backdrop-blur-sm p-5 rounded">
              <h3 className="text-xl border-b border-green-400/30 pb-2 mb-4 text-green-400">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'HTML', 'CSS', 'TailwindCSS', 'SCSS', 'Redux', 'Next.js', 'Material UI'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-black/20 text-white/80 hover:text-yellow-400 hover:bg-black/40 rounded-full text-sm transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Backend & Tools */}
            <div className="bg-black/30 backdrop-blur-sm p-5 rounded">
              <h3 className="text-xl border-b border-green-400/30 pb-2 mb-4 text-green-400">Backend & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker', 'Git', 'AWS', 'CI/CD'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-black/20 text-white/80 hover:text-yellow-400 hover:bg-black/40 rounded-full text-sm transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative mt-24 md:mt-32 w-full max-w-6xl mx-auto z-30 px-4 md:px-5 mb-24">
          <h2 className="text-2xl text-center md:text-left uppercase tracking-widest mb-4 md:mb-6 text-white/90">Contact</h2>
          <div className="bg-black/30 backdrop-blur-sm p-4 md:p-6 rounded text-center md:text-left">
            <p className="text-white/80 mb-6">
              Interested in working together? Let's create something meaningful.
            </p>
            <a href="mailto:contact@akshatsharma.com" className="inline-block px-5 py-3 bg-green-400/20 hover:bg-green-400/30 text-green-400 border border-green-400/50 rounded transition-all duration-300 hover:scale-105">
              Get in touch
            </a>
          </div>
        </section>
      </div>
      
      {/* ASCII Rain Effect */}
      <AsciiRain />
    </div>
  );
}

export default App;