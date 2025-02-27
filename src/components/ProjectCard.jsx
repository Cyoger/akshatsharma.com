// File: src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="p-4 md:p-5 bg-black/50 border border-white/10 transition-all duration-500 cursor-pointer overflow-hidden relative hover:-translate-y-1 hover:shadow-lg hover:border-green-400 rounded">
      <div className="absolute inset-0 bg-gradient-to-br from-red-800/30 to-blue-900/30 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
      <h3 className="text-white text-lg md:text-xl mb-2 relative z-20">{project.title}</h3>
      <p className="text-white/70 text-xs md:text-sm relative z-20">
        {project.description}
      </p>
    </div>
  );
};

export default ProjectCard;