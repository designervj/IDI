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

// 🌟 **FIX #1: Link banane ke liye helper function**
const slugify = (text: string) => {
  if (typeof text !== 'string') return '#';
  return (
    '/' +
    text
      .toLowerCase()
      .replace(/ & /g, "-and-") // '&' ko 'and' se replace karega
      .replace(/[^a-z0-9\s-]/g, "") // faltu characters hatayega
      .trim()
      .replace(/\s+/g, "-") // space ko hyphen se replace karega
      .replace(/-+/g, "-") // multiple hyphens ko ek karega
  );
};


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState<string | null>(
    null
  );

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
    if (openDropdown === name) {
      setOpenNestedDropdown(null);
    }
  };

  const toggleNestedDropdown = (name: string) => {
    setOpenNestedDropdown(openNestedDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => {
      const next = !prev;
      if (!next) {
        setOpenDropdown(null);
        setOpenNestedDropdown(null);
      }
      return next;
    });
  };

  const menuItems = [
    {
      name: "About GRAVIS",
      sub: [
        "Overview",
        "History",
        "Mission & Vision",
        "Guiding Principles",
        "Interventions",
      ],
    },
    {
      name: "Inclusive Development Initiative",
      sub: [
        "Project Overview",
        "Objectives",
        "Approach",
        {
          name: "Activities",
          sub: [
            "Formation of CBOs & Capacity Building",
            "Rainwater Harvesting & Dryland Farming",
            "Horticulture & Animal Husbandry",
            "Skill Development & Entrepreneurship",
            "Documentation & Advocacy",
          ],
        },
        "Impact",
      ],
    },
    {
      name: "Resources",
      sub: [
        "Publications",
        "Case Studies",
        "IEC Materials",
        // "Media",
        "Photo Gallery"
      ],
    },
    {
      name: "Opportunities",
      sub: ["Jobs", "Internship"],
    },
  ];

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
            <nav className="flex items-center gap-8 text-[15px] font-medium text-gray-800">
              <a href="/" className="hover:text-brand-orange transition">
                Home
              </a>
              {menuItems.map((menu) => (
                <div
                  key={menu.name}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(menu.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 hover:text-brand-orange">
                    {menu.name} <ChevronDown className="w-4 h-4" />
                  </button>
                  <div
                    className={`absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md w-64 z-50 transition-all duration-150 ease-in-out origin-top ${
                      openDropdown === menu.name
                        ? "opacity-100 scale-y-100 visible"
                        : "opacity-0 scale-y-95 invisible"
                    }`}
                  >
                    {menu.sub.map((item, index) => {
                      if (typeof item === "string") {
                        return (
                          <a
                            key={item}
                            href={slugify(item)}
                            className="block px-4 py-2 hover:bg-[#f3f8f2] text-gray-700 text-start"
                          >
                            {item}
                          </a>
                        );
                      }
                      return (
                        <div key={item.name} className="relative group/nested">
                          <a
                            href={slugify(item.name)}
                            className="block px-4 py-2 hover:bg-[#f3f8f2] text-gray-700 text-start flex justify-between items-center"
                          >
                            {item.name}
                            <svg
                              className="w-4 h-4 transition-transform duration-200 group-hover/nested:rotate-90"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                              ></path>
                            </svg>
                          </a>
                          <div className="hidden group-hover/nested:block absolute left-full top-0 w-max bg-white shadow-lg rounded-md border border-gray-100 z-10">
                            {item.sub.map((subItem) => (
                              <a
                                key={subItem}
                                href={slugify(subItem)}
                                className="block px-4 py-2 hover:bg-[#f3f8f2] text-gray-700 text-start text-sm"
                              >
                                {subItem}
                              </a>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
              <a href="/get-involved" className="hover:text-brand-orange transition">
                Get Involved
              </a>
              <a href="/contact-us" className="hover:text-brand-orange transition">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="flex items-center justify-center border border-gray-300 rounded-md p-2 bg-white/70"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <div
        className={` absolute w-full md:hidden bg-white border-t border-gray-200 px-4 py-3 text-[15px] font-medium text-gray-800 transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="space-y-3">
          <a href="/" className="block py-1 hover:text-brand-orange">
            Home
          </a>

          {menuItems.map((menu) => (
            <div
              key={menu.name}
              className="border-t border-gray-100 pt-3 first:border-t-0 first:pt-0"
            >
              <button
                onClick={() => toggleDropdown(menu.name)}
                className="flex items-center justify-between w-full hover:text-brand-orange"
              >
                <span>{menu.name}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openDropdown === menu.name ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* L2 Dropdown */}
              {openDropdown === menu.name && (
                <div className="pl-3 mt-2 space-y-1 text-[14px] text-gray-700">
                  
                  {/* MOBILE specific map logic */}
                  {menu.sub.map((item) => {
                    
                    // 1. Agar item simple string hai
                    if (typeof item === 'string') {
                      return (
                        <a
                          key={item}
                          href={slugify(item)} // 🌟 Link add kiya
                          className="block rounded-md px-4 py-2 hover:bg-[#f3f8f2] text-gray-700 text-start"
                        >
                          {item}
                        </a>
                      );
                    }

                    // 2. Agar item object hai (Activities)
                    const isNestedOpen = openNestedDropdown === item.name;
                    return (
                      <div key={item.name} className="py-1">
                        {/* Pehle, Activities ke liye ek alag se link */}
                        <a 
                          href={slugify(item.name)} // 🌟 Link add kiya (Activities)
                          className="block rounded-md px-4 py-2 hover:bg-[#f3f8f2] text-gray-700 text-start"
                        >
                          {item.name}
                        </a>
                        {/* Phir, nested items ke liye toggle button */}
                        <button
                          onClick={() => toggleNestedDropdown(item.name)}
                          className="flex items-center justify-between w-full rounded-md px-4 py-2 hover:bg-[#f3f8f2] text-gray-700 text-start text-[13px] text-gray-600"
                        >
                          <span>View Activities Sub-menu</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              isNestedOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        
                        {/* 3. L3 Dropdown (Activities ka sub-menu) */}
                        {isNestedOpen && (
                          <div className="pl-4 mt-1 space-y-1 text-[13px] text-gray-600 border-l border-gray-200 ml-4">
                            {item.sub.map((subItem) => (
                              <a
                                key={subItem}
                                href={slugify(subItem)} // 🌟 Link add kiya (Nested)
                                className="block rounded-md px-4 py-2 hover:bg-[#f3f8f2] text-start"
                              >
                                {subItem}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          <div className=" pt-1">
            <a
              href="/photo-gallery"
              className="block py-3 border-t border-gray-100 hover:text-brand-orange"
            >
              Photo Gallery
            </a>
            <a
              href="/get-involved"
              className="block py-1 pt-3 hover:text-brand-orange border-t border-gray-100"
            >
              Get Involved
            </a>
            <a
              href="/contact-us"
              className="block py-1 pt-3 hover:text-brand-orange border-t border-gray-100"
            >
              Contact Us
            </a>
          </div>
        </nav>

        {/* Socials for Mobile */}
        <div className="flex items-center gap-4 mt-2 pt-3 border-t border-gray-100 text-[#008a2c]">
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