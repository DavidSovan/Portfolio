import { useRef } from 'react';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutContent() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      }
    });

    tl.from(".reveal-text", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });

  }, { scope: container });



  return (
    <div ref={container} className="flex flex-col gap-8 z-10 relative">
      <div className="overflow-hidden">
        <h2 className="reveal-text text-4xl md:text-6xl font-bold tracking-tight text-[var(--theme-text-heading)]">
          Crafting Digital
        </h2>
      </div>
      <div className="overflow-hidden">
        <h2 className="reveal-text text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Experiences.
        </h2>
      </div>
      
      <div className="mt-4 space-y-6 text-lg md:text-xl text-[var(--theme-text-secondary)] leading-relaxed font-light">
        <div className="overflow-hidden">
          <p className="reveal-text">
            I am a multidisciplinary developer focused on bridging the gap between design and engineering. 
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="reveal-text">
            My work revolves around creating immersive, highly optimized, and beautifully interactive interfaces that leave a lasting impression.
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="reveal-text">
            With expertise in modern frameworks, fluid typography, and complex WebGL/GSAP animations, I build software that feels alive.
          </p>
        </div>
      </div>




    </div>
  );
}
