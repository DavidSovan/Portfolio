import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // simulate network loading
      current += Math.floor(Math.random() * 15) + 1;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 600); // pause at 100% before removing
      }
      setProgress(current);
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]"
      initial={{ y: 0 }}
      exit={{ y: "-100%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />
      <div className="relative flex flex-col items-center z-10">
        <motion.div 
          className="text-7xl md:text-9xl font-bold text-white tabular-nums tracking-tighter"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {progress}%
        </motion.div>
        
        <div className="mt-12 w-64 md:w-96 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
          <motion.div 
            className="absolute inset-0 bg-white origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
        
        <div className="mt-8 uppercase tracking-[0.3em] text-xs font-medium text-white/50">
          Initializing Portfolio
        </div>
      </div>
    </motion.div>
  );
}

export default Preloader;
