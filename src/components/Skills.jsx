import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

function AnimatedNumber({ value, isActive }) {
  const [display, setDisplay] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!isActive) {
      setDisplay(0);
      return;
    }

    const duration = 800;
    const start = performance.now();

    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [value, isActive]);

  return <span>{display}%</span>;
}

function Skills() {
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const prefersReducedMotion = useReducedMotion();

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 50 },
        { name: "React", level: 50 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Dart", level: 75 },
        { name: "Flutter", level: 75 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "PHP", level: 50 },
        { name: "Laravel", level: 50 },
        { name: "MySQL", level: 60 },
        { name: "Firebase", level: 50 },
        { name: "Python", level: 50 },
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(
        skillCategories.flatMap((cat) => cat.skills.map((s) => s.name))
      );
    }, 500);
    return () => clearTimeout(timer);
  });

  const isAnimated = (name) => animatedSkills.includes(name);

  const getBarColor = (level) => {
    if (level >= 80) return "from-anime-pink via-anime-purple to-anime-cyan";
    if (level >= 60) return "from-anime-purple to-anime-cyan";
    return "from-anime-purple to-anime-pink";
  };

  return (
    <motion.section
      id="skills"
      className="py-20 px-6 w-full min-h-screen flex flex-col items-center justify-center relative"
      initial={prefersReducedMotion ? {} : { opacity: 0 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          className="mb-16 text-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="anime-gradient-text">My Skills</span>
          </h2>
          <p className="text-[var(--theme-text-muted)] max-w-xl mx-auto text-sm">
            Technologies I've been working with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="glass rounded-2xl p-8 border border-[var(--theme-border)] hover:border-[var(--theme-border-medium)] transition-all duration-500"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.65,
                ease: "easeOut",
                delay: prefersReducedMotion ? 0 : categoryIndex * 0.1,
              }}
              whileHover={prefersReducedMotion ? {} : { y: -4, boxShadow: "0 20px 60px rgba(196,77,255,0.15)" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-lg anime-gradient flex items-center justify-center text-white text-sm font-bold">
                  {category.title === "Frontend" ? "{" : "</>"}
                </div>
                <h3 className="text-xl font-semibold text-[var(--theme-text-heading)]">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[var(--theme-text-secondary)]">
                        {skill.name}
                      </span>
                      <span className="text-xs text-anime-cyan font-mono">
                        <AnimatedNumber
                          value={skill.level}
                          isActive={isAnimated(skill.name)}
                        />
                      </span>
                    </div>
                    <div className="h-2.5 bg-[var(--theme-surface)] rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${getBarColor(skill.level)}`}
                        initial={{ width: "0%" }}
                        animate={{
                          width: isAnimated(skill.name) ? `${skill.level}%` : "0%",
                          scaleY: isAnimated(skill.name) ? [0.6, 1.1, 0.95, 1] : 1,
                        }}
                        transition={{
                          width: { duration: 1.2, ease: "easeOut", delay: skillIndex * 0.08 },
                          scaleY: { duration: 0.6, delay: skillIndex * 0.08 + 0.8, ease: "easeOut" },
                        }}
                        style={{
                          boxShadow: isAnimated(skill.name)
                            ? "0 0 10px rgba(196,77,255,0.4)"
                            : "none",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-[var(--theme-text-secondary)] mb-6">
            Additional Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Git", "GitHub", "Figma", "Postman", "VS Code", "Vite", "Ngrok"].map((tech, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 rounded-full text-sm glass text-[var(--theme-text-secondary)] border border-[var(--theme-border)] hover:border-anime-purple/30 hover:text-[var(--theme-text)] transition-all duration-300"
                whileHover={prefersReducedMotion ? {} : { scale: 1.06, y: -2 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Skills;
