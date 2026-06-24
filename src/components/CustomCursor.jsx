import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR = "a, button, input, textarea, select, [role='button']";

// Sizes from head (largest, leads the trail) to tail (smallest, lags furthest behind)
const BLOB_SIZES = [26, 22, 18, 15, 12, 9];
// How quickly each point eases toward the one ahead of it in the chain.
// Lower = more lag = a longer liquid trail when the mouse moves fast.
const EASE = [0.35, 0.3, 0.26, 0.22, 0.19, 0.16];

function CustomCursor() {
  const blobRefs = useRef([]);
  const pointsRef = useRef(BLOB_SIZES.map(() => ({ x: -100, y: -100 })));
  const mouseRef = useRef({ x: -100, y: -100 });
  const hoverRef = useRef(false);
  const rafRef = useRef(null);

  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );
  const [reducedMotion, setReducedMotion] = useState(false);

  // Reactive desktop/mobile + reduced-motion checks
  useEffect(() => {
    const sizeQuery = window.matchMedia("(min-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsDesktop(sizeQuery.matches);
    setReducedMotion(motionQuery.matches);

    const handleSize = (e) => setIsDesktop(e.matches);
    const handleMotion = (e) => setReducedMotion(e.matches);
    sizeQuery.addEventListener("change", handleSize);
    motionQuery.addEventListener("change", handleMotion);
    return () => {
      sizeQuery.removeEventListener("change", handleSize);
      motionQuery.removeEventListener("change", handleMotion);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop || reducedMotion) return;

    const handleMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleOver = (e) => {
      hoverRef.current = !!e.target.closest(HOVER_SELECTOR);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);

    const tick = () => {
      const points = pointsRef.current;
      const mouse = mouseRef.current;

      // Head chases the real cursor; each later point chases the one ahead of it
      points[0].x += (mouse.x - points[0].x) * EASE[0];
      points[0].y += (mouse.y - points[0].y) * EASE[0];
      for (let i = 1; i < points.length; i++) {
        points[i].x += (points[i - 1].x - points[i].x) * EASE[i];
        points[i].y += (points[i - 1].y - points[i].y) * EASE[i];
      }

      const headGrowth = hoverRef.current ? 1.45 : 1;

      points.forEach((p, i) => {
        const el = blobRefs.current[i];
        if (!el) return;
        const size = i === 0 ? BLOB_SIZES[i] * headGrowth : BLOB_SIZES[i];
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.transform = `translate(${p.x - size / 2}px, ${p.y - size / 2}px)`;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isDesktop, reducedMotion]);

  if (!isDesktop || reducedMotion) return null;

  return (
    <>
      {/* Hidden filter definition — turns overlapping blurred circles into one liquid shape */}
      <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="liquid-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div
        className="fixed inset-0 pointer-events-none z-[9999]"
        style={{ filter: "url(#liquid-goo)" }}
      >
        {BLOB_SIZES.map((size, i) => (
          <div
            key={i}
            ref={(el) => (blobRefs.current[i] = el)}
            className="fixed top-0 left-0 rounded-full bg-[var(--theme-text-heading)]"
            style={{ width: size, height: size, transform: "translate(-100px, -100px)" }}
          />
        ))}
      </div>
    </>
  );
}

export default CustomCursor;
