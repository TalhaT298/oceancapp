import React from "react";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import { motion } from "framer-motion";
const Offer = () => {
  return (
    <div>
      <div className="mx-auto md:w-8/12 my-4 flex justify-center items-center ">
        {/* <p className='text-yellow-600'>----{subHeading}---</p> */}
        <h3 className="text-4xl text-white uppercase  pt-4 font-bold font-serif">
          Solution We Offer
        </h3>
      </div>
      <div class="h-1 w-[600px] bg-white rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center my-10">
        <motion.div
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
              src="https://i.ibb.co/6NWH8LP/Untitled-design-7.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Web Design</h2>
            <p>
              Our skilled designers use their knowledge of industry standards
              and best practices for app and online design to
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
        </motion.div>

        <motion.div
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
              src="https://i.ibb.co/L0SHvMw/Untitled-design-6.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Game Development</h2>
            <p>
              Our game development studio develops games and designs plots
              behind them through fruitful game art solutions.
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
        </motion.div>

        <motion.div
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
        </motion.div>

        <motion.div
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
            <h2 className="card-title">Cyber Security</h2>
            <p>
              we're your cybersecurity guardians, crafting innovative solutions
              to protect your digital assets from evolving threats. Trust us to
              secure your digital future.
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
        </motion.div>

        <motion.div
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
              We excel in graphic design, crafting visuals that elevate brands
              and tell stories. Trust us to bring your vision to life with
              creativity and precision.
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
        </motion.div>

        <motion.div
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
        </motion.div>
      </div>
    </div>
  );
};

export default Offer;