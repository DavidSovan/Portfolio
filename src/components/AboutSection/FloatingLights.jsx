export function FloatingLights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[5, 10, 5]} 
        intensity={1} 
        castShadow 
        shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024} 
      />
      <pointLight position={[0, 3, 0]} intensity={2} color="#8a2be2" distance={10} />
      <pointLight position={[-5, 2, -5]} intensity={1.5} color="#4169e1" distance={10} />
    </>
  );
}
