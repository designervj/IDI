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
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] bg-black flex items-center justify-center overflow-hidden">
      {/* Full Screen Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url("${slides[index].image}")` }}
        />
      </AnimatePresence>
      
      {/* Classic Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center h-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl flex flex-col items-center"
        >
          <span className="uppercase tracking-widest text-brand-orange font-bold text-sm md:text-base mb-4 block drop-shadow-md">
            Inclusive Development Initiative
          </span>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] mb-6 drop-shadow-lg">
            Empowering <span className="text-brand-orange">Communities</span><br />
            For a Better Future.
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl mb-10 max-w-3xl leading-relaxed drop-shadow-md">
            We are committed to people-centered transformative development through sustainable agriculture, capacity building, and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Link 
              to="/what-we-do"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-[#c26200] text-white font-bold py-4 px-10 rounded-lg transition-all shadow-lg hover:-translate-y-1 text-lg"
            >
              Discover Our Work
            </Link>
            <Link 
              to="/get-involved"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-10 rounded-lg transition-all hover:-translate-y-1 shadow-lg text-lg"
            >
              Get Involved
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4 md:px-10 z-20 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto p-3 bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white rounded-full transition-all hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto p-3 bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white rounded-full transition-all hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)} 
            className={`h-3 rounded-full transition-all duration-500 cursor-pointer ${
              i === index ? "bg-brand-orange w-10" : "bg-white/50 w-3 hover:bg-white"
            } shadow-md`}
          />
        ))}
      </div>
    </section>
  );
}