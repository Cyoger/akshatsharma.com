import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group p-4 md:p-5 bg-black/50 border border-white/10 transition-all duration-300 cursor-pointer overflow-hidden relative hover:-translate-y-1 hover:shadow-lg hover:border-green-400/50 rounded">
      <div className="absolute inset-0 bg-gradient-to-br from-green-800/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <h3 className="text-white text-lg md:text-xl mb-2 relative z-20 group-hover:text-green-400 transition-colors duration-300">{project.title}</h3>
      <p className="text-white/70 text-xs md:text-sm relative z-20 group-hover:text-white/90 transition-colors duration-300">
        {project.description}
      </p>
    </div>
  );
};

export default ProjectCard;