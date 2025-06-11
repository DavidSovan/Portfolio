import { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      // Determine active section based on scroll position
      const sections = ["home", "projects", "skills", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (
        !e.target.closest("#mobile-menu") &&
        !e.target.closest("#menu-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Check if link is active
  const isActive = (section) => activeSection === section;

  return (
    <header
      className={`fixed top-0 w-full ${
        scrollPosition > 50
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-gray-900"
      } text-white py-4 px-6 flex justify-between items-center z-50 transition-all duration-300`}
    >
      {/* Logo/Name with animation */}
      <a href="#home" className="flex items-center space-x-2 group">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold transition-transform group-hover:scale-110">
          D{/* First letter of your name */}
        </div>
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          David
        </h1>
      </a>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-8">
        {["home", "projects", "skills", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`${
              isActive(section)
                ? "text-blue-400 font-medium"
                : "text-gray-300 hover:text-white"
            } transition-colors duration-300 relative py-1`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            {isActive(section) && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            )}
          </a>
        ))}
      </nav>

      {/* Resume Download Button */}
      <div className="hidden md:block">
        <a
          href="/CV.pdf"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-colors"
        >
          Download CV
        </a>
      </div>

      {/* Hamburger Button */}
      <button
        id="menu-button"
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        aria-label="Toggle menu"
      >
        <div
          className={`w-5 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "transform rotate-45 translate-y-1.5" : ""
          }`}
        ></div>
        <div
          className={`w-5 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-5 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
          }`}
        ></div>
      </button>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`absolute top-full right-0 mt-2 mr-4 bg-gray-800 rounded-lg shadow-lg flex flex-col md:hidden overflow-hidden transition-all duration-300 origin-top-right ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {["home", "projects", "skills", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={() => setIsOpen(false)}
            className={`px-6 py-3 ${
              isActive(section)
                ? "bg-gray-700 text-blue-400 font-medium"
                : "text-gray-200 hover:bg-gray-700 hover:text-white"
            } transition-colors duration-300`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}

        {/* Mobile CV Download Button */}
        <a
          href="/CV.pdf"
          onClick={() => setIsOpen(false)}
          className="px-6 py-3 border-t border-gray-700 text-blue-400 hover:bg-gray-700 transition-colors"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}

export default Header;
