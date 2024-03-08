/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import { OrbitControls, TransformControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Experience = () => {
    const boxRef = useRef();
    const groupRef = useRef();

    useFrame((state, delta) => {
        boxRef.current.rotation.y += delta;

        // const angle = state.clock.elapsedTime;
        // state.camera.position.x = Math.sin(angle) * 8;
        // state.camera.position.z = Math.cos(angle) * 8;
        // state.camera.lookAt(0, 0, 0);
    });

    return (
        <>
            {/* <OrbitControls /> */}
            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />

            <group ref={groupRef}>
                <TransformControls>
                    <mesh>
                        <sphereGeometry args={[1.5, 32, 32]} />
                        <meshStandardMaterial color='mediumpurple' />
                    </mesh>
                </TransformControls>
                <mesh ref={boxRef} position={[-3, 0, 1]}>
                    <boxGeometry />
                    <meshStandardMaterial color='orange' />
                </mesh>
            </group>
            <mesh rotation-x={-Math.PI * 0.5} position={[0, -1.5, 0]} scale={20}>
                <planeGeometry />
                <meshStandardMaterial color='green' />
            </mesh>
        </>
    );
};

export default Experience;
