import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="py-24 px-4 md:px-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Side: Image Gallery/Composition */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative"
        >
          <div className="relative rounded-[10px] overflow-hidden shadow-2xl aspect-[4/3] group">
            <img 
              src="/assets/Image/home-slider-images/hero-slider-imges.png" 
              alt="Community working together" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500"></div>
            
            {/* Overlay border effect */}
            <div className="absolute inset-4 border border-white/20 rounded-[2rem] pointer-events-none"></div>
          </div>
          
          {/* Floating Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -right-4 md:-right-10 bg-brand-orange text-white p-8 rounded-3xl shadow-2xl hidden md:block max-w-[240px] border-4 border-white"
          >
            <h3 className="text-5xl font-black mb-2">10+</h3>
            <p className="font-bold text-base leading-tight uppercase tracking-wide">Years of Empowering Communities</p>
          </motion.div>
        </motion.div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-brand-orange font-black text-sm mb-6 block"
          >
            Who We Are
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-brand-blue mb-8 leading-[1.1]"
          >
            Building Resilience <br /> in the <span className="text-brand-orange">Thar Desert</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-xl mb-6 leading-relaxed"
          >
            The Inclusive Development Initiative (IDI) focuses on strengthening agriculture-based livelihoods, conserving vital water resources, and empowering women and youth in some of the most arid regions.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg mb-10 leading-relaxed border-l-4 border-brand-orange/30 pl-6 italic"
          >
            By blending traditional wisdom with innovative modern technologies, we work directly with local communities to create sustainable, long-lasting impact.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/about"
              className="inline-flex items-center gap-3 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-4 px-10 rounded-[10px] transition-all shadow-xl hover:shadow-brand-blue/20 text-lg group"
            >
              Read Our Story
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
