/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";  // Import autoplay css
import { FreeMode, Pagination, Autoplay } from "swiper/modules"; // Import the Autoplay module
import { FaShareAlt } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import Ruij from "../../../assets/Ruij.jpg";
import ar21 from "../../../assets/2.1.webp";
import ar22 from "../../../assets/2.2.webp";
import ar23 from "../../../assets/Screenshot_122.png";
import { Link } from "react-router-dom";
const RecentArticle = () => {
  return (
    <div>
      <div className="mx-auto md:w-8/12 my-4 flex justify-center items-center">
        {/* <p className='text-yellow-600'>----{subHeading}---</p> */}
        <h3 className="text-4xl text-cyan-500 uppercase pt-4 font-bold font-serif">
          recent articles
        </h3>
      </div>
      <div className="h-1 w-80 bg-cyan-500 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
      <div className="mx-auto md:w-10/12 my-4">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000, // 5 seconds delay
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]} 
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div className=" mx-auto my-6 max-w-[350px] rounded-lg bg-white font-sans shadow-lg dark:bg-[#18181B]">
              <div className="flex items-center justify-between gap-10 px-4 py-4">
                {/* Avata image  */}
                <div className="flex items-center gap-3">
                  <img
                    width={100}
                    height={100}
                    className="h-16 w-16 rounded-full bg-black/40"
                    src="https://source.unsplash.com/100x100/?portrait"
                    alt="card navigate ui"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-xl font-semibold">Yoan Lee</h2>
                    <p className="text-gray-400">2 days ago</p>
                  </div>
                </div>
                {/* Setting button */}
                <div className="flex cursor-pointer flex-col gap-2 rounded-full px-4 py-3">
                  <span className="size-[3px] rounded-full bg-gray-600"></span>
                  <span className="size-[3px] rounded-full bg-gray-600"></span>
                  <span className="size-[3px] rounded-full bg-gray-600"></span>
                </div>
              </div>
              {/* Post Image */}
              <div className="flex flex-col gap-1">
                <div className="w-full">
                  <img
                    width={400}
                    height={200}
                    className="h-[150px] w-full bg-black/40"
                    src="https://source.unsplash.com/400x200/?arts"
                    alt="card navigate ui"
                  />
                </div>
                <div className="flex gap-1 overflow-hidden">
                  <img
                    width={201}
                    height={201}
                    className="h-[150px] w-[49.5%] bg-black/40"
                    src="https://source.unsplash.com/201x201/?arts"
                    alt="card navigate ui"
                  />
                  <img
                    width={202}
                    height={202}
                    className="h-[150px] w-[49.5%] bg-black/40"
                    src="https://source.unsplash.com/202x202/?arts"
                    alt="card navigate ui"
                  />
                </div>
              </div>
              {/* Post content */}
              <div className="mt-3 space-y-2 px-4">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-white/90">
                  My new paintings
                </h2>
                <h2 className="text-sm text-gray-500 dark:text-white/50">
                  Hey, I captured some picture recently. You can check it and
                  share you thoughts with me. I want to listen your thoughts...{" "}
                  <span className="cursor-pointer text-[#3e96d4]">
                    See more
                  </span>
                </h2>
              </div>
              {/* icons */}
              <div className="mt-4 flex justify-between px-4 pb-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 fill-[#1E293B] dark:fill-white/90"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g strokeWidth="0"></g>
                    <g
                      id="navigateui"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="navigateui">
                    <GiSelfLove className="" style={{ fontSize: '26px' }}/>
                    </g>
                  </svg>
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                    10k
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="fill-[#1E293B] dark:fill-white/90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                  >
                    <FaShareAlt  className="" style={{ fontSize: '20px' }} />
                  </svg>
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                    34
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* pat2 --------------------------*/}
          <SwiperSlide>
            {" "}
            <div className=" mx-auto my-6 max-w-[350px] rounded-lg bg-white font-sans shadow-lg dark:bg-[#18181B]">
              <div className="flex items-center justify-between gap-10 px-4 py-4">
            
                <div className="flex items-center gap-3">
                  <img
                    width={100}
                    height={100}
                    className="h-16 w-16 rounded-full bg-black/40"
                    src={Ruij}
                    alt="card navigate ui"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-xl font-semibold">Ruiz</h2>
                    <p className="text-gray-400">Mar 14,2023</p>
                  </div>
                </div>
                {/* Setting button */}
                <div className="flex cursor-pointer flex-col gap-2 rounded-full px-4 py-3">
                  <span className="size-[3px] rounded-full bg-gray-600"></span>
                  <span className="size-[3px] rounded-full bg-gray-600"></span>
                  <span className="size-[3px] rounded-full bg-gray-600"></span>
                </div>
              </div>
              {/* Post Image */}
              <div className="flex flex-col gap-1">
                <div className="w-full">
                  <img
                    width={400}
                    height={200}
                    className="h-[150px] w-full bg-black/40"
                    src={ar21}
                    alt="card navigate ui"
                  />
                </div>
                <div className="flex gap-1 overflow-hidden">
                  <img
                    width={201}
                    height={201}
                    className="h-[150px] w-[49.5%] bg-black/40"
                    src={ar22}
                    alt="card navigate ui"
                  />
                  <img
                    width={202}
                    height={202}
                    className="h-[150px] w-[49.5%] bg-black/40"
                    src={ar23}
                    alt="card navigate ui"
                  />
                </div>
              </div>
              {/* Post content */}
              <div className="mt-3 space-y-2 px-4">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-white/90">
                8-Year Engineer's Advice
                </h2>
                <h2 className="text-sm text-gray-500 dark:text-white/50">
                My name is Benoit. I have been a software engineer for the past eight and a half years.....
                 {/* I stayed at my previous (and first) company for seven and a half years, then I joined a new one in early 2022....{" "} */}
                  <span className="cursor-pointer text-[#3e96d4]">
                    <Link to="https://medium.com/better-programming/advices-from-a-software-engineer-with-8-years-of-experience-8df5111d4d55">See more</Link>
                  </span>
                </h2>
              </div>
              {/* icons */}
              <div className="mt-4 flex justify-between px-4 pb-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 fill-[#1E293B] dark:fill-white/90"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g strokeWidth="0"></g>
                    <g
                      id="navigateui"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="navigateui">
                    <GiSelfLove className="" style={{ fontSize: '26px' }}/>
                    </g>
                  </svg>
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                    16.4k
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="fill-[#1E293B] dark:fill-white/90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                  >
                    <FaShareAlt  className="" style={{ fontSize: '20px' }} />
                  </svg>
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                    295
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* pat2 end------------------------------------------------------------------------*/}
          {/* part3 ----------------------------*/}
          <SwiperSlide>
            {" "}
            <div className=" mx-auto my-6 max-w-[350px] rounded-lg bg-white font-sans shadow-lg dark:bg-[#18181B]">
              <div className="flex items-center justify-between gap-10 px-4 py-4">
                {/* Avatar image  */}
                <div className="flex items-center gap-3">
                  <img
                    width={100}
                    height={100}
                    className="h-16 w-16 rounded-full bg-black/40"
                    src="https://source.unsplash.com/100x100/?portrait"
                    alt="card navigate ui"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-xl font-semibold">Talha</h2>
                    <p className="text-gray-400">June 14,24</p>
                  </div>
                </div>
                {/* Setting button */}
                <div className="flex cursor-pointer flex-col gap-2 rounded-full px-4 py-3">
                  <span className="size-[3px] rounded-full bg-gray-600"></span>
                  <span className="size-[3px] rounded-full bg-gray-600"></span>
                  <span className="size-[3px] rounded-full bg-gray-600"></span>
                </div>
              </div>
              {/* Post Image */}
              <div className="flex flex-col gap-1">
                <div className="w-full">
                  <img
                    width={400}
                    height={200}
                    className="h-[150px] w-full bg-black/40"
                    src="https://source.unsplash.com/400x200/?arts"
                    alt="card navigate ui"
                  />
                </div>
                <div className="flex gap-1 overflow-hidden">
                  <img
                    width={201}
                    height={201}
                    className="h-[150px] w-[49.5%] bg-black/40"
                    src="https://source.unsplash.com/201x201/?arts"
                    alt="card navigate ui"
                  />
                  <img
                    width={202}
                    height={202}
                    className="h-[150px] w-[49.5%] bg-black/40"
                    src="https://source.unsplash.com/202x202/?arts"
                    alt="card navigate ui"
                  />
                </div>
              </div>
              {/* Post content */}
              <div className="mt-3 space-y-2 px-4">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-white/90">
                Image text in 5 lines
                </h2>
                <h2 className="text-sm text-gray-500 dark:text-white/50">
                Share an incredible CSS trick that you can achieve with just five lines of code. This technique will make your ..{" "}
                  <span className="cursor-pointer text-[#3e96d4]">
                    See more
                  </span>
                </h2>
              </div>
              {/* icons */}
              <div className="mt-4 flex justify-between px-4 pb-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 fill-[#1E293B] dark:fill-white/90"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g strokeWidth="0"></g>
                    <g
                      id="navigateui"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="navigateui">
                    <GiSelfLove className="" style={{ fontSize: '26px' }}/>
                    </g>
                  </svg>
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                    10k
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="fill-[#1E293B] dark:fill-white/90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                  >
                    <FaShareAlt  className="" style={{ fontSize: '20px' }} />
                  </svg>
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                    34
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* parth3 end--------------------------------------------- */}
          {/* part4 ------------*/}
          <SwiperSlide>
            {" "}
            <div className=" mx-auto my-6 max-w-[350px] rounded-lg bg-white font-sans shadow-lg dark:bg-[#18181B]">
              <div className="flex items-center justify-between gap-10 px-4 py-4">
                {/* Avatar image  */}
                <div className="flex items-center gap-3">
                  <img
                    width={100}
                    height={100}
                    className="h-16 w-16 rounded-full bg-black/40"
                    src="https://source.unsplash.com/100x100/?portrait"
                    alt="card navigate ui"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-xl font-semibold">Yoan Lee</h2>
                    <p className="text-gray-400">2 days ago</p>
                  </div>
                </div>
                {/* Setting button */}
                <div className="flex cursor-pointer flex-col gap-2 rounded-full px-4 py-3">
                  <span className="size-[3px] rounded-full bg-gray-600"></span>
                  <span className="size-[3px] rounded-full bg-gray-600"></span>
                  <span className="size-[3px] rounded-full bg-gray-600"></span>
                </div>
              </div>
              {/* Post Image */}
              <div className="flex flex-col gap-1">
                <div className="w-full">
                  <img
                    width={400}
                    height={200}
                    className="h-[150px] w-full bg-black/40"
                    src="https://source.unsplash.com/400x200/?arts"
                    alt="card navigate ui"
                  />
                </div>
                <div className="flex gap-1 overflow-hidden">
                  <img
                    width={201}
                    height={201}
                    className="h-[150px] w-[49.5%] bg-black/40"
                    src="https://source.unsplash.com/201x201/?arts"
                    alt="card navigate ui"
                  />
                  <img
                    width={202}
                    height={202}
                    className="h-[150px] w-[49.5%] bg-black/40"
                    src="https://source.unsplash.com/202x202/?arts"
                    alt="card navigate ui"
                  />
                </div>
              </div>
              {/* Post content */}
              <div className="mt-3 space-y-2 px-4">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-white/90">
                  My new paintings
                </h2>
                <h2 className="text-sm text-gray-500 dark:text-white/50">
                  Hey, I captured some picture recently. You can check it and
                  share you thoughts with me. I want to listen your thoughts...{" "}
                  <span className="cursor-pointer text-[#3e96d4]">
                    See more
                  </span>
                </h2>
              </div>
              {/* icons */}
              <div className="mt-4 flex justify-between px-4 pb-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 fill-[#1E293B] dark:fill-white/90"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g strokeWidth="0"></g>
                    <g
                      id="navigateui"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="navigateui">
                    <GiSelfLove className="" style={{ fontSize: '26px' }}/>
                    </g>
                  </svg>
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                    10k
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="fill-[#1E293B] dark:fill-white/90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                  >
                    <FaShareAlt  className="" style={{ fontSize: '20px' }} />
                  </svg>
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                    34
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* part4end ---------------------------------------------------------------------------------------*/}
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default RecentArticle;
