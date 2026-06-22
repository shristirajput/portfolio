import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Development Intern",
    company: "Tap Academy",
    duration: "6 Months",
    period: "MAR 2023 — SEP 2023",
    status: "past",
    description: "Developed enterprise Java modules with Spring Framework. Optimized database queries for internal management tools. Collaborated in an Agile environment with senior architects.",
    bullets: [
      "Developed enterprise Java modules with Spring Framework.",
      "Optimized database queries for internal management tools.",
      "Collaborated in an Agile environment with senior architects."
    ]
  },
  {
    role: "Graphic Designer",
    company: "InAmigos",
    duration: "1 Month",
    period: "JAN 2024 — FEB 2024",
    status: "past",
    description: "Crafted visual identities and marketing collateral, bridging the gap between technical functionality and aesthetic user experience.",
    bullets: []
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 relative"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-200 mb-12 font-sans border-b border-gray-800 pb-4">Professional Path</h3>

        <div className="relative border-l border-gray-800 ml-3 md:ml-4 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-10"
            >
              {/* Timeline Dot */}
              <div 
                className={`absolute w-2.5 h-2.5 rounded-full -left-[5px] top-1.5 ${
                  i === 0 ? "bg-purple-500 shadow-[0_0_10px_rgba(109,40,217,0.8)]" : "bg-gray-600"
                }`}
              ></div>

              <div className="mb-1 flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-xs font-mono tracking-widest text-gray-500 uppercase">
                <span>{exp.period}</span>
              </div>
              
              <h4 className="text-xl font-bold text-gray-100 mb-1 mt-1">{exp.role}</h4>
              <p className="text-sm text-gray-400 mb-4 font-medium">
                {exp.company} • {exp.duration}
              </p>

              {exp.bullets && exp.bullets.length > 0 ? (
                <div className="bg-[#111827] border border-gray-800 rounded-xl p-5 md:p-6 mt-4 hover:border-gray-700 transition-colors">
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                        <span className="text-purple-500 mt-1.5 w-1 h-1 rounded-full bg-purple-500 flex-shrink-0"></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="bg-[#111827] border border-gray-800 rounded-xl p-5 md:p-6 mt-4 hover:border-gray-700 transition-colors">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
