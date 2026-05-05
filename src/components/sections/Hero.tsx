"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/assets/Image/home-slider-images/hero-slider-imges.png",
  },
  {
    image: "/assets/Image/home-slider-images/hero-slider-imges1.png",
  },
  {
    image: "/assets/Image/home-slider-images/hero-slider-imges2.png",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[85vh] md:h-[95vh] bg-black flex items-center justify-center overflow-hidden">
      {/* Full Screen Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].image}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url("${slides[index].image}")` }}
        />
      </AnimatePresence>
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/40 via-transparent to-transparent"></div>

      {/* Centered Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center h-full">
        <div className="max-w-5xl flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="uppercase tracking-[0.3em] text-brand-orange font-black text-xs md:text-sm mb-6 block drop-shadow-md bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20"
          >
            Inclusive Development Initiative
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white text-5xl md:text-6xl lg:text-6xl font-bold font-black leading-[0.9] mb-8 drop-shadow-2xl"
          >
            Empowering <span className="text-brand-orange">Communities</span><br />
            For a <span className="italic font-serif">Better</span> Future.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-200 text-lg md:text-2xl mb-12 max-w-3xl leading-relaxed drop-shadow-md font-medium"
          >
            We are committed to people-centered transformative development through sustainable agriculture, capacity building, and innovative solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/interventions"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-3.5 px-8 rounded-2xl transition-all shadow-xl hover:shadow-brand-orange/30 hover:-translate-y-0.5 text-lg group"
            >
              Discover Our Work
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/get-involved"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/50 text-white font-bold py-3.5 px-8 rounded-2xl transition-all hover:-translate-y-0.5 shadow-xl text-lg"
            >
              Get Involved
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4 md:px-10 z-20 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto p-4 bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white rounded-full transition-all hover:scale-110 group"
        >
          <ChevronLeft className="w-6 h-6 md:w-10 md:h-10 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto p-4 bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white rounded-full transition-all hover:scale-110 group"
        >
          <ChevronRight className="w-6 h-6 md:w-10 md:h-10 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-4 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)} 
            className={`h-2 rounded-full transition-all duration-700 cursor-pointer ${
              i === index ? "bg-brand-orange w-16" : "bg-white/30 w-4 hover:bg-white/60"
            } shadow-lg`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
