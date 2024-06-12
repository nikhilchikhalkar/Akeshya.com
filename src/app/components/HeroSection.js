import Image from "next/image";
import React from "react";
import hero from "../assets/hero-img.png";
import client1 from "../assets/client-1.png";
import client2 from "../assets/client-2.png";
import client3 from "../assets/client-3.png";
import client4 from "../assets/client-4.png";
import client5 from "../assets/client-5.png";
import client6 from "../assets/client-6.png";
import Link from "next/link";

function HeroSection() {
  return (
    <>
      <section className="w-[90%] mx-auto mb-24 md:mb-0 mt-20  md:py-2 lg:pt-2 flex flex-col-reverse md:flex-row overflow-hidden">
        <div className="lg:w-[55%] mx-auto md:p-14">
          <h1 data-aos='fade-up' className=" text-[24px] md:text-[48px]  text-[#14279b] font-semibold ">
            Grow your business with Akeshya
          </h1>
          <h2 data-aos='fade-up' data-aos-delay="400" className=" text-[18px] md:text-2xl text-[#484848] md:p-8">
            We are team of talented website designers, developers & digital
            marketeers
          </h2>
          <div data-aos='fade-up' data-aos-delay="800" className="mt-8">
            <Link
              className="inline-block rounded-3xl border border-indigo-600 px-10 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
              href=""
            >
              Get Started
            </Link>
          </div>
        </div>
        <div data-aos='fade-left' data-aos-delay="200" className="">
          <Image
            className="md:animate-slow-bounce p-10 md:p-0"
            src={hero}
            alt="flag"
          />
        </div>
      </section>
      <section>
        <div className=" w-full
         text-[#b0cbdc] mt-2 grid grid-cols-2 md:grid-cols-6 mb-14 bg-[#F3F9FD]">
          <div className=" my-auto grayscale hover:grayscale-0 transition-all p-2">
            <Image
              src={client1}
              width={100}
              height={100}
              className="justify-center mx-auto"
              alt="client-1"
              data-aos="zoom-in"
              
            />
          </div>
          <div className=" my-auto grayscale hover:grayscale-0 transition-all p-2">
            <Image
              src={client2}
              width={100}
              height={100}
              className="justify-center mx-auto"
              alt="client-2"
              data-aos="zoom-in"
              data-aos-delay='100'
            />
          </div>
          <div className=" my-auto grayscale hover:grayscale-0 transition-all p-2">
            <Image
              src={client3}
              width={100}
              height={100}
              className="justify-center mx-auto"
              alt="client-3"
              data-aos="zoom-in"
              data-aos-delay='200'
            />
          </div>
          <div className=" my-auto grayscale hover:grayscale-0 transition-all p-2">
            <Image
              src={client4}
              width={100}
              height={100}
              className="justify-center mx-auto"
              alt="client-4"
              data-aos="zoom-in"
              data-aos-delay='300'
            />
          </div>
          <div className=" my-auto grayscale hover:grayscale-0 transition-all p-2">
            <Image
              src={client5}
              width={100}
              height={100}
              className="justify-center mx-auto"
              alt="client-5"
              data-aos="zoom-in"
              data-aos-delay='400'
            />
          </div>
          <div className=" my-auto grayscale hover:grayscale-0 transition-all p-2">
            <Image
              src={client6}
              width={100}
              height={100}
              className="justify-center mx-auto"
              alt="client-6"
              data-aos="zoom-in"
              data-aos-delay='500'
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
