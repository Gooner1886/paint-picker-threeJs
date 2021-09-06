import state from "../state";

const style = {
  position: "absolute",
  bottom: "30vh",
  zIndex: 1,
  height: "30px",
  width: "30px",
  background: "white",
  textAlign: "center",
  borderRadius: "100%",
  fontSize: 20,
  fontWeight: "bold",
  opacity: 0.7,
  border: "1px solid black",
  cursor: "pointer",
};

const CameraButtons = ({}) => {
    const sets = {
      //models
        1:{
            cameraPos: [8.5, 2.5, 4.5],
            target: [6, 0, 0],
            name: "object005_bod_0"

        },
        //lambo
        2: {
            cameraPos: [0, 3, 4.5],
            target: [-4, 0, 0],
            name: "object028_Material005_0"
        }
    }
    const handleClick = num => {
        state.cameraPos.set(...sets[num].cameraPos)
        state.target.set(...sets[num].target)
        state.activeMeshName = sets[num].name
        state.shouldUpdate = true
    }
  return (
    <>
      <button
      onClick={e => handleClick(2)}
        style={{
          left: "45vw",
          ...style,
        }}
      >
        {"<"}
      </button>
      <button
      onClick={e => handleClick(1)}
        style={{
          right: "45vw",
          ...style,
        }}
      >
        {">"}
      </button>
    </>
  );
};

export default CameraButtons;
