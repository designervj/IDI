import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Shield, ArrowRight } from "lucide-react";

export default function MissionHighlight() {
  const cards = [
    {
      title: "Our Mission",
      description: "To act as a strategic bridge, aligning capital, leadership capability, and on-ground systems around inclusive design.",
      icon: <Target className="w-8 h-8 text-white" />,
      image: "/assets/Image/home-approach/Option 1.JPG",
      delay: 0.1
    },
    {
      title: "Our Vision",
      description: "Enable transformative change that is equitable, sustained, and rooted in people’s lived realities.",
      icon: <Eye className="w-8 h-8 text-white" />,
      image: "/assets/Image/home-approach/Option 3.jpg",
      delay: 0.2
    },
    {
      title: "Our Values",
      description: "Ethical leadership, inclusive decision-making, and grounding strategies in community realities.",
      icon: <Shield className="w-8 h-8 text-white" />,
      image: "/assets/Image/home-slider-images/hero-slider-imges1.png",
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-blue mb-4"
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: card.delay }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
            >
              {/* Image Section with Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Brand color overlay similar to the HEDCON green overlay */}
                <div className="absolute inset-0 bg-brand-blue/60 mix-blend-multiply group-hover:bg-brand-blue/40 transition-colors duration-500"></div>
                
                {/* Floating Icon */}
                <div className="absolute bottom-4 left-6 z-10 drop-shadow-md">
                  {card.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col flex-grow bg-white">
                <h3 className="text-xl font-bold text-brand-blue mb-4 uppercase tracking-wide">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {card.description}
                </p>
                
                <span className="text-brand-orange font-bold text-sm uppercase tracking-wider inline-flex items-center gap-2 group-hover:text-brand-blue transition-colors mt-auto">
                  DISCOVER MORE <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
