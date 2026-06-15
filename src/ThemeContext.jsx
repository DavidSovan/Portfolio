import { createContext, useContext, useState, useEffect, useRef, useCallback } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved !== "light";
  });

  const isDarkRef = useRef(isDark);
  isDarkRef.current = isDark;

  const transitionRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark);
  }, []);

  const toggleTheme = useCallback((clientX, clientY) => {
    const newIsDark = !isDarkRef.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (transitionRef.current) return;

    localStorage.setItem("theme", newIsDark ? "dark" : "light");

    const doToggle = () => {
      document.documentElement.classList.toggle("light", !newIsDark);
    };

    if (document.startViewTransition && !reduced) {
      const endX = clientX ?? window.innerWidth / 2;
      const endY = clientY ?? window.innerHeight / 2;
      const r = Math.hypot(
        Math.max(endX, window.innerWidth - endX),
        Math.max(endY, window.innerHeight - endY)
      );
      const root = document.documentElement;
      root.style.setProperty("--toggle-x", `${endX}px`);
      root.style.setProperty("--toggle-y", `${endY}px`);
      root.style.setProperty("--toggle-r", `${r}px`);

      transitionRef.current = document.startViewTransition(() => {
        doToggle();
      });
      transitionRef.current.finished.finally(() => {
        root.style.removeProperty("--toggle-x");
        root.style.removeProperty("--toggle-y");
        root.style.removeProperty("--toggle-r");
        transitionRef.current = null;
      });
    } else {
      doToggle();
    }

    setIsDark(newIsDark);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
