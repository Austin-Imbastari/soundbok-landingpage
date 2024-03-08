/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { StrictMode } from "react";

function App() {
    return (
        <>
            <StrictMode>
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
