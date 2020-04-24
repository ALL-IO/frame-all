import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";

// Import model components
import Frame from "./Frame";
import Artwork from "./Artwork";
import Box from "./Box";

function App() {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      {/* Set up some very basic lighting */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {/* Load the frame and artwork */}
      <Suspense fallback={<Box />}>
        <Artwork url="sunflower.jpg" />
        <Frame scale={[0.5, 0.5, 0.5]} url="frame.glb" />
      </Suspense>
    </Canvas>
  );
}

export default App;
