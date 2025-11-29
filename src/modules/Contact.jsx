import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className="w-full py-20 px-6 bg-slate-950 md:px-12" id="contact">
      
      {/* Main Container */}
      <div className=" flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="w-full lg:w-1/2 flex flex-col">
          
          {/* Header Section */}
          <div className="text-left mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-teal-400">
              Contact Me
            </h2>
            <p className="text-slate-400 text-sm md:text-lg leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question, 
              a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          {/* GRID LOGIC:
             - default: grid-cols-1 (Stack vertically)
             - md: grid-cols-3 (3 in one row - requested feature)
             - lg: grid-cols-1 (Back to stack, because the parent splits into L/R columns)
          */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
            
            {/* Email Card */}
            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-teal-400 transition-colors duration-300
                            flex items-center gap-5 
                            md:flex-col md:items-center md:text-center md:justify-center
                            lg:flex-row lg:items-center lg:text-left lg:justify-start">
              
              <div className="w-12 h-12 bg-slate-950 rounded-full flex items-center justify-center text-teal-400 text-lg border border-slate-800 shrink-0">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-slate-400 text-sm break-all">ahmadirfan746@gmail.com</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-teal-400 transition-colors duration-300
                            flex items-center gap-5 
                            md:flex-col md:items-center md:text-center md:justify-center
                            lg:flex-row lg:items-center lg:text-left lg:justify-start">
              
              <div className="w-12 h-12 bg-slate-950 rounded-full flex items-center justify-center text-teal-400 text-lg border border-slate-800 shrink-0">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-slate-400 text-sm">Islamabad, Pakistan</p>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-teal-400 transition-colors duration-300
                            flex items-center gap-5 
                            md:flex-col md:items-center md:text-center md:justify-center
                            lg:flex-row lg:items-center lg:text-left lg:justify-start">
              
              <div className="w-12 h-12 bg-slate-950 rounded-full flex items-center justify-center text-teal-400 text-lg border border-slate-800 shrink-0">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              
              <div>
                <h3 className="text-white font-semibold">LinkedIn</h3>
                <a href="www.linkedin.com/in/ahmad-irfan-zaheer" 
                  className="text-slate-400 text-sm hover:text-teal-400 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >www.linkedin.com/in/ahmad-irfan-zaheer
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT COLUMN: Form ================= */}
        <div className="w-full lg:w-1/2">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-lg h-full">
                <h3 className="text-2xl font-bold mb-8 text-teal-400">Send a Message</h3>
                
                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-400 text-sm font-medium mb-2">Name</label>
                      <input 
                        type="text" 
                        placeholder="Your Name"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        placeholder="your@email.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows="4"
                      placeholder="What's on your mind?"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <FontAwesomeIcon icon={faPaperPlane} className="text-sm" />
                  </button>
                </form>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;