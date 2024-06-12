import React from "react";
import { FaDribbble } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { BiTachometer } from "react-icons/bi";

function Services() {
  return (
    <>
      <section>
        <div data-aos="fade-up" className="w-[80%] mx-auto        " >
          <div className="flex mb-2 justify-center items-center mx-auto gap-4">
            <hr className=" w-10 md:w-20 h-[2px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
            <span className="font-semibold text-3xl md:text-4xl">Services</span>
            <hr className=" w-10 md:w-20 h-[2px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
          </div>
          <div className="text-center text-[#444444] pb-8">
            Akeshya will serve as your consultant and development partner to
            help you turn your idea into a reality.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 w-[75%] gap-8 mx-auto">

          <div data-aos='fade-up' data-aos-delay='100'
            className="border group hover:transition-all hover:duration-500  hover:bg-indigo-700  p-4 rounded-xl shadow-lg relative
        hover:ease-in-out
        shadow-gray-300"
          >
            {/* <div className="absolute top-0 right-0 w-12 h-14 bg-[#E1F0FA] rounded-bl-full"></div> */}

            <div className="absolute top-0 right-0 w-14 h-16 bg-indigo-200 rounded-bl-full  group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out group-hover:w-full group-hover:h-full  group-hover:rounded-xl group-hover:text-white  hover:bg-indigo-700 group-hover:bg-transparent"></div>

            <div className="bg-indigo-700 m-4 rounded-full w-fit p-3 group-hover:bg-white">
              <FaDribbble
                size={30}
                className="text-white group-hover:text-indigo-600"
              />
            </div>
            <h3 className="ml-4 font-bold text-lg group-hover:text-white">
              Design
            </h3>
            <p className="group-hover:text-white text-[#444444] text-base p-4 mr-2">
              Our web design services can assist you in reclaiming your
              company&apos;s online image. Your business will flourish on the
              Internet thanks to the combination of style and technology we
              provide, as well as our experience.
            </p>
          </div>

          <div data-aos='fade-up' data-aos-delay='200'
            className="border group hover:transition-all hover:duration-500  hover:bg-indigo-700  p-4 rounded-xl shadow-lg relative
        hover:ease-in-out
        shadow-gray-300"
          >
            <div className="absolute top-0 right-0 w-14 h-16 bg-indigo-200 rounded-bl-full  group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out group-hover:w-full group-hover:h-full  group-hover:rounded-xl group-hover:text-white  hover:bg-indigo-700 group-hover:bg-transparent"></div>

            <div className="bg-indigo-700 m-4 rounded-full w-fit p-3 group-hover:bg-white">
              <FiFileText
                size={30}
                className="text-white group-hover:text-indigo-600"
              />
            </div>
            <h3 className="ml-4 font-bold text-lg group-hover:text-white">
              Development
            </h3>
            <p className="group-hover:text-white text-[#444444] text-base p-4 mr-2">
            Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools. 
            </p>
          </div>

          <div data-aos='fade-up' data-aos-delay='300'
            className="border group hover:transition-all hover:duration-500  hover:bg-indigo-700  p-4 rounded-xl shadow-lg relative
        hover:ease-in-out
        shadow-gray-300"
          >
            <div className="absolute top-0 right-0 w-14 h-16 bg-indigo-200 rounded-bl-full  group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out group-hover:w-full group-hover:h-full  group-hover:rounded-xl group-hover:text-white  hover:bg-indigo-700 group-hover:bg-transparent"></div>

            <div className="bg-indigo-700 m-4 rounded-full w-fit p-3 group-hover:bg-white">
              <BiWorld
                size={30}
                className="text-white group-hover:text-indigo-600"
              />
            </div>
            <h3 className="ml-4 font-bold text-lg group-hover:text-white">
            Marketing
            </h3>
            <p className="group-hover:text-white text-[#444444] text-base p-4 mr-2">
            A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.
            </p>
          </div>

          <div data-aos='fade-up' data-aos-delay='400'
            className="border group hover:transition-all hover:duration-500  hover:bg-indigo-700  p-4 rounded-xl shadow-lg relative
        hover:ease-in-out
        shadow-gray-300"
          >
            <div className="absolute top-0 right-0 w-14 h-16 bg-indigo-200 rounded-bl-full  group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out group-hover:w-full group-hover:h-full  group-hover:rounded-xl group-hover:text-white  hover:bg-indigo-700 group-hover:bg-transparent"></div>

            <div className="bg-indigo-700 m-4 rounded-full w-fit p-3 group-hover:bg-white">
              <BiTachometer
                size={30}
                className="text-white group-hover:text-indigo-600"
              />
            </div>
            <h3 className="ml-4 font-bold text-lg group-hover:text-white">
            Support
            </h3>
            <p className="group-hover:text-white text-[#444444] text-base p-4 mr-2">
            Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we&apos;ve created a system to ensure that we&apos;re always available. 
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
