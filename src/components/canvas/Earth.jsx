import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// ✅ Cek support WebGL
function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
}

const Earth = () => {
  const earth = useGLTF("/portfolio/planet/scene.gltf");
  console.log("Earth Model:", earth);
  return (
    <primitive object={earth.scene} scale={1.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  if (!isWebGLAvailable()) {
    return <div style={{ color: "#fff", textAlign: "center" }}>🌐 WebGL not supported on this device.</div>;
  }

  return (
    <Canvas
      shadows={false}
      frameloop="demand"
      dpr={[1]}
      gl={{
        preserveDrawingBuffer: false,
        powerPreference: "low-power",
        antialias: false,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
