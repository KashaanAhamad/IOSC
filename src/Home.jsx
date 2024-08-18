import React from "react";
import "./index.css";
import "./Home.css";
import Iosclogo from "./Assets/website background.png";
import backGroundImage from "./Assets/background.jpg"

const Home = () => {
  // const backgroundImage = "home-background";
  return (
    <>
      <div className="h-screen w-[94.55rem] bg-fixed" style={{
        backgroundImage: `url(${backGroundImage})`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
      }}>
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
                  <li className="p-5 xl:p-8 hover:text-blue-200">
                    <a href="">
                      <span>About</span>
                    </a>
                  </li>
                  <li className="p-5 xl:p-8 hover:text-blue-200">
                    <a href="">
                      <span>Projects</span>
                    </a>
                  </li>
                  <li className="p-5 xl:p-8 hover:text-blue-200">
                    <a href="">
                      <span>Services</span>
                    </a>
                  </li>
                  <li className="p-5 xl:p-8 hover:text-blue-200">
                    <a href="">
                      <span>Blog</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <button className="bg-transparent text-blue-200 h-10 w-32 rounded-full border-2 border-blue-300 transition-colors duration-700 hover:text-white hover:bg-blue-400 hover:border-black">
                Contact Us
              </button>
            </div>
          </header>
        </div>
      </div>
      {/* <div><img src={backGroundImage} alt="" className="h-screen w-screen bg-fixed"/></div> */}
    </>
  );
};

export default Home;
