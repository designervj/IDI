import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Social Investment Strategy & CSR–CSV Transformation",
      desc: "We support corporates and philanthropic organisations in moving from compliance-driven CSR and fragmented philanthropy toward Creating Shared Value (CSV).",
      keys: [
        "Social investment and CSR portfolio diagnostics",
        "Transition pathways from CSR compliance to shared value creation",
        "Long-term social investment strategy and multi-year roadmaps",
        "Portfolio prioritisation and rationalisation",
        "Governance, decision-making, and accountability frameworks"
      ],
      outcome: "Strategic, ethically governed social investment portfolios aligned with institutional purpose, risk management, and community priorities.",
      image: "/assets/Image/home-approach/Option 2.jpg",
      reverse: false
    },
    {
      title: "Framework Translation & Knowledge Transfer (SDGs, ESG, Resilience)",
      desc: "We translate global sustainability and development frameworks from reporting requirements into practical decision-making tools.",
      keys: [
        "Practical application of SDGs, ESG, climate resilience, and disaster risk reduction (DRR) frameworks",
        "Integration of frameworks into strategy, operations, and investment decisions",
        "Executive and practitioner training on framework use",
        "Alignment of sustainability, ESG, and social investment agendas"
      ],
      outcome: "Leaders and institutions equipped with actionable understanding of frameworks, enabling informed and strategic decisions.",
      image: "/assets/Image/slider-img2.png",
      reverse: true
    },
    {
      title: "Community-Centred, Climate-Resilient & Disaster-Informed Program Design",
      desc: "We design inclusive, participatory social investment initiatives that are grounded in community realities and address systemic, climate, and disaster-related risks.",
      keys: [
        "Participatory needs, vulnerability, and climate risk assessments",
        "Co-design of community development, resilience, and climate adaptation programs",
        "Theory of Change and results framework development",
        "Ecosystem and stakeholder mapping across public, private, and civil society actors",
        "Integration of local knowledge, lived experience, and indigenous practices",
        "Design of disaster risk reduction and climate adaptation initiatives",
        "Integration of resilience into social investment portfolios and development planning"
      ],
      outcome: "Programs that strengthen local ecosystems, enhance community agency, reduce vulnerability, and build long-term adaptive capacity.",
      image: "/assets/Image/home-approach/Option 3.jpg",
      reverse: false
    },
    {
      title: "Monitoring, Evaluation & Learning (MEL) Systems",
      desc: "We help organisations move from activity reporting to outcome-focused, learning-driven measurement systems.",
      keys: [
        "Design of outcome- and equity-sensitive MEL frameworks",
        "Baseline, midline, and learning systems",
        "Community-inclusive monitoring and feedback mechanisms",
        "Learning reviews, reflection processes, and adaptive management support"
      ],
      outcome: "Evidence-based decision-making, continuous learning, and improved program effectiveness.",
      image: "/assets/Image/slider-img3.png",
      reverse: true
    },
    {
      title: "Leadership Education & Curriculum Integration",
      desc: "In partnership with business schools and universities, we build future-ready leadership capacity for inclusive and ethical decision-making.",
      keys: [
        "Design and delivery of courses on: Inclusive development and social investment, Ethics, governance, and the social contract, Climate and community resilience",
        "Executive education and practitioner learning programs",
        "Development of applied case studies and simulations",
        "Faculty workshops and curriculum advisory support"
      ],
      outcome: "Future leaders equipped to steward social investment, sustainability, and resilience as core strategic responsibilities.",
      image: "/assets/Image/home-slider-images/hero-slider-imges.png",
      reverse: false
    },
    {
      title: "Learning, Knowledge & Impact Communication",
      desc: "We integrate institutional learning, evidence, and people-centered narratives to strengthen credibility, accountability, and trust.",
      keys: [
        "Learning workshops and labs for corporates, NGOs, academic institutions, and external agencies",
        "Peer learning and reflective practice sessions across the ecosystem",
        "Development of knowledge products, toolkits, and practice notes",
        "Creation of impact narratives grounded in evidence and community voice",
        "Preparation of learning reports, briefs, and publications",
        "Communication strategies aligned with sustainability, ESG, and shared value objectives"
      ],
      outcome: "Stronger institutional learning cultures, shared understanding across the ecosystem, and trust-building communication that reflects real outcomes rather than curated success stories.",
      image: "/assets/Image/home-slider-images/hero-slider-imges1.png",
      reverse: true
    }
  ];

  return (
    <main className="bg-white min-h-screen">
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
            What We Do
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight font-bold"
          >
            Services <span className="text-brand-orange">Offered</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
          >
            Advisory and capacity-building services that enable strategic social investment, inclusive development, leadership preparedness, and long-term community resilience.
          </motion.p>
        </div>
      </section>

      {/* ── Services Layout ── */}
      <div className="py-24 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 relative group"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                {/* Floating Number Badge */}
                <div className={`absolute -top-8 ${service.reverse ? '-left-8' : '-right-8'} w-24 h-24 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-2xl text-4xl font-black border-4 border-white z-10`}>
                  0{idx + 1}
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6 leading-tight">{service.title}</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">{service.desc}</p>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
                  <h4 className="font-bold text-brand-blue mb-5 flex items-center gap-2">
                    <span className="w-2 h-8 bg-brand-orange rounded-full inline-block"></span>
                    Key services include:
                  </h4>
                  <ul className="space-y-4">
                    {service.keys.map((k, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                        <span className="font-medium leading-relaxed">{k}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <ArrowRight className="w-8 h-8 text-brand-blue shrink-0 mt-1" />
                  <div>
                    <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-1">The Outcome</p>
                    <p className="text-brand-blue font-semibold text-lg leading-snug">{service.outcome}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
