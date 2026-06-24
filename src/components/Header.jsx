import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useTheme } from "../ThemeContext";
import logo from "../assets/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [rotating, setRotating] = useState(false);
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const { isDark, toggleTheme } = useTheme();
  
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  const handleToggle = (e) => {
    if (prefersReducedMotion) {
      toggleTheme();
      return;
    }
    setRotating(true);
    const rect = e.currentTarget.getBoundingClientRect();
    toggleTheme(rect.left + rect.width / 2, rect.top + rect.height / 2);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      const sections = ["home", "projects", "skills", "experience", "contact"];
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

  const isActive = (section) => activeSection === section;

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 py-4 px-6 flex justify-between items-center`}
      initial={prefersReducedMotion ? {} : { y: -32, opacity: 0 }}
      animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="absolute inset-0 glass shadow-sm pointer-events-none"
        style={{ opacity: headerOpacity }}
      />

      <a href="#home" className="relative flex items-center space-x-3 group z-10">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <h1 className="text-lg font-semibold tracking-tight text-[var(--theme-text-heading)]">
          David
        </h1>
      </a>

      <nav className="hidden md:flex items-center space-x-1 glass px-2 py-1.5 rounded-full z-10 shadow-sm border-[var(--theme-border)]">
        {["home", "projects", "skills", "experience", "contact"].map((section) => (
          <motion.a
            key={section}
            href={`#${section}`}
            className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${
              isActive(section)
                ? "text-[var(--theme-bg)]"
                : "text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)]"
            }`}
          >
            {isActive(section) && (
              <motion.span
                layoutId="activeNav"
                className="absolute inset-0 rounded-full bg-[var(--theme-text-heading)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
          </motion.a>
        ))}
      </nav>

      <div className="hidden md:flex items-center space-x-3 z-10">
        <motion.button
          onClick={handleToggle}
          className="w-10 h-10 flex items-center justify-center rounded-full glass text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors duration-300 text-sm"
          whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
          aria-label="Toggle theme"
        >
          <i
            className={isDark ? "fas fa-sun" : "fas fa-moon"}
            style={{
              transform: rotating ? "rotate(360deg) scale(1.2)" : "rotate(0deg) scale(1)",
              transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onTransitionEnd={() => setRotating(false)}
          />
        </motion.button>
        <a
          href="/Resumes.pdf"
          className="px-5 py-2 rounded-full text-sm font-medium bg-[var(--theme-text-heading)] text-[var(--theme-bg)] hover:opacity-90 transition-opacity duration-300"
        >
          CV
        </a>
      </div>

      <div className="flex items-center md:hidden space-x-2 z-10">
        <motion.button
          onClick={handleToggle}
          className="w-10 h-10 flex items-center justify-center rounded-full glass text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors duration-300 text-sm"
          whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
          aria-label="Toggle theme"
        >
          <i
            className={isDark ? "fas fa-sun" : "fas fa-moon"}
            style={{
              transform: rotating ? "rotate(360deg) scale(1.2)" : "rotate(0deg) scale(1)",
              transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onTransitionEnd={() => setRotating(false)}
          />
        </motion.button>
        <motion.button
          id="menu-button"
          className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 rounded-full glass hover:bg-[var(--theme-surface-hover)] transition-colors"
          onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
          aria-label="Toggle menu"
          whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
        >
          <div className={`w-4 h-[2px] bg-[var(--theme-text)] transition-all duration-300 ${isOpen ? "transform rotate-45 translate-y-[8px]" : ""}`} />
          <div className={`w-4 h-[2px] bg-[var(--theme-text)] transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <div className={`w-4 h-[2px] bg-[var(--theme-text)] transition-all duration-300 ${isOpen ? "transform -rotate-45 -translate-y-[8px]" : ""}`} />
        </motion.button>
      </div>

      <div
        id="mobile-menu"
        className={`absolute top-full right-4 mt-2 w-48 glass rounded-2xl shadow-2xl flex flex-col md:hidden overflow-hidden transition-all duration-400 origin-top-right border border-[var(--theme-glass-border)] z-20 ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="py-2">
          {["home", "projects", "skills", "experience", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setIsOpen(false)}
              className={`px-6 py-3 block text-sm ${
                isActive(section)
                  ? "bg-[var(--theme-surface)] text-[var(--theme-text-heading)] font-medium"
                  : "text-[var(--theme-text-secondary)] hover:bg-[var(--theme-surface-hover)] hover:text-[var(--theme-text)]"
              } transition-colors duration-300`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <div className="px-4 py-2 mt-2 border-t border-[var(--theme-border-medium)]">
            <a
              href="/Resumes.pdf"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-2.5 rounded-lg bg-[var(--theme-text-heading)] text-[var(--theme-bg)] text-sm font-medium transition-opacity hover:opacity-90"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;

