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

const SoundBoks = ({ z }) => {
    const bokRef = useRef();
    const { viewport, camera } = useThree();

    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);

    const [data] = useState({
        x: THREE.MathUtils.randFloatSpread(2),
        y: THREE.MathUtils.randFloatSpread(height),
        z: 0,
        rX: Math.random() * Math.PI,
        rY: Math.random() * Math.PI,
        rZ: Math.random() * Math.PI,
    });

    useFrame((state, delta) => {
        // const angle = state.clock.getElapsedTime();
        // bokRef.current.position.x += Math.sin(angle) * delta;
        // bokRef.current.position.z += Math.cos(angle) * delta;
        bokRef.current.rotation.set((data.rX += 0.001), (data.rY += 0.004), (data.rZ += 0.0005));
        bokRef.current.position.set(data.x * width, (data.y += 0.02), -z);
        if (data.y > height / 1) {
            data.y = -height / 1;
        }
    });

    return (
        <mesh rotation={[0, -Math.PI * 0.5, 0]} ref={bokRef}>
            <SoundBok />
        </mesh>
    );
};

const Experience = ({ count = 500 }) => {
    //Leva
    const { position } = useControls({
        position: {
            value: {
                x: 0,
                y: 0,
                z: 0,
            },
            step: 0.01,
        },
    });

    return (
        <>
            {/* <OrbitControls makeDefault /> */}
            {Array.from({ length: count }, (_, i) => (
                <SoundBoks key={i} z={i} />
            ))}
            <EffectComposer>
                <DepthOfField target={[0, 0, 10]} focalLength={0.5} bokehScale={11} height={700} />
            </EffectComposer>
        </>
    );
};

export default Experience;
