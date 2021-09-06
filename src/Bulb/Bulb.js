const Bulb = (props) => {
  return (
    <mesh {...props}>
      <pointLight
        castShadow
        shadow-mapSize-height={2 ** 9}
        shadow-mapSize-width={2 ** 9}
        shadow-radius={5}

      />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

export default Bulb;
