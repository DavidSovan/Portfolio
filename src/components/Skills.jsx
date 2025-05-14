import { useState, useEffect } from "react";

function Skills() {
  const [animatedSkills, setAnimatedSkills] = useState([]);

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
      ],
    },
  ];

  useEffect(() => {
    // Animate skills in sequence when component mounts
    const timer = setTimeout(() => {
      setAnimatedSkills(
        skillCategories.flatMap((category) =>
          category.skills.map((skill) => skill.name)
        )
      );
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Check if a skill should be animated
  const isAnimated = (skillName) => {
    return animatedSkills.includes(skillName);
  };

  return (
    <section
      id="skills"
      className="py-20 px-6 w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've developed expertise in these technologies and continue to
            expand my knowledge every day.
          </p>
        </div>

        {/* Skills sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isAnimated(skill.name)
                            ? `${skill.level}%`
                            : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills showcased as tags */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Additional Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git",
              "GitHub",
              "Figma",
              "Postman",
              "VS Code",
              "Vite",
              "Ngrok",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                          rounded-full border border-gray-200 dark:border-gray-700 shadow-sm
                          transition-all hover:transform hover:scale-105 hover:border-blue-400 dark:hover:border-blue-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
