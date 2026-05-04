"use client";

import { motion } from "framer-motion";
import React from "react";

const OverViewPage = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center">
        {/* Gradient + Pattern Background */}
        <div className="absolute inset-0 bg-[#123751]">
          {/* Decorative Texture */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/cubes.png')",
            }}></div>

          {/* Floating light effect */}
          {/* <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_60%_30%,rgba(255,255,255,0.15),transparent_60%)] animate-pulse-slow"></div> */}
        </div>

        {/* Foreground Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold  leading-tight drop-shadow-lg tracking-wide">
            Overview
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-gray-100/90 leading-relaxed">
            GRAVIS empowers rural India through innovation, inclusion, and
            Gandhian values — transforming communities with compassion and
            collaboration
          </p>
        </motion.div>

        {/* Decorative Bottom Wave */}
      </div>

      {/* 📜 Main Overview Content */}
      <section className="bg-[#F7F8F6] py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-10 items-center">

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#008a2c] mb-6">
              Building a resilient and self-reliant future
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Founded in 1983,{" "}
              <strong>Gramin Vikas Vigyan Samiti (GRAVIS) </strong> is a
              distinguished Non-Governmental Organization dedicated to rural
              development in the Indian states of Rajasthan, Uttarakhand, and Uttar Pradesh. GRAVIS pioneers innovative, need-based development models
              through strategic partnerships with governmental bodies,
              non-profits, corporations, and Community-based Organizations (CBOs).
            </p>

            <div>
              <img
                src="assets/Image/overview-imgae2.png"
                alt="GRAVIS team"
                className="object-cover w-full rounded-2xl"
              />
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mt-10">
              Its efforts have positively impacted approximately{" "}
              <strong>2.7 million individuals</strong> facing severe poverty and
              health challenges. By integrating traditional knowledge with
              modern science and adhering to integrated development principles,
              GRAVIS addresses critical Sustainable Development Goals through
              interventions in health, education, water security, agriculture,
              and advocacy.
            </p>

         
            <p className="text-gray-700 text-lg leading-relaxed mt-2">
              Upholding <strong>Gandhian ideals</strong> of Sarvodaya and Gram
              Swaraj, GRAVIS empowers rural communities to take ownership of
              their environment and institutions, enhancing livelihoods and
              health in drought-affected desert communities, with women and
              older people integral to design and implementation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative">
            <div className=" overflow-hidden gap-2 flex flex-wrap">
              <img
                src="assets/Image/overview-imgae1.png"
                alt="GRAVIS team"
                className="object-cover w-full  rounded-2xl"
              />
            </div>

            {/* Decorative green blur */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-300 rounded-full blur-3xl opacity-40"></div>

            <p className="text-gray-700 text-lg leading-relaxed md:px-0 px-0 py-4 mt-3">
              GRAVIS systematically documents its learning and experiences
              through robust research and advocacy, including surveys, best
              practices compilation, and evidence-based studies, to maximize
              impact and promote replication.
            </p>
          </motion.div>
        </div>

        {/* 💡 Bottom Highlight Box */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-8 text-center border border-green-100"
        >
          <h3 className="text-2xl font-semibold text-green-700 mb-3">
            Knowledge • Research • Advocacy
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            GRAVIS systematically documents its learning and experiences through robust
            research and advocacy — including surveys, best practices, and
            evidence-based studies — to maximize impact and promote replication across
            India and beyond.
          </p>
        </motion.div> */}
        {/* <div className="flex gap-2 justify-center mt-6 mx-auto max-w-6xl">
          <img src="assets/Image/image1.png" alt="OverView Image" className="w-1/2 rounded-md"></img>
          <img src="assets/Image/image2.png" alt="Overview Image" className="w-1/2 rounded-md"></img>

        </div> */}

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-8 text-center border border-green-100"
        >
       
          <p className="text-gray-700 text-xl leading-relaxed md:px-12 px-6 py-4">
          GRAVIS systematically documents its learning and experiences through robust research 
          and advocacy, including surveys, best practices compilation, and evidence-based studies,
           to maximize impact and promote replication.

          </p>
        </motion.div> */}
      </section>
    </div>
  );
};

export default OverViewPage;
