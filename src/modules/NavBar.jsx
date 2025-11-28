import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      {/* MAIN NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-teal-900/30 text-white z-50 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-teal-400 hover:text-teal-300 transition-colors">
                Ahmad Irfan
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/developer" className="hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
                <Link to="/projects" className="hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">My works</Link>
                <Link to="/about" className="hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Get in touch</Link>
                <Link to="/contact" className="hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Thoughts</Link>
              </div>
            </div>

            {/* Hamburger Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-teal-400 hover:text-white hover:bg-teal-900/50 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* MOBILE MENU DRAWER */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-slate-950 border-r border-teal-900 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-teal-900/30">
          <span className="text-teal-400 font-mono font-bold text-lg">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-mono mt-4">
          <Link to="/developer" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 hover:bg-slate-900 block px-3 py-2 rounded-md text-base font-medium transition-colors">Home</Link>
          <Link to="/projects" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 hover:bg-slate-900 block px-3 py-2 rounded-md text-base font-medium transition-colors">My works</Link>
          <Link to="/about" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 hover:bg-slate-900 block px-3 py-2 rounded-md text-base font-medium transition-colors">Get in touch</Link>
          <Link to="/contact" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 hover:bg-slate-900 block px-3 py-2 rounded-md text-base font-medium transition-colors">Thoughts</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar