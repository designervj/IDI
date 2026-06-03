"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, MapPin, Heart, Leaf, Users, Droplets } from "lucide-react";

const stories = [
  {
    quote: "IDI enabled us to bridge the gap between academic learning and real-world social investment challenges.",
    name: "Academic Partner",
    role: "Business School Leader",
    icon: <Users className="w-5 h-5" />,
    delay: 0.1,
  },
  {
    quote: "We transitioned our philanthropic approach from compliance-driven CSR to creating shared value for long-term resilience.",
    name: "Corporate Client",
    role: "Head of CSR",
    icon: <Leaf className="w-5 h-5" />,
    delay: 0.2,
  },
  {
    quote: "Thanks to IDI’s capability building, our on-ground delivery systems and monitoring frameworks are stronger than ever.",
    name: "Implementation Partner",
    role: "NGO Director",
    icon: <Heart className="w-5 h-5" />,
    delay: 0.3,
  },
];

const pillars = [
  {
    icon: <Users className="w-7 h-7 text-brand-blue" />,
    title: "Inclusive Strategy",
    desc: "Intentionally reaching underserved groups and grounding investments in lived experience.",
    bg: "bg-blue-50",
    delay: 0.1,
  },
  {
    icon: <Leaf className="w-7 h-7 text-green-700" />,
    title: "Creating Shared Value",
    desc: "Moving beyond episodic giving toward approaches that embed ethical leadership and accountability.",
    bg: "bg-green-50",
    delay: 0.2,
  },
  {
    icon: <Droplets className="w-7 h-7 text-brand-orange" />,
    title: "Ecosystem Resilience",
    desc: "Designing and guiding social investments that actively strengthen local ecosystems.",
    bg: "bg-orange-50",
    delay: 0.3,
  },
  {
    icon: <MapPin className="w-7 h-7 text-purple-600" />,
    title: "Framework Translation",
    desc: "Translating SDGs and ESG standards into practical decision-making and governance.",
    bg: "bg-purple-50",
    delay: 0.4,
  },
];

export default function ImpactStats() {
  return (
    <section className="bg-[#f9f9f7] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-semibold uppercase tracking-[0.25em] text-xs mb-3"
          >
            The IDI Difference
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-blue mb-4 leading-tight"
          >
            Connecting Theory, Practice, and <span className="text-brand-orange">Community Reality</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed"
          >
            IDI acts as a strategic bridge, aligning corporates, academic institutions, and civil society partners around inclusive design, ethical leadership, and sustainable impact.
          </motion.p>
        </div>

        {/* ── Four Pillars ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: p.delay }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 shadow-md p-7 hover:shadow-lg transition-shadow"
            >
              <div className={`w-14 h-14 ${p.bg} rounded-2xl flex items-center justify-center mb-5`}>
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold text-brand-blue mb-2">{p.title}</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Community Voices ── */}
        <div className="mb-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-orange font-semibold uppercase tracking-[0.25em] text-xs mb-2"
          >
            Community Voices
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-brand-blue"
          >
            Stories from the Field
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: s.delay }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 shadow-md p-8 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <Quote className="w-8 h-8 text-brand-orange/30 mb-4" />
                <p className="text-gray-600 font-medium leading-relaxed text-base italic mb-6">
                  "{s.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-brand-blue rounded-2xl flex items-center justify-center text-white shrink-0">
                  {s.icon}
                </div>
                <div>
                  <p className="text-brand-blue font-semibold text-sm">{s.name}</p>
                  <p className="text-gray-400 text-xs font-medium">{s.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
