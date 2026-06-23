import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import Lenis from "lenis";

import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import { ThemeProvider } from "./ThemeContext";

import HomePage from "./pages/HomePage";
import CaseStudy from "./pages/CaseStudy";

function SmoothScroll({ children }) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, [prefersReducedMotion]);

  return <>{children}</>;
}

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

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
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/project/:id" element={<CaseStudy />} />
                </Routes>
              </AnimatePresence>
            )}
          </AnimatePresence>
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
