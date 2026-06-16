import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import projectImage from "../assets/Projects/Portfolio.png";
import projectImage1 from "../assets/Projects/TaskApp.jpg";
import projectImage2 from "../assets/Projects/ecom_demo.png";
import projectImage3 from "../assets/Projects/Project1.png";
import projectImage4 from "../assets/Projects/chat_app.png";
import projectImage5 from "../assets/Projects/cineverse.png";
import projectImage6 from "../assets/Projects/uber_taxi.png";
import projectImage7 from "../assets/Projects/API.png";

function TiltCard({ children, className, prefersReducedMotion }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRotateY(((x - rect.width / 2) / rect.width) * 8);
    setRotateX(((y - rect.height / 2) / rect.height) * -8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const prefersReducedMotion = useReducedMotion();

  const categories = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "mobile", label: "Mobile" },
  ];

  const projects = [
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
      image: projectImage6, tags: ["Dart", "Flutter", "Laravel", "API Integration", "MySQL"],
      codeLink: "https://github.com/DavidSovan/Uber-App", category: "fullstack",
    },
    {
      id: 8, title: "POS System",
      description: "POS and Inventory Management System with secure user management, real-time tracking, sales processing, and reporting.",
      image: projectImage7, tags: ["PHP", "Laravel", "API Integration", "MySQL"],
      codeLink: "https://github.com/DavidSovan/POS-system-backend", category: "backend",
    },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <motion.section
      id="projects"
      className="w-full py-20 px-6 min-h-screen relative"
      initial={prefersReducedMotion ? {} : { opacity: 0 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="anime-gradient-text">My Projects</span>
          </h2>
          <p className="text-[var(--theme-text-muted)] max-w-xl mx-auto text-sm">
            Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "anime-gradient text-white shadow-lg shadow-purple-500/25"
                  : "glass text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] hover:bg-[var(--theme-surface-hover)]"
              }`}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              aria-pressed={activeFilter === category.id}
              aria-label={`Filter by ${category.label}`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          key={activeFilter}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <TiltCard
                key={project.id}
                prefersReducedMotion={prefersReducedMotion}
                className="glass rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <motion.div
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: prefersReducedMotion ? 0 : index * 0.07 }}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-bg)]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs rounded-full text-white anime-gradient"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[var(--theme-text-heading)] mb-2 group-hover:text-anime-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[var(--theme-text-muted)] text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <motion.a
                      href={project.codeLink}
                      className="inline-flex items-center px-4 py-2 rounded-lg text-sm text-anime-cyan glass border border-[var(--theme-border)] hover:bg-[var(--theme-surface-hover)] hover:border-anime-cyan/30 transition-all duration-300"
                      whileHover={prefersReducedMotion ? {} : { scale: 1.03, x: 3 }}
                      whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                    >
                      View Code →
                    </motion.a>
                  </div>
                </motion.div>
              </TiltCard>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-[var(--theme-text-muted)]">No projects found for this category.</p>
            </div>
          )}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/DavidSovan"
            className="inline-flex items-center px-6 py-3 rounded-lg glass text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] hover:bg-[var(--theme-surface-hover)] transition-all duration-300 border border-[var(--theme-border)]"
            whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -2 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
          >
            <span>See More Projects</span>
            <span className="ml-2">→</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
