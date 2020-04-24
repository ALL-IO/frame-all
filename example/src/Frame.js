import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Frame({ url, scale = [1, 1, 1] }) {
  // Load the pre-made frame
  const gltf = useLoader(GLTFLoader, url);

  return <primitive scale={scale} object={gltf.scene} dispose={null} />;
}

export default Frame;
