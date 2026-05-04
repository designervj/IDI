"use client";
import { motion } from "framer-motion";
import React from "react";

const ObjectivesPage = () => {
  return (
    <div className="bg-[#F7F8F6] text-gray-800">
      {/* ---------- Hero Section ---------- */}
      <div className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center bg-[#123751]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
              Objectives
            </h1>
          </motion.div>
        </div>
      </div>




      {/* ---------- Content Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg leading-relaxed text-gray-700 mb-8">
          The <strong>Inclusive Development Initiative (IDI)</strong> project is driven by a clear set of
          objectives, all geared towards fostering sustainable development and
          economic empowerment in the drought-prone regions of Rajasthan. Our
          overarching goal is to contribute to strengthened agriculture-based
          livelihoods (ABL), which in turn leads to enhanced economic well-being
          through gender equality and the empowerment of youth.
        </motion.p>


          <div className="my-10">
          <img
            src="./assets/Image/object-imges1.jpg"
            alt="Project OverView Image"
            className="rounded-md shadow-lg "></img>
        </div>

        {/* Objectives List */}
        <div className="space-y-8">
          {[
            {
              title:
                "1. Enhance participation of women and youth in agriculture-based livelihoods",
              desc: "The core objective is to significantly increase the involvement and leadership of women and youth in all aspects of ABL. This will be achieved through targeted capacity building, providing them with essential skills, knowledge, and resources to thrive in agricultural and allied sectors.",

            },
            {
              title:
                "2. Improve agricultural productivity and resource management",
              desc: "The project focuses on boosting agricultural output and ensuring efficient use of natural resources. This includes implementing improved rainwater harvesting structures like khadins, promoting sustainable farming practices, and encouraging crop diversification to enhance food and fodder security in the region.",
            },
            {
              title: "3. Strengthen community resilience and adaptive capacity",
              desc: "By developing Arid Horticultural Units (AHUs) and silvipasture units, we aim to build the resilience of communities against climate variability and resource scarcity. These initiatives provide alternative livelihood options and secure access to essential resources for both people and livestock.",
            },
            {
              title: "4. Foster entrepreneurship and market linkages",
              desc: "We are committed to nurturing entrepreneurial ventures among women and youth. By facilitating access to finance, connecting them with markets, and supporting the establishment of food processing and other value-added units, we aim to create sustainable income-generating opportunities.",
            },
            {
              title: "5. Facilitate learning, knowledge sharing, and advocacy",
              desc: " A vital objective is to document the lessons learned and best practices throughout the project's implementation. Through comprehensive learning documents and advocacy briefs, we aim to influence policy decisions, promote the replication of successful ABL models, and contribute to broader development dialogues.",
            },
            {
              title: "6. Promote gender equality and youth empowerment",
              desc: " Underpinning all project activities is a strong commitment to gender equality and youth empowerment. We work to dismantle barriers, provide equal opportunities, and ensure that women and young people are active participants and beneficiaries in the region's agricultural transformation.",
            },
          ].map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-700 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-[#008a2c] mb-3">
                {obj.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{obj.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-lg leading-relaxed text-gray-700">
          Through these interconnected objectives, the <strong>Inclusive Development Initiative </strong> 

           project strives to create a replicable model for sustainable economic
          empowerment, building adaptive and just communities in the Thar Desert
          and beyond.
        </motion.p>

      
      </section>
    </div>
  );
};

export default ObjectivesPage;
