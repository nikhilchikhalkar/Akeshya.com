import Link from "next/link";
import React, { useRef, useState } from "react";
import { RiMapPinLine, RiMailSendLine, RiPhoneLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";
function Contact() {
  const [state, setState] = useState({ loading: false });

  const form = useRef();

  const sendEmail = (e) => {
    setState({ loading: true });
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8oyhd9e",
        "template_w4dj6qi",
        form.current,
        "Lq0DewM02VfqpliW4",
      )
      .then(
        (result) => {
          form.current.reset();
          setState({ loading: false });
          toast(
            "Thank you!Your message has been successfully sent. We will contact you very soon!"
          );
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section>
        <div className="w-[90%] mb-20  mx-auto">
          <div
            data-aos="fade-up"
            className="flex mb-2 justify-center items-center mx-auto gap-4"
          >
            <hr className=" w-10 md:w-20 h-[2px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
            <span className="font-semibold text-[#222222] text-3xl md:text-4xl">
              CONTACT US
            </span>
            <hr className=" w-10 md:w-20 h-[2px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
          </div>

          <div className="grid lg:grid-cols-2 pt-10">
            <div className="grid lg:grid-cols-2">
              <div data-aos="fade-up" data-aos-delay="100">
                <h2 className="text-indigo-700 font-semibold text-3xl">
                  Akeshya
                </h2>
                <p className="text-[#888] mb-16 text-sm">
                  Designers, developers & marketeers capable of delivering
                  solutions according to your needs,
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <div className="flex pb-3 mb-4 ">
                  <RiMapPinLine size={45} className=" pb-4 text-indigo-600" />
                  <p className="justify-start text-sm text-[#444] ">
                    26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh
                    524004
                  </p>
                </div>

                <div className="flex pb-3 ">
                  <RiMailSendLine size={45} className=" pb-4 text-indigo-600" />
                  <p className="justify-start text-sm text-[#444] ">
                    {" "}
                    <Link href="mailto:info@akeshya.com">
                      info@akeshya.com
                    </Link>{" "}
                  </p>
                </div>

                <div className="flex pb-3 ">
                  <RiPhoneLine size={45} className=" pb-4 text-indigo-600" />
                  <p className="justify-start text-sm text-[#444]  ">
                    {" "}
                    <Link href="tel:+91 94942 40922">+91 94942 40922</Link>{" "}
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              {/* contact form */}
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-4 md:px-10 "
              >
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    required
                    className="w-full rounded-lg border border-gray-400 p-2 md:p-3 text-sm"
                    placeholder="Your Name"
                    type="text"
                    id="name"
                    name="from_name"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    required
                    className="w-full rounded-lg border border-gray-400 p-2 md:p-3 text-sm"
                    placeholder="Your Email"
                    type="email"
                    id="email"
                    name="from_email"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    required
                    className="w-full rounded-lg border border-gray-400 p-2 md:p-3 text-sm"
                    placeholder="Subject"
                    type="text"
                    id="subject"
                    name="from_subject"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    required
                    className="w-full rounded-lg border border-gray-400 p-2 md:p-3 text-sm"
                    placeholder="Message"
                    rows="5"
                    id="message"
                    name="from_message"
                  ></textarea>
                </div>

                <div className="mt-4 text-center mx-auto ">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-full justify-center mx-auto bg-indigo-800 px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                  <div className="pt-4 ">{state.loading && <Spinner />}</div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </section>
    </>
  );
}

export default Contact;
