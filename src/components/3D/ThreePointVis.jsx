import React, { useState, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import Controls from "./Controls.jsx";
import { setGrid } from "../settings/Functions.jsx";

const setCam = (size) => {
  return [size * 2, size * 2, size * 2];
};

const ThreePointVis = ({ world, colorStyle, size }) => {
  const half = size / 2;
  const cam = {
    position: [size, size, size],
    near: 0.1, 
    far: size * 3,
  };

  return (
    <Canvas camera={{ position: cam.position, near: cam.near, far: cam.far }}>
      <Controls />
      <hemisphereLight
        color="#ffffff"
        skyColor="#ffffbb"
        groundColor="#080820"
        intensity={0.5}
      />
      {world.map((plane, i) => {
        return plane.map((row, j) => {
          return row.map((each, k) => {
            const spacing = 1.1;
            const x = i * spacing;
            const y = j * spacing;
            const z = k * spacing;
            return world[i][j][k] === 1 ? (
              <mesh
                key={`${i}${j}${k}`}
                position={[x - half, y - half, z - half]}
              >
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshStandardMaterial
                  attach="material"
                  color={setGrid(colorStyle)[0]}
                  opacity="1"
                  transparent="false"
                />
              </mesh>
            ) : (
              <mesh
                key={`${i}${j}${k}`}
                position={[x - half, y - half, z - half]}
              >
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshStandardMaterial
                  attach="material"
                  color="rgb(0,0,0)"
                  opacity={`${0.75 / size}`}
                  transparent="true"
                />
              </mesh>
            );
          });
        });
      })}
    </Canvas>
  );
};

export default ThreePointVis;