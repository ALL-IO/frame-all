import React from "react";

// Fallback basic geometry
function Box(props) {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={"orange"} />
    </mesh>
  );
}

export default Box;
