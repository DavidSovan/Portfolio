import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useTheme } from "../ThemeContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [rotating, setRotating] = useState(false);
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const { isDark, toggleTheme } = useTheme();
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollPosition > 50
          ? "glass shadow-lg"
          : "bg-transparent"
      } py-3 px-6 flex justify-between items-center`}
      initial={prefersReducedMotion ? {} : { y: -32, opacity: 0 }}
      animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
        style={{ scaleX: progressScaleX }}
      >
        <div className="h-full anime-gradient" />
      </motion.div>

      <a href="#home" className="flex items-center space-x-2 group">
        <div className="w-9 h-9 rounded-full anime-gradient flex items-center justify-center text-white font-bold text-sm transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 neon-glow">
          D
        </div>
        <h1 className="text-xl font-bold text-[var(--theme-text-heading)] group-hover:text-[var(--theme-text)] transition-colors">
          David
        </h1>
      </a>

      <nav className="hidden md:flex items-center space-x-1">
        {["home", "projects", "skills", "experience", "contact"].map((section) => (
          <motion.a
            key={section}
            href={`#${section}`}
            className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              isActive(section)
                ? "text-[var(--theme-text)]"
                : "text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)]"
            }`}
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            {isActive(section) && (
              <motion.span
                layoutId="activeNav"
                className="absolute inset-0 rounded-lg bg-[var(--theme-surface)] border border-[var(--theme-border-medium)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.a>
        ))}
        <motion.button
          onClick={handleToggle}
          className="ml-2 w-9 h-9 flex items-center justify-center rounded-lg text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] hover:bg-[var(--theme-surface-hover)] transition-all duration-300 text-sm"
          whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
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
          className="ml-3 px-5 py-2 rounded-lg text-sm font-medium text-white anime-gradient hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
        >
          CV ⚡
        </a>
      </nav>

      <div className="flex items-center md:hidden space-x-2">
        <motion.button
          onClick={handleToggle}
          className="w-9 h-9 flex items-center justify-center rounded-lg glass text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-all duration-300 text-sm"
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
          className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 rounded-lg glass hover:bg-[var(--theme-surface-hover)] transition-colors"
          onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
          aria-label="Toggle menu"
          whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
        >
          <div className={`w-5 h-0.5 bg-[var(--theme-text)] transition-all duration-300 ${isOpen ? "transform rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-5 h-0.5 bg-[var(--theme-text)] transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <div className={`w-5 h-0.5 bg-[var(--theme-text)] transition-all duration-300 ${isOpen ? "transform -rotate-45 -translate-y-1.5" : ""}`} />
        </motion.button>
      </div>

      <div
        id="mobile-menu"
        className={`absolute top-full right-0 mt-2 mr-4 glass rounded-xl shadow-2xl flex flex-col md:hidden overflow-hidden transition-all duration-300 origin-top-right border border-[var(--theme-glass-border)] ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {["home", "projects", "skills", "experience", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={() => setIsOpen(false)}
            className={`px-6 py-3 ${
              isActive(section)
                ? "bg-[var(--theme-surface)] text-anime-cyan font-medium"
                : "text-[var(--theme-text-secondary)] hover:bg-[var(--theme-surface-hover)] hover:text-[var(--theme-text)]"
            } transition-colors duration-300`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
        <a
          href="/Resumes.pdf"
          onClick={() => setIsOpen(false)}
          className="px-6 py-3 border-t border-[var(--theme-border-medium)] text-anime-pink hover:bg-[var(--theme-surface-hover)] transition-colors"
        >
          Download CV ⚡
        </a>
      </div>
    </motion.header>
  );
}

export default Header;
