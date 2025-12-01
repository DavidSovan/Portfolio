import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="app-shell"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Header />
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
