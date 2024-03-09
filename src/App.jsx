/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { StrictMode } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <>
            <StrictMode>
                <Navbar />
                <Canvas
                    flat
                    gl={{
                        antialias: true,
                    }}
                    camera={{}}
                >
                    <Experience />
                </Canvas>
            </StrictMode>
        </>
    );
}

export default App;
