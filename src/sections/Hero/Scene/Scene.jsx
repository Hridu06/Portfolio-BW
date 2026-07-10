import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import "./Scene.css";

import Grid from "./Grid";
import WavePlane from "./WavePlane";
import MouseGlow from "./MouseGlow";
import Particles from "./Particles";

export default function Scene() {
  return (
    <div className="hero-scene">

      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 50,
        }}

        dpr={[1, 2]}

        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>

          {/* Ambient */}
          <ambientLight intensity={1.2} />

          {/* Green Glow */}
          <pointLight
            position={[0, 2, 5]}
            intensity={8}
            color="#39ff88"
          />

          {/* Components */}
          <Grid />

          <WavePlane />

          <Particles />

          <MouseGlow />

        </Suspense>
      </Canvas>

    </div>
  );
}