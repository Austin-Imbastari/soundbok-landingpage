/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { StrictMode } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Environment } from "@react-three/drei";
import Overlay from "./components/Overlay/Overlay";
import styled from "styled-components";

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
                <LeftMiddle>
                    <input type='range' min='0' max='10' step='1' />
                </LeftMiddle>
            </StrictMode>
        </>
    );
}

export const LeftMiddle = styled.div`
    position: absolute;
    bottom: 25%;
    right: 5vw;
    font-family: "Inter";
    font-weight: 400;
    line-height: 1em;
    letter-spacing: -0.01em;
    font-size: 12px;
    transform: rotate(90deg) translate3d(50%, 0, 0);
    transform-origin: 100% 50%;
`;

export default App;
