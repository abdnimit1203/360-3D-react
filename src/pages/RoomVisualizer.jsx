import React, { useRef } from "react";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import { useDrag } from "react-use-gesture";
import { useSpring, a } from "react-spring";
const Furniture = ({ position }) => {
  const gltf = useGLTF("/chair/scene.gltf", true);
  const group = useRef();

 

  

  return (
 
      <primitive object={gltf.scene} />

  );
};
const Wardrobe = ({ position }) => {
  const gltf = useGLTF("/wardrobe/scene.gltf", true);
  const group = useRef();

 

  

  return (
 
      <primitive object={gltf.scene} />

  );
};

const RoomVisualizer = () => {
  return (
    <Canvas style={{ height: "100vh" }}>
      <PerspectiveCamera makeDefault position={[0, 5, 10]} />
      <Suspense fallback={null}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RoomModel />
        <Furniture position={[0, 0, 0]} />
        <Wardrobe position={[15, 15, 15]} />
      </Suspense>
    </Canvas>
  );
};

const RoomModel = () => {
  const gltf = useGLTF("/room/scene.gltf", true);
  return <primitive object={gltf.scene} />;
};

export default RoomVisualizer;
