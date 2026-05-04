"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const DocumentationPage = () => {
  return (
    <>
      {/* ---------- Hero Section ---------- */}
      <div className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center bg-[#123751]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
              Documentation and Advocacy
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-100/90 leading-relaxed">
              Driving successful replication of ABL practices through comprehensive documentation and advocacy efforts
            </motion.p>
          </motion.div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-10 md:mt-12 mt-4 mb-12 leading-relaxed">
        {/* ---------- Image Section ---------- */}
       
          <div>
            <img
              src="./assets/Image/documents-img.jpg"
              alt="CBO Training"
              className="rounded-2xl shadow-lg object-cover w-full  md:h-[630px]"
            />
          </div>

          <div className="grid gap-2 mt-12">
          
              <p className="text-gray-700 leading-relaxed text-lg">
                {" "}
                Documentation and advocacy form a critical output of the
                project, designed to influence policies and promote the
                replication of successful Agriculture-Based Livelihoods (ABL)
                practices by local Civil Society Organizations (CSOs) and
                government agencies, both within India and beyond. Over the
                project's duration, two comprehensive learning documents will be
                compiled. These documents will focus on the pivotal role of
                women and youth in strengthening ABL and on effective livelihood
                development strategies within arid zones. These publications
                will synthesize project experiences, findings, and best
                practices, and will be widely disseminated both online and in
                print to facilitate knowledge sharing and exchange among various
                stakeholders.{" "}
              </p>
          

          
              <p className="text-gray-700 leading-relaxed text-lg">
                In addition to these learning documents, three advocacy briefs
                will be developed. These briefs will address key themes: gender
                aspects in dryland/rain-fed farming, the participation of youth
                in ABL and the significance of intergenerational exchanges, and
                the crucial alignment between agriculture, horticulture, and
                animal husbandry within ABL. Each brief will include policy
                recommendations and advocacy messages aimed at influencing rural
                livelihood programs and policies, with a strong emphasis on
                promoting ABL through women and youth leadership. To further
                amplify these messages and foster participatory dialogue,
                community-level advocacy events will be organized at the
                district level. These events will bring together representatives
                from local communities, GRAVIS, other CSOs, local authorities,
                research organizations, and the private sector.
              </p>
         

           
              <p className="text-gray-700 leading-relaxed text-lg">
                Furthermore, State and national-level advocacy events are
                planned for the final year of the project, targeting a broader
                audience of stakeholders, including government authorities and
                the EU Delegation, to discuss policy and practical advancements
                in ABL through women and youth empowerment. The project aims to
                document robust data and evidence to support these advocacy
                efforts, ensuring a long-lasting impact on policy and practice.
              </p>

          </div>

      </section>
    </>
  );
};

export default DocumentationPage;
