import { useState } from "react";
import { useScroll, useSpring, motion } from "framer-motion";

const Scroll = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <div className=" m-0 ">
      <motion.div style={{ scaleX }} className="bg-red-600 h-3 sticky top-0" />
      <div className=" bg-black h-screen flex justify-center">
        <h1 className=" text-[3rem] text-white">Seccion 1</h1>
      </div>
      <div className=" bg-[#68BAB9] h-screen flex justify-center">
        <h1 className=" text-[3rem] text-white ">Seccion 2</h1>
      </div>
      <div className=" bg-[#BAA268] h-screen flex justify-center">
        <h1 className=" text-[3rem] text-white ">Seccion 3</h1>
      </div>
      <div className=" bg-[#A1BA68] h-screen flex justify-center">
        <h1 className=" text-[3rem] text-white ">Seccion 4</h1>
      </div>
    </div>
  );
};

export default Scroll;
