import { Suspense } from "react";
import Dragables from "../Dragables/Dragables";
import BoundingBox from "../BoundingBox/BoundingBox";
import Model from "../Model/Model";

const Cars = ({}) => {
  return (
    <Suspense fallback={null}>
      <Dragables transformGroup>
        <BoundingBox
          position={[6, 4, 0]}
          dims={[2.75, 1.75, 5.45]}
          offset={[0, -0.7, 0.3]}
        >
          <Model
            path="/tesla_model_s/scene.gltf"
            scale={new Array(3).fill(0.01)}
            /* position={[8, 0.2, 0]} */
          />
        </BoundingBox>
      </Dragables>
      {/* <Dragables transformGroup>
        <BoundingBox
          position={[3, 4, 0]}
          dims={[2.5, 1.575, 5.2]}
          offset={[0, -0.725, 0]}
        >
          <Model
            path="/ferrari_458_italia/scene.gltf"
            scale={new Array(3).fill(0.011)}
            position={[3, 0.2, 0]}
          />
        </BoundingBox>
      </Dragables> */}
      {/* <Dragables transformGroup>
        <BoundingBox
          position={[-8, 4, 0]}
          dims={[2.5, 1.5, 5]}
          offset={[0, -0.75, 0]}
        >
          <Model
            path="/nissan_gtr/scene.gltf"
            scale={new Array(3).fill(1.4)}
            position={[-8, 0.1, 0]}
          />
        </BoundingBox>
      </Dragables> */}
      <Dragables transformGroup>
        <BoundingBox
          position={[-4, 4, 0]}
          dims={[2.5, 1.25, 5.3]}
          offset={[0, 0.1, 0.2]}
        >
          <Model
            path="/lambo_aventador/scene.gltf"
            scale={new Array(3).fill(0.005)}
            /* position={[-3, 0.7, 0]} */
          />
        </BoundingBox>
      </Dragables>
    </Suspense>
  );
};

export default Cars;
