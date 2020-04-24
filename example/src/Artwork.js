import * as THREE from "three";
import React from "react";
import { useLoader } from "react-three-fiber";

function Artwork({ url }) {
  // Load the artwork image and wrap around a mesh
  // There are more ways to do this: https://github.com/react-spring/react-three-fiber
  const texture = useLoader(THREE.TextureLoader, url);

  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[2, 2, 0.1]} />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
}

export default Artwork;
