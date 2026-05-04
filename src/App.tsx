import React from "react";
import HomePage from "@/pages/HomePage";
// import ProductPage from '@/pages/ProductPage'
import Header from "@/components/sections/Header";

import { Route, Routes } from "react-router-dom";
import Footer from "./components/sections/Footer";
import CaseStudiesPage from "./components/sections/CaseStudiesPage";
import MediaCoveragePage from "./components/sections/MediaCoveragePage";
import WhatWeDoPage from "./components/sections/WhatWeDoPage";
import OverViewPage from "./components/sections/OverViewPage";
import HistoryPage from "./components/sections/HistoryPage";
import MissionVisionPage from "./components/sections/MissionVisionPage";
import GuidingPrinciplesPage from "./components/sections/GuidingPrinciplesPage";
import PhotoGalleryPage from "./components/sections/PhotoGalleryPage";
import ProjectOverviewPage from "./components/sections/ProjectOverviewPage";
import ObjectivesPage from "./components/sections/ObjectivesPage";
import ApproachPage from "./components/sections/ApproachPage";
import FormationBuilding from "./components/sections/activitiesPages/FormationBuilding";
import ImpactPage from "./components/sections/ImpactPage";
import PublicationsPage from "./components/sections/PublicationsPage";
import IECMaterialspage from "./components/sections/IECMaterialspage";
import GetInvolvedPage from "./components/sections/GetInvolvedPage";
import RainwaterFarming from "./components/sections/RainwaterFarming";
import AnimalHusbandry from "./components/sections/activitiesPages/AnimalHusbandry";
import SkillDevelopmentPage from "./components/sections/activitiesPages/SkillDevelopmentPage";
import DocumentationPage from "./components/sections/activitiesPages/DocumentationPage";
import { ComingSoon, LAUNCH_DATE } from "./components/sections/comingsoon";
import ContactUs from "./components/sections/ContactUs";
import JobsPage from "./components/sections/JobsPage";
import InternshipPage from "./components/sections/InternshipPage";

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
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/media" element={<MediaCoveragePage />} />
        <Route path="/interventions" element={<WhatWeDoPage />} />
        <Route path="/overview" element={<OverViewPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route
          path="/mission-and-vision"
          element={<MissionVisionPage />}
        />{" "}
        {/* Placeholder for Mission and Vision page */}
        <Route
          path="/guiding-principles"
          element={<GuidingPrinciplesPage />}
        />{" "}
        {/* Placeholder for Mission and Vision page */}
        <Route path="/photo-gallery" element={<PhotoGalleryPage />} />{" "}
        {/* Placeholder for Mission and Vision page */}
        <Route path="/project-overview" element={<ProjectOverviewPage />} />
        <Route path="/objectives" element={<ObjectivesPage />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route
          path="/formation-of-cbos-and-capacity-building"
          element={<FormationBuilding />}
        />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/iec-materials" element={<IECMaterialspage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route
          path="/rainwater-harvesting-and-dryland-farming"
          element={<RainwaterFarming />}
        />
        <Route
          path="/horticulture-and-animal-husbandry"
          element={<AnimalHusbandry />}
        />
        <Route
          path="/skill-development-and-entrepreneurship"
          element={<SkillDevelopmentPage />}
        />
        <Route
          path="/documentation-and-advocacy"
          element={<DocumentationPage />}
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/internship" element={<InternshipPage />} />
        {/* <Route path='/product' element={<ProductPage/>}/> */}
      </Routes>

      <Footer />
    </div>
  );
}
