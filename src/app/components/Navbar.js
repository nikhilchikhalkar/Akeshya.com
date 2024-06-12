'use client'

import Image from "next/image";
import {Link} from "react-scroll/modules";
import React, { useState } from "react";
import logo from '../assets/logo.png'
import { HiMiniBars3 , HiXMark } from "react-icons/hi2";


function Navbar() {

  let [isopen, setisopen] = useState(false);
  return (
    <>
      <div className=" w-full z-10 shadow-lg fixed top-0 left-0">
        <div className="md:px-10 py-4 px-7 lg:mx-10 md:flex justify-between items-center bg-white ">
          {/* logo */}
          <div className="flex gap-2 text-2xl cursor-pointer text-[#14279B] items-center">
            <Image src={logo} alt="logo" className="w-16 h-16 text-blue-500 " />
            <span className="font-sans text-3xl font-semibold ">AKESHYA</span>
          </div>

          {/* menu icon toggeler */}
          <div
            onClick={() => setisopen(!isopen)}
            className="w-7 h-7 absolute right-8 top-8 cursor-pointer md:hidden "
          >
            {isopen ? (
              <HiXMark className="w-5 h-5" />
            ) : (
              <HiMiniBars3  className="w-5 h-5" />
            )}
          </div>

          {/* nav links here */}
          <ul
            className={`md:flex gap-2 pl-5 md:pl-0 md:items-center md:pb-0 pb-12
             absolute lg:z-auto  left-0 w-full text-center
            md:static md:w-auto  transition-all lg:bg-white bg-white duration-500 ease-in ${
              isopen ? "top-20" : "top-[-490px]"
            }`}
          >
           
             <li className="my-7 md:my-0 md:ml-8 font-sans font-normal text-base text-[#14279B]">
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={500} >Home</Link>
                
              </li>
             <li className="my-7 md:my-0 md:ml-8 font-sans font-normal text-base text-[#14279B]">
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-110} duration={500}>About</Link>
              </li>
             <li className="my-7 md:my-0 md:ml-8 font-sans font-normal text-base text-[#14279B]">
                <Link activeClass="active" to="service" spy={true} smooth={true} offset={-100} duration={500}>Service</Link>
              </li>
             <li className="my-7 md:my-0 md:ml-8 font-sans font-normal text-base text-[#14279B]">
                <Link className="inline-block rounded-full  bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-[#4AA3DF]  focus:outline-none focus:ring " activeClass="active" to="contact" spy={true} smooth={true} offset={-110} duration={500}>Contact Us</Link>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
