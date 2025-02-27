// File: src/components/ProjectsSection.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description that captures the essence of this project while maintaining the aesthetic of Wong Kar-wai and Christopher Doyle\'s visual style.'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Another project description with technical details presented in a poetic manner, inspired by the cinematic compositions of Doyle.'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Details about this project with a focus on both form and function, with saturated colors and dramatic contrasts.'
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'More information about your work and technological expertise, presented with visual flair and emotional depth.'
    }
  ];

  return (
    <section id="projects" className="relative mt-24 md:mt-32 w-full max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-3 md:gap-5 px-4 md:px-5 z-30">
      <h2 className="col-span-full text-2xl text-center md:text-left uppercase tracking-widest mb-4 md:mb-6 text-white/90">Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectsSection;