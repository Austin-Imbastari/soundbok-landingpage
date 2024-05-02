/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useControls } from "leva";
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

//Model
import SoundBok from "./Soundbok/Soundbok";

const SoundBoks = ({ z, speed }) => {
  const bokRef = useRef();
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    z: 0,
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state, delta) => {
    bokRef.current.rotation.set((data.rX += 0.01), (data.rY += 0.008), (data.rZ += 0.005));
    bokRef.current.position.set(data.x * width, (data.y += speed / 10), z);
    if (data.y > height) {
      data.y = -height;
    }
  });

  return (
    <mesh rotation={[0, -Math.PI * 0.5, 0]} ref={bokRef}>
      <SoundBok />
    </mesh>
  );
};

const Experience = ({ count = 20, depth = 80, speed }) => {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <SoundBoks speed={speed} key={i} z={-(i / count) * depth - 10} index={i} />
      ))}
      <EffectComposer>
        <DepthOfField target={[0, 0, depth / 2]} focalLength={0.8} bokehScale={14} height={700} />
      </EffectComposer>
    </>
  );
};

export default Experience;
