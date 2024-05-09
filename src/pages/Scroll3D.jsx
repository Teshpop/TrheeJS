/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Suspense } from "react";
import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { Audifonos, Car, Pc } from "../../public";
import { degreesToRadians } from "popmotion";

function ContPrin({ children }) {
  return (
    <>
      <motion.div
        className=" relative"
        transition={{
          delay: 1,
          duration: 2,
          ease: easeOut,
        }}
        animate={{ opacity: [0, 1], top: [-100, 0] }}
      >
        {children}
      </motion.div>
    </>
  );
}

function Descriptions() {
  const { scrollYProgress } = useScroll();
  const opacityWelcome = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // Contenedor 1
  const opacitySec1 = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.45],
    [0, 1, 0]
  );
  const positionSect1 = useTransform(scrollYProgress, [0.1, 0.35], [-50, 0]);

  // Contenedor 2
  const opacitySec2 = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.75],
    [0, 1, 0]
  );
  const positionSect2 = useTransform(scrollYProgress, [0.45, 0.6], [-50, 0]);

  //Contenedor 3
  const opacitySec3 = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const positionSect3 = useTransform(scrollYProgress, [0.75, 1], [-50, 0]);

  return (
    <div className="absolute h-full w-full">
      <motion.div
        style={{ opacity: opacityWelcome }}
        className="h-full w-full absolute flex justify-center items-end bottom-[10%]"
      >
        <h1 className=" text-white text-[4rem]">Welcome</h1>
      </motion.div>
      <div className="flex justify-center relative items-end h-full flex-col">
        <motion.div
          style={{ opacity: opacitySec1, top: positionSect1 }}
          className="flex w-[40%] h-[100%] absolute right-[1%] justify-center items-center flex-col gap-[4rem]"
        >
          <h1 className=" text-white text-[2rem]">Earphones</h1>
          <p className=" text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            eaque alias aut aspernatur suscipit modi atque autem exercitationem
            debitis sequi velit accusantium totam distinctio, impedit tempora
            eos? Dolor, laboriosam quos! Corrupti, necessitatibus. Deleniti ut
            adipisci in repudiandae ex, hic vel accusantium unde corrupti
            dolores tempore, dolorem a quod, placeat nobis quis neque. Amet quae
            nesciunt eaque a laborum autem provident! Eligendi labore nemo
            ipsam, facere at quasi adipisci tenetur libero recusandae odit
            commodi omnis quod ad! Veritatis beatae deleniti quod perspiciatis,
            sit, nulla obcaecati veniam, tempore expedita iure quam provident!
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: opacitySec2, top: positionSect2 }}
          className="flex w-[40%] h-[100%] absolute right-[1%] justify-center gap-[4rem] items-center flex-col"
        >
          <h1 className=" text-white text-[2rem]">Car</h1>
          <p className=" text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            eaque alias aut aspernatur suscipit modi atque autem exercitationem
            debitis sequi velit accusantium totam distinctio, impedit tempora
            eos? Dolor, laboriosam quos! Corrupti, necessitatibus. Deleniti ut
            adipisci in repudiandae ex, hic vel accusantium unde corrupti
            dolores tempore, dolorem a quod, placeat nobis quis neque. Amet quae
            nesciunt eaque a laborum autem provident! Eligendi labore nemo
            ipsam, facere at quasi adipisci tenetur libero recusandae odit
            commodi omnis quod ad! Veritatis beatae deleniti quod perspiciatis,
            sit, nulla obcaecati veniam, tempore expedita iure quam provident!
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: opacitySec3, top: positionSect3 }}
          className="flex w-[40%] h-[100%] absolute right-[1%] justify-center gap-[4rem] items-center flex-col"
        >
          <h1 className=" text-white text-[2rem]">PC</h1>
          <p className=" text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            eaque alias aut aspernatur suscipit modi atque autem exercitationem
            debitis sequi velit accusantium totam distinctio, impedit tempora
            eos? Dolor, laboriosam quos! Corrupti, necessitatibus. Deleniti ut
            adipisci in repudiandae ex, hic vel accusantium unde corrupti
            dolores tempore, dolorem a quod, placeat nobis quis neque. Amet quae
            nesciunt eaque a laborum autem provident! Eligendi labore nemo
            ipsam, facere at quasi adipisci tenetur libero recusandae odit
            commodi omnis quod ad! Veritatis beatae deleniti quod perspiciatis,
            sit, nulla obcaecati veniam, tempore expedita iure quam provident!
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function Objects() {
  const { scrollYProgress } = useScroll();
  const { camera } = useThree();

  const xAngle = useTransform(scrollYProgress, [0, 0.1, 0.15], [0, 1, 4]);
  const yAngle = useTransform(
    scrollYProgress,
    [0, 0.35, 0.5, 0.7, 1],
    [0, 0, -10, -10, -20]
  );
  const yRotation = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15],
    [0, -0.1, -0.2]
  );

  useFrame(() => {
    camera.position.x = xAngle.get();
    camera.position.y = yAngle.get();

    camera.rotation.y = yRotation.get();
  });

  return (
    <>
      <Float floatIntensity={1.5} speed={3} position={[0, 0, -1]}>
        <Audifonos scale={0.01} position={[0, 0, 0]} />
      </Float>
      <Float speed={1.5} floatIntensity={1.5} position={[0, 0, -1]}>
        <Car scale={0.01} position={[0, -10, 0]} />
      </Float>
      <Float floatIntensity={1} speed={2} position={[0, 0, -2]}>
        <Pc
          scale={0.55}
          position={[0, -20, 0]}
          rotation-y={degreesToRadians(180)}
        />
      </Float>
    </>
  );
}

function Scroll3D() {
  return (
    <ContPrin>
      <div className="h-[300vh] w-full m-0">
        <div className="flex justify-center items-center h-full w-full fixed bg-black flex-col">
          <Suspense fallback={null}>
            <Canvas camera={{ fov: 80 }}>
              <Objects />
              <Environment preset="sunset" />
            </Canvas>
            <Descriptions />
          </Suspense>
        </div>
      </div>
    </ContPrin>
  );
}

export default Scroll3D;
