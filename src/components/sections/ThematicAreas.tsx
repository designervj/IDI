import React from "react";
import { Leaf, Droplets, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function ThematicAreas() {
  const areas = [
    {
      id: 1,
      icon: <Leaf className="w-10 h-10 text-brand-orange" />,
      title: "Social Investment Design",
      description: "Designing inclusive, risk-informed social investment portfolios that move beyond fragmented projects to long-term strategies.",
    },
    {
      id: 2,
      icon: <Droplets className="w-10 h-10 text-brand-orange" />,
      title: "Framework Knowledge Transfer",
      description: "Equipping leaders with actionable understanding of SDGs, ESG, and climate resilience frameworks.",
    },
    {
      id: 3,
      icon: <Users className="w-10 h-10 text-brand-orange" />,
      title: "Ecosystem Resilience",
      description: "Designing and guiding social investments that actively strengthen local ecosystems and enhance livelihoods.",
    },
    {
      id: 4,
      icon: <ShieldCheck className="w-10 h-10 text-brand-orange" />,
      title: "Leadership for Sustainable Impact",
      description: "Integrating ethics, resilience, and inclusive development into leadership education to prepare future leaders.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 px-4 md:px-10 bg-brand-blue text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-brand-orange font-bold text-sm mb-4 block"
          >
            Our Value Proposition
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            What We Enable
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-brand-orange mx-auto"
          ></motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {areas.map((area) => (
            <motion.div 
              key={area.id}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[1rem] hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg ">
                {area.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
              <p className="text-gray-300 leading-relaxed text-md">
                {area.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
