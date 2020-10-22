import * as React from "react";
import * as THREE from "three";

const scratchObject3D = new THREE.Object3D();

const gWidth = 20;

const InstancedPoints = ({ data }) => {
  const meshRef = React.useRef();
  const numPoints = data.length;

  React.useEffect(() => {
    const mesh = meshRef.current;

    for (let i = 0; i < numPoints; ++i) {
      const x = (i % gWidth) * 1.05;
      const y = Math.floor(i / gWidth) * 1.05;
      const z = 0;

      scratchObject3D.position.set(x, y, z);
      scratchObject3D.rotation.set(0.5 * Math.PI, 0, 0);
      scratchObject3D.updateMatrix();
      mesh.setMatrixAt(i, scratchObject3D.matrix);
    }

    mesh.instanceMatrix.needsUpdate = true;
  }, [numPoints]);

  return (
    <instancedMesh
      ref={meshRef}
      args={[null, null, numPoints]}
      frustumCulled={false}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="#eb4034" />
    </instancedMesh>
  );
};

export default InstancedPoints;