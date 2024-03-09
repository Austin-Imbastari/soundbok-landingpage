/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import { useControls } from "leva";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

//Model
import SoundBok from "./Soundbok/Soundbok";

const Experience = () => {
    const { position } = useControls({
        position: {
            value: {
                x: -2,
                y: 0,
                z: 0,
            },
            step: 0.01,
        },
    });
    const bokRef = useRef();

    useFrame((state, delta) => {
        // const angle = state.clock.getElapsedTime();
        // bokRef.current.position.x += Math.sin(angle) * delta;
        // bokRef.current.position.z += Math.cos(angle) * delta;
    });

    return (
        <>
            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />
            <mesh rotation={[0, -Math.PI * 0.5, 0]} position={[0, -1, 0]}>
                <SoundBok />
            </mesh>
            {/* <mesh ref={bokRef} position={[position.x, position.y, position.z]}>
                <boxGeometry />
                <meshStandardMaterial color='yellow' />
            </mesh> */}
        </>
    );
};

export default Experience;
