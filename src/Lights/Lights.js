import Bulb from "../Bulb/Bulb";

const Lights = (props) => {
  return (
    <>
      <Bulb position={[0, 3, 0]} />
      <Bulb position={[8, 3, 0]} />
      <Bulb position={[-2, 3, 0]} />
      <ambientLight intensity={0.1} />
      <directionalLight
        position={[6, 3, 0]}
        intensity={2}
        castShadow
        shadowRadius={5}
        shadow-mapSize-height={2 ** 9}
        shadow-mapSize-width={2 ** 9}
      />
    </>
  );
};

export default Lights;
