import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import profileImage from "../assets/pf2.jpg";

const roles = [
  "Frontend Engineer",
  "Creative Developer",
  "UI/UX Enthusiast",
];

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <motion.section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-white opacity-[0.02] blur-[120px]" />
      </motion.div>

      <div className="max-w-5xl relative z-10 w-full mx-auto flex flex-col items-center">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 rounded-full bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-[var(--theme-border-medium)] relative z-10">
              <img
                src={profileImage}
                alt="Sovan David"
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="overflow-hidden mb-4 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="px-3 py-1 text-xs font-medium tracking-widest uppercase rounded-full border border-[var(--theme-border)] text-[var(--theme-text-secondary)] bg-[var(--theme-surface)] mb-6">
            Available for Work
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center tracking-tight leading-none mb-2 text-[var(--theme-text-heading)]">
            Sovan David
          </h1>
        </motion.div>

        <motion.div
          className="h-10 md:h-14 flex items-center justify-center overflow-hidden mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            key={textIndex}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-xl md:text-3xl text-[var(--theme-text-secondary)] font-medium"
          >
            {roles[textIndex]}
          </motion.div>
        </motion.div>

        <motion.p
          className="text-base md:text-lg text-[var(--theme-text-muted)] max-w-2xl mx-auto mb-12 text-center leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          I craft digital experiences with a focus on motion, aesthetics, and meticulous attention to detail. Blending design and engineering to build modern software.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.button
            className="px-8 py-3.5 rounded-full bg-[var(--theme-text-heading)] text-[var(--theme-bg)] font-medium transition-all hover:scale-105"
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Work
          </motion.button>
          <motion.button
            className="px-8 py-3.5 rounded-full glass text-[var(--theme-text)] font-medium transition-all hover:bg-[var(--theme-surface-hover)]"
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Home;

