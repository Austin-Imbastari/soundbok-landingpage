/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { HexColorPicker } from "react-colorful";
import SoundBok from "../Soundbok/Soundbok";
import styled from "styled-components";
import { useProxy } from "valtio/utils";

import { state } from "/state";

const SoundBokConfig = ({ setColor, color }) => {
    const bok = useRef();

    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime();
        bok.current.rotation.set(Math.cos(t / 2) / 8, Math.sin(-Math.PI * 0.5), -0.2 - (1 + Math.sin(t / 1.5)) / 20);
        bok.current.position.y = (-12 + Math.sin(t / 1.5)) / 10;
        -Math.PI * 0.5;
    });

    console.log(color);
    return (
        <mesh ref={bok}>
            <SoundBok />
        </mesh>
    );
};

const ColorPicker = () => {
    const snap = useProxy(state);

    return (
        <>
            <div style={{ display: snap.current ? "block" : "none" }}>
                <HexColorPicker
                    className='picker'
                    color={snap.items[snap.current]}
                    onChange={(color) => {
                        state.items[snap.current] = color;
                    }}
                />
                <div>
                    <h1 className='item'>{snap.current}</h1>
                </div>
            </div>
        </>
    );
};

const Configure = () => {
    return (
        <>
            <Canvas shadows flat>
                <OrbitControls
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                    enableZoom={false}
                    enablePan={false}
                />
                <color attach='background' args={["#2D2928"]} />
                <directionalLight intensity={3} castShadow />
                <ambientLight intensity={2.5} />
                <Environment preset='studio' />
                <SoundBokConfig />
                <ContactShadows position-y={-2.5} opacity={0.4} scale={5} blur={4.4} />
            </Canvas>

            <BottomRight>
                <ColorPicker />
            </BottomRight>
        </>
    );
};
export const BottomRight = styled.div`
    /* border: 1px solid red; */
    position: absolute;
    bottom: 5vw;
    right: 10vw;
    bottom: -60vh;
`;

export default Configure;
