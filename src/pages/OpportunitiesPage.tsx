import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Globe, HeartHandshake } from "lucide-react";

export default function OpportunitiesPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

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
            Join Our Team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
          >
            Careers & <span className="text-brand-orange">Opportunities</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
          >
            Build a career grounded in ethical leadership, systemic change, and people-centered transformative development.
          </motion.p>
        </div>
      </section>

      {/* ── Why Join Us ── */}
      <section className="py-24 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img
                src="/assets/Image/home-approach/Option 3.jpg"
                alt="IDI Teamwork"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-brand-orange p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block">
              <p className="text-white font-black text-3xl mb-1">Impact</p>
              <p className="text-orange-100 font-medium text-sm leading-tight uppercase tracking-wider">Driven By Purpose</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="lg:w-1/2"
          >
            <motion.span variants={fadeInUp} className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">Work With Us</motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-brand-blue mb-8 leading-tight">
              Shaping the Future of <br /> <span className="text-brand-orange">Inclusive Development</span>
            </motion.h2>

            <div className="space-y-8">
              {[
                { icon: <Globe className="w-6 h-6 text-brand-orange" />, title: "Meaningful Scale", desc: "Work on systemic shifts—translating global frameworks like SDGs and ESG into real-world action." },
                { icon: <HeartHandshake className="w-6 h-6 text-brand-orange" />, title: "People-Centered Approach", desc: "Collaborate directly with communities, ensuring strategies are grounded in lived experience." },
                { icon: <Briefcase className="w-6 h-6 text-brand-orange" />, title: "Intellectual Rigor", desc: "Join an environment that values continuous learning, adaptive management, and evidence-based design." }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-blue mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section className="py-24 px-4 md:px-10 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-brand-blue mb-6"
            >
              Current Openings
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              We are always looking for passionate individuals to join our consulting and advisory teams.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-brand-orange/30 transition-colors duration-300"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-brand-blue rounded-full text-sm font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                Always Open
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-2">Speculative Application</h3>
              <p className="text-gray-500 text-lg">Send us your CV and cover letter outlining your expertise and how you align with IDI's mission.</p>
            </div>
            <a
              href="mailto:idi@idinitiatives.com"
              className="shrink-0 inline-flex items-center gap-3 bg-brand-blue hover:bg-brand-orange text-white font-bold py-2.5 px-6 text-base rounded-2xl transition-all shadow-md group-hover:shadow-lg group-hover:-translate-y-1"
            >
              Email Application
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
