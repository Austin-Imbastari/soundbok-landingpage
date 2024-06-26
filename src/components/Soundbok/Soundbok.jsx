/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import React, { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

//state management
import { useProxy } from "valtio/utils";
import { state } from "/state";

function SoundBok(props) {
  const snap = useProxy(state);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  const { nodes, materials } = useGLTF("/soundbok.glb");
  return (
    <group
      onPointerOver={(e) => {
        e.stopPropagation(), setHovered(e.object.material.name);
      }}
      onPointerOut={(e) => {
        e.intersections.length === 0 ? setHovered(null) : "";
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        state.current = e.object.material.name;
      }}
      onPointerMissed={(e) => {
        state.current = null;
      }}
      {...props}
      dispose={null}
    >
      <group position={[-0.058, 1.039, -0.027]} scale={[1, 1, 1.836]}>
        <mesh
          onPointerDown={(e) => {
            // Handle click event for this mesh
            e.stopPropagation();
            state.current = "Body";
          }}
          receiveShadow
          castShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.basematerial}
          material-color={snap.items.Body}
        />

        <group>
          <mesh
            receiveShadow
            castShadow
            geometry={nodes.Cube_2.geometry}
            material={materials.strapmaterial}
            material-color={snap.items.Strap}
            onPointerDown={(e) => {
              // Handle click event for this mesh
              e.stopPropagation();
              state.current = "Strap";
            }}
          />
          <mesh
            receiveShadow
            castShadow
            geometry={nodes.Cube_3.geometry}
            material={materials.volumeknobmaterial}
            material-color={snap.items.VolumeKnob}
            onPointerDown={(e) => {
              // Handle click event for this mesh
              e.stopPropagation();
              state.current = "VolumeKnob";
            }}
          />
          <mesh
            onPointerDown={(e) => {
              // Handle click event for this mesh
              e.stopPropagation();
              state.current = null;
            }}
            receiveShadow
            castShadow
            geometry={nodes.Cube_4.geometry}
            material={materials.volumeringmaterial}
          />
          <mesh
            onPointerDown={(e) => {
              // Handle click event for this mesh
              e.stopPropagation();
              state.current = null;
            }}
            receiveShadow
            castShadow
            geometry={nodes.Cube_5.geometry}
            material={materials.bluetoothmaterial}
          />
        </group>
        <mesh
          onPointerDown={(e) => {
            // Handle click event for this mesh
            e.stopPropagation();
            state.current = null;
          }}
          receiveShadow
          castShadow
          geometry={nodes.Cube_6.geometry}
          material={materials.bluetoothlightmaterial}
        />
        <mesh
          onPointerDown={(e) => {
            // Handle click event for this mesh
            e.stopPropagation();
            state.current = "InnerGrill";
          }}
          receiveShadow
          castShadow
          geometry={nodes.Cube_7.geometry}
          material={materials.InnerGrill}
        />
        <mesh
          onPointerDown={(e) => {
            // Handle click event for this mesh
            e.stopPropagation();
            state.current = "InnerGrill";
          }}
          receiveShadow
          castShadow
          geometry={nodes.Cube_8.geometry}
          material={materials.InnerGrill}
        />
        <mesh
          onPointerDown={(e) => {
            // Handle click event for this mesh
            e.stopPropagation();
            state.current = "InnerGrill";
          }}
          receiveShadow
          castShadow
          geometry={nodes.Cube_9.geometry}
          material={materials.InnerGrill}
        />
      </group>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.007"]}
        position={[1.206, 1.675, 0.732]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.262}
        material-color={snap.items.Logo}
        onPointerDown={(e) => {
          // Handle click event for this mesh
          e.stopPropagation();
          state.current = "Logo";
        }}
      />
      <group position={[1.011, 1.564, 0.892]} scale={[1, 1, 1.836]}>
        <mesh
          onPointerDown={(e) => {
            // Handle click event for this mesh
            e.stopPropagation();
            state.current = "InnerGrill";
          }}
          receiveShadow
          castShadow
          geometry={nodes.InnerGrill_1.geometry}
          material={materials.InnerGrill}
        />
        <mesh
          onPointerDown={(e) => {
            // Handle click event for this mesh
            e.stopPropagation();
            state.current = "InnerGrill";
          }}
          receiveShadow
          castShadow
          geometry={nodes.InnerGrill_2.geometry}
          material-color={snap.items.InnerGrill}
        />
      </group>
      <group position={[1.098, 1.023, -0.701]} scale={[1, 1, 1.836]}>
        <mesh
          onPointerDown={(e) => {
            // Handle click event for this mesh
            e.stopPropagation();
            state.current = null;
          }}
          receiveShadow
          castShadow
          geometry={nodes.OuterGrill_1.geometry}
          material={materials.basematerial}
        />
        <mesh
          onPointerDown={(e) => {
            // Handle click event for this mesh
            e.stopPropagation();
            state.current = "Grill";
          }}
          receiveShadow
          castShadow
          geometry={nodes.OuterGrill_2.geometry}
          material={materials.outergrillmaterial}
          material-color={snap.items.Grill}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/soundbok.glb");

export default SoundBok;
