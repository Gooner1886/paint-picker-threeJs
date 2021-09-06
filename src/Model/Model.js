import { extend, useLoader } from "react-three-fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = (props) => {
  const model = useLoader(GLTFLoader, props.path);
  /* console.log(model); */
  model.scene.traverse(child => {
    if(child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
      child.material.side = THREE.FrontSide
    }
  })
  return <primitive object={model.scene} scale={props.scale}/>;
};

export default Model;
