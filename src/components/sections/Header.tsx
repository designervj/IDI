"use client";
import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronDown,
  Menu,
  X,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-[#f8f7f2] border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* LEFT: Logo */}
          <Link to="/">
            <img
              src="/assets/Image/idi-logo.png"
              alt="IDI Logo"
              className="h-8 md:h-14 w-auto"
            />
          </Link>

          {/* RIGHT: Nav (desktop only) */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center gap-10 text-[16px] font-medium text-gray-800">
              <Link to="/" className="hover:text-brand-orange transition-colors">
                Home
              </Link>
              <Link to="/" className="hover:text-brand-orange transition-colors">
                What we do
              </Link>
              <Link to="/approach" className="hover:text-brand-orange transition-colors">
                Approach
              </Link>
              
              {/* Opportunities Dropdown */}
              <div
                className="relative group py-2"
                onMouseEnter={() => setOpenDropdown("Opportunities")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-brand-orange transition-colors">
                  Opportunities <ChevronDown className="w-4 h-4" />
                </button>
                <div
                  className={`absolute left-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl w-48 z-50 transition-all duration-150 ease-in-out origin-top ${
                    openDropdown === "Opportunities"
                      ? "opacity-100 scale-y-100 visible"
                      : "opacity-0 scale-y-95 invisible"
                  }`}
                >
                  <Link
                    to="/jobs"
                    className="block px-6 py-3 hover:bg-[#f3f8f2] text-gray-700 text-start rounded-t-2xl"
                  >
                    Jobs
                  </Link>
                  <Link
                    to="/internship"
                    className="block px-6 py-3 hover:bg-[#f3f8f2] text-gray-700 text-start rounded-b-2xl"
                  >
                    Internship
                  </Link>
                </div>
              </div>

              <Link to="/contact-us" className="hover:text-brand-orange transition-colors font-bold text-brand-blue">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="flex items-center justify-center border border-gray-300 rounded-xl p-2 bg-white/70 shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <div
        className={`absolute w-full md:hidden bg-white border-t border-gray-200 px-4 py-3 text-[15px] font-medium text-gray-800 transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "max-h-[1000px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <nav className="space-y-1">
          <Link to="/" onClick={toggleMobileMenu} className="block py-3 px-4 rounded-xl hover:bg-gray-50 hover:text-brand-orange transition-colors">
            Home
          </Link>
          <Link to="/interventions" onClick={toggleMobileMenu} className="block py-3 px-4 rounded-xl hover:bg-gray-50 hover:text-brand-orange transition-colors">
            What we do
          </Link>
          <Link to="/approach" onClick={toggleMobileMenu} className="block py-3 px-4 rounded-xl hover:bg-gray-50 hover:text-brand-orange transition-colors">
            Approach
          </Link>

          {/* Opportunities Mobile Dropdown */}
          <div className="border-t border-gray-100 py-1">
            <button
              onClick={() => toggleDropdown("Opportunities")}
              className="flex items-center justify-between w-full py-3 px-4 rounded-xl hover:bg-gray-50 hover:text-brand-orange transition-colors"
            >
              <span>Opportunities</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openDropdown === "Opportunities" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "Opportunities" && (
              <div className="pl-6 pb-2 space-y-1">
                <Link to="/jobs" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-brand-orange">
                  Jobs
                </Link>
                <Link to="/internship" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-brand-orange">
                  Internship
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact-us" onClick={toggleMobileMenu} className="block py-3 px-4 rounded-xl bg-brand-blue/5 text-brand-blue font-bold hover:text-brand-orange transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Socials for Mobile */}
        <div className="flex items-center gap-4 mt-2 pt-3 border-t border-gray-100 text-brand-blue">
          <Facebook className="w-5 h-5" />
          <Twitter className="w-5 h-5" />
          <Instagram className="w-5 h-5" />
          <Youtube className="w-5 h-5" />
          <Linkedin className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;