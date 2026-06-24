import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BackgroundEffects } from "./BackgroundEffects";
import { AboutContent } from "./AboutContent";
import { AboutScene } from "./AboutScene";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const sceneRef = useRef(null);

  useGSAP(() => {
    // 3D Scene entrance animation
    gsap.fromTo(sceneRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        }
      }
    );

  }, { scope: sectionRef });

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="relative w-full py-32 px-6 min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <BackgroundEffects />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center relative z-10">
        <AboutContent />
        
        <div ref={sceneRef} className="w-full relative">
          <AboutScene />
        </div>
      </div>
    </section>
  );
}
