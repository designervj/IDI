import React from "react";
import { motion } from "framer-motion";
import { Building2, GraduationCap, Users } from "lucide-react";

export default function SupportersPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const partners = [
    {
      icon: <Building2 className="w-10 h-10 text-white" />,
      title: "Corporates & Philanthropists",
      desc: "Providing strategic advisory, ESG/SDG framework translation, and long-term portfolio design to transition from CSR compliance to CSV.",
      color: "bg-blue-900"
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-white" />,
      title: "Business Schools & Universities",
      desc: "Designing and integrating curricula on inclusive development, ethics, and resilience into future leadership programs.",
      color: "bg-brand-orange"
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Civil Society & Implementation Partners",
      desc: "Strengthening program design, monitoring, evaluation, learning (MEL), and adaptive management systems.",
      color: "bg-teal-700"
    }
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* ── Hero Banner ── */}
      <section className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-brand-orange/10 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-orange font-bold uppercase tracking-[0.25em] text-sm mb-4"
          >
            Network & Ecosystem
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight font-bold"
          >
            Key <span className="text-brand-orange">Supporters</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
          >
            IDI operates through three mutually reinforcing engagement areas, acting as a strategic bridge across the ecosystem.
          </motion.p>
        </div>
      </section>

      <div className="py-24 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16 md:w-3/4 mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-brand-blue mb-6"
            >
              Our Engagement Model
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Aligning corporates, philanthropists, academic institutions, civil society partners, and external agencies around inclusive design, ethical leadership, and sustainable impact.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative h-full"
              >
                <div className={`absolute inset-0 ${partner.color} rounded-2xl translate-y-4 translate-x-4 opacity-20 group-hover:translate-y-6 group-hover:translate-x-6 transition-transform duration-500`}></div>
                <div className="bg-white p-10 lg:p-12 rounded-2xl shadow-xl border border-gray-100 h-full relative z-10 flex flex-col items-start transition-transform duration-500 group-hover:-translate-y-2">
                  <div className={`w-20 h-20 rounded-2xl ${partner.color} flex items-center justify-center mb-8 shadow-lg`}>
                    {partner.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-blue mb-4 leading-tight">{partner.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{partner.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Logo Grid Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 lg:p-20 rounded-2xl shadow-sm border border-gray-100 text-center"
          >
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Our Collaborative Network</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-16">We partner with forward-thinking organizations committed to equitable, people-centered development.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              {/* Placeholders for actual partner logos - ready to be swapped with real assets */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-[3/2] bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-gray-50 hover:shadow-md transition-all duration-300">
                  <span className="font-bold text-gray-400">Partner Logo</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
