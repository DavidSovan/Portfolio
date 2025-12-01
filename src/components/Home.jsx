import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import profileImage from "../assets/pf.jpg";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const topBlobY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bottomBlobY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const blobOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.22, 0.18, 0.08]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.8, ease: "easeOut" }
      }
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl"
          style={{ y: topBlobY, opacity: blobOpacity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-purple-100 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl"
          style={{ y: bottomBlobY, opacity: blobOpacity }}
        ></motion.div>
      </div>

      <motion.div className="max-w-4xl">
        {/* Profile image */}
        <div className="mb-8 flex justify-center">
          <motion.div
            className="w-60 h-60 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg"
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    scale: 1.04,
                    rotate: 1.5,
                  }
            }
            whileTap={
              prefersReducedMotion
                ? {}
                : {
                    scale: 0.97,
                    rotate: 0,
                  }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 220, damping: 20 }
            }
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Main content */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible || prefersReducedMotion ? 0 : 20,
          }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.7, ease: "easeOut", delay: 0.1 }
          }
        >
          Hello, I'm Sovan David
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible || prefersReducedMotion ? 0 : 20,
          }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.7, ease: "easeOut", delay: 0.2 }
          }
        >
          Developer in progress | Lifelong Learner
        </motion.p>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible || prefersReducedMotion ? 0 : 20,
          }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.7, ease: "easeOut", delay: 0.3 }
          }
        >
          "Developer in progress, passionate about building clean, responsive,
          and user-friendly applications. I enjoy creating smooth user
          experiences with intuitive design. Continuously learning and growing,
          I stay updated with the latest technologies to sharpen my skills and
          deliver better results."
        </motion.p>

        {/* CTA buttons */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12">
          <motion.button
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible || prefersReducedMotion ? 0 : 20,
            }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.7, ease: "easeOut", delay: 0.4 }
            }
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    scale: 1.04,
                    y: -2,
                    boxShadow: "0 18px 40px rgba(37, 99, 235, 0.35)",
                  }
            }
            whileTap={
              prefersReducedMotion ? {} : { scale: 0.97, y: 0 }
            }
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("projects").offsetTop,
                behavior: "smooth",
              })
            }
          >
            View My Work
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible || prefersReducedMotion ? 0 : 20,
            }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.7, ease: "easeOut", delay: 0.45 }
            }
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    scale: 1.03,
                    y: -2,
                    boxShadow: "0 16px 36px rgba(15, 23, 42, 0.28)",
                  }
            }
            whileTap={
              prefersReducedMotion ? {} : { scale: 0.97, y: 0 }
            }
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("contact").offsetTop,
                behavior: "smooth",
              })
            }
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div className="flex justify-center space-x-6 mb-12">
          <motion.a
            href="https://github.com/DavidSovan"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible || prefersReducedMotion ? 0 : 20,
            }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.7, ease: "easeOut", delay: 0.5 }
            }
            whileHover={
              prefersReducedMotion ? {} : { y: -2, scale: 1.1 }
            }
            whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
          >
            <i className="fab fa-github"></i>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/%E1%9E%9F%E1%9E%BB%E1%9E%9C%E1%9E%8E%E1%9F%92%E1%9E%8E-%E1%9E%8A%E1%9F%81%E1%9E%9C%E1%9E%B8%E1%9E%8F-834a07324/"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible || prefersReducedMotion ? 0 : 20,
            }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.7, ease: "easeOut", delay: 0.55 }
            }
            whileHover={
              prefersReducedMotion ? {} : { y: -2, scale: 1.1 }
            }
            whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
          >
            <i className="fab fa-linkedin-in"></i>
          </motion.a>
          <motion.a
            href="https://t.me/Sovandavid"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible || prefersReducedMotion ? 0 : 20,
            }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.7, ease: "easeOut", delay: 0.6 }
            }
            whileHover={
              prefersReducedMotion ? {} : { y: -2, scale: 1.1 }
            }
            whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
          >
            <i className="fab fa-telegram"></i>
          </motion.a>
          <motion.a
            href="mailto:sovandavid19@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible || prefersReducedMotion ? 0 : 20,
            }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.7, ease: "easeOut", delay: 0.65 }
            }
            whileHover={
              prefersReducedMotion ? {} : { y: -2, scale: 1.1 }
            }
            whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
          >
            <i className="fas fa-envelope"></i>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="text-gray-400 dark:text-gray-600 text-3xl">↓</span>
      </div>
    </motion.section>
  );
}

export default Home;
