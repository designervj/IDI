import React from "react";
import { motion } from "framer-motion";

export default function MediaPage() {
  const images = [
    { src: "/assets/Image/home-slider-images/hero-slider-imges.png", span: "md:col-span-2 md:row-span-2" },
    { src: "/assets/Image/home-approach/Option 1.JPG", span: "col-span-1" },
    { src: "/assets/Image/home-approach/Option 2.jpg", span: "col-span-1" },
    { src: "/assets/Image/home-approach/Option 3.jpg", span: "md:col-span-2" },
    { src: "/assets/Image/home-slider-images/hero-slider-imges1.png", span: "col-span-1" },
    { src: "/assets/Image/home-slider-images/hero-slider-imges2.png", span: "col-span-1 md:col-span-2" },
    { src: "/assets/Image/slider-img1.png", span: "col-span-1" },
    { src: "/assets/Image/slider-img2.png", span: "col-span-1" },
    { src: "/assets/Image/slider-img3.png", span: "md:col-span-2" },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* ── Hero Banner ── */}
      <section className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-brand-orange/10 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-orange font-bold uppercase tracking-[0.25em] text-sm mb-4"
          >
            Gallery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight font-bold"
          >
            Media & <span className="text-brand-orange">Photos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
          >
            Grounded in community realities and lived experience—explore moments from our fieldwork and engagements.
          </motion.p>
        </div>
      </section>

      <div className="py-24 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
            {images.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${img.span}`}
              >
                <img 
                  src={img.src} 
                  alt={`IDI Fieldwork ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    e.currentTarget.src = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop";
                  }}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-brand-orange flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </main>
  );
}
