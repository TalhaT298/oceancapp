/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);
  return (
    <div className="">
      <nav className="flex items-center justify-between bg-[#000000]  py-4 text-white ">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 ">
          <Link to="/">
            <img src={logo} className="w-48 h-16" alt="" />
          </Link>
        </div>
        <ul className="hidden items-center justify-between gap-10 md:flex">
          <Link to="/services">
            <li className="group flex  cursor-pointer flex-col">
              Services
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Link>
          <Link to="/about">
            <li className="group flex  cursor-pointer flex-col">
              About
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Link>
          <Link to="/contact">
            <li className="group flex  cursor-pointer flex-col">
              Contact
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Link>
          <Link to="/career">
            <li className="group flex  cursor-pointer flex-col">
              Career
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Link>
          <li className="group flex  cursor-pointer flex-col">
            <Link to="/sched">
              <button className="relative h-10 w-32 origin-top transform rounded border-2 border-sky-500 text-sm text-white before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-black hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500">
                Schedulae a Call
              </button>
            </Link>
          </li>
        </ul>
        <div
          ref={dropDownMenuRef}
          onClick={() => setDropDownState(!dropDownState)}
          className="relative flex transition-transform md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer"
          >
            {" "}
            <line x1="4" x2="20" y1="12" y2="12" />{" "}
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />{" "}
          </svg>
          {dropDownState && (
            <ul className=" z-10  gap-2  bg-[#000000]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
              <Link to="/services">
                <li className="cursor-pointer  px-6 py-2 text-white hover:bg-white ">
                  Services
                </li>
              </Link>
              <Link to="/about">
                <li className="cursor-pointer  px-6 py-2 text-white hover:bg-white ">
                  About
                </li>
              </Link>
              <Link to="/contact">
                <li className="cursor-pointer  px-6 py-2 text-white hover:bg-white ">
                  Contact
                </li>
              </Link>
              <Link to="/career">
                <li className="cursor-pointer  px-6 py-2 text-white hover:bg-white ">
                  Carrer
                </li>
              </Link>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-white ">
                <button className="relative h-14 w-32 origin-top transform rounded-lg border-2 border-stone-50 text-sm text-stone-50 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500">
                  Schedule a Call
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
