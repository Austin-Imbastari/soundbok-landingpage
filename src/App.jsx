/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { StrictMode } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Environment } from "@react-three/drei";
import Overlay from "./components/Overlay/Overlay";

function App() {
    return (
        <>
            <StrictMode>
                <Navbar />
                <Canvas
                    flat
                    gl={{
                        alpha: false,
                        antialias: true,
                    }}
                    camera={{ near: 0.01, far: 110, fov: 30 }}
                >
                    <color attach='background' args={["#FBFEFF"]} />
                    <spotLight position={[10, 10, 10]} intensity={4.5} />
                    <ambientLight intensity={2.5} />
                    <Suspense fallback={null}>
                        <Experience />
                        <Environment preset='city' />
                    </Suspense>
                </Canvas>
                <Overlay />
            </StrictMode>
        </>
    );
}

export default App;
