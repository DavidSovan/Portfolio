import { motion } from "framer-motion";

export function PageTransition({ children }) {
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-[var(--theme-bg)] z-[100] pointer-events-none"
        initial={{ y: "100%" }}
        animate={{ y: "100%" }}
        exit={{ y: 0 }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="fixed inset-0 bg-[var(--theme-bg)] z-[100] pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
