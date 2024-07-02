/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import efad from "../../assets/efad.png";
import sadman from "../../assets/sadman.png";
const Career = () => {
  return (
    <>
      <Link to="/career"></Link>
      <div>
        {/* 1st phase */}
        <div>
          <div className="h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 py-8 flex items-center justify-center">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/3 p-4">
                  <img
                    className="rounded-full shadow-md"
                    src={efad}
                    alt="Person 1"
                  ></img>
                </div>
                <div className="md:w-1/3 text-center md:text-left p-4">
                  <h1 className="text-4xl font-bold mb-4">
                    Be a Part of The Fastest Growing Talented Team
                  </h1>
                  <p className="text-gray-600 mb-6">
                    Join our team as a software engineer and experience a
                    dynamic work environment with opportunities for growth. Be
                    part of a passionate and cohesive team delivering innovative
                    software solutions.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                  >
                    Explore Job Openings &rarr;
                  </a>
                </div>
                <div className="md:w-1/3 p-4">
                  <img
                    className="rounded-full shadow-md"
                    src={sadman}
                    alt="Person 2"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 1st phase enddddddd*/}
      </div>
    </>
  );
};

export default Career;