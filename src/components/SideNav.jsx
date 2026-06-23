import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = ["home", "projects", "skills", "experience", "contact"];

function SideNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActive(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-5 items-center"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {sections.map((section) => (
        <a 
          key={section} 
          href={`#${section}`}
          className="relative w-4 h-4 group flex items-center justify-center cursor-pointer"
          aria-label={`Go to ${section}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ease-out ${active === section ? "bg-[var(--theme-text-heading)] scale-[2.5]" : "bg-[var(--theme-text-muted)] group-hover:bg-[var(--theme-text-secondary)] group-hover:scale-[1.5]"}`} />
          {active === section && (
            <div className="absolute inset-0 rounded-full border border-[var(--theme-text-heading)] opacity-30 animate-ping" style={{ animationDuration: "3s" }} />
          )}
        </a>
      ))}
    </motion.div>
  );
}

export default SideNav;
