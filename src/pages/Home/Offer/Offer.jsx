/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import { motion } from "framer-motion";
import img1 from "../../../assets/Web_design (2).webp";
import img2 from "../../../assets/word.png";
import img6 from "../../../assets/Promt.png";
import img3 from "../../../assets/Web_design (1).webp";
import img4 from "../../../assets/Web_design (5).webp";
import img5 from "../../../assets/graphics.png";
import "./Offer.css";
const Offer = () => {
  return (
    <div>
      <div className="mx-auto md:w-8/12 mb-8 mt-16 flex justify-center items-center ">
        {/* <p className='text-yellow-600'>----{subHeading}--</p */}
        <h3 className="text-4xl text-cyan-500 uppercase font-bold font-serif">
          Solution We Offer
        </h3>
      </div>
      <div className="h-1 w-80 bg-cyan-500 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center my-10">
        <div
          className="card bg-base-100 mx-4 mb-8 md:w-96 rounded custom-gradient"
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)",
          }}
        >
          <figure className="px-4 pt-10">
            <img src={img2} alt="Shoes"  className="rounded-xl w-80" />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">WordPress development</h2>
            <p>
              Our skilled WordPress developers create custom, user-friendly, and
              SEO-optimized websites that are easy to manage and tailored to
              your needs.
            </p>
            <div className="card-actions card-actions flex justify-center items-center">
              <Link to="/gameDevelopment">
                <button className="btn btn-outline w-full bg-black text-white border-black border group hover:bg-white hover:text-black">
                  Learn More
                  <PiArrowRightLight
                    size="1.1rem"
                    className="text-white group-hover:text-black"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="card bg-base-100 mx-4 mb-8 md:w-96 rounded custom-gradient"
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)",
          }}
        >
          <figure className="px-4 pt-10">
            <img src={img3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Web Development</h2>
            <p>
              Build user-centric websites using our unique web development
              services' processes and our skilled team of developers and
              designers.
            </p>
            <div className="card-actions card-actions flex justify-center items-center">
              <Link to="/webdevelopment">
                <button className="btn btn-outline w-full bg-black text-white border-black border group hover:bg-white hover:text-black">
                  Learn More
                  <PiArrowRightLight
                    size="1.1rem"
                    className="text-white group-hover:text-black"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          // whileHover={{ scale: 1.05 }}
          // whileTap={{ scale: 0.8 }}
          className="card bg-base-100 mx-4 mb-8 md:w-96 rounded custom-gradient"
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)",
          }}
        >
          <figure className="px-4 pt-10">
            <img src={img4} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Cyber Security</h2>
            <p>
              we're your cybersecurity guardians, crafting innovative solutions
              to protect your digital assets from evolving threats. Trust us to
              secure your digital future.
            </p>
            <div className="card-actions card-actions flex justify-center items-center">
              <Link to="/cybersecurity">
                <button className="btn btn-outline w-full bg-black text-white border-black border group hover:bg-white hover:text-black">
                  Learn More
                  <PiArrowRightLight
                    size="1.1rem"
                    className="text-white group-hover:text-black"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* 2nd section */}
        <div
          // whileHover={{ scale: 1.05 }}
          // whileTap={{ scale: 0.8 }}
          className="card bg-base-100 mx-4 mb-8 md:w-96 rounded custom-gradient"
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)",
          }}
        >
          <figure className="px-4 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Web Design</h2>
            <p>
              Our skilled designers use their knowledge of industry standards
              and best practices for app and online design to
            </p>
            <div className="card-actions card-actions flex justify-center items-center">
              <Link to="/webdesign">
                <button className="btn btn-outline w-full bg-black text-white border-black border group hover:bg-white hover:text-black">
                  Learn More
                  <PiArrowRightLight
                    size="1.1rem"
                    className="text-white group-hover:text-black"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          // whileHover={{ scale: 1.05 }}
          // whileTap={{ scale: 0.8 }}
          className="card bg-base-100 mx-4 mb-8 md:w-96 rounded custom-gradient"
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)",
          }}
        >
          <figure className="px-4 pt-10">
            <img
              src={img6}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Prompt Engineering</h2>
            <p>
              Our proficient prompt engineers specialize in 
              optimizing AI prompts to enhance user interactions, ensuring
              precise, efficient,... 
              {/* and meaningful responses tailored to your
              business needs */}
            </p>
            <div className="card-actions card-actions flex justify-center items-center">
              <Link to="/prompt">
                <button className="btn btn-outline w-full bg-black text-white border-black border group hover:bg-white hover:text-black">
                  Learn More
                  <PiArrowRightLight
                    size="1.1rem"
                    className="text-white group-hover:text-black"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className="card bg-base-100  mx-4 mb-8 md:w-96 rounded "
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)",
          }}
        >
          <figure className="px-4 pt-10">
            <img
              src="https://i.ibb.co/jzQ7JGv/Untitled-design-8.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Web Development</h2>
            <p>
              Build user-centric websites using our unique web development
              services' processes and our skilled team of developers and
              designers.
            </p>
            <div className="card-actions card-actions flex justify-center items-center">
              <Link to="/cricket">
                <motion.button
                  initial={{ x: -1000 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: "2",
                    delay: "0.2",
                  }}
                  className="btn btn-outline w-full bg-black text-white border-black border group hover:bg-white hover:text-black"
                >
                  Learn More
                  <PiArrowRightLight
                    size="1.1rem"
                    className="text-white group-hover:text-black"
                  />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div> */}
        <div
          className="card bg-base-100 mx-4 mb-8 md:w-96 rounded custom-gradient"
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)",
          }}
        >
          <figure className="px-4 pt-10">
            <img
              src={img5}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Graphics Design</h2>
            <p>
              Our talented graphic designers craft visually compelling and
              innovative designs that effectively communicate...
               {/* your brand
              message, ensuring your visuals stand out and captivate your
              audience. */}
            </p>
            <div className="card-actions card-actions flex justify-center items-center">
              <Link to="/graphics">
                <button className="btn btn-outline w-full bg-black text-white border-black border group hover:bg-white hover:text-black">
                  Learn More
                  <PiArrowRightLight
                    size="1.1rem"
                    className="text-white group-hover:text-black"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
