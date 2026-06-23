import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import projectImage from "../assets/Projects/Portfolio.png";
import projectImage1 from "../assets/Projects/TaskApp.jpg";
import projectImage2 from "../assets/Projects/ecom_demo.png";
import projectImage3 from "../assets/Projects/Project1.png";
import projectImage4 from "../assets/Projects/chat_app.png";
import projectImage5 from "../assets/Projects/Pro-cine.png";
import projectImage6 from "../assets/Projects/uber_taxi.png";
import projectImage7 from "../assets/Projects/API.png";

export const projects = [
  {
    id: 1, title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
    image: projectImage, tags: ["React", "Tailwind CSS", "Responsive Design"],
    codeLink: "https://github.com/DavidSovan/Portfolio", category: "frontend",
  },
  {
    id: 2, title: "Task Manager App",
    description: "Cross-platform mobile app to organize, track, and manage daily tasks efficiently. Flutter frontend with PHP/MySQL backend.",
    image: projectImage1, tags: ["Flutter", "Dart", "PHP", "MySQL"],
    codeLink: "https://github.com/DavidSovan/Task-Manager-App", category: "fullstack",
  },
  {
    id: 3, title: "Static E-commerce App",
    description: "A static e-commerce app built with Flutter, featuring product listings and a shopping cart.",
    image: projectImage2, tags: ["Dart", "Flutter"],
    codeLink: "https://github.com/DavidSovan/Static-Ecommerce-app", category: "mobile",
  },
  {
    id: 4, title: "E-commerce UI Design",
    description: "E-commerce UI design built with HTML and CSS for a responsive and modern shopping experience.",
    image: projectImage3, tags: ["HTML", "CSS", "Responsive Design"],
    codeLink: "https://github.com/DavidSovan/E-commerce_UI", category: "frontend",
  },
  {
    id: 5, title: "Talky-Chat App",
    description: "Cross-platform chat app using Flutter and Firebase with real-time messaging, authentication, and global chat rooms.",
    image: projectImage4, tags: ["Dart", "Flutter", "Firebase"],
    codeLink: "https://github.com/DavidSovan/Talky-Chat-App-", category: "fullstack",
  },
  {
    id: 6, title: "Cineverse-Movie App",
    description: "Flutter app integrated with TMDB API to display popular, upcoming, and genre-based movies with search and ratings.",
    image: projectImage5, tags: ["Dart", "Flutter", "API Integration"],
    codeLink: "https://github.com/DavidSovan/Cineverse-movie-app-", category: "mobile",
  },
  {
    id: 7, title: "Uber Taxi App",
    description: "Full-stack Flutter & Laravel app with role-based access for customers and drivers, RESTful APIs, and ride booking.",
    image: projectImage6, tags: ["Dart", "Flutter", "Laravel", "MySQL"],
    codeLink: "https://github.com/DavidSovan/Uber-App", category: "fullstack",
  },
  {
    id: 8, title: "POS System",
    description: "POS and Inventory Management System with secure user management, real-time tracking, sales processing, and reporting.",
    image: projectImage7, tags: ["PHP", "Laravel", "MySQL"],
    codeLink: "https://github.com/DavidSovan/POS-system-backend", category: "backend",
  },
];

function TiltCard({ children, className, prefersReducedMotion }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Very subtle tilt
    setRotateY(((x - rect.width / 2) / rect.width) * 4);
    setRotateX(((y - rect.height / 2) / rect.height) * -4);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "1000px" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      animate={{ scale: isHovered && !prefersReducedMotion ? 1.02 : 1 }}
    >
      {children}
    </motion.div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();

  const categories = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "mobile", label: "Mobile" },
  ];



  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <motion.section
      id="projects"
      className="w-full py-32 px-6 min-h-screen relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-[var(--theme-text-heading)]">
            Selected Works
          </h2>
          <p className="text-[var(--theme-text-muted)] max-w-xl mx-auto text-base">
            Showcasing a curated collection of recent projects and technical explorations.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-[var(--theme-text-heading)] text-[var(--theme-bg)] shadow-sm"
                  : "glass text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] hover:bg-[var(--theme-surface-hover)]"
              }`}
              whileTap={{ scale: 0.95 }}
              aria-pressed={activeFilter === category.id}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          key={activeFilter}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <TiltCard
                key={project.id}
                prefersReducedMotion={prefersReducedMotion}
                className="glass rounded-3xl overflow-hidden group cursor-pointer flex flex-col h-full border border-[var(--theme-border)] hover:border-[var(--theme-border-medium)] transition-colors duration-500"
              >
                <motion.div
                  className="flex flex-col h-full"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                >
                  <div
                    className="relative overflow-hidden aspect-[4/3] bg-[var(--theme-surface)]"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold tracking-tight text-[var(--theme-text-heading)] mb-3 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[var(--theme-text-muted)] text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--theme-surface)] text-[var(--theme-text-secondary)] border border-[var(--theme-border)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-[var(--theme-text-heading)] transition-all group/link"
                      >
                        View Repository 
                        <motion.span 
                          className="ml-2 inline-block transition-transform duration-300 group-hover/link:translate-x-1"
                        >
                          →
                        </motion.span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-[var(--theme-text-muted)]">No projects found for this category.</p>
            </div>
          )}
        </motion.div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.a
            href="https://github.com/DavidSovan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 rounded-full glass text-[var(--theme-text)] hover:bg-[var(--theme-surface-hover)] transition-all font-medium border border-[var(--theme-border)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View GitHub Profile</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
