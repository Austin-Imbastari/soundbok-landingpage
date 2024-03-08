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
                camera={{}}
            >
                <Experience />
            </Canvas>
        </>
    );
}

export default App;
