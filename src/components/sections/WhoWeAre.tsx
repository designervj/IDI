import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Image Gallery/Composition */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            {/* You can change this image to a real one */}
            <img 
              src="/assets/Image/home-slider-images/hero-slider-imges.png" 
              alt="Community working together" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-blue/10"></div>
          </div>
          
          {/* Floating Element */}
          <div className="absolute -bottom-8 -right-8 bg-brand-orange text-white p-6 rounded-2xl shadow-xl hidden md:block max-w-[200px]">
            <h3 className="text-4xl font-extrabold mb-1">10+</h3>
            <p className="font-medium text-sm leading-tight">Years of empowering rural communities.</p>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2">
          <span className="uppercase tracking-widest text-brand-orange font-bold text-sm mb-4 block">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue mb-6 leading-tight">
            Building Resilience <br /> in the Thar Desert
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            The Inclusive Development Initiative (IDI) focuses on strengthening agriculture-based livelihoods, conserving vital water resources, and empowering women and youth in some of the most arid regions.
          </p>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            By blending traditional wisdom with innovative modern technologies, we work directly with local communities to create sustainable, long-lasting impact that improves health, nutrition, and financial independence.
          </p>
          
          <Link 
            to="/about"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-3.5 px-8 rounded transition-all shadow-md hover:shadow-lg text-lg group"
          >
            Read Our Story
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
      </div>
    </section>
  );
}
