import React from "react";
import { Leaf, Droplets, Users, ShieldCheck } from "lucide-react";

export default function ThematicAreas() {
  const areas = [
    {
      id: 1,
      icon: <Leaf className="w-10 h-10 text-brand-orange" />,
      title: "Sustainable Agriculture",
      description: "Promoting dryland farming techniques, horticulture, and animal husbandry to ensure food security and improve crop yields.",
    },
    {
      id: 2,
      icon: <Droplets className="w-10 h-10 text-brand-orange" />,
      title: "Water Management",
      description: "Building rainwater harvesting structures to restore arid lands and provide clean drinking water to remote villages.",
    },
    {
      id: 3,
      icon: <Users className="w-10 h-10 text-brand-orange" />,
      title: "Women & Youth",
      description: "Equipping marginalized groups with financial, digital, and entrepreneurial skills to foster true independence.",
    },
    {
      id: 4,
      icon: <ShieldCheck className="w-10 h-10 text-brand-orange" />,
      title: "Capacity Building",
      description: "Forming and strengthening Community Based Organizations (CBOs) to ensure long-term, community-led growth.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-10 bg-brand-blue text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-brand-orange font-bold text-sm mb-4 block">
            Our Focus
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Thematic Areas</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area) => (
            <div 
              key={area.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
