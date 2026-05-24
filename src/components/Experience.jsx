import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    icon: "💼",
    title: "Software Development Intern (Full Stack Java)",
    org: "Tap Academy",
    date: "6 Months",
    details: [
      "Gained hands-on experience in full stack development using Java, Spring Boot, and React.",
      "Developed and integrated RESTful APIs with frontend applications.",
      "Worked with MySQL for database design and CRUD operations.",
      "Strengthened concepts in OOP, MVC architecture, and real-world application development.",
    ],
  },
  {
    icon: "🎨",
    title: "Graphic Designer",
    org: "InAmigos Foundation",
    date: "1 Month",
    details: [
      "Designed engaging social media creatives using effective color theory and typography.",
      "Collaborated with teams to refine designs based on feedback and improve visual communication.",
      "Managed multiple design projects while consistently meeting deadlines.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Subtle blob */}
      <div
        className="blob"
        style={{
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(196,114,138,0.3), transparent)",
          top: "20%",
          left: "-8%",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          My professional journey so far
        </motion.p>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-5"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="timeline-dot" />
                {i < experiences.length - 1 && (
                  <div
                    className="w-px flex-1 mt-2"
                    style={{ background: "var(--border)" }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="dark-card flex-1 mb-0">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{exp.icon}</span>
                    <h3
                      className="font-display text-lg font-semibold"
                      style={{ color: "var(--accent-light)" }}
                    >
                      {exp.title}
                    </h3>
                  </div>
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(196,114,138,0.15)",
                      color: "var(--accent)",
                      border: "1px solid rgba(196,114,138,0.3)",
                    }}
                  >
                    {exp.date}
                  </span>
                </div>
                <p
                  className="text-sm font-medium mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  {exp.org}
                </p>
                <ul className="space-y-2">
                  {exp.details.map((d, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span style={{ color: "var(--accent)" }} className="mt-1 text-xs">
                        ▸
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
