/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import background from "../../assets/back.png";
import tal from "../../assets/tal.png";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Aysha from "../../assets/pro1.png";
import Efad from "../../assets/ea.png";
import Sadman from "../../assets/Sadman.webp";
import dip from "../../assets/dip.jpg";
import code from "../../assets/code.png";
import ai from "../../assets/ai.png";
import gra from "../../assets/gra.png";
import prompt from "../../assets/prompt.png";
import word1 from "../../assets/word1.png";
import oc from "../../assets/oceang.png";
import aboutb from "../../assets/aboutbanner.png";

const About = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: code,
      title: "Coding",
      des: "Code is poetry in motion. Every line should be elegant, efficient, and a masterpiece of logic.",
    },
    {
      img: ai,
      title: "AI",
      des: "Turns dreams into reality, one algorithm at a time",
    },
    {
      img: gra,
      title: "Graphic design",
      des: "Where creativity meets pixels, crafting visual stories with every stroke",
    },
    {
      img: prompt,
      title: "Prompt engineering",
      des: "Transforming concepts into solutions, with precision and creativity..",
    },
    {
      img: oc,
      title: "OceanCapp",
      des: "Total Solution, in one platform.",
    },
  ];
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliders.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );
  const isSmallScreen = window.innerWidth <= 768;
  return (
    <>
      <Link to="/about"></Link>
      {/* 0 phase start */}
      <section className="text-white body-font overflow-hidden">
        <div className="container py-2 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/5 pl-6">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full"
                src={aboutb}
              />
            </div>
            <div className="w-full lg:w-3/5 lg:pl-36 lg:py-6 mt-8 lg:mt-16">
              <h1 className="text-white text-4xl sm:text-6xl md:text-8xl title-font font-medium mb-1">
                Empowering Next<span className="text-cyan-600">_</span>{" "}
                Generation
              </h1>
              <p className="leading-relaxed text-gray-400">
                Unlock superior software solutions with OceanCapp, a leading
                offshore development firm delivering creativity and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 0 phase end*/}
      {/* 1st phase done */}
      {/* <div className="relative w-full h-full">
        <img
          src={background}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-full p-4 text-white text-3xl text-center">
          Your text goes here
        </div>
      </div> */}
      {/* <----------------------------------------------------------------------------------------------> */}
      <div className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden">
        {/* arrow */}
        <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
          {/* arrow left */}
          <button
            onClick={prevSlider}
            className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
          {/* arrow right */}
          <button
            onClick={nextSlider}
            className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        {/* text container here */}
        <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
          <h1 className="lg:text-5xl font-bold mb-3">
            {sliders[currentSlider].title}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 lg:text-lg">
            {sliders[currentSlider].des}
          </p>
        </div>
        {/* slider container */}
        <div className="w-1/2 ml-auto overflow-hidden absolute -right-5 lg:-right-16 z-50 px-4 py-10">
          <div
            className="ease-linear duration-300 flex gap-4 items-center"
            style={{
              transform: `translateX(-${
                currentSlider * (isSmallScreen ? 98 : 200)
              }px)`,
            }}
          >
            {/* sliders */}
            {sliders.map((slide, inx) => (
              <img
                key={inx}
                src={slide.img}
                className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${
                  currentSlider - 1 === inx ? "scale-0" : "scale-100 delay-500"
                } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
                alt={slide.title}
              />
            ))}
          </div>
        </div>
      </div>
      {/* 1st phase done finish*/}
      {/* 2nd phase 1 start joldi  ekhane*/}
      <h3 className="text-4xl text-cyan-500 uppercase font-bold font-serif text-center">
        Our Journey
      </h3>
      <div className="h-1 w-40 md:w-80 bg-cyan-500 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
      <div>
        <p>
          Welcome to Oceancapp, where innovation converges with expertise to
          elevate your digital journey. As pioneers in the IT realm, we proudly
          offer a comprehensive spectrum of services tailored to meet every
          digital need imaginable. From sleek web development that captivates to
          dynamic graphics design that mesmerizes, from bespoke WordPress
          solutions that empower to immersive game development that thrills – we
          do it all, and we do it with passion. <br /> What sets Oceancapp apart is our
          commitment to revolutionizing how IT solutions are delivered in
          Bangladesh. By consolidating web development, graphics design,
          WordPress customization, game development, prompt engineering, and
          cybersecurity under one roof, we simplify complexity and amplify
          efficiency for our clients. <br /> Imagine a future where launching your
          online presence or securing your digital assets is not only seamless
          but also exhilarating. At Oceancapp, we don't just meet expectations;
          we exceed them with our dedication to excellence, creativity, and
          cutting-edge technology. Join us on this transformative journey as we
          empower businesses, entrepreneurs, and visionaries across Bangladesh
          to thrive in the digital age. Together, let's shape a brighter
          tomorrow where innovation knows no bounds – powered by Oceancapp,
          where your aspirations meet our expertise!
        </p>
      </div>
      {/* 2nd phase 1 start joldi  sesh eakhen*/}
      {/* 2nd phase start */}
      <div className="flex py-16 px-8">
        <div className="w-3/5 font-bold text-xl space-y-4 pt-8 ">
          <h1 className="text-4xl text-cyan-600 pb-4">
            Cutting-Edge Solutions and Expertise
          </h1>
          <p className="flex items-center">
            <FaArrowRight className="w-6 h-6 pr-2" /> Innovative Solutions,
            Unmatched Quality
          </p>
          <p className="flex items-center">
            <FaArrowRight className="w-6 h-6 pr-2" /> Expert Developers,
            Exceptional Results
          </p>
          <p className="flex items-center">
            <FaArrowRight className="w-6 h-6 pr-2" /> Agile Strategies, Seamless
            Execution
          </p>
          <p className="flex items-center">
            <FaArrowRight className="w-6 h-6 pr-2" /> Client-Centric Approach,
            Unwavering Support
          </p>
          <p className="flex items-center">
            <FaArrowRight className="w-6 h-6 pr-2" /> Timely Delivery,
            Guaranteed Satisfaction
          </p>
          <p className="flex items-center">
            <FaArrowRight className="w-6 h-6 pr-2" /> Cutting-Edge Technology,
            Future-Proof Solutions
          </p>
          <p className="flex items-center">
            <FaArrowRight className="w-6 h-6 pr-2" /> Collaborative Partnership,
            Shared Success
          </p>
          <p className="flex items-center">
            <FaArrowRight className="w-6 h-6 pr-2" /> Proven Expertise, Trusted
            Excellence
          </p>
        </div>
        <div className="w-2/5">
          <img
            src={tal}
            className="rounded-tr-[80px] rounded-bl-[80px] shadow-md"
            alt=""
          />
        </div>
      </div>
      {/* 2nd phase finish */}
      {/* 3rd phase Strat */}
      <div className="mx-auto md:w-8/12 mb-8 mt-16 flex justify-center items-center ">
        <h3 className="text-4xl text-cyan-500 uppercase font-bold font-serif text-center">
          Get Advice From Expert
        </h3>
      </div>
      <div className="h-1 w-40 md:w-80 bg-cyan-500 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
      <div className="flex flex-wrap -m-4 py-8 justify-center">
        <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              className="h-52 rounded w-full object-cover object-center mb-6"
              src={Aysha}
              alt="content"
            ></img>
            <h3 className="text-black text-xs font-medium title-font">
              CEO and Founder
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Ayesha Anika
            </h2>
            <div className="grid grid-flow-col gap-3">
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="https://www.facebook.com/khalid.hasan.77128261?mibextid=ZbWKwL">
                  <FaFacebookF size="1.7rem" color="black" />
                </a>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="">
                  <FaInstagram size="1.7rem" color="black" />
                </a>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="">
                  <FaLinkedinIn size="1.7rem" color="black" />
                </a>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="">
                  <FaWhatsapp size="1.7rem" color="black" />
                </a>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="">
                  <BiLogoGmail size="1.7rem" color="black" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              className="h-52 rounded w-full object-cover object-center mb-6"
              src={Efad}
              alt="content"
            ></img>
            <h3 className="text-black text-xs font-medium title-font">
              Chief Information Security Officer
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Efadul Islam
            </h2>
            <div className="grid grid-flow-col gap-3">
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="https://www.facebook.com/Dipto93?mibextid=ZbWKwL">
                  <FaFacebookF size="1.7rem" color="black" />
                </a>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="">
                  <FaInstagram size="1.7rem" color="black" />
                </a>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="">
                  <FaLinkedinIn size="1.7rem" color="black" />
                </a>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="">
                  <FaWhatsapp size="1.7rem" color="black" />
                </a>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="">
                  <BiLogoGmail size="1.7rem" color="black" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              className="h-52 rounded w-full object-cover object-center mb-6"
              src={Sadman}
              alt="content"
            ></img>
            <h3 className="text-black text-xs font-medium title-font">
              Full Stack Developer
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Sadman Islam
            </h2>
            <div className="grid grid-flow-col gap-3">
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="https://www.facebook.com/sadmankhan01?mibextid=kFxxJD">
                  <FaFacebookF
                    href="https://www.facebook.com/sadmankhan01?mibextid=kFxxJD"
                    size="1.7rem"
                    color="black"
                  />
                </a>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="https://www.instagram.com/sadman__khan__?igsh=MXV5ZzFqOTBmN2Z3NQ%3D%3D">
                  <FaInstagram
                    href="https://www.instagram.com/sadman__khan__?igsh=MXV5ZzFqOTBmN2Z3NQ%3D%3D"
                    size="1.7rem"
                    color="black"
                  />
                </a>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="https://www.linkedin.com/in/sadmankhan07/">
                  <FaLinkedinIn
                    href="https://www.linkedin.com/in/sadmankhan07/"
                    size="1.7rem"
                    color="black"
                  />
                </a>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="https://wa.link/bx5ack">
                  <FaWhatsapp
                    href="https://wa.link/bx5ack"
                    size="1.7rem"
                    color="black"
                  />
                </a>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="mailto:info@sadmank007@gmail.com">
                  <BiLogoGmail
                    href="mailto:info@sadmank007@gmail.com"
                    size="1.7rem"
                    color="black"
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              className="h-52 rounded w-full object-cover object-center mb-6"
              src={dip}
              alt="content"
            ></img>
            <h3 className="text-black text-xs font-medium title-font">
              Game Developer
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Taksimul Hasan Dip
            </h2>
            <div className="grid grid-flow-col gap-3">
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="https://www.facebook.com/taksimul.hasan.7489?mibextid=ZbWKwL">
                  <FaFacebookF size="1.7rem" color="black" />
                </a>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="https://www.instagram.com/into_the_deep_sleep?igsh=MWRha3I3bXoxN2d6NA%3D%3D">
                  <FaInstagram size="1.7rem" color="black" />
                </a>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="https://www.linkedin.com/in/taksimul-hasan-dip-86864a272/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <FaLinkedinIn size="1.7rem" color="black" />
                </a>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="https://wa.link/dhn4di">
                  <FaWhatsapp size="1.7rem" color="black" />
                </a>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="mailto:info@thdip128@gmail.com">
                  <BiLogoGmail
                    href="mailto:info@thdip128@gmail.com"
                    size="1.7rem"
                    color="black"
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd phase finish */}
      {/* 4th phase Strat */}

      {/* 4th phase finish */}
    </>
  );
};

export default About;
