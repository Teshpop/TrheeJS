/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  Environment,
  OrbitControls,
  SpotLight,
  Text,
  useGLTF,
} from "@react-three/drei";
import { degreesToRadians } from "popmotion";

const Model = ({ URL, position, scale }) => {
  const gltf = useLoader(GLTFLoader, URL);

  return (
    <>
      <primitive object={gltf.scene} scale={scale} position={position} />
    </>
  );
};

const Loader = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-black">
        <h1 className=" text-white text-7xl">Cargando modelos</h1>
      </div>
    </>
  );
};

function EscenarioSimple() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className=" fixed h-screen w-screen bg-black">
          <Canvas shadows>
            <SpotLight
              castShadow
              color={"white"}
              penumbra={1}
              position={[5, 5, 4]}
              distance={20}
              angle={3}
              anglePower={15}
              attenuation={1}
              intensity={8}
            />
            <SpotLight
              castShadow
              color={"white"}
              penumbra={1}
              position={[-5, 5, 4]}
              distance={20}
              angle={3}
              anglePower={15}
              attenuation={1}
              intensity={8}
            />
            <group rotation-y={degreesToRadians(180)}>
              <Model
                URL={"./Models/audifono/audifonos.gltf"}
                position={[0, 1, 0]}
                scale={0.005}
              />
              <Model
                URL={"./Models/low-poly_truck_car_drifter/car.gltf"}
                position={[2, -1, 0]}
                scale={0.005}
              />
              <Model
                URL={"./Models/pc_lowPoly/pc.gltf"}
                position={[-2, -1, 0]}
                scale={0.3}
              />
            </group>

            <OrbitControls />

            {/* <Environment preset={"sunset"} backgroundIntensity={1} background /> */}

            <mesh
              receiveShadow
              rotation-x={degreesToRadians(-90)}
              position={[0, -1.2, 0]}
            >
              <planeGeometry args={[15, 15]} />
              <meshPhongMaterial />
            </mesh>
            <mesh
              receiveShadow
              rotation-x={degreesToRadians(0)}
              position={[0, 0, -4]}
            >
              <planeGeometry args={[15, 15]} />
              <meshPhongMaterial />
            </mesh>
          </Canvas>
        </div>
      </Suspense>
    </>
  );
}

export default EscenarioSimple;
