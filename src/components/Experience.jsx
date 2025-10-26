import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "CSS, JavaScript, PHP, and Python (Full Stack Course)",
    org: "Online",
    date: "Dec 2024 – Feb 2025",
    details: [
      "Covered syntax, libraries, frameworks, and practical implementation in a structured course.",
      "Gained hands-on knowledge across both front-end and back-end technologies.",
    ],
  },
  {
    title: "Advaya 2025 Hackathon",
    org: "BGSCET, Bangalore",
    date: "April 2025 (Offline)",
    details: [
      "Participated in Advaya 2025, a development-focused hackathon organized by BGSCET, Bangalore.",
      "Collaboratively worked on the design and implementation of an innovative project.",
      "Enhanced skills in front-end design, back-end integration, and user-centric problem solving.",
      "Focused on real-world impact by building a solution that emphasizes empathy, accessibility, and health-tech awareness.",
    ],
  },
  {
    title: "Graphic Designer",
    org: "InAmigos Foundation",
    date: "Aug 2025 (2 Weeks)(Online)",
    details: [
      "Worked as a graphic designer contributing to social impact campaigns.",
      "Created engaging posters and digital media content for awareness programs.",
      "Strengthened creative skills in visual design, branding, and communication.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-indigo-700">{exp.title}</h3>
                <span className="text-sm text-gray-500">{exp.date}</span>
              </div>
              <p className="text-gray-600 font-medium mb-3">{exp.org}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {exp.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
