import { motion, useReducedMotion } from "framer-motion";

const responsibilities = [
  "Analyze and document existing business processes.",
  "Identify inefficiencies, bottlenecks, and improvement opportunities.",
  "Design and recommend optimized workflow solutions.",
  "Coordinate with developers, QA teams, and stakeholders.",
  "Support UAT (User Acceptance Testing) and system validation.",
  "Improve operational efficiency and reduce manual work.",
];

const skills = [
  "Process Analysis",
  "Workflow Optimization",
  "Requirements Gathering",
  "Documentation",
  "Stakeholder Management",
];

function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="experience"
      className="py-32 px-6 w-full min-h-screen flex flex-col items-center justify-center relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-[var(--theme-text-heading)]">
            Experience
          </h2>
          <p className="text-[var(--theme-text-muted)] max-w-xl mx-auto text-base">
            My professional journey and the impact I've made along the way.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[20px] md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--theme-border-medium)] via-[var(--theme-border-medium)] to-transparent" />

          <motion.div
            className="relative pl-12 md:pl-24 pb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Timeline node */}
            <div className="absolute left-[16px] md:left-[27.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--theme-text-heading)] ring-4 ring-[var(--theme-bg)] shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10" />

            <div className="glass rounded-3xl p-8 md:p-12 border border-[var(--theme-border)] hover:border-[var(--theme-border-medium)] transition-all duration-500 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.01] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-[0.03] transition-opacity duration-700" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8 relative z-10">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--theme-text-heading)] mb-2">
                    Process Analyst
                  </h3>
                  <p className="text-[var(--theme-text-secondary)] font-medium text-lg">
                    Meta Tower
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[var(--theme-border)] text-sm font-medium text-[var(--theme-text-secondary)] flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Jan 2024 - Present
                </div>
              </div>

              <div className="space-y-6 text-[var(--theme-text-muted)] text-base md:text-lg leading-relaxed relative z-10 font-light">
                <p>
                  As a Process Analyst, I focused on analyzing and refining business workflows to eliminate bottlenecks and enhance operational efficiency. By mapping out existing processes, I identified critical gaps and designed optimized solutions that significantly improved performance.
                </p>
                <p>
                  I collaborated closely with engineering and cross-functional teams, translating complex business requirements into clear, actionable technical documentation. My role involved supporting system testing, validating process changes, and ensuring the smooth deployment of workflow enhancements that reduced manual effort and improved cross-team communication.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[var(--theme-border)] relative z-10">
                <h4 className="text-sm font-semibold tracking-wider text-[var(--theme-text-heading)] uppercase mb-6">
                  Key Contributions
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {responsibilities.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-[var(--theme-text-secondary)]">
                      <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--theme-text-heading)] opacity-50" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 relative z-10">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full text-xs font-medium bg-[var(--theme-surface)] text-[var(--theme-text-secondary)] border border-[var(--theme-border)]"
                    >
                      {skill}
                    </span>
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
