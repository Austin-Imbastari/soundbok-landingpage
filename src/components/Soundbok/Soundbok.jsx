/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function SoundBok({ ...props }) {
    const { nodes, materials } = useGLTF("/soundbok.glb");
    return (
        <group {...props} dispose={null}>
            <group position={[-0.058, 1.039, -0.027]} scale={[1, 1, 1.836]}>
                <mesh geometry={nodes.Cube_1.geometry} material={materials.basematerial} />
                <mesh geometry={nodes.Cube_2.geometry} material={materials.strapmaterial} />
                <mesh geometry={nodes.Cube_3.geometry} material={materials.volumeknobmaterial} />
                <mesh geometry={nodes.Cube_4.geometry} material={materials.volumeringmaterial} />
                <mesh geometry={nodes.Cube_5.geometry} material={materials.bluetoothmaterial} />
                <mesh geometry={nodes.Cube_6.geometry} material={materials.bluetoothlightmaterial} />
                <mesh geometry={nodes.Cube_7.geometry} material={materials.innergrillmaterial} />
                <mesh geometry={nodes.Cube_8.geometry} material={materials.innergrillmaterial} />
                <mesh geometry={nodes.Cube_9.geometry} material={materials.innergrillmaterial} />
            </group>
            <mesh
                geometry={nodes.Text.geometry}
                material={materials["Material.007"]}
                position={[1.206, 1.675, 0.732]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.262}
            />
            <group position={[1.011, 1.564, 0.892]} scale={[1, 1, 1.836]}>
                <mesh geometry={nodes.InnerGrill_1.geometry} material={materials.innergrillmaterial} />
                <mesh geometry={nodes.InnerGrill_2.geometry} material={materials.innergrillmaterial} />
            </group>
            <group position={[1.098, 1.023, -0.701]} scale={[1, 1, 1.836]}>
                <mesh geometry={nodes.OuterGrill_1.geometry} material={materials.basematerial} />
                <mesh
                    geometry={nodes.OuterGrill_2.geometry}
                    material={materials.outergrillmaterial}
                    material-color='black'
                />
            </group>
        </group>
    );
}

useGLTF.preload("/soundbok.glb");

export default SoundBok;

// react-colorful package
// orbitalcontrols, contact shadows,enviuronemnt,
