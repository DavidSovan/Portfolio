import { useState, useEffect } from "react";
import profileImage from "../assets/ProfileDavid.png";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-100 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div
        className={`max-w-4xl transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Profile image */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main content */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Hello, I'm [Sovan David]
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
          Frontend Developer | Lifelong Learner
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          A Frontend Developer who enjoys creating clean, responsive, and
          user-friendly experiences. I love learning new things and growing my
          skills.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("projects").offsetTop,
                behavior: "smooth",
              })
            }
          >
            View My Work
          </button>
          <button
            className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("contact").offsetTop,
                behavior: "smooth",
              })
            }
          >
            Contact Me
          </button>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/DavidSovan"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/%E1%9E%9F%E1%9E%BB%E1%9E%9C%E1%9E%8E%E1%9F%92%E1%9E%8E-%E1%9E%8A%E1%9F%81%E1%9E%9C%E1%9E%B8%E1%9E%8F-834a07324/"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://t.me/Sovandavid"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
          >
            <i className="fab fa-telegram"></i>
          </a>
          <a
            href="mailto:sovandavid19@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="text-gray-400 dark:text-gray-600 text-3xl">↓</span>
      </div>
    </section>
  );
}

export default Home;
