import { useRef, useEffect } from 'react';
import { useGLTF, Bounds, Center } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Model({ url = '/models/about/avatar.glb' }) {
  const group = useRef();
  const { scene } = useGLTF(url);
  const { camera, invalidate } = useThree();

  useEffect(() => {
    if (!group.current) return;
    
    // Initial states
    group.current.rotation.y = 0;
    group.current.position.y = -1;
    group.current.scale.set(1.0, 1.0, 1.0);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5, // Smooth damping
        onUpdate: () => invalidate() // Render only when scrolling
      }
    });

    // Animate rotation, position, scale
    tl.to(group.current.rotation, {
      y: Math.PI, // smooth 180-degree rotation
      x: 0.1, // slight tilt
      ease: "none"
    }, 0)
    .to(group.current.position, {
      y: -0.2, // float gently
      ease: "sine.inOut"
    }, 0)
    .to(group.current.scale, {
      x: 0.85, // scale down slightly
      y: 0.85,
      z: 0.85,
      ease: "sine.inOut"
    }, 0)
    .to(camera.position, {
      y: 1, // subtle camera parallax
      ease: "none"
    }, 0);

    return () => {
      tl.kill();
    };
  }, [camera, invalidate]);

  return (
    <group ref={group} dispose={null}>
      <Bounds fit clip margin={0.8}>
        <Center>
          <primitive object={scene} rotation={[0, Math.PI, 0]} castShadow />
        </Center>
      </Bounds>
    </group>
  );
}

useGLTF.preload('/models/about/avatar.glb');
