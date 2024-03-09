/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import SoundBok from "../Soundbok/Soundbok";

const SoundBokConfig = () => {
    const bok = useRef();

    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime();
        bok.current.rotation.set(Math.cos(t / 2) / 8, Math.sin(-Math.PI * 0.5), -0.2 - (1 + Math.sin(t / 1.5)) / 20);
        bok.current.position.y = (-12 + Math.sin(t / 1.5)) / 10;
        -Math.PI * 0.5;
    });

    return (
        <mesh ref={bok}>
            <SoundBok />
        </mesh>
    );
};

const Configure = () => {
    return (
        <>
            <Canvas shadows flat>
                <OrbitControls
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                    enableZoom={false}
                    enablePan={false}
                />
                <color attach='background' args={["#2D2928"]} />
                <directionalLight intensity={4} castShadow />
                <ambientLight intensity={2.5} />
                <Environment preset='studio' />
                <SoundBokConfig />
                <ContactShadows position-y={-2.5} opacity={0.4} scale={5} blur={2.4} />
            </Canvas>
        </>
    );
};

export default Configure;
