import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { AnimatePresence, motion } from "framer-motion";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 6 + 4,
  delay: Math.random() * 5,
}));

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="app-shell"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative min-h-screen bg-dark-bg overflow-x-hidden"
      >
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(196,77,255,0.08),transparent_50%),radial-gradient(ellipse_at_bottom,_rgba(0,212,255,0.06),transparent_50%)]" />
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                background: p.id % 3 === 0
                  ? "rgba(255, 107, 157, 0.6)"
                  : p.id % 3 === 1
                    ? "rgba(196, 77, 255, 0.5)"
                    : "rgba(0, 212, 255, 0.5)",
                boxShadow: p.id % 3 === 0
                  ? "0 0 6px rgba(255, 107, 157, 0.4)"
                  : p.id % 3 === 1
                    ? "0 0 6px rgba(196, 77, 255, 0.4)"
                    : "0 0 6px rgba(0, 212, 255, 0.4)",
              }}
              animate={{
                y: [0, -30, 0, 20, 0],
                x: [0, 15, -10, 5, 0],
                opacity: [0.3, 0.8, 0.4, 0.7, 0.3],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <Header />
          <Home />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
