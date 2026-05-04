import React from "react";
import { GraduationCap, CheckCircle } from "lucide-react";

export default function InternshipPage() {
  const benefits = [
    "Hands-on experience in community development projects",
    "Mentorship from experienced professionals",
    "Field visits to project locations",
    "Certificate of completion and letter of recommendation"
  ];

  return (
    <section className="relative bg-white py-20 min-h-[70vh]">
      <div className="absolute inset-0 bg-[#f8fafc]/50"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Internship Opportunities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Gain valuable experience while contributing to meaningful social change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">About the Program</h3>
              <p className="text-gray-600 leading-relaxed">
                Our internship program is designed to provide students and young professionals with practical exposure to the development sector. Interns work closely with our team on various initiatives including research, project implementation, documentation, and advocacy.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">What You'll Gain</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-orange shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-brand-orange">
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="w-10 h-10 text-brand-blue" />
              <h3 className="text-2xl font-bold text-brand-blue">Apply Now</h3>
            </div>
            <p className="text-gray-600 mb-6">
              To apply for an internship, please send your resume and a brief cover letter explaining your interest in our organization.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-blue focus:outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email Address</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-blue focus:outline-none" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Area of Interest</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-blue focus:outline-none bg-white">
                  <option>Research & Documentation</option>
                  <option>Field Implementation</option>
                  <option>Communications & Media</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="button" className="w-full bg-brand-orange hover:bg-[#c26200] text-white font-bold py-3 rounded-lg transition-colors duration-300 mt-4">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
