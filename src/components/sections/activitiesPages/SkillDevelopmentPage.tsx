"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const SkillDevelopmentPage = () => {
  return (
    <>
      {/* ---------- Hero Section ---------- */}
      <div className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center bg-[#123751]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
             Skill Development and Entrepreneurship
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-100/90 leading-relaxed">
             Empowering women and youth with financial and digital skills to foster enterprise development for income generation
            </motion.p>
          </motion.div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-10 mb-12 leading-relaxed">
        {/* ---------- Image + Paragraph 1 ---------- */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-14 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="./assets/Image/First-Image.jpg"
            alt="Documentation and Advocacy Workshop"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <div>
            <p className="text-gray-700 mb-3 text-lg text-justify">
              The project is designed to foster enterprise development,
              particularly among women and youth from Community-Based
              Organizations (CBOs), by equipping 2,400 individuals with
              essential financial and digital skills. This comprehensive support
              aims to provide them with the knowledge and networks necessary to
              access capital, establish marketing linkages, and ultimately
              generate income through entrepreneurial ventures. A key focus is
              on setting up small-scale food processing units, utilizing local
              produce from agriculture, horticulture, or livestock. These units
              will transform raw agricultural products such as spices, pickles,
              and milk into value-added goods to be sold in local markets,
              thereby strengthening the rural economy.
            </p>
          </div>
        </motion.div>

        {/* ---------- Image + Paragraph 2 ---------- */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-10 items-center mb-10">
          <div>
            <p className="text-gray-700 text-lg text-justify">
              To facilitate this, 160 CBOs will receive development support in
              the form of supplies and furnishings (e.g., carpets, tables,
              chairs, file cabinets, solar lights) to aid their functioning and
              record-keeping, with each group developing an action plan approved
              by Community Project Monitoring Committees (CPMC). Furthermore,
              income-generating support, including materials and supplies, will
              be provided to 100 trained women and youth who are identified
              based on predefined shortlisting criteria. These beneficiaries
              will develop clear action plans for their food processing units,
              which will be evaluated and approved by CPMC members. Technical
              trainings will be provided on digital literacy, financial aspects
              (including phone banking, loan access, and e-commerce), and
              marketing linkages, empowering CBO members to understand market
              dynamics and create effective sales channels. A marketing
              consultant will offer additional support to beneficiaries to
              enhance market access. Moreover, a dedicated Training Centre to
              strengthen rural Livelihoods (TCL) will be established, serving as
              a long-term asset for continuous training and capacity building as
              well as research for local women, youth, and CSOs over the
              project's duration.
            </p>
          </div>
          <img
            src="./assets/Image/skill-development-image.jpg"
            alt="Field Visit and Advocacy Event"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </motion.div>
      </section>
    </>
  );
};

export default SkillDevelopmentPage;
