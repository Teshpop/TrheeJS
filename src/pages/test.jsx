/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

function MyAnimBox() {
  const myMesh = useRef();
  const [active, setActive] = useState(false);
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.elapsedTime;
    myMesh.current.rotation.y = clock.elapsedTime;
    console.log(active);
  });

  return (
    <>
      <mesh
        scale={active ? 1.3 : 1}
        ref={myMesh}
        onPointerEnter={() => setActive(!active)}
        onPointerLeave={() => setActive(!active)}
      >
        <boxGeometry />
        <meshBasicMaterial color="black" />
      </mesh>
    </>
  );
}

const Test = () => {
  return (
    <div className="cont">
      <div id="canvas-container">
        <Canvas>
          <ambientLight intensity={0.1} />

          <mesh position={[0, 2.5, 0]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshBasicMaterial color="blue" />
          </mesh>

          <MyAnimBox />

          <mesh position={[0, -2.5, 0]}>
            <sphereGeometry />
            <meshBasicMaterial color="red" />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
};

export default Test;
