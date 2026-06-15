import { motion, useReducedMotion } from "framer-motion";

const responsibilities = [
  "Analyze and document existing business processes.",
  "Identify inefficiencies, bottlenecks, and improvement opportunities.",
  "Design and recommend optimized workflow solutions.",
  "Gather and document business requirements.",
  "Create process flow diagrams and functional documentation.",
  "Coordinate with developers, QA teams, and stakeholders.",
  "Support UAT (User Acceptance Testing) and system validation.",
  "Monitor process improvements and measure outcomes.",
  "Improve operational efficiency and reduce manual work.",
];

const skills = [
  "Business Process Analysis",
  "Process Improvement",
  "Requirements Gathering",
  "Workflow Optimization",
  "Process Mapping",
  "Documentation",
  "UAT Testing",
  "Stakeholder Management",
  "Cross-functional Collaboration",
  "Problem Solving",
];

function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="experience"
      className="py-20 px-6 w-full min-h-screen flex flex-col items-center justify-center relative"
      initial={prefersReducedMotion ? {} : { opacity: 0 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          className="mb-16 text-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="anime-gradient-text">Experience</span>
          </h2>
          <p className="text-[var(--theme-text-muted)] max-w-xl mx-auto text-sm">
            Professional background and expertise.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-anime-purple via-anime-cyan to-anime-pink opacity-40" />

          <motion.div
            className="relative pl-14 md:pl-16"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full anime-gradient shadow-lg shadow-purple-500/30 ring-4 ring-[var(--theme-bg)]" />

            <div className="glass rounded-2xl p-8 border border-[var(--theme-border)] hover:border-[var(--theme-border-medium)] transition-all duration-500">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--theme-text-heading)]">
                    Process Analyst
                  </h3>
                  <p className="text-anime-cyan text-sm font-medium mt-1">
                    Meta Tower · Full-time
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--theme-text-secondary)] flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-anime-green animate-pulse" />
                  Jan - Present
                </div>
              </div>

              <div className="space-y-4 text-[var(--theme-text-secondary)] text-sm leading-relaxed">
                <p>
                  Worked as a Process Analyst responsible for analyzing and improving business workflows to increase efficiency and reduce operational issues. Conducted process mapping, identified bottlenecks and gaps, and designed optimized solutions to improve overall business performance.
                </p>
                <p>
                  Collaborated with cross-functional teams to gather business requirements and translate them into clear functional documentation for technical implementation. Supported system testing, validated process changes, and ensured successful deployment of workflow improvements.
                </p>
                <p>
                  Focused on increasing productivity, reducing manual effort, streamlining operations, and improving communication between business stakeholders and technical teams.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-semibold text-[var(--theme-text-heading)] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="text-anime-cyan">◆</span>
                  Key Responsibilities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {responsibilities.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 text-sm text-[var(--theme-text-secondary)]"
                      initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                      whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : i * 0.05 }}
                    >
                      <span className="mt-0.5 text-anime-green flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-semibold text-[var(--theme-text-heading)] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="text-anime-purple">✦</span>
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-3.5 py-1.5 rounded-full text-xs glass text-[var(--theme-text-secondary)] border border-[var(--theme-border)] hover:border-anime-purple/30 hover:text-[var(--theme-text)] transition-all duration-300"
                      initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                      whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: prefersReducedMotion ? 0 : i * 0.04 }}
                      whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
