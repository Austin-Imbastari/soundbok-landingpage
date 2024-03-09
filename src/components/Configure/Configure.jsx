/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import SoundBok from "../Soundbok/Soundbok";

const Configure = () => {
    return (
        <>
            <Canvas
                flat
                gl={{
                    alpha: false,
                    antialias: true,
                }}
            >
                <OrbitControls
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                    enableZoom={false}
                    enablePan={false}
                />
                <color attach='background' args={["#FBFEFF"]} />
                <spotLight position={[10, 10, 10]} intensity={4.5} />
                <ambientLight intensity={2.5} />
                <SoundBok />
            </Canvas>
        </>
    );
};

export default Configure;
