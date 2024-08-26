// import React from "react";
// import "../../index.css";
// import "./SlidingMenu.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Ironman from "../../Assets/iron-man.jpg";
// import CaptainAmerica from "../../Assets/captain-america.jpg";
// import Thor from "../../Assets/Thor.jpg";
// import Hulk from "../../Assets/hulk.png";
// import BlackWidow from "../../Assets/black-widow.jpg";
// import Hawkeye from "../../Assets/hawkeye.jpg";
// // import AOS from "aos";
// import "aos/dist/aos.css";

// const SlidingMenu = () => {
//   var settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 2.5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//   };
//   const MainBox = "MainBox";
//   const className = "Cards";
//   const InsideCard = "insideCard";

//   // useEffect(() => {
//   //   AOS.init({
//   //     duration: 1000, // duration of the animation
//   //     easing: 'ease-in-out', // easing of the animation
//   //     once: false, // animation occurs only once
//   //   });
//   // }, []);

//   return (
//     <>
//       {/* Main Container */}
//       <div className={MainBox + "__box flex flex-col bg-[#000029] pb-[4rem]"}>
//         {/* Info Starts */}

//         <div
//           className="w-[37rem] flex flex-col justify-center"
//           data-aos="fade-up"
//         >
//           <div className="flex flex-col ml-[7rem] gap-[20px]">
//             <div>
//               <h1 className="text-bold text-6xl text-white">
//                 Our Recent Hackathons
//               </h1>
//             </div>
//             <div className="text-white text-lg">
//               <p className="pb-[20px]">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Temporibus ut, minima ab aliquid numquam iusto tenetur officia
//                 libero perferendis. Aut!
//               </p>
//               <button className="bg-[#000029] h-10 w-32 rounded-full border-2 border-blue-300 transition-colors duration-500 hover:text-white hover:bg-blue-400 hover:border-black">
//                 Read More
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Info Ends */}

//         {/* Sliding Menu Start */}

//         <div
//           className="w-1/2 ml-[3rem]  rounded-xl flex flex-col"
//           data-aos="fade-up"
//         >
//           <div className="mt-10">
//             <Slider {...settings} className="">
//               {/* Card1 */}
//               <div
//                 className={
//                   className +
//                   "__Card bg-[#000029] h-[460px] text-black rounded-xl flex flex-col justify-center items-center"
//                 }
//               >
//                 <div
//                   className={
//                     InsideCard +
//                     "__insideCard rounded-xl w-full flex justify-center items-center"
//                   }
//                 >
//                   <img
//                     src={Ironman}
//                     alt=""
//                     className="h-80 w-[23rem] rounded-xl"
//                   />
//                 </div>
//                 <div className="flex flex-col  mt-2.5">
//                   <p className="text-xl text-white font-semibold">Iron Man</p>
//                   <p>Lorem</p>
//                   <button className="bg-blue-950 text-white h-7 w-24 rounded-xl">
//                     More Info
//                   </button>
//                 </div>
//               </div>
//               {/* End */}

//               {/* Card2 */}
//               <div
//                 className={
//                   className +
//                   "__Card bg-[#000029] h-[460px] text-black rounded-xl flex flex-col justify-center items-center"
//                 }
//               >
//                 <div
//                   className={
//                     InsideCard +
//                     "__insideCard rounded-xl w-full flex justify-center items-center"
//                   }
//                 >
//                   <img
//                     src={CaptainAmerica}
//                     alt=""
//                     className="h-80 w-[23rem] rounded-xl"
//                   />
//                 </div>
//                 <div className="flex flex-col  mt-2.5 ">
//                   <p className="text-xl text-white font-semibold">
//                     Captain America
//                   </p>
//                   <p>Lorem</p>
//                   <button className="bg-blue-950 text-white h-7 w-24 rounded-xl">
//                     More Info
//                   </button>
//                 </div>
//               </div>
//               {/* End */}

