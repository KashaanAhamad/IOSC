// import React, { useRef } from "react";
// import {
//   motion,
//   useMotionTemplate,
//   useMotionValue,
//   useSpring,
// } from "framer-motion";
// import IronMan from "./Assets/iron-man.jpg"
// // import { FiMousePointer } from "react-icons/fi";




// const Example = () => {
//   return (
//     <div className="grid h-[50rem] w-[94.55rem] gap-4 place-content-center bg-[#000029]  px-4 py-12 text-slate-900 ">
//       <div className="text-6xl h-[10rem] text-white text-center">
//         <h1>Our Departments</h1>
//       </div>
//       <div className="flex gap-[10rem]">
//         <div className="flex flex-col justify-center">
//           <TiltCard />
//         </div>
//         <div className="flex flex-col justify-center">
//           <TiltCard />
//         </div>
//         <div className="flex flex-col justify-center">
//           <TiltCard />
//         </div>
//       </div>
//     </div>
//   );
// };

// const ROTATION_RANGE = 32.5;
// const HALF_ROTATION_RANGE = 32.5 / 2;

// const TiltCard = () => {
//   const ref = useRef(null);

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const xSpring = useSpring(x);
//   const ySpring = useSpring(y);

//   const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

//   const handleMouseMove = (e) => {
//     if (!ref.current) return [0, 0];

//     const rect = ref.current.getBoundingClientRect();

//     const width = rect.width;
//     const height = rect.height;

//     const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
//     const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

//     const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
//     const rY = mouseX / width - HALF_ROTATION_RANGE;

//     x.set(rX);
//     y.set(rY);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         transformStyle: "preserve-3d",
//         transform,
//       }}
//       className="relative h-96 w-72 rounded-xl bg-blue-300  to-violet-300"
//     >


//       <div
//         style={{
//           transform: "translateZ(75px)",
//           transformStyle: "preserve-3d",
//         }}
//         className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
//       >
//         <img src={IronMan} alt="" style={{
//         }}
//         className="absolute h-[22rem]  grid place-content-center rounded-xl bg-white shadow-lg"/>


//         {/* <FiMousePointer
//           style={{
//             transform: "translateZ(75px)",
//           }}
//           className="mx-auto text-4xl"
//         /> */}


//         {/* <p style={{transform: "translateZ(50px)",}} className="text-center text-2xl font-bold">
//           hover
//         </p> */}


//       </div>
//     </motion.div>
//   );
// };

// export default Example;

// // bg-gradient-to-br from-indigo-300



  
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import "./index.css";
import AIML from "./Assets/AI-ML.jpg";
import WebD from "./Assets/Web.jpg";
import IOT from "./Assets/IOT.png";
// import { FiMousePointer } from "react-icons/fi";

const Example = () => {
  return (
    <div className="grid h-[50rem] w-[94.55rem] gap-4 place-content-center bg-[#000029]  px-4 py-12 text-slate-900 ">
      <div className="text-6xl h-[10rem] text-white text-center">
        <h1>Our Departments</h1>
      </div>
      <div className="flex gap-[10rem]">
        <div className="flex flex-col justify-center">
          <TiltCard imageSrc={AIML} />
        </div>
        <div className="flex flex-col justify-center">
          <TiltCard imageSrc={WebD} />
        </div>
        <div className="flex flex-col justify-center">
          <TiltCard imageSrc={IOT} />
        </div>
      </div>
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({imageSrc}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <img
          src={imageSrc}
          alt=""
          className="absolute h-[22rem] grid place-content-center rounded-xl bg-white shadow-lg"
        />
        {/* <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        /> */}
        {/* <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          HOVER ME
        </p> */}
      </div>
    </motion.div>
  );
};

export default Example;