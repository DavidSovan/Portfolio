import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { ThemeProvider } from "./ThemeContext";
import { AnimatePresence, motion } from "framer-motion";


function App() {
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <motion.div
          key="app-shell"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative min-h-screen bg-[var(--theme-bg)] overflow-x-hidden"
        >
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03),transparent_50%),radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.02),transparent_50%)]" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay" />
          </div>

          <div className="relative z-10">
            <Header />
            <Home />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </div>
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