//               {/* Card3 */}
//               <div
//                 className={
//                   className +
//                   "__Card bg-[#000029] h-[460px] text-black rounded-xl flex flex-col justify-center items-center"
//                 }
//               >
//                 <div
//                   className={
//                     InsideCard +
//                     "__insideCard rounded-xl w-full flex justify-center items-center"
//                   }
//                 >
//                   <img
//                     src={Thor}
//                     alt=""
//                     className="h-80 w-[23rem] rounded-xl"
//                   />
//                 </div>
//                 <div className="flex flex-col  mt-2.5 ">
//                   <p className="text-xl text-white font-semibold">Thor</p>
//                   <p>Lorem</p>
//                   <button className="bg-blue-950 text-white h-7 w-24 rounded-xl">
//                     More Info
//                   </button>
//                 </div>
//               </div>
//               {/* End */}

//               {/* Card4 */}
//               <div
//                 className={
//                   className +
//                   "__Card bg-[#000029] h-[460px] text-black rounded-xl flex flex-col justify-center items-center"
//                 }
//               >
//                 <div
//                   className={
//                     InsideCard +
//                     "__insideCard rounded-xl w-full flex justify-center items-center"
//                   }
//                 >
//                   <img
//                     src={Hulk}
//                     alt=""
//                     className="h-80 w-[23rem] rounded-xl"
//                   />
//                 </div>
//                 <div className="flex flex-col  mt-2.5 ">
//                   <p className="text-xl text-white font-semibold">Hulk</p>
//                   <p>Lorem</p>
//                   <button className="bg-blue-950 text-white h-7 w-24 rounded-xl">
//                     More Info
//                   </button>
//                 </div>
//               </div>
//               {/* End */}

//               {/* Card5 */}
//               <div
//                 className={
//                   className +
//                   "__Card bg-[#000029] h-[460px] text-black rounded-xl flex flex-col justify-center items-center"
//                 }
//               >
//                 <div
//                   className={
//                     InsideCard +
//                     "__insideCard rounded-xl w-full flex justify-center items-center"
//                   }
//                 >
//                   <img
//                     src={BlackWidow}
//                     alt=""
//                     className="h-80 w-[23rem] rounded-xl"
//                   />
//                 </div>
//                 <div className="flex flex-col  mt-2.5 ">
//                   <p className="text-xl text-white font-semibold">
//                     Black Widow
//                   </p>
//                   <p>Lorem</p>
//                   <button className="bg-blue-950 text-white h-7 w-24 rounded-xl">
//                     More Info
//                   </button>
//                 </div>
//               </div>
//               {/* End */}

//               {/* Card6 */}
//               <div
//                 className={
//                   className +
//                   "__Card bg-[#000029] h-[460px] text-black rounded-xl flex flex-col justify-center items-center"
//                 }
//               >
//                 <div
//                   className={
//                     InsideCard +
//                     "__insideCard rounded-xl w-full flex justify-center items-center"
//                   }
//                 >
//                   <img
//                     src={Hawkeye}
//                     alt=""
//                     className="h-80 w-[23rem] rounded-xl"
//                   />
//                 </div>
//                 <div className="flex flex-col  mt-2.5 ">
//                   <p className="text-xl text-white font-semibold">Hawkeye</p>
//                   <p>Lorem</p>
//                   <button className="bg-blue-950 text-white h-7 w-24 rounded-xl">
//                     More Info
//                   </button>
//                 </div>
//               </div>
//               {/* End */}
//             </Slider>
//           </div>
//         </div>
//         {/* Sliding Menu Ends */}
//       </div>
//     </>
//   );
// };

// export default SlidingMenu;

