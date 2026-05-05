import React from "react";
import { motion } from "framer-motion";
import { Users, Droplets, BookOpen, Sun } from "lucide-react";

export default function ImpactStats() {
  const stats = [
    {
      id: 1,
      icon: <Users className="w-10 h-10 text-white" />,
      value: "50,000+",
      label: "Farmers Supported",
    },
    {
      id: 2,
      icon: <Droplets className="w-10 h-10 text-white" />,
      value: "1,200+",
      label: "Water Structures Built",
    },
    {
      id: 3,
      icon: <BookOpen className="w-10 h-10 text-white" />,
      value: "150+",
      label: "Training Programs",
    },
    {
      id: 4,
      icon: <Sun className="w-10 h-10 text-white" />,
      value: "200+",
      label: "Villages Reached",
    },
  ];


  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-brand-blue mb-6"
          >
            Our Impact in <span className="text-brand-orange">Numbers</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-32 h-1.5 bg-brand-orange mx-auto mb-8 rounded-full"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Working hand-in-hand with communities to create measurable, sustainable change across the Thar Desert and beyond.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-10 rounded-[2.5rem] bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 group"
            >
              <div className="w-24 h-24 bg-brand-orange rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-brand-orange/20 group-hover:rotate-6 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="text-5xl md:text-6xl font-semibold mb-4 text-brand-blue tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-gray-500 font-semibold tracking-widest uppercase text-sm md:text-base text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
