import { useState } from "react";
import projectImage from "../assets/Projects/Portfolio.png";
import projectImage1 from "../assets/Projects/TaskApp.jpg";
import projectImage2 from "../assets/Projects/Flutter_Ecom_UI.png";
import projectImage3 from "../assets/Projects/Project1.png";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

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
    },
    {
      id: 2,
      title: "Task Manager App (Frontend + Backend)",
      description:
        "The Task Manager App is a cross-platform mobile application designed to help users organize, track, and manage their daily tasks efficiently. The frontend is developed using Flutter, providing a responsive and smooth user interface. The backend is powered by PHP, with a MySQL database handling task storage, user data, and application logic.",
      image: projectImage1,
      tags: ["Flutter", "Dart", "PHP", "MySQL"],
      demoLink: "#",
      codeLink: "https://github.com/DavidSovan/Task-Manager-App",
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
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
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
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex justify-center mt-4">
                  <a
                    href={project.codeLink}
                    className="px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/DavidSovan"
            className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <span>See More Projects</span>
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
