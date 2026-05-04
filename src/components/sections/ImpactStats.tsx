import React from "react";
import { motion } from "framer-motion";
import { Users, Droplets, BookOpen, Sun } from "lucide-react";

export default function ImpactStats() {
  const stats = [
    {
      id: 1,
      icon: <Users className="w-8 h-8 text-white" />,
      value: "50,000+",
      label: "Farmers Supported",
    },
    {
      id: 2,
      icon: <Droplets className="w-8 h-8 text-white" />,
      value: "1,200+",
      label: "Water Structures Built",
    },
    {
      id: 3,
      icon: <BookOpen className="w-8 h-8 text-white" />,
      value: "150+",
      label: "Training Programs",
    },
    {
      id: 4,
      icon: <Sun className="w-8 h-8 text-white" />,
      value: "200+",
      label: "Villages Reached",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue mb-4">Our Impact</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Working hand-in-hand with communities to create measurable, sustainable change across the Thar Desert and beyond.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-6 shadow-md shadow-brand-orange/20">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-3 text-brand-blue">
                {stat.value}
              </h3>
              <p className="text-gray-600 font-semibold tracking-wide uppercase text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
