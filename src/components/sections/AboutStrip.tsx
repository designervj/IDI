"use client";

import React from "react";
import { Lightbulb, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutApproach() {
  const sections = [
    {
      id: 1,
      icon: <Lightbulb className="w-8 h-8 text-brand-orange" />,
      title: "Our Approach",
      points: [
        "Capacity building",
        "Blending traditional wisdom with new technology",
        "Inclusion",
        "Community participation",
        "Stakeholder cooperation",
      ],
      image: "./assets/Image/our-apporch-img.jpg", 
      link: "/approach",
    },
    {
      id: 2,
      icon: <Target className="w-8 h-8 text-brand-orange" />,
      title: "Key Interventions",
      points: [
        "Formation and strengthening of CBOs",
        "Rainwater harvesting and dryland farming",
        "Horticulture and animal husbandry",
        "Skill development and entrepreneurship",
        "Documentation and advocacy",
      ],
      image: "./assets/Image/slider-img2.png", 
      link: "/project-overview",
    },
    {
      id: 3,
      icon: <TrendingUp className="w-8 h-8 text-brand-orange" />,
      title: "Expected Outcomes",
      points: [
        "CBOs and CSOs trained in sustainable farming",
        "Improved crop yields and farmers' income",
        "Drylands restored, enhanced nutrition",
        "Women and youth equipped with skills",
        "Policies supported and best practices shared",
      ],
      image: "./assets/Image/slider-img3.png", 
      link: "/impact",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-10 bg-gray-50 overflow-hidden">
      <div className="container-xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-brand-blue mb-4"
          >
            How We Work
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-brand-orange mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100"
            >
              {/* Top Image */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Bottom Content */}
              <div className="p-10 flex flex-col flex-grow relative">
                {/* Floating Icon */}
                <div className="absolute -top-10 right-10 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:-translate-y-2 transition-transform duration-300">
                  {section.icon}
                </div>

                <h3 className="text-2xl font-extrabold text-brand-blue mb-6 pr-12">
                  {section.title}
                </h3>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <span className="text-brand-orange text-xl leading-none mt-1 group-hover/item:scale-125 transition-transform duration-200">•</span> 
                      <span className="text-gray-600 font-medium leading-tight">{point}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={section.link}
                  className="inline-flex items-center gap-3 text-brand-blue font-black hover:text-brand-orange transition-colors group/btn mt-auto text-lg"
                >
                  <span>Learn More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}