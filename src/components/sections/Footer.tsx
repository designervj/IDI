"use client";
import React from "react";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <img src="/assets/Image/idi-logo.png" alt="IDI Logo" className="h-20 w-auto bg-white p-3 rounded-xl mb-6 self-start shadow-md"></img>
            <p className="text-gray-300 leading-relaxed mb-6">
              Inclusive Development Initiative (IDI) is committed to empowering communities through sustainable agriculture, capacity building, and innovative solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors duration-300">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors duration-300">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors duration-300">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors duration-300">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:pl-10">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-4 h-1 bg-brand-orange inline-block rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <Link to="/" className="hover:text-brand-orange transition-colors duration-300 flex items-center gap-2">
                  <span className="text-brand-orange text-xs">▹</span> Home
                </Link>
              </li>
              <li>
                <Link to="/interventions" className="hover:text-brand-orange transition-colors duration-300 flex items-center gap-2">
                  <span className="text-brand-orange text-xs">▹</span> What we do
                </Link>
              </li>
              <li>
                <Link to="/approach" className="hover:text-brand-orange transition-colors duration-300 flex items-center gap-2">
                  <span className="text-brand-orange text-xs">▹</span> Approach
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-brand-orange transition-colors duration-300 flex items-center gap-2">
                  <span className="text-brand-orange text-xs">▹</span> Opportunities
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-brand-orange transition-colors duration-300 flex items-center gap-2">
                  <span className="text-brand-orange text-xs">▹</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-4 h-1 bg-brand-orange inline-block rounded-full"></span>
              Get in Touch
            </h4>
            
            <div className="space-y-6 text-gray-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-orange" />
                </div>
                <p className="leading-relaxed mt-1">
                  3/437, 458, M.M Colony, Pal Road,<br/>
                  Jodhpur – 342008, Rajasthan, India
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5 text-brand-orange" />
                </div>
                <a href="tel:+919414059185" className="hover:text-brand-orange transition-colors">
                  +91 94140 59185
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-orange" />
                </div>
                <a href="mailto:idi@idinitiatives.com" className="hover:text-brand-orange transition-colors">
              idi@idinitiatives.com
                </a>
              </div>
            </div>
          </div>
        </div>
      
        {/* Divider & Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Inclusive Development Initiative. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
