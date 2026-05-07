import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Shield } from "lucide-react";

export default function MissionHighlight() {
  const cards = [
    {
      title: "Our Mission",
      description: "To empower rural communities through sustainable agriculture and capacity building.",
      icon: <Target className="w-8 h-8 text-brand-orange" />,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      delay: 0.1
    },
    {
      title: "Our Vision",
      description: "A resilient and inclusive society where every community is self-reliant and thriving.",
      icon: <Eye className="w-8 h-8 text-brand-blue" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      delay: 0.2
    },
    {
      title: "Our Values",
      description: "Integrity, community participation, and blending tradition with modern innovation.",
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      bgColor: "bg-teal-50",
      borderColor: "border-teal-100",
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-brand-blue mb-4"
          >
            What Drives Us
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-brand-orange mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: card.delay }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[20px] border border-gray-100 flex flex-col items-center text-center group transition-all duration-300"
            >
              <div className={`w-20 h-20 ${card.bgColor} ${card.borderColor} border rounded-full flex items-center justify-center mb-8`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
