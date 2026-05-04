import React from "react";

export default function Partners() {
  const partners = [
    { name: "Partner 1", logo: "/assets/Image/idc-img/unnamed.png" },
    { name: "Partner 2", logo: "/assets/Image/idc-img/unnamed (1).png" },
    { name: "Partner 3", logo: "/assets/Image/idc-img/unnamed (2).png" },
    { name: "Partner 4", logo: "/assets/Image/idc-img/unnamed (3).png" },
    { name: "Partner 5", logo: "/assets/Image/idc-img/unnamed (4).png" },
    { name: "Partner 6", logo: "/assets/Image/idc-img/unnamed (5).png" },
    { name: "Partner 7", logo: "/assets/Image/idc-img/unnamed (6).png" },
    { name: "Partner 8", logo: "/assets/Image/idc-img/unnamed (7).png" },
    { name: "Partner 9", logo: "/assets/Image/idc-img/unnamed (8).png" },
    { name: "Partner 10", logo: "/assets/Image/idc-img/unnamed (9).png" },
    { name: "Partner 11", logo: "/assets/Image/idc-img/unnamed (10).png" },
    { name: "Partner 12", logo: "/assets/Image/idc-img/unnamed (11).png" },
    { name: "Partner 13", logo: "/assets/Image/idc-img/unnamed.jpg" },
  ];

  return (
    <section className="py-24 px-4 md:px-10 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-4xl  font-bold text-gray-700 uppercase tracking-normal mb-12">
          Supported By Our Valued Partners
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center opacity-80 hover:opacity-100 transition-opacity duration-500">
          {partners.map((partner, index) => (
            <div key={index} className="w-full flex justify-center p-4 hover:scale-105 transition-transform duration-300">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-16 md:max-h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
