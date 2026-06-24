import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { Model } from './Model';
import { FloatingLights } from './FloatingLights';

export function AboutScene() {
  return (
    <div className="w-full h-[60vh] md:h-[80vh] relative">
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        frameloop="demand"
      >
        <Suspense fallback={null}>
          <FloatingLights />
          <Model url="/models/about/avatar.glb" />
          <ContactShadows 
            position={[0, -2.5, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2} 
            far={4} 
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
