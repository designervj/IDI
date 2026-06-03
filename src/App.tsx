import React from "react";
import HomePage from "@/pages/HomePage";
// import ProductPage from '@/pages/ProductPage'
import Header from "@/components/sections/Header";

import { Route, Routes } from "react-router-dom";
import Footer from "./components/sections/Footer";
import VisionPage from "@/pages/VisionPage";
import ServicesPage from "@/pages/ServicesPage";
import MediaPage from "@/pages/MediaPage";
import SupportersPage from "@/pages/SupportersPage";
import OpportunitiesPage from "@/pages/OpportunitiesPage";
import ContactUs from "./components/sections/ContactUs";

export default function App() {
  // const isBeforeLaunch = new Date() < LAUNCH_DATE;

  // if (isBeforeLaunch) {
  //   return <ComingSoon />;
  // }

  const [view, setView] = React.useState<"home" | "product">("home");
  const leftNav = [
    {
      label: "Noževi",
      children: [
        { label: "Petty", href: "/petty" },
        { label: "Gyuto", href: "/gyuto" },
        { label: "Santoku", href: "/santoku" },
        { label: "Nakiri", href: "/nakiri" },
      ],
    },
    { label: "O Noževima", href: "/o-nozevima" },
    { label: "O Karlo Banu", href: "/o-karlo-banu" },
    { label: "Što drugi kažu", href: "/recenzije" },
  ];
  return (
    <div className="text-brand-text">
      <Header
      // leftNav={leftNav}
      // phoneText="Kontaktirajte nas"
      // phoneHref="tel:+385000000"
      // cartCount={4}
      // currentLang="hr"
      // languages={[
      //   { code: "hr", label: "Hr" },
      //   { code: "en", label: "En" },
      // ]}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/supporters" element={<SupportersPage />} />
        <Route path="/opportunities" element={<OpportunitiesPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </div>
  );
}
