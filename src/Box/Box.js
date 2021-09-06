import React, { useRef } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";
import { useBox } from "use-cannon";

const Box = (props) => {
  const [ref, api] = useBox(() => ({mass: 1, ...props}))
  const texture = useLoader(THREE.TextureLoader, "../wood.jpg");
  /* useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  }); */

  const handlePointerDown = (event) => {
    
    event.object.active = true;
    if(window.activeMesh) {
      scaleDown(window.activeMesh);
      window.activeMesh.active = false;
    }
    window.activeMesh = event.object;
  };

  const handlePointerEnter = (event) => {
    event.object.scale.x = 1.5;
    event.object.scale.y = 1.5;
    event.object.scale.z = 1.5;
  };

  const handlePointerLeave = (event) => {
    if (!event.object.active) {
      scaleDown(event.object);
    }
  };

  const scaleDown = (object) => {
    object.scale.x = 1;
    object.scale.y = 1;
    object.scale.z = 1;
  };

  return (
    <mesh
      ref={ref}
      api={api}
      {...props}
      castShadow
      /* receiveShadow */
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <boxBufferGeometry />
      <meshPhysicalMaterial
        /* color="white" */
        /* opacity={1} */ // extent of see-through
        /* transparent */ //makes material see-through together w opacity prop
        /* metalness={1} */ //makes material filled in
        /* roughness={0} */ //makes material reflective
        /* clearcoat={1} */ // adds thin translucent layer over base layer (makes shinier)
        /* transmission={0.5} */ // makes object completely see-through but still reflects light.
        /* reflectivity={1} */
        /* side={THREE.DoubleSide} */
        /* wireframe */ // gives wireframe or blueprint of material
        map={texture}
      />
    </mesh>
  );
};

export default Box;
