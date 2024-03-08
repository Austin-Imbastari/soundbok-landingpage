/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

function App() {
    return (
        <>
            <Canvas
                flat
                gl={{
                    antialias: true,
                }}
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [3, 2, 6],
                }}
            >
                <Experience />
            </Canvas>
        </>
    );
}

export default App;
