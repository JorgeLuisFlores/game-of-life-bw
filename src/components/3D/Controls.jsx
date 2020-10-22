  
import * as React from "react";
import { extend, useThree, useFrame } from "react-three-fiber";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import * as THREE from "three";

extend({ TrackballControls });

const ALT_KEY = 65;
const CTRL_KEY = 63;
const CMD_KEY = 68;

const Controls = () => {
  const controls = React.useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    controls.current.update();
  });

  return (
    <trackballControls

      ref={controls}
      args={[camera, gl.domElement]}
      keys={[
        ALT_KEY,
        CTRL_KEY,
        CMD_KEY,
      ]}
      mouseButtons={{
        LEFT: THREE.MOUSE.ROTATE,
        MIDDLE: THREE.MOUSE.ZOOM,
        RIGHT: THREE.MOUSE.PAN,
      }}
      rotateSpeed={10}
    />
  );
};

export default Controls;