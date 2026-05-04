"use client";
import { motion } from "framer-motion";
import React from "react";

const HistoryPage = () => {
  return (
    <div className="w-full">
      {/* 🌿 Hero Section (Same as Overview Page) */}

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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
            History
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-100/90 leading-relaxed">
            Tracing GRAVIS’ journey — from a small movement in the Thar Desert
            to a model of rural transformation across India
          </motion.p>
        </motion.div>

        {/* Decorative Bottom Wave */}
      </div>

      {/* 📜 History Content Section */}
      <section className="bg-[#F7F8F6] py-16 px-6 md:px-20 text-gray-800 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-start mb-10 text-[#008a2c]">
            Journey since 1983
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Established in 1983 by <strong>L. C. Tyagi</strong> and{" "}
            <strong>Shashi Tyagi</strong>, GRAVIS originated from their
            dedication to activism and their backgrounds in agriculture and
            education. Along with other notable activists, they founded the
            organization in Rajasthan's Thar Desert, a region grappling with
            extreme climate, chronic water scarcity, and a notable absence of
            development agencies. This challenging environment, characterized by
            over 70 drought years in the past century and summer temperatures
            soaring to 48 degrees Celsius, severely impedes agricultural
            productivity, contributing to widespread malnutrition and health
            crises among its remote, yet densely populated communities.
          </p>

          <div>
            <img
              src="assets/Image/history-imgae.png"
              alt="OverView Image"
              className=" rounded-md w-full"></img>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto my-9">
            <p className="text-lg leading-relaxed text-gray-700">
              From its humble beginnings in <strong>20 villages</strong>, GRAVIS
              has expanded its reach to over <strong>2000 villages</strong>,
              positively impacting over <strong>2.7 million individuals</strong>{" "}
              and facilitating the creation of{" "}
              <strong> 4000 CBOs</strong>. Recognizing
              the persistent vulnerabilities faced by women, children, and the
              elderly due to water and food insecurity, GRAVIS adopted a
              holistic and an integrated development strategy. This approach extends to
              regions in Uttarakhand, addressing challenges posed by floods and
              dry periods in its mountainous terrain, and to the drought-afflicted Bundelkhand region of Uttar Pradesh, with a strong
              focus on farmer empowerment, women's upliftment, and community
              health initiatives. Beyond providing disaster relief and fostering
              global knowledge exchange, GRAVIS is committed to sustainable
              development. The organization strives to ensure reliable access to
              safe drinking and irrigation water, while simultaneously
              transforming lives through comprehensive programmes in education,
              healthcare, microfinance, and dedicated advocacy for the rights of
              society's most vulnerable members.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2 justify-center mt-0 mx-auto ">
            <img
              src="assets/Image/history-imgae2.png"
              alt="Overview Image"
              className="rounded-md w-full"></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoryPage;
