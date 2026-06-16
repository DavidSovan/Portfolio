import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import profileImage from "../assets/pf2.jpg";

const sparkles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 6 + 3,
  delay: Math.random() * 3,
  duration: Math.random() * 2 + 2,
}));

const roles = [
  "Developer in progress",
  "Lifelong Learner",
  "AI Enthusiast",
];

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const topBlobY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bottomBlobY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const currentRole = roles[textIndex];
    let timeout;

    if (isDeleting) {
      if (charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % roles.length);
        return;
      }
      timeout = setTimeout(() => setCharIndex((prev) => prev - 1), 40);
    } else {
      if (charIndex === currentRole.length) {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
      timeout = setTimeout(() => setCharIndex((prev) => prev + 1), 60);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, prefersReducedMotion]);

  return (
    <motion.section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(255,107,157,0.3), transparent 70%)",
            y: topBlobY,
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(0,212,255,0.25), transparent 70%)",
            y: bottomBlobY,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(196,77,255,0.3), transparent 70%)",
            y: topBlobY,
          }}
        />

        {sparkles.map((s) => (
          <motion.div
            key={s.id}
            className="absolute"
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeInOut",
            }}
          >
            {s.id % 2 === 0 ? (
              <span className="text-anime-yellow" style={{ fontSize: s.size + 4 }}>✦</span>
            ) : (
              <span className="text-anime-cyan" style={{ fontSize: s.size + 2 }}>✧</span>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div className="max-w-4xl relative">
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="relative"
            animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
          >
            <div className="absolute inset-0 rounded-full anime-gradient opacity-60 blur-xl scale-110" />
            <div className="w-56 h-56 rounded-full overflow-hidden border-[3px] border-[var(--theme-border)] shadow-2xl relative">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          className="text-center text-anime-purple font-medium mb-2 tracking-widest text-sm"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible || prefersReducedMotion ? 0 : 15 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
        >
          Welcome
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-center mb-3"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible || prefersReducedMotion ? 0 : 20 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.15 }}
        >
          <span className="anime-gradient-text">Sovan David</span>
        </motion.h1>

        <motion.div
          className="text-center mb-6 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.25 }}
        >
          <span className="inline-block text-lg md:text-xl text-[var(--theme-text-secondary)] font-light tracking-wide cursor-blink">
            {prefersReducedMotion
              ? roles[0]
              : roles[textIndex].substring(0, charIndex)}
          </span>
        </motion.div>

        <motion.p
          className="text-base text-[var(--theme-text-muted)] max-w-2xl mx-auto mb-10 text-center leading-relaxed"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible || prefersReducedMotion ? 0 : 20 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.3 }}
        >
          I love using AI to transform ideas into applications. I enjoy building innovative solutions, exploring new technologies, and creating products that make an impact.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible || prefersReducedMotion ? 0 : 20 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.4 }}
        >
          <motion.button
            type="button"
            className="px-7 py-3 rounded-lg text-white font-medium anime-gradient transition-all duration-300"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2, boxShadow: "0 0 30px rgba(196,77,255,0.5)" }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </motion.button>
          <motion.button
            type="button"
            className="px-7 py-3 rounded-lg text-[var(--theme-text-heading)] font-medium glass hover:bg-[var(--theme-surface-hover)] transition-all duration-300 anime-border"
            whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -2 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Me
          </motion.button>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible || prefersReducedMotion ? 0 : 20 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.5 }}
        >
          {[
            { icon: "fab fa-github", href: "https://github.com/DavidSovan" },
            { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/%E1%9E%9F%E1%9E%BB%E1%9E%9C%E1%9E%8E%E1%9F%92%E1%9E%8E-%E1%9E%8A%E1%9F%81%E1%9E%9C%E1%9E%B8%E1%9E%8F-834a07324/" },
            { icon: "fab fa-telegram", href: "https://t.me/Sovandavid" },
            { icon: "fas fa-envelope", href: "mailto:sovandavid19@gmail.com" },
          ].map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full glass text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] hover:bg-[var(--theme-surface-hover)] transition-all duration-300 text-lg"
              whileHover={prefersReducedMotion ? {} : { y: -3, scale: 1.1 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            >
              <i className={link.icon} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[var(--theme-text-dim)] text-2xl">↓</span>
      </motion.div>
    </motion.section>
  );
}

export default Home;
