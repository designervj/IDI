import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function VisionPage() {
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
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
          >
            Vision & <span className="text-brand-orange">Strategic Context</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
          >
            Transformative change that is equitable, sustained, and rooted in people’s lived realities.
          </motion.p>
        </div>
      </section>

      {/* ── Introduction (Image + Text) ── */}
      <section className="py-24 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="lg:w-1/2 relative"
          >
            <div className="sticky top-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] group">
                <img
                  src="/assets/Image/home-approach/Option 1.JPG"
                  alt="Community work"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="lg:w-1/2"
          >
            <motion.p variants={fadeInUp} className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Introduction</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-brand-blue mb-8 leading-tight">
              A Strategic Bridge for <br /> <span className="text-brand-orange">Inclusive Growth</span>
            </motion.h2>
            <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
              <motion.p variants={fadeInUp} className="font-medium text-xl text-gray-800 leading-relaxed border-l-4 border-brand-orange pl-6 mb-6">
                Inclusive Development Initiatives (IDI) is a consulting and advisory firm committed to <strong>people-centered transformative development</strong>.
              </motion.p>
              <motion.p variants={fadeInUp}>
                We work at the intersection of <strong>social investment, inclusive development, leadership education, and institutional strengthening</strong> to support long-term, equitable outcomes for communities and institutions.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Our work is grounded in the belief that meaningful and sustainable impact emerges when strategies are shaped by <strong>community realities, ethical leadership, and inclusive decision-making</strong>. By aligning capital, leadership capability, and on-ground systems, IDI enables institutions to move from intention to transformation.
              </motion.p>
              <motion.p variants={fadeInUp}>
                We operate across the social investment and leadership ecosystem—partnering with <strong>corporates and philanthropic organisations</strong> on strategy and governance; <strong>business schools and universities</strong> to educate future corporate leaders; and <strong>civil society organisations and implementation partners</strong> to strengthen the technical, monitoring, and learning systems required for effective delivery.
              </motion.p>
              <motion.p variants={fadeInUp}>
                IDI addresses a critical gap in today’s development landscape: while capital, intent, and global frameworks are increasingly available, <strong>people-centered, inclusive, and systems-oriented approaches remain insufficiently embedded</strong> in strategy, delivery, and leadership formation. Our role is to act as a <strong>strategic bridge</strong>, aligning corporates, philanthropists, academic institutions, civil society partners, and external agencies around inclusive design, ethical leadership, and sustainable impact—ensuring that social investments deliver results today and are sustained through future, resilience-oriented leadership.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Strategic Context (Bento Grid) ── */}
      <section className="py-24 px-4 md:px-10 bg-gray-50 border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto text-left lg:text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">Our Environment</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-brand-blue">Strategic Context</motion.h2>
        </div>
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Evolving Landscape & Leadership */}
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:w-3/5 bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Evolving Social Investment, Leadership, and Inclusion Landscape</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>The operating environment for social investment has fundamentally changed. Climate change, inequality, and increasing systemic risk have exposed the limits of traditional philanthropic and CSR approaches. In response, corporates, philanthropists, and development actors are recognising that <strong>the success of social investment is determined less by the amount of capital deployed and more by the quality of leadership, governance, and inclusive systems that steward it.</strong></p>
                <p>At the same time, the complexity of social and environmental challenges demands approaches that integrate sustainability, climate resilience, and governance considerations into investment decisions.</p>
                <p>Social investment is no longer an adjunct to business or philanthropy. It is becoming a <strong>strategic lever</strong> for managing long-term risk, sustaining institutional trust, and contributing to societal resilience. This transition creates an imperative to move beyond episodic giving toward approaches that embed ethical leadership, inclusion, and accountability at the centre of strategy and execution.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:w-2/5 bg-brand-blue rounded-2xl p-10 shadow-lg text-white relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
              <h3 className="text-2xl font-bold text-brand-orange mb-4">Leadership as a Critical Enabler</h3>
              <div className="space-y-4 text-blue-50 leading-relaxed text-lg relative z-10">
                <p>A key constraint in this evolving landscape is the <strong>leadership preparation gap</strong>. Many business and management education programs have yet to fully integrate applied learning on sustainable development, resilience, ethics, and social responsibility into mainstream leadership training. As a result, social investment, sustainability, and community engagement are often treated as peripheral or compliance-driven activities rather than core strategic functions.</p>
                <p>There is a clear opportunity to <strong>embed ethics, resilience, and systems thinking early</strong> in leadership formation, ensuring future corporate leaders are equipped to navigate complexity, manage long-term risk, and uphold their broader social responsibilities.</p>
              </div>
            </motion.div>
          </div>

          {/* Inclusion & Theory Practice */}
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:w-1/2 bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Why Inclusion Matters</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>Across geographies, communities, particularly marginalised and climate-vulnerable groups such as women, low-income populations, persons with disabilities, and those living in high-risk environments face disproportionate social, economic, and environmental impacts. This reality underscores the need for social investments that are not only well-funded, but <strong>intentionally inclusive and people-centered</strong>.</p>
                <p>Strengthening social investment effectiveness requires:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Moving beyond aggregate outputs toward <strong>inclusive strategies</strong> that intentionally reach underserved groups</li>
                  <li>Grounding investments in <strong>community realities and lived experience</strong>, not only institutional priorities</li>
                  <li>Embedding <strong>equity, participation, and agency</strong> into design, delivery, and evaluation</li>
                  <li>Supporting <strong>community ownership and self-determination</strong> through participatory approaches</li>
                </ul>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:w-1/2 bg-white rounded-2xl p-10 shadow-lg border border-gray-100 relative overflow-hidden flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Connecting Theory, Practice, and Community Reality</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg relative z-10 mb-8">
                  <p>Another critical opportunity lies in bridging the gap between theory and practice. While global frameworks such as the SDGs, ESG standards, and human rights principles provide valuable guidance, their impact depends on how effectively they are translated into real-world decision-making, program design, and governance.</p>
                  <p>Connecting academic learning with real social investment challenges, community realities, and governance dilemmas enables institutions to move from intent to impact—and creates a feedback loop that strengthens both practice and education.</p>
                </div>
              </div>
              <div className="h-48 rounded-2xl overflow-hidden mt-auto">
                <img src="/assets/Image/home-slider-images/hero-slider-imges1.png" className="w-full h-full object-cover" alt="Theory to Practice" />
              </div>
            </motion.div>
          </div>

          {/* Strategic Lens */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-brand-orange rounded-2xl p-10 lg:p-16 shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full mix-blend-overlay -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-3xl font-bold text-white mb-6 relative z-10">IDI’s Strategic Lens</h3>
            <div className="space-y-4 text-white/90 leading-relaxed text-xl relative z-10 max-w-4xl">
              <p>IDI’s work is grounded in the belief that <strong>transformative and sustainable outcomes are possible only when people especially those most affected—are placed at the centre of decision-making</strong>. By integrating strategic social investment, inclusive development practice, leadership education, and institutional strengthening, IDI responds to this evolving context with a people-centered, systems-oriented approach.</p>
              <p>This integrated perspective enables social investments that are inclusive, ethically governed, resilient to risk, and capable of delivering long-term, community-owned impact across social, economic, and environmental dimensions.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Value Proposition ── */}
      <section className="py-24 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:w-3/4">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">Value Proposition</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">What We Enable</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-xl text-gray-600 leading-relaxed">
              Inclusive Development Initiatives (IDI) enables <strong>people-centered, ethically governed social investment</strong> that creates <strong>shared value</strong> for institutions and communities.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { title: "From Compliance to Shared Value (CSR → CSV)", desc: "We support corporates and philanthropic organisations in transforming compliance-driven CSR and philanthropic giving into Creating Shared Value (CSV), where social investment strengthens community resilience while contributing to long-term institutional value, trust, and risk reduction." },
              { title: "Strategic Social Investment Design", desc: "We design inclusive, risk-informed social investment portfolios that move beyond fragmented projects to coherent, long-term strategies aligned with community realities and institutional priorities." },
              { title: "Framework Knowledge Transfer (SDGs, ESG, Resilience)", desc: "We equip leaders and institutions with actionable understanding of global frameworks—including SDGs, ESG, climate resilience, and disaster risk reduction, translating them from reporting and compliance tools into practical decision-making frameworks." },
              { title: "Community & Ecosystem Resilience", desc: "We design and guide social investments that actively strengthen local ecosystems enhancing livelihoods, climate resilience, social infrastructure, and community capacity, rather than delivering short-term or extractive outcomes." },
              { title: "Strengthening Delivery & Learning Systems", desc: "We work with civil society and implementation partners to strengthen project design, monitoring, evaluation, learning, and risk management systems, ensuring quality delivery, accountability, and adaptability." },
              { title: "Leadership for Sustainable Impact", desc: "Through partnerships with business schools and universities, we integrate ethics, resilience, inclusive development, and systems thinking into leadership education—preparing future corporate leaders to steward social investment as a core strategic responsibility." },
              { title: "Ecosystem Alignment & Governance", desc: "IDI acts as a strategic bridge, aligning corporates, philanthropists, academic institutions, civil society partners, and external agencies around inclusive design, ethical governance, and sustained impact." }
            ].map((prop, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-brand-orange/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6">
                  <ChevronRight className="w-6 h-6 text-brand-orange" />
                </div>
                <h4 className="text-xl font-bold text-brand-blue mb-3">{prop.title}</h4>
                <p className="text-gray-600 leading-relaxed">{prop.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-2xl p-10 lg:p-12 border border-gray-100 shadow-sm">
            <h3 className="text-3xl font-bold text-brand-blue mb-8">Our Distinct Value</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700">
              <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-brand-orange shrink-0" /> Transformation from CSR compliance to shared value creation</li>
              <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-brand-orange shrink-0" /> Practical translation of SDGs, ESG, and resilience frameworks</li>
              <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-brand-orange shrink-0" /> Deep grounding in community realities and inclusive development practice</li>
              <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-brand-orange shrink-0" /> Integration of strategy, delivery systems, and leadership formation</li>
              <li className="flex items-center gap-3 md:col-span-2"><ChevronRight className="w-5 h-5 text-brand-orange shrink-0" /> Focus on long-term resilience and trust, not short-term outputs</li>
            </ul>
            <p className="mt-8 text-xl font-medium text-brand-blue border-t pt-8">
              Through this integrated approach, IDI ensures that social investments are <strong>strategic, inclusive, resilient, and sustained by future leadership</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Impact & Long-Term Vision (Dark Section) ── */}
      <section className="py-24 px-4 md:px-10 bg-brand-blue relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('/assets/Image/home-slider-images/hero-slider-imges2.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold mb-12">
            Impact & Long-Term Vision
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl mb-8 font-light text-blue-100">
            IDI’s long-term vision is to:
          </motion.p>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-6 text-left mb-16">
            {[
              "Normalise inclusive, people-centered social investment as a core institutional responsibility",
              "Strengthen community resilience and agency",
              "Embed ethics, inclusion, and foresight into leadership education",
              "Improve trust between communities, institutions, and funders",
              "Contribute to global learning on inclusive development practice"
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex gap-4 items-start">
                <div className="bg-brand-orange rounded-full p-1 mt-1 shrink-0"><ChevronRight className="w-4 h-4 text-white" /></div>
                <p className="text-lg font-medium leading-snug">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="bg-brand-orange p-10 rounded-2xl shadow-2xl">
            <h3 className="text-2xl md:text-4xl font-black italic leading-tight">
              "Through this work, IDI seeks to enable transformative change that is equitable, sustained, and rooted in people’s lived realities."
            </h3>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
