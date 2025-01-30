"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    const navbarHeight = document.querySelector("nav").offsetHeight;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsHidden(true);
    } else if (currentScrollY < lastScrollY) {
      setIsHidden(false);
    }

    setLastScrollY(currentScrollY);
    setIsScrolling(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-9 left-1/2 transform -translate-x-1/2 w-11/12 h-20 rounded-xl backdrop-blur-md z-50 
      text-white shadow-[0_0_2px_0_rgba(255,255,255,0.3)] transition-all duration-500 
      ${isHidden ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"}`}
      style={{
        background: "linear-gradient(89.92deg, #383F96 -30.15%, #15394A 30.04%, #3A698C 66.29%, #55457E 120.87%, #504B80 120.88%)",
        boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="px-10 sm:px-4 md:px-8 lg:px-16 container mx-auto h-full flex justify-between items-center relative">
        <a
          onClick={() => scrollToSection("home")}
          className="flex items-center cursor-pointer transform hover:scale-105 transition-all duration-300"
        >
          <img src={isSmallScreen ? "/dteExer.png" : "/Exer-light.png"} alt="Exer Logo" className="h-8 md:h-10 w-auto" />
        </a>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${isMenuOpen ? "transform rotate-45 translate-y-1.5" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "transform -rotate-45 -translate-y-1.5" : ""}`}></div>
        </button>

        <div className="hidden md:flex space-x-8 lg:space-x-16 text-lg lg:text-xl font-me">
          <button onClick={() => scrollToSection("about")} className="hover:scale-105 transform">
            About Us
          </button>
        </div>

        <div
          className={`md:hidden absolute top-16 z-10 left-0 w-full rounded-b-xl transition-all duration-300 
          ${isMenuOpen ? "opacity-100 max-h-40 py-4" : "opacity-0 max-h-0 overflow-hidden"}`}
          style={{
            background: "linear-gradient(89.92deg, #383F96 -30.15%, #15394A 30.04%, #3A698C 66.29%, #55457E 120.87%, #504B80 120.88%)",
          }}
        >
          <div className="px-10 sm:px-4 md:px-8 lg:px-16 flex flex-col items-start space-y-4">
            <button onClick={() => scrollToSection("about")} className="text-lg font-medium hover:scale-105 transform">
              About Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
