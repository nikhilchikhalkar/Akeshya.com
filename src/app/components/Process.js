import React from "react";

function Process() {
  const process = [
    {
      title: "1. Planning",
      desc: "We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.",
    },
    {
      title: "2. Design",
      desc: "We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.",
    },
    {
      title: "3. Development",
      desc: "We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.",
    },
    {
      title: "4. Marketing",
      desc: "We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.",
    },
  ];

  return (
    
      <section className="my-20">
        <div data-aos="fade-up" className="w-[70%] mx-auto">
          <div className="flex mb-2 justify-center items-center mx-auto gap-4">
            <hr className=" w-7 md:w-20 h-[2px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
            <span className="font-semibold text-[#222222] text-xl md:text-4xl">
              OUR PROCESS
            </span>
            <hr className=" w-7 md:w-20 h-[2px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
          </div>
          <div className=" text-center text-[#444444] pb-8">
            Over the years we’ve evolved a tested method for attaining
            achievement for each one of our clients.
          </div>
        </div>

        <div className=" w-[70%] gap-20 my-10 lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2">
          {process.map((item, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay="100"
                className=" group hover:bg-indigo-700  shadow-lg border rounded-xl p-8 bg-[#f6f6f6]"
              >
                <h4 className=" group-hover:text-white cursor-pointer  group-hover:bg-indigo-700  text-xl font-semibold text-center mb-2 text-[#222222] ">
                  {item.title}
                </h4>
                <p className=" group-hover:text-white group-hover:bg-indigo-700  text-[#5E5E5E]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    
  );
}

export default Process;