// const SlidingMenu = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 2,
//         slidesToScroll: 1
//       };
//   return (
//     <>
//       <div className="w-1/2 m-auto">
//         <div className="mt-20">
//         <Slider {...settings}>
//           <div className="flex  justify-center items-center ">
//             <div className="bg-blue-900 h-[460px] text-black rounded-xl mx-2 flex flex-col justify-center items-center">
//               <div className="rounded-xl  w-80 flex justify-center items-center">
//                 <img src={Ironman} alt="" className="h-[23rem] rounded-xl w-[23rem] rounded-xl"/>
//               </div>
//               <div className="flex flex-col justify-center items-center gap-2">
//                 <p className="text-xl font-semibold">Iron Man</p>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                 <button className="bg-black text-white h-7 w-24 rounded-xl">More Info</button>
//               </div>
//             </div>
//             <div className="bg-blue-900 h-[460px] text-black rounded-xl mx-2 flex flex-col justify-center items-center">
//               <div className="rounded-xl  w-80 flex justify-center items-center">
//                 <img src={CaptainAmerica} alt="" className="h-[23rem] rounded-xl w-[23rem] rounded-xl"/>
//               </div>
//               <div className="flex flex-col justify-center items-center gap-2">
//                 <p className="text-xl font-semibold">Captain America</p>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                 <button className="bg-black text-white h-7 w-24 rounded-xl">More Info</button>
//               </div>
//             </div>
//             <div className="bg-blue-900 h-[460px] text-black rounded-xl mx-2 flex flex-col justify-center items-center">
//               <div className="rounded-xl  w-80 flex justify-center items-center">
//                 <img src={Thor} alt="" className="h-[23rem] rounded-xl w-[23rem] rounded-xl"/>
//               </div>
//               <div className="flex flex-col justify-center items-center gap-2">
//                 <p className="text-xl font-semibold">Thor</p>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                 <button className="bg-black text-white h-7 w-24 rounded-xl">More Info</button>
//               </div>
//             </div>
//             <div className="bg-blue-900 h-[460px] text-black rounded-xl mx-2 flex flex-col justify-center items-center">
//               <div className="rounded-xl  w-80 flex justify-center items-center">
//                 <img src={Hulk} alt="" className="h-[23rem] rounded-xl w-[23rem] rounded-xl"/>
//               </div>
//               <div className="flex flex-col justify-center items-center gap-2">
//                 <p className="text-xl font-semibold">Hulk</p>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                 <button className="bg-black text-white h-7 w-24 rounded-xl">More Info</button>
//               </div>
//             </div>
//             <div className="bg-blue-900 h-[460px] text-black rounded-xl mx-2 flex flex-col justify-center items-center">
//               <div className="rounded-xl  w-80 flex justify-center items-center">
//                 <img src={BlackWidow} alt="" className="h-[23rem] rounded-xl w-[23rem] rounded-xl"/>
//               </div>
//               <div className="flex flex-col justify-center items-center gap-2">
//                 <p className="text-xl font-semibold">Black Widow</p>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                 <button className="bg-black text-white h-7 w-24 rounded-xl">More Info</button>
//               </div>
//             </div>
//             <div className="bg-blue-900 h-[460px] text-black rounded-xl mx-2 flex flex-col justify-center items-center">
//               <div className="rounded-xl  w-80 flex justify-center items-center">
//                 <img src={Hawkeye} alt="" className="h-[23rem] rounded-xl w-[23rem] rounded-xl"/>
//               </div>
//               <div className="flex flex-col justify-center items-center gap-2">
//                 <p className="text-xl font-semibold">Hawkeye</p>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                 <button className="bg-black text-white h-7 w-24 rounded-xl">More Info</button>
//               </div>
//             </div>
//           </div>
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SlidingMenu;

// {
/* {data.map((d) => (
            <div key={d.name} className="bg-blue-900 h-[450px] text-black rounded-xl">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={d.img} alt="" className="h-[23rem] rounded-xl w-[23rem] rounded-xl rounded-full" />
              </div>

              <div className="flex flex-col items-center justify-center gap-2 p-2">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                  Read More
                </button>
              </div>
            </div>
          ))} */
// }

// const data = [
//   {
//     name: `Iron Man`,
//     img: { Ironman },
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
//   },
//   {
//     name: `Captain America`,
//     img: { CaptainAmerica },
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
//   },
//   {
//     name: `Hulk`,
//     img: { Hulk },
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
//   },
//   {
//     name: `Thor`,
//     img: { Thor },
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
//   },
//   {
//     name: `Black Widow`,
//     img: { BlackWidow },
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
//   },
//   {
//     name: `Hawkeye`,
//     img: { Hawkeye },
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
//   },
// ];
