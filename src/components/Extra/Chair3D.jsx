import React from 'react';
import { useGLTF } from '@react-three/drei';

const Chair3D = () => {
  const { nodes, materials } = useGLTF('/chair/scene.gltf');
  console.log("no")
  return (
    <group dispose={null}>
      <primitive object={nodes.Object_0} />
    </group>
  );
};

export default Chair3D;
