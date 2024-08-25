import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./index.css";
import "./Cards.css";
import Earth from "./Assets/Earth.jpg";
import Sky from "./Assets/Sky.jpg";
import AOS from "aos";
import "aos/dist/aos.css";



const Cards = () => {
  // Card 1
  const [isFlipped1, setIsFlipped1] = useState(false);

  const [isAnimating1, setIsAnimating1] = useState(false);

  function handleFlip1() {
    if (!isAnimating1) {
      setIsFlipped1(!isFlipped1);

      setIsAnimating1(true);
    }
  }

  // Card 2
  const [isFlipped2, setIsFlipped2] = useState(false);

  const [isAnimating2, setIsAnimating2] = useState(false);

  function handleFlip2() {
    if (!isAnimating2) {
      setIsFlipped2(!isFlipped2);

      setIsAnimating2(true);
    }
  }


  // Card 3
  const [isFlipped3, setIsFlipped3] = useState(false);

  const [isAnimating3, setIsAnimating3] = useState(false);

  function handleFlip3() {
    if (!isAnimating3) {
      setIsFlipped3(!isFlipped3);

      setIsAnimating3(true);
    }
  }


  // Card 4
  const [isFlipped4, setIsFlipped4] = useState(false);

  const [isAnimating4, setIsAnimating4] = useState(false);

  function handleFlip4() {
    if (!isAnimating4) {
      setIsFlipped4(!isFlipped4);

      setIsAnimating4(true);
    }
  }


  useEffect(() => {
    AOS.init({
      duration: 1500, // duration of the animation
      once: true, // animation occurs only once
    });
  }, []);

  return (
    <>
      <div id="Events" className="flex flex-col gap-8 justify-center bg-[#000029] h-[145rem] w-[94.55rem] p-12">
        <div className="h-[5rem]" data-aos="fade-up">
          <h1 className="text-6xl text-center text-white">Our Events</h1>
        </div>
        <div className="h-[130rem] w-[88.5rem]">
          {/* Event 1 starts */}
          <div className="flex items-center gap-4 h-[28rem] m-16" data-aos="fade-up">
            <div>
              {/* Card 1 */}
              <div
                className="flip-card w-[23rem] h-[28rem] hover:scale-110 transition-all duration-500"
                onClick={handleFlip1}
              >
                <motion.div
                  className="flip-card-inner w-[100%] h-[100%]"
                  initial={false}
                  animate={{ rotateY: isFlipped1 ? 180 : 360 }}
                  transition={{ duration: 0.1, animationDirection: "normal" }}
                  onAnimationComplete={() => setIsAnimating1(false)}
                >
                  <div
                    className="flip-card-front flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${Sky})`}}
                  >
                    <h1 className="text-2xl font-bold/ my-[1.5rem]">Sky</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam voluptates illo officiis perferendis tempore
                      aliquam.
                    </p>
                  </div>

                  <div
                    className="flip-card-back flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${Earth})` }}
                  >
                    <h1 className="text-2xl font-bold/ my-[1.5rem]">Earth</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eveniet nulla repellat explicabo quis labore? Culpa!
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col  justify-center gap-16 h-[20rem] w-[47rem] ml-[10rem]">
              <div className="text-6xl text-white ml-[19.5rem]">
                <h1>Event Heading</h1>
              </div>
              <div className="flex  justify-center  text-2xl text-white">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                  ad corrupti impedit consectetur ratione tempore quia, quasi
                  eligendi velit deleniti quae maiores error dolores at dolorum
                  ullam quas nesciunt facere.
                </p>
              </div>
            </div>
          </div>

          {/* Event 2 starts */}
          <div className="flex items-center gap-32 h-[28rem] m-16" data-aos="fade-up">
            <div className="flex flex-col justify-center gap-16 h-[20rem] w-[47rem]">
              <div className="text-6xl text-white">
                <h1>Event Heading</h1>
              </div>
              <div className="flex justify-center text-2xl text-white">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                  ad corrupti impedit consectetur ratione tempore quia, quasi
                  eligendi velit deleniti quae maiores error dolores at dolorum
                  ullam quas nesciunt facere.
                </p>
              </div>
            </div>
            <div>
              {/* Card2 */}
              <div
                className="flip-card w-[23rem] h-[28rem] hover:scale-110 transition-all duration-500"
                onClick={handleFlip2}
              >
                <motion.div
                  className="flip-card-inner w-[100%] h-[100%]"
                  initial={false}
                  animate={{ rotateY: isFlipped2 ? 180 : 360 }}
                  transition={{ duration: 0.1, animationDirection: "normal" }}
                  onAnimationComplete={() => setIsAnimating2(false)}
                >
                  <div
                    className="flip-card-front flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${Sky})`}}
                  >
                    <h1 className="text-2xl font-bold/ my-[1.5rem]">Sky</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam voluptates illo officiis perferendis tempore
                      aliquam.
                    </p>
                  </div>

                  <div
                    className="flip-card-back flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${Earth})` }}
                  >
                    <h1 className="text-2xl font-bold/ my-[1.5rem]">Earth</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eveniet nulla repellat explicabo quis labore? Culpa!
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Event 3 starts */}
          <div className="flex items-center gap-4 h-[28rem] m-16" data-aos="fade-up">
            <div>
              {/* Card 3 */}
              <div
                className="flip-card w-[23rem] h-[28rem] hover:scale-110 transition-all duration-500"
                onClick={handleFlip3}
              >
                <motion.div
                  className="flip-card-inner w-[100%] h-[100%]"
                  initial={false}
                  animate={{ rotateY: isFlipped3 ? 180 : 360 }}
                  transition={{ duration: 0.1, animationDirection: "normal" }}
                  onAnimationComplete={() => setIsAnimating3(false)}
                >
                  <div
                    className="flip-card-front flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${Sky})`}}
                  >
                    <h1 className="text-2xl font-bold/ my-[1.5rem]">Sky</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam voluptates illo officiis perferendis tempore
                      aliquam.
                    </p>
                  </div>

                  <div
                    className="flip-card-back flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${Earth})` }}
                  >
                    <h1 className="text-2xl font-bold/ my-[1.5rem]">Earth</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eveniet nulla repellat explicabo quis labore? Culpa!
                    </p>
                  </div> 
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col  justify-center gap-16 h-[20rem] w-[47rem] ml-[10rem]">
              <div className="text-6xl text-white ml-[19.5rem]">
                <h1>Event Heading</h1>
              </div>
              <div className="flex  justify-center  text-2xl text-white">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                  ad corrupti impedit consectetur ratione tempore quia, quasi
                  eligendi velit deleniti quae maiores error dolores at dolorum
                  ullam quas nesciunt facere.
                </p>
              </div>
            </div>
          </div>

          {/* Event 4 starts */}
          <div className="flex items-center gap-32 h-[28rem] m-16" data-aos="fade-up">
            <div className="flex flex-col justify-center gap-16 h-[20rem] w-[47rem]">
              <div className="text-6xl text-white">
                <h1>Event Heading</h1>
              </div>
              <div className="flex justify-center text-2xl text-white">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                  ad corrupti impedit consectetur ratione tempore quia, quasi
                  eligendi velit deleniti quae maiores error dolores at dolorum
                  ullam quas nesciunt facere.
                </p>
              </div>
            </div>
            <div>
              {/* Card4 */}
              <div
                className="flip-card w-[23rem] h-[28rem] hover:scale-110 transition-all duration-500"
                onClick={handleFlip4}
              >
                <motion.div
                  className="flip-card-inner w-[100%] h-[100%]"
                  initial={false}
                  animate={{ rotateY: isFlipped4 ? 180 : 360 }}
                  transition={{ duration: 0.1, animationDirection: "normal" }}
                  onAnimationComplete={() => setIsAnimating4(false)}
                >
                  <div
                    className="flip-card-front flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${Sky})`}}
                  >
                    <h1 className="text-2xl font-bold/ my-[1.5rem]">Sky</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam voluptates illo officiis perferendis tempore
                      aliquam.
                    </p>
                  </div>

                  <div
                    className="flip-card-back flex items-center flex-col gap-[5.5rem] w-[100%] h-[100%] bg-cover border-[1px] text-white p-4 rounded-2xl cursor-pointer"
                    style={{ backgroundImage: `url(${Earth})` }}
                  >
                    <h1 className="text-2xl font-bold/ my-[1.5rem]">Earth</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eveniet nulla repellat explicabo quis labore? Culpa!
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Cards;
