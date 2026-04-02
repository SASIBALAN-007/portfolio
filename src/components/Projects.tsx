import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const projects = [
    {
      title: "One Tab Post",
      description: "A comprehensive social media management tool that allows users to schedule and post content across multiple platforms from a single dashboard.",
      tags: ["React", "Next.js", "MongoDB"],
       image: "/onetabpost.png"   // ✅ add this
    },
    {
      title: "Idea Spark",
      description: "A startup investment platform connecting innovative entrepreneurs with potential investors, featuring pitch decks and real-time messaging.",
      tags: ["React", "Next.js", "MongoDB"],
       image: "/ideaspark.png"   // ✅ add this
    }
  ];

  return (
    <section id="projects" className="py-32 md:py-48 bg-[#0c1117] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff5733]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeading 
          title="Selected Projects" 
          subtitle="A collection of projects that demonstrate my technical skills and problem-solving abilities."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <ProjectCard 
              key={i} 
              image={project.image}
              title={project.title} 
              description={project.description} 
              tags={project.tags} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
