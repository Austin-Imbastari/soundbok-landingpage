/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Experience = () => {
    const bokRef = useRef();

    useFrame((state, delta) => {
        // const angle = state.clock.getElapsedTime();
        // bokRef.current.position.x += Math.sin(angle) * delta;
        // bokRef.current.position.z += Math.cos(angle) * delta;
    });

    return (
        <>
            <OrbitControls />
            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />

            <mesh ref={bokRef}>
                <boxGeometry />
                <meshStandardMaterial color='yellow' />
            </mesh>
        </>
    );
};

export default Experience;
