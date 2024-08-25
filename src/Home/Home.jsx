import React, { useRef, useState } from "react";
import "../index.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Iosclogo from "../Assets/website background.png";
import backGroundImage from "../Assets/background.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const scrollToElement = (elementId, duration) => {
    const target = document.getElementById(elementId);
    if (!target) return;

    const startPosition = window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top;
    const startTime = performance.now();

    const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const run =
        easeInOutQuad(timeElapsed / duration) * targetPosition + startPosition;
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, startPosition + targetPosition); // Ensure it ends at the exact position
      }
    };

    requestAnimationFrame(animateScroll);
  };


  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // duration of the animation
  //     once: true, // animation occurs only once
  //   });
  // }, []);

  return (
    <>
      <div className="h-screen w-[94.55rem] bg-fixed" style={{
          backgroundImage: `url(${backGroundImage})`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
        }}
      >
        <div className="bg-transparent">
          <header className=" flex items-center justify-center  bg-opacity-5 text-white  hidden md:block">
            <div className="container mx-auto flex items-center h-20 ">
              <a href="" className="flex items-center justify-center">
                <img src={Iosclogo} alt="" className="h-14" />
              </a>
              <nav className="contents font-semibold text-base lg:text-lg">
                <ul className="mx-auto flex items-center">
                  <li className="p-5 xl:p-8 active hover:text-blue-200">
                    <a href="">
                      <span>Home</span>
                    </a>
                  </li>
                  <Link className="p-5 xl:p-8 hover:text-blue-200" to="/team">
                    <span>Team</span>
                  </Link>
                  <Link
                    className="p-5 xl:p-8 hover:text-blue-200"
                    onClick={() => scrollToElement("Departments", 1500)} // 1000ms = 1 second duration
                  >
                    <span>Departments</span>
                  </Link>
                  <Link
                    className="p-5 xl:p-8 hover:text-blue-200"
                    onClick={() => scrollToElement("Events", 1000)} // 1000ms = 1 second duration
                  >
                    <span>Events</span>
                  </Link>
                </ul>
              </nav>
              <button className="bg-transparent text-blue-200 h-10 w-32 rounded-full border-2 border-blue-300 transition-colors duration-700 hover:text-white hover:bg-blue-400 hover:border-black">
                Contact Us
              </button>
            </div>
          </header>
        </div>
      </div>


        {/* <Nav /> */}






    </>
  );
};

export default Home;

// const Nav = () => {
//   return (
//     <>
//       <div className="flex items-center h-[10rem] z-[-1] bg-neutral-100 py-20">
//       <SlideTabs />
//       </div>

//     </>
//   )
// }

// const SlideTabs = () => {
//   const [position, setPosition] = useState({
//     left: 0,
//     width: 0,
//     opacity: 0,
//   });

//   return (
//     <ul
//       onMouseLeave={() => {
//         setPosition((pv) => ({
//           ...pv,
//           opacity: 0,
//         }));
//       }}
//       className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
//     >
//       <Tab setPosition={setPosition}>Home</Tab>
//       <Tab setPosition={setPosition}>Pricing</Tab>
//       <Tab setPosition={setPosition}>Features</Tab>
//       <Tab setPosition={setPosition}>Docs</Tab>
//       <Tab setPosition={setPosition}>Blog</Tab>

//       <Cursor position={position} />
//     </ul>
//   );
// };

// const Tab = ({ children, setPosition }) => {
//   const ref = useRef(null);

//   return (
//     <li
//       ref={ref}
//       onMouseEnter={() => {
//         if (!ref?.current) return;

//         const { width } = ref.current.getBoundingClientRect();

//         setPosition({
//           left: ref.current.offsetLeft,
//           width,
//           opacity: 1,
//         });
//       }}
//       className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
//     >
//       {children}
//     </li>
//   );
// };

// const Cursor = ({ position }) => {
//   return (
//     <motion.li
//       animate={{
//         ...position,
//       }}
//       className="absolute z-0 h-7 rounded-full bg-black md:h-12"
//     />
//   );
// };