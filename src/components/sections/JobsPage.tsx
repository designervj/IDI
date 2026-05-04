import React from "react";
import { Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function JobsPage() {
  return (
    <section className="relative bg-white py-20 min-h-[70vh]">
      <div className="absolute inset-0 bg-[#f8fafc]/50"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Career Opportunities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join our mission to drive people-centered transformative development. We are always looking for passionate individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Current Openings */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-brand-orange/10 rounded-lg">
                <Briefcase className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-blue">Current Openings</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Explore full-time and part-time positions with ID Initiatives. Help us build resilient communities.
            </p>
            <div className="p-4 bg-gray-50 rounded-lg text-center text-gray-500">
              No current openings at the moment. Please check back later.
            </div>
          </div>

          {/* Internship Program */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-brand-blue/10 rounded-lg">
                <Briefcase className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-blue">Internship Program</h3>
            </div>
            <p className="text-gray-600 mb-6 flex-grow">
              We offer internships for students and fresh graduates who want to gain practical experience in the development sector.
            </p>
            <Link
              to="/internship"
              className="inline-flex items-center justify-center gap-2 w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
            >
              Learn More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
