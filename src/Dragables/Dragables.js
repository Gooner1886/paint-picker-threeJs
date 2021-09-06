import { useEffect, useRef, useState } from "react";
import { useThree, extend } from "react-three-fiber";
import { DragControls } from "three/examples/jsm/controls/DragControls";
extend({ DragControls });

const Dragables = (props) => {
  const [childrenArray, setChildrenArray] = useState([]);
  const {
    camera,
    gl: { domElement },
    scene,
  } = useThree();
  const groupRef = useRef();
  const controlsRef = useRef();

  useEffect(() => {
    setChildrenArray(groupRef.current.children);
  }, []);

  useEffect(() => {
    controlsRef.current.addEventListener(
      "hoveron",
      (e) => (scene.orbitControls.enabled = false)
    );
    controlsRef.current.addEventListener(
      "hoveroff",
      (e) => (scene.orbitControls.enabled = true)
    );
    controlsRef.current.addEventListener("drag", (e) => {
      e.object.api?.position.copy(e.object.position);
      e.object.api?.velocity.set(0, 0, 0);
    });
    controlsRef.current.addEventListener("dragstart", (e) => {
      e.object.api?.mass.set(0)
      
    });
    controlsRef.current.addEventListener("dragend", (e) => {
      e.object.api?.mass.set(1)
    });
  }, [childrenArray, scene]);

  return (
    <group ref={groupRef}>
      
      <dragControls
        transformGroup={props.transformGroup}
        args={[childrenArray, camera, domElement]}
        ref={controlsRef}
      />
      {props.children}
    </group>
  );
};

export default Dragables;
