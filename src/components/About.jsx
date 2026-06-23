import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImage from "../assets/pf2.jpg";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const container = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Split text animation manually or using generic reveal
    const lines = textRef.current.querySelectorAll(".reveal-line");
    
    gsap.from(lines, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      }
    });

    // Image Parallax
    gsap.fromTo(imageRef.current, 
      { y: -50, scale: 1.1 },
      {
        y: 50,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );
  }, { scope: container });

  return (
    <section id="about" ref={container} className="relative w-full py-32 px-6 min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div ref={textRef} className="flex flex-col gap-8 z-10">
          <div className="overflow-hidden">
            <h2 className="reveal-line text-4xl md:text-6xl font-bold tracking-tight text-[var(--theme-text-heading)]">
              Crafting Digital
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="reveal-line text-4xl md:text-6xl font-bold tracking-tight text-[var(--theme-text-muted)]">
              Experiences.
            </h2>
          </div>
          
          <div className="mt-8 space-y-6 text-lg md:text-xl text-[var(--theme-text-secondary)] leading-relaxed font-light">
            <div className="overflow-hidden">
              <p className="reveal-line">
                I am a multidisciplinary developer focused on bridging the gap between design and engineering. 
              </p>
            </div>
            <div className="overflow-hidden">
              <p className="reveal-line">
                My work revolves around creating immersive, highly optimized, and beautifully interactive interfaces that leave a lasting impression.
              </p>
            </div>
            <div className="overflow-hidden">
              <p className="reveal-line">
                With expertise in modern frameworks, fluid typography, and complex WebGL/GSAP animations, I build software that feels alive.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[60vh] md:h-[80vh] w-full rounded-3xl overflow-hidden glass border-[var(--theme-border)]">
          <img 
            ref={imageRef}
            src={profileImage} 
            alt="About David"
            className="absolute inset-0 w-full h-[120%] object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-bg)] to-transparent opacity-50 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}

export default About;
