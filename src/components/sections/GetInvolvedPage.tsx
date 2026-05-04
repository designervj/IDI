import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import React from "react";
import { TfiWorld } from "react-icons/tfi";
import SablRajasthanMap from "./SablRajasthanMap";

const GetInvolvedPage = () => {
  return (
    <>
      <div className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center bg-[#123751]">
        <div className="max-w-xl ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
              Get Involved
            </h1>

            <p className="text-white text-lg leading-relaxed pt-4">
              We would love to hear from you. To know more about the EU funded
              SABL project or our other initiatives, write to us.
            </p>
          </motion.div>
        </div>
      </div>

      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./assets/Image/image (7).png')", // ⭐ yaha tumhari image ka path
        }}>
        {/* Overlay */}
        <div className="w-full min-h-screen bg-black/40 flex items-center py-16 px-4">
          <div className="max-w-5xl w-full mx-auto bg-white/60 rounded-xl shadow-xl p-8 md:p-10">

        
               

                <div className="flex justify-between  flex-wrap gap-10 my-12 md:pe-12">
                  {/* Email */}
                  <div className="flex flex-col justify-center text-center w-full sm:w-[30%] gap-2">
                    <span className="bg-white p-3 mx-auto rounded-full w-fit">
                      <Mail className="w-5 h-5 text-green-600" />
                    </span>
                    <h4 className="text-gray-900 font-semibold text-lg mt-1">
                      Email
                    </h4>
                    <p className="text-gray-700 font-medium text-base hover:text-[#000]">
                      <a href="mailto:email@gravis.org.in">email@gravis.org.in</a>
                    </p>
                  </div>

                  {/* Website */}
                  <div className="flex flex-col w-full text-center sm:w-[30%] gap-2">
                    <span className="bg-white p-3 mx-auto rounded-full w-fit">
                      <TfiWorld className="w-5 h-5 text-green-600" />
                    </span>
                    <p className="text-gray-900 font-semibold text-lg mt-1">
                      Website
                    </p>
                    <a
                      href="https://www.sabl.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 font-medium text-base hover:text-[#000]">
                      www.sabl.org.in
                    </a>
                  </div>

                  {/* Address */}
                  <div className="flex flex-col w-full text-center sm:w-[30%] gap-2">
                    <span className="bg-white p-3 mx-auto rounded-full w-fit">
                      <TfiWorld className="w-5 h-5 text-green-600" />
                    </span>
                    <p className="text-gray-900 font-semibold text-lg mt-1">
                      Address
                    </p>
                    <p className="text-gray-700 font-medium text-sm leading-5">
                      3/437, 458, M.M Colony, Pal Road, Jodhpur – 342008,
                      Rajasthan, India
                    </p>
                  </div>
                </div>
              

            <SablRajasthanMap />

            {/* LAYOUT: LEFT INFO + RIGHT FORM */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-12 mt-10">
              {/* LEFT SIDE (Address removed, only Email + Website allowed) */}
             

              {/* RIGHT SIDE — FORM SECTION */}
              {/* <div className="bg-gray-50 p-6 rounded-md ">
              <form className="space-y-4 ">

                <div>
                  <label className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    placeholder="Write your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-md text-lg font-medium hover:bg-green-700 transition"
                >
                  Send Message
                </button>

              </form>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInvolvedPage;
