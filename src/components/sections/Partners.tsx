import React from "react";
import { motion } from "framer-motion";

export default function Partners() {
  const partners = [
    { name: "Partner 1", logo: "/assets/Image/idc-img/unnamed.png" },
    { name: "Partner 2", logo: "/assets/Image/idc-img/unnamed (1).png" },
    { name: "Partner 3", logo: "/assets/Image/idc-img/unnamed (2).png" },
    { name: "Partner 4", logo: "/assets/Image/idc-img/unnamed (3).png" },
    { name: "Partner 5", logo: "/assets/Image/idc-img/unnamed (4).png" },
    { name: "Partner 6", logo: "/assets/Image/idc-img/unnamed (5).png" },
    { name: "Partner 7", logo: "/assets/Image/idc-img/unnamed (6).png" },
    { name: "Partner 8", logo: "/assets/Image/idc-img/unnamed (7).png" },
    { name: "Partner 9", logo: "/assets/Image/idc-img/unnamed (8).png" },
    { name: "Partner 10", logo: "/assets/Image/idc-img/unnamed (9).png" },
    { name: "Partner 11", logo: "/assets/Image/idc-img/unnamed (10).png" },
    { name: "Partner 12", logo: "/assets/Image/idc-img/unnamed (11).png" },
    { name: "Partner 13", logo: "/assets/Image/idc-img/unnamed.jpg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 px-4 md:px-10 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-brand-blue uppercase tracking-tight mb-16"
        >
          Supported By Our <span className="text-brand-orange">Valued Partners</span>
        </motion.h3>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-16 items-center justify-items-center"
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="w-full flex justify-center p-4 group"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-16 md:max-h-20 w-auto object-contain  opacity-60  group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
