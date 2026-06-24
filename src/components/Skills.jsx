import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaPhp, FaLaravel, FaGitAlt, FaGithub, FaFigma, FaNodeJs, FaLinux } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiDart, SiFlutter, SiFramer, SiMysql, SiFirebase, SiPostman, SiVite } from "react-icons/si";
import { TbApi, TbBrandVscode } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "REST APIs", icon: TbApi, color: "#009688" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Linux", icon: FaLinux, color: "#FCC624" },
    ],
  }
];

function SkillCard({ skill, prefersReducedMotion }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotateY(((x - centerX) / centerX) * 12);
    setRotateX(((y - centerY) / centerY) * -12);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="relative p-[1px] rounded-2xl glass group cursor-pointer h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: prefersReducedMotion ? 0 : rotateX,
        rotateY: prefersReducedMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      whileHover={prefersReducedMotion ? {} : { scale: 1.04, zIndex: 10 }}
    >
      {/* Soft glowing border effect */}
      <div 
        className="absolute inset-0 rounded-2xl blur-md transition-opacity duration-500 z-0"
        style={{ 
          backgroundColor: skill.color, 
          opacity: isHovered && !prefersReducedMotion ? 0.3 : 0 
        }}
      />
      
      <div className="relative h-full w-full bg-[var(--theme-surface)] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 overflow-hidden border border-[var(--theme-border)] group-hover:border-[var(--theme-border-medium)] transition-colors duration-300 shadow-sm group-hover:shadow-2xl z-10">
        
        {/* Radial mouse highlight */}
        {!prefersReducedMotion && (
          <div 
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(120px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.05), transparent 100%)`,
            }}
          />
        )}
        
        <motion.div 
          className="text-4xl text-[var(--theme-text-muted)] transition-colors duration-300 relative z-10"
          animate={!prefersReducedMotion && isHovered ? { rotate: [0, -10, 10, -5, 5, 0], y: -5, filter: "brightness(1.2)" } : { rotate: 0, y: 0, filter: "brightness(1)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ color: isHovered ? skill.color : "" }}
        >
          <Icon />
        </motion.div>
        
        <div className="text-center z-10">
          <h4 className="text-sm font-semibold tracking-wide text-[var(--theme-text-heading)]">{skill.name}</h4>
        </div>
      </div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="relative w-full py-32 px-6 min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {!prefersReducedMotion && (
          <>
            <motion.div 
              className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-[100px]"
              animate={{ x: [0, 50, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "transform" }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[80px]"
              animate={{ x: [0, -40, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "transform" }}
            />
          </>
        )}
      </div>

      <div className="relative max-w-6xl mx-auto w-full z-10">
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
            The core technologies and tools I leverage to build highly performant, scalable, and beautifully designed digital experiences.
          </p>
        </motion.div>

        <div className="space-y-20">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <motion.h3 
                className="text-2xl font-semibold tracking-tight text-[var(--theme-text-heading)] mb-8 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="w-8 h-[1px] bg-[var(--theme-border-medium)] mr-4" />
                {category.title}
              </motion.h3>

              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex} variants={itemVariants} className="h-full">
                    <SkillCard skill={skill} prefersReducedMotion={prefersReducedMotion} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
