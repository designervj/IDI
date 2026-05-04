
import Hero from "@/components/sections/Hero";

import AboutStrip from "@/components/sections/AboutStrip";
import ImpactStats from "@/components/sections/ImpactStats";
import WhoWeAre from "@/components/sections/WhoWeAre";
import ThematicAreas from "@/components/sections/ThematicAreas";
import Partners from "@/components/sections/Partners";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <ImpactStats />
      <ThematicAreas />
      <AboutStrip />
      <Partners />
    </main>
  );
}
