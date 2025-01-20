"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false); 
    const element = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('nav').offsetHeight;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed backdrop-blur-md top-0 left-0 w-full z-50 ${isScrolling ? 'bg-white/50' : 'bg-white'}  
                 text-sky-950 p-3 px-10 sm:px-10 md:px-12 lg:px-16 shadow-md transition-all duration-300`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a 
            onClick={() => scrollToSection('home')} 
            className="flex items-center cursor-pointer transform hover:scale-105 transition-all duration-300"
          >
            <img src="/Exer.png" alt="Exercise Logo" className="h-8 md:h-12 w-auto" />
          </a>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-sky-950 mb-1 transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-sky-950 mb-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-sky-950 transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>

          <div className="hidden md:flex space-x-8 lg:space-x-20 text-lg lg:text-xl font-semibold">
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-sky-600 transition-colors duration-300 hover:scale-105 transform"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-sky-600 transition-colors duration-300 hover:scale-105 transform"
            >
              Contact
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="flex flex-col items-center space-y-4 py-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-lg font-semibold hover:text-sky-600 transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-lg font-semibold hover:text-sky-600 transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}