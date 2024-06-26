/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTime, useTransform, useScroll, motion } from "framer-motion";
import { degreesToRadians } from "popmotion";

const Cube = ({ posX, posY, colorCube }) => {
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
      <meshBasicMaterial wireframe={enter} color={`${colorCube}`} />
    </mesh>
  );
};

const ColorCont = ({ colorBG, handleClick }) => {
  const bgStyle = {
    backgroundColor: colorBG,
  };
  return (
    <div
      className="h-[5rem] w-[5rem] rounded-full hover:size-[6rem] transition-all duration-500"
      style={bgStyle}
      onClick={() => handleClick(colorBG)}
    ></div>
  );
};

const ScrollAnim = () => {
  return (
    <div className="h-[14rem] w-[3rem] border-white border-solid border-2 rounded-[100px] flex justify-center items-start p-1">
      <motion.div
        className="h-[2.2rem] w-[2.2rem] bg-white rounded-full"
        animate={{
          translateY: [60, 2, 60],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

function ScrollPractica() {
  const [posX, setX] = React.useState();
  const [posY, setY] = React.useState();
  const [colorCube, setColorCube] = React.useState();
  const cont = useRef();

  return (
    <div className=" h-[300vh] w-full" ref={cont}>
      <div
        className=" bg-black h-screen w-full flex justify-center items-center flex-col fixed gap-14"
        onPointerMove={(e) => {
          setX(e.pageX - window.innerWidth * 0.5);
          setY(e.pageY - cont.current.getBoundingClientRect().height * 0.5);
        }}
      >
        <h1 className=" text-white text-6xl ">Jelkome</h1>
        <ScrollAnim />
        <Canvas>
          <Cube posX={posX} posY={posY} colorCube={colorCube} />
        </Canvas>
        <div className=" w-full flex flex-row justify-center items-center h-[15rem] gap-[6rem]">
          <ColorCont
            colorBG={"#A1BA68"}
            handleClick={(c) => {
              setColorCube(c);
            }}
          />
          <ColorCont
            colorBG={"#BA6893"}
            handleClick={(c) => {
              setColorCube(c);
            }}
          />
          <ColorCont
            colorBG={"#6875BA"}
            handleClick={(c) => {
              setColorCube(c);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollPractica;
