import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import projectImage from "../assets/Projects/Portfolio.png";
import projectImage1 from "../assets/Projects/TaskApp.jpg";
import projectImage2 from "../assets/Projects/Flutter_Ecom_UI.png";
import projectImage3 from "../assets/Projects/Project1.png";
import projectImage4 from "../assets/Projects/chat_app.png";
import projectImage5 from "../assets/Projects/cineverse.png";
import projectImage6 from "../assets/Projects/uber_taxi.png";
import projectImage7 from "../assets/Projects/API.png";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const prefersReducedMotion = useReducedMotion();

  const categories = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "mobile", label: "Mobile" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 28,
      scale: prefersReducedMotion ? 1 : 0.98,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.55,
        ease: "easeOut",
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
      image: projectImage,
      tags: ["React", "Tailwind CSS", "Responsive Design"],
      demoLink: "#",
      codeLink: "https://github.com/DavidSovan/Portfolio",
      category: "frontend",
    },
    {
      id: 2,
      title: "Task Manager App",
      description:
        "The Task Manager App is a cross-platform mobile application designed to help users organize, track, and manage their daily tasks efficiently. The frontend is developed using Flutter, providing a responsive and smooth user interface. The backend is powered by PHP, with a MySQL database handling task storage, user data, and application logic.",
      image: projectImage1,
      tags: ["Flutter", "Dart", "PHP", "MySQL"],
      demoLink: "#",
      codeLink: "https://github.com/DavidSovan/Task-Manager-App",
      category: "fullstack",
    },
    {
      id: 3,
      title: "Static E-commerce App",
      description:
        "A static e-commerce app built with flutter , featuring product listings and a shopping cart.",
      image: projectImage2,
      tags: ["Dart", "Flutter"],
      demoLink: "#",
      codeLink: "https://github.com/DavidSovan/Static-Ecommerce-app",
      category: "mobile",
    },
    {
      id: 4,
      title: "E-commerce UI Design",
      description:
        "E-commerce UI design built with Html and CSS for a responsive and modern shopping experience.",
      image: projectImage3,
      tags: ["HTML", "CSS", "Responsive Design"],
      demoLink: "#",
      codeLink: "https://github.com/DavidSovan/E-commerce_UI",
      category: "frontend",
    },
    {
      id: 5,
      title: "Talky-Chat App",
      description:
        "Developed a cross-platform chat app using Flutter and Firebase, featuring user authentication, private messaging, and a global chat room. Utilized Cloud Firestore for real-time data sync and ensured responsive UI across Android and iOS platforms.",
      image: projectImage4,
      tags: ["Dart", "Flutter", "Firebase"],
      demoLink: "#",
      codeLink: "https://github.com/DavidSovan/Talky-Chat-App-",
      category: "fullstack",
    },
    {
      id: 6,
      title: "Cineverse-Movie App",
      description:
        "Built a cross-platform Flutter app integrated with the TMDB API to display popular, upcoming, and genre-based movies. Included search functionality and detailed movie views with trailers, ratings, and descriptions.",
      image: projectImage5,
      tags: ["Dart", "Flutter", "API Integration"],
      demoLink: "#",
      codeLink: "https://github.com/DavidSovan/Cineverse-movie-app-",
      category: "mobile",
    },
    {
      id: 7,
      title: "Uber Taxi App",
      description:
        "Built a full-stack Flutter & Laravel app with role-based access for customers and drivers. Implemented RESTful APIs, user authentication, and separate dashboards for booking rides and managing vehicles.",
      image: projectImage6,
      tags: ["Dart", "Flutter", "Laravel", "API Integration", "MySQL"],
      demoLink: "#",
      codeLink: "https://github.com/DavidSovan/Uber-App",
      category: "fullstack",
    },
     {
      id: 8,
      title: "POS System",
      description:
        "This POS (Point of Sale) and Inventory Management System is designed to handle retail operations with secure user management, real-time inventory tracking, sales processing, and comprehensive reporting capabilities.",
      image: projectImage7,
      tags: ["PHP", "Laravel", "API Integration", "MySQL"],
      demoLink: "#",
      codeLink: "https://github.com/DavidSovan/POS-system-backend",
      category: "backend",
    },
    
  ];

  // Filter projects based on active filter
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  return (
    <motion.section
      id="projects"
      className="w-full py-20 bg-gray-50 dark:bg-gray-900 min-h-screen"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 32 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        prefersReducedMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }
      }
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.6, ease: "easeOut" }
          }
        >
          <h2 className="text-4xl font-bold mb-4 relative inline-block ">
            <span className="relative z-10 font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 dark:bg-blue-900 opacity-50 transform -rotate-1"></span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique
            challenge and learning opportunity.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400"
              }`}
              aria-pressed={activeFilter === category.id}
              aria-label={`Filter by ${category.label}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1.5"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
                data-category={project.category}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 flex items-end"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 w-full">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full bg-blue-600/80 text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex justify-center mt-4">
                    <motion.a
                      href={project.codeLink}
                      className="px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                      whileHover={
                        prefersReducedMotion
                          ? {}
                          : { scale: 1.05, y: -1 }
                      }
                      whileTap={prefersReducedMotion ? {} : { scale: 0.96, y: 0 }}
                    >
                      View Code
                    </motion.a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found for this category.
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-16">
          <motion.a
            href="https://github.com/DavidSovan"
            className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            whileHover={
              prefersReducedMotion ? {} : { scale: 1.03, y: -2 }
            }
            whileTap={prefersReducedMotion ? {} : { scale: 0.97, y: 0 }}
          >
            <span>See More Projects</span>
            <span className="ml-2">→</span>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
