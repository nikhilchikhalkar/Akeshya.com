'use client'
import Image from "next/image";
import Link from "next/link";
import countimg from "../assets/counts-img.svg";
import { RiCheckDoubleLine } from "react-icons/ri";
import { CiFaceSmile } from "react-icons/ci";
import { BsJournalRichtext } from "react-icons/bs";
import { GoClock } from "react-icons/go";
import { BsGlobe2 } from "react-icons/bs";
import CountUp from "react-countup";


function About() {
  
  return (
    <>
      <section>
        <div className="pb-20 " >
          <div data-aos="fade-up" className="flex mb-2 mx-auto justify-center items-center  gap-4">
            <hr className=" w-10 md:w-20 h-[2px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
            <span className="font-semibold text-3xl md:text-4xl">About Us</span>
            <hr className=" w-10 md:w-20 h-[2px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
          </div>

          <div className="flex flex-col lg:flex-row mx-8 lg:w-[90%] lg:mx-auto text-[#444444] ">
            <div data-aos='fade-up' data-aos-delay="150" className=" lg:w-[48%] mx-auto ">
              <p className="w-[90%] mx-auto mb-2">
                We are Akeshya, a firm that specializes in web design and
                marketing. We help transform ideas into reality with a team of
                passionate graphic designers, web developers, and seasoned
                marketing advisors.
              </p>
              <ul>
                <li className="flex mb-2 ">
                  <RiCheckDoubleLine className="mx-2 text-indigo-600 text-xl" />
                  <span>
                    {" "}
                    We started with a simple idea: do what is best for the
                    client.{" "}
                  </span>
                </li>
                <li className="flex mb-2">
                  <RiCheckDoubleLine className=" mx-2 text-indigo-600 text-2xl" />
                  <span>
                    {" "}
                    Our methodical and individual approach to each project
                    delivers the finest possible results for your media.{" "}
                  </span>
                </li>
                <li className="flex mb-2">
                  <RiCheckDoubleLine className="mx-2 text-indigo-600 text-3xl" />
                  <span>
                    {" "}
                    Our day-to-day work is to solve your problems utilising the
                    most up-to-date, practical adaptive technology, and we have
                    a lot of fun doing it.{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div data-aos='fade-up' data-aos-delay="300" className="lg:w-[48%] px-2 pt-6 lg:pt-0 pb-6 ">
              <p>
                We're professional, but we're also friendly, and we'll always
                pay attention to your concerns. We expect to work with
                innovative people that have an open mind and are dedicated to
                making every idea a reality. We want to hear from you if you're
                interested in SEO, have Web Development ideas, or require a
                graphic designer who can match your goals.
              </p>
              <div className="mt-4">
                <Link
                  className="inline-block rounded-3xl border border-indigo-600 px-10 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                  href=""
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[90%] mx-auto flex flex-col xl:flex-row pb-14 ">
          <div data-aos='fade-right' data-aos-delay="150" className=" xl:w-[38%]  mx-auto  items-center my-auto  justify-center">
            <Image src={countimg} className="lg:pr-10 lg:py-10" alt="count img" />
          </div>
          <div data-aos='fade-left' data-aos-delay="300" className="xl:w-[50%] w-[80%] mx-auto  justify-center my-auto ">
            <div className="grid grid-cols-1  md:grid-cols-2">

              <div className="p-5 gap-4 ">
                <div className="flex gap-5">      
                {/* icon */}
                <CiFaceSmile size={42} className=" text-indigo-500" />
                <span className="text-4xl px-2 font-semibold">{/* number */}
                <CountUp start={0}
                 end={3835039}
                 delay={0}
                 duration={2.75} 
                />
                   </span>
                </div>
                <p className="pt-3 ml-12">
                  <strong>Organic Reach</strong>
                  (Global)
                </p>
              </div>

              <div className="py-5">
                <div className="flex gap-2">      
                {/* icon */}
                <BsJournalRichtext size={40} className="text-indigo-500" />
                <span className="text-4xl font-semibold">{/* number */}
                <CountUp start={0}
                 end={85}
                 delay={0}
                 duration={2.75}
                />
                   </span>
                </div>
                <p className="pt-3 ml-12">
                  <strong>Campaigns</strong>
                </p>
              </div>


              <div className="py-5">
                <div className="flex gap-2">      
                {/* icon */}
                <GoClock size={40} className="text-indigo-500" />
                <span className="text-4xl font-semibold">{/* number */} 
                <CountUp start={0}
                 end={14081}
                 delay={0}
                 duration={2.75}
                />
                  </span>
                </div>
                <p className="pt-3 ml-12">
                  <strong>Watch Hours</strong>
                  (Asia)
                </p>
              </div>


              <div className="py-5">
                <div className="flex gap-2">      
                {/* icon */}
                <BsGlobe2 size={40} className="text-indigo-500" />
                <span className="text-4xl font-semibold">{/* number */}
                <CountUp start={0}
                 end={17}
                 delay={0}
                 duration={2.75}
                />
                  </span>
                </div>
                <p className="pt-3 ml-12">
                  <strong>Excellent CTR %</strong>
                  (Asia)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
