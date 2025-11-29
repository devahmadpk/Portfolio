import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 pt-10 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Flex Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-8 text-left">
          
          {/* Section 1: Brand / Name */}
          <div className="md:max-w-xs">
            <h3 className="text-2xl md:text-4xl font-bold mb-4 text-teal-400">
              Ahmad Irfan
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A passionate developer building web applications with React, Node.js, and modern technologies.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-2xl md:text-4xl font-bold mb-4 text-teal-400">
                Quick Links
            </h4>
            <a href="#home" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Home</a>
            <a href="#projects" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Projects</a>
            <a href="#contact" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Contact</a>
          </div>

          {/* Section 3: Socials */}
          <div>
            <h4 className="text-2xl font-bold text-teal-400 mb-4 md:text-4xl">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/devahmadpk" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-teal-600 hover:border-teal-600 transition-all duration-300"
                  target="_blank" 
                  rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="www.linkedin.com/in/ahmad-irfan-zaheer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-teal-600 hover:border-teal-600 transition-all duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Ahmad Irfan. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;