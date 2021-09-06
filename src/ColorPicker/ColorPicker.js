import * as THREE from "three";
import state from "../state";

const ColorPicker = () => {
  const changeColorHandler = (event) => {
    if (!state.activeMesh) {
      return;
    }
    state.activeMesh.material.color = new THREE.Color(
      event.target.style.background
    );
  };
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        display: "flex",
        left: 0,
        right: 0,
        margin: "auto",
        width: "fit-content",
        top: '20px'
      }}
    >
      <div
        onClick={changeColorHandler}
        style={{ background: "red", height: "50px", width: "50px" }}
      ></div>
      <div
        onClick={changeColorHandler}
        style={{ background: "green", height: "50px", width: "50px" }}
      ></div>
      <div
        onClick={changeColorHandler}
        style={{ background: "yellow", height: "50px", width: "50px" }}
      ></div>
    </div>
  );
};

export default ColorPicker;
