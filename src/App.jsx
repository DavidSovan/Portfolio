import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";
import SideNav from "./components/SideNav";
import CustomCursor from "./components/CustomCursor";
import { ThemeProvider } from "./ThemeContext";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Lenis from "lenis";

function SmoothScroll({ children }) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
}

function PageContent() {
  return (
    <>
      <Header />
      <SideNav />
      <div className="relative z-10 w-full">
        <Home />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <CustomCursor />
      <SmoothScroll>
        <div className="relative min-h-screen bg-[var(--theme-bg)] overflow-x-hidden md:cursor-none">
          {/* Background effects */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03),transparent_50%),radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.02),transparent_50%)]" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay" />
          </div>

          <AnimatePresence mode="wait">
            {loading ? (
              <Preloader key="preloader" onComplete={() => setLoading(false)} />
            ) : (
              <motion.div
                key="app-shell"
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                <PageContent />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
