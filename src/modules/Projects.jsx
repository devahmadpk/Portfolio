import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; 
// Note: Ensure you ran "npm install @fortawesome/free-solid-svg-icons"

const projectData = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for managing products, orders, and customer analytics. Features dark mode and real-time data visualization.",
    techStack: ["React", "Tailwind", "Chart.js"],
    image: "https://placehold.co/600x400/1e293b/white?text=Dashboard+Project", 
    liveLink: "#",
    gitLink: "#"
  },
  {
    title: "Social Media App",
    description: "A responsive social platform allowing users to post updates, like content, and follow other users with real-time notifications.",
    techStack: ["Node.js", "MongoDB", "Socket.io"],
    image: "https://placehold.co/600x400/0f172a/white?text=Social+App", 
    liveLink: "#",
    gitLink: "#"
  },
  {
    title: "AI Image Generator",
    description: "An interface connecting to OpenAI's DALL-E API to generate creative images based on user text prompts.",
    techStack: ["Python", "Flask", "React"],
    image: "https://placehold.co/600x400/334155/white?text=AI+Generator", 
    liveLink: "#",
    gitLink: "#"
  }
];

function Projects() {
  return (
    // Main Container matches your bg-slate-950 theme
    <div className="w-full py-20 px-6 bg-slate-950 md:px-12" id="projects">
      <div className="">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 text-teal-400">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className="group bg-slate-900 rounded-2xl border border-slate-800 hover:border-teal-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Container with Overlay Effect */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack - Darker badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700 hover:border-teal-400 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links - High contrast */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                  <a href={project.gitLink} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faGithub} className="text-lg" />
                    <span className="text-sm">Source Code</span>
                  </a>
                  <a href={project.liveLink} className="flex items-center gap-2 text-teal-400 hover:text-teal-500 transition-colors font-medium">
                    <span className="text-sm">Live Demo</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;