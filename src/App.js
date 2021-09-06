import "./App.css";
/* import * as THREE from "three"; */
import { Canvas } from "react-three-fiber";
import { Physics } from "use-cannon";
import Box from "./Box/Box";
import Orbit from "./Orbit/Orbit";
import Floor from "./Floor/Floor";
import Bulb from "./Bulb/Bulb";
import { Suspense } from "react";
import Background from "./Background/Background";
import ColorPicker from "./ColorPicker/ColorPicker";
import Dragables from "./Dragables/Dragables";
import Model from "./Model/Model";
import BoundingBox from "./BoundingBox/BoundingBox";
import Cars from "./Cars/Cars";
import CameraControls from "./CameraControls/CameraControls";
import CameraButtons from "./CameraButtons/CameraButtons";
import Lights from "./Lights/Lights";
import { EffectComposer, DepthOfField, Bloom } from 'react-postprocessing';

function App() {
  /* const scene = new THREE.Scene(); // Vanilla Threejs
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGL1Renderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.innerHTML = '';
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  camera.position.z = 5;
  
  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
  /* window.addEventListener('resize', 
  () => {
    renderer.setSize(window.innerHeight, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  })  */

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <ColorPicker />
      <CameraButtons />
      <Canvas
        style={{ background: "black" }}
        camera={{ position: [9, 3, 4] }}
        shadowMap
      >
        <CameraControls />
        <Suspense fallback={null}>
            <Background />
          </Suspense>
        <Physics>
          <EffectComposer>
            <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480}/>
            <Bloom />
          </EffectComposer>
          <Cars />
          <Floor position={[0, -0.5, 0]} />
          {/* <Suspense fallback={null}>
              <Box position={[-4, 1, 0]} />
            </Suspense>
            <Suspense fallback={null}>
              <Box position={[4, 1, 0]} />
            </Suspense> */}
        </Physics>
        <Lights />
        {/* <fog attach="fog" args={['white', 1, 10]}/>  applies fog to scene, takes args - color, near, far*/}
        <axesHelper args={[15]} />
        <Orbit />
        
      </Canvas>
    </div>
  );
}

export default App;
