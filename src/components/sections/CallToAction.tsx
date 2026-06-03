import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/Image/home-slider-images/hero-slider-imges1.png"
          alt="Community support"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              <Heart className="w-4 h-4 fill-current" />
              Join Our Mission
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Enable Transformative <br />
              <span className="text-brand-orange">Change</span> Together.
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Your support enables inclusive, ethically governed social investment that creates shared value for institutions and communities. Partner with us today to bridge theory, practice, and community reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/opportunities"
                className="inline-flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-2.5 px-6 text-base rounded-2xl transition-all shadow-xl hover:shadow-brand-orange/20 hover:-translate-y-1 group"
              >
                Explore Opportunities
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-2.5 px-6 text-base rounded-2xl transition-all hover:-translate-y-1 text-lg"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full text-white fill-current">
          <path d="M0,400 L400,400 L400,0 C300,100 100,300 0,400 Z" />
        </svg>
      </div>
    </section>
  );
}
