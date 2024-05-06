/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTime, useTransform, useScroll } from "framer-motion";
import { degreesToRadians } from "popmotion";

const Cube = ({ posX, posY, color }) => {
  const [enter, setEnter] = React.useState(true);
  const myMesh = React.useRef(null);
  const { camera } = useThree();
  const time = useTime();

  const { scrollYProgress } = useScroll();

  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0, degreesToRadians(90)]
  );
  const xAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.5, degreesToRadians(90)]
  );
  const distanceZ = useTransform(scrollYProgress, [0, 1], [0, 3]);

  useFrame(() => {
    myMesh.current.rotation.y = yAngle.get();
    myMesh.current.rotation.x = xAngle.get();
    myMesh.current.position.z = distanceZ.get();

    camera.position.x = posX * 0.0005;
    camera.position.y = posY * (0.0005 * 0.5);
  });

  return (
    <mesh
      ref={myMesh}
      onPointerEnter={() => setEnter(!enter)}
      onPointerLeave={() => setEnter(!enter)}
    >
      <boxGeometry />
      <meshBasicMaterial wireframe={enter} color={`#${color}`} />
    </mesh>
  );
};

const Color = ({ bgColor, handleClick }) => {
  return (
    <div
      className={` h-[5rem] w-[5rem] bg-[#${bgColor}] rounded-full hover:size-[6rem] transition-all duration-500`}
      onClick={() => handleClick(bgColor)}
    />
  );
};

function ScrollPractica() {
  const [posX, setX] = React.useState();
  const [posY, setY] = React.useState();
  const [color, setColor] = React.useState();
  const cont = useRef();

  return (
    <div className=" h-[300vh] w-full" ref={cont}>
      <div
        className=" bg-black h-screen w-full flex justify-center items-center flex-col fixed"
        onPointerMove={(e) => {
          setX(e.pageX - window.innerWidth * 0.5);
          setY(e.pageY - cont.current.getBoundingClientRect().height * 0.5);
        }}
      >
        <h1 className=" text-white text-6xl ">Jelkome</h1>
        <Canvas>
          <Cube posX={posX} posY={posY} color={color} />
        </Canvas>
        <div className=" w-full flex flex-row justify-center items-center h-[15rem] gap-[6rem]">
          <Color
            bgColor={"A1BA68"}
            handleClick={(c) => {
              setColor(c);
            }}
          />
          <Color
            bgColor={"BA6893"}
            handleClick={(c) => {
              setColor(c);
            }}
          />
          <Color
            bgColor={"6875BA"}
            handleClick={(c) => {
              setColor(c);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollPractica;
