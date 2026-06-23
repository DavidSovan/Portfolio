import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

function Skills() {
  const prefersReducedMotion = useReducedMotion();

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Dart", "Flutter", "Framer Motion"],
    },
    {
      title: "Backend & Systems",
      skills: ["PHP", "Laravel", "MySQL", "Firebase", "Python", "REST APIs", "Node.js"],
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "Figma", "Postman", "VS Code", "Vite", "Linux"],
    }
  ];

  return (
    <motion.section
      id="skills"
      className="py-32 px-6 w-full min-h-screen flex flex-col items-center justify-center relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-[var(--theme-text-heading)]">
            Technical Stack
          </h2>
          <p className="text-[var(--theme-text-muted)] max-w-xl mx-auto text-base">
            The tools and technologies I use to build scalable, high-performance applications.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="glass rounded-3xl p-8 md:p-10 border border-[var(--theme-border)] transition-all duration-500 hover:border-[var(--theme-border-medium)] relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: categoryIndex * 0.1,
              }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--theme-text-heading)] opacity-[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-[0.04] transition-opacity duration-700" />
              
              <h3 className="text-xl font-semibold tracking-tight text-[var(--theme-text-heading)] mb-8 relative z-10 flex items-center">
                <span className="w-1.5 h-6 rounded-full bg-[var(--theme-text-heading)] mr-4 inline-block opacity-80" />
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="px-5 py-2.5 rounded-full text-sm font-medium bg-[var(--theme-surface)] text-[var(--theme-text-secondary)] border border-[var(--theme-border)] hover:text-[var(--theme-text-heading)] hover:bg-[var(--theme-surface-hover)] hover:border-[var(--theme-border-medium)] transition-all cursor-default"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
