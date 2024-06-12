import React from "react";
import {
  RiWindowLine,
  RiCodeBoxLine,
  RiCreativeCommonsByLine,
  RiPlayCircleLine,
  RiSearchEyeLine,
  RiTodoLine,
  RiMapPinLine,
  RiBarChartGroupedFill,
  RiContactsBookLine,
  RiDiscLine,
  RiCalendarEventLine,
  RiAdvertisementFill,
} from "react-icons/ri";

function Feature() {
  return (
    <>
      <section>
        <div className="w-[90%] mx-auto my-12">
          <div data-aos='fade-up'>
              
          <div className="flex mb-2 justify-center items-center mx-auto gap-4">
            <hr className=" w-10 md:w-20 h-[2px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
            <span className="font-semibold text-[#222222] text-3xl md:text-4xl">
              OUR CORE FEATURES
            </span>
            <hr className=" w-10 md:w-20 h-[2px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
          </div>
          <div className=" text-center text-[#444444] pb-8">
            Akeshya is a forward-thinking and intelligent design firm that is
            technically and creatively capable of transforming your brand into
            its best digital self. Our approach to design and development
            results in compelling, engaging branding and immersive digital
            experiences that provide a value for money.
          </div>
          </div>

          <div data-aos='fade-up' data-aos-delay='300' className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div className=" bg-[#f6f6f6] hover:bg-[#e7f2fa] ">
              <div className="flex gap-2 p-5">
                {/* icon */}
                <RiWindowLine size={30} className="text-yellow-400" />
                <h3 className="justify-center my-auto items-center hover:text-indigo-700 text-[#222] text-base font-semibold ">
                  Web design
                </h3>
              </div>
            </div>

            <div className=" bg-[#f6f6f6] hover:bg-[#e7f2fa] ">
              <div className="flex gap-2 p-5">
                {/* icon */}
                <RiCodeBoxLine size={30} className="text-indigo-600" />
                <h3 className="justify-center my-auto items-center hover:text-indigo-700 text-[#222] text-base font-semibold ">
                  Development
                </h3>
              </div>
            </div>

            <div className=" bg-[#f6f6f6] hover:bg-[#e7f2fa] ">
              <div className="flex gap-2 p-5">
                {/* icon */}
                <RiCreativeCommonsByLine size={30} className="text-[#d63384]" />
                <h3 className="justify-center my-auto items-center hover:text-indigo-700 text-[#222] text-base font-semibold ">
                  Branding
                </h3>
              </div>
            </div>

            <div className=" bg-[#f6f6f6] hover:bg-[#e7f2fa] ">
              <div className="flex gap-2 p-5">
                {/* icon */}
                <RiPlayCircleLine size={30} className="text-[#cf508f]" />
                <h3 className="justify-center my-auto items-center hover:text-indigo-700 text-[#222] text-base font-semibold ">
                  Media buying
                </h3>
              </div>
            </div>

            <div className=" bg-[#f6f6f6] hover:bg-[#e7f2fa] ">
              <div className="flex gap-2 p-5">
                {/* icon */}
                <RiSearchEyeLine size={30} className="text-[#0dcaf0]" />
                <h3
                  className="justify-center my-auto
                 items-center hover:text-indigo-700
                text-[#222] text-base font-semibold "
                >
                  Search engine
                </h3>
              </div>
            </div>

            <div className=" bg-[#f6f6f6] hover:bg-[#e7f2fa] ">
              <div className="flex gap-2 p-5">
                {/* icon */}
                <RiTodoLine size={30} className="text-orange-400" />
                <h3
                  className="justify-center my-auto
                 items-center hover:text-indigo-700
                text-[#222] text-base font-semibold "
                >
                  Brand strategy
                </h3>
              </div>
            </div>

            <div className=" bg-[#f6f6f6] hover:bg-[#e7f2fa] ">
              <div className="flex gap-2 p-5">
                {/* icon */}
                <RiMapPinLine size={30} className="text-[#dbce11]" />
                <h3
                  className="justify-center my-auto
                 items-center hover:text-indigo-700
                text-[#222] text-base font-semibold "
                >
                  {" "}
                  Local search marketing
                </h3>
              </div>
            </div>

            <div className=" bg-[#f6f6f6] hover:bg-[#e7f2fa] ">
              <div className="flex gap-2 p-5">
                {/* icon */}
                <RiBarChartGroupedFill size={30} className="text-indigo-600" />
                <h3
                  className="justify-center my-auto
                 items-center hover:text-indigo-700
                text-[#222] text-base font-semibold "
                >
                  {" "}
                  Lead Tracking & Management
                </h3>
              </div>
            </div>

            <div className=" bg-[#f6f6f6] hover:bg-[#e7f2fa] ">
              <div className="flex gap-2 p-5">
                {/* icon */}
                <RiContactsBookLine size={30} className="text-[#b2904f]" />
                <h3
                  className="justify-center my-auto
                 items-center hover:text-indigo-700
                text-[#222] text-base font-semibold "
                >
                  {" "}
                  Contact management{" "}
                </h3>
              </div>
            </div>

            <div className=" bg-[#f6f6f6] hover:bg-[#e7f2fa] ">
              <div className="flex gap-2 p-5">
                {/* icon */}
                <RiDiscLine size={30} className="text-[#b20969]" />
                <h3
                  className="justify-center my-auto
                 items-center hover:text-indigo-700
                text-[#222] text-base font-semibold "
                >
                  {" "}
                  Media management{" "}
                </h3>
              </div>
            </div>

            <div className=" bg-[#f6f6f6] hover:bg-[#e7f2fa] ">
              <div className="flex gap-2 p-5">
                {/* icon */}
                <RiCalendarEventLine size={30} className="text-[#ff5828]" />
                <h3
                  className="justify-center my-auto
                 items-center hover:text-indigo-700
                text-[#222] text-base font-semibold "
                >
                  {" "}
                  Social scheduling{" "}
                </h3>
              </div>
            </div>

            <div className=" bg-[#f6f6f6] hover:bg-[#e7f2fa] ">
              <div className="flex gap-2 p-5">
                {/* icon */}
                <RiAdvertisementFill size={30} className="text-[#29cc61]" />
                <h3
                  className="justify-center my-auto
                 items-center hover:text-indigo-700
                text-[#222] text-base font-semibold "
                >
                  {" "}
                  Ad retargeting{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
