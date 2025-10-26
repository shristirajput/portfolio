import React from "react";
import { motion } from "framer-motion";

const skills = {
  "Languages": ["Python", "Java", "JavaScript", "HTML+CSS"],
  "Libraries": ["Java Libraries", "Python Libraries", "ReactJS"],
  "Web Dev Tools": ["NodeJS", "VSCode", "Git", "GitHub"],
  "Frameworks": ["ReactJS"],
  "Cloud/Databases": ["MongoDB", "MySQL (Relational Databases)"],
  "Data Analysis & Visualization": ["Power BI", "Tableau", "Excel"],
  "Relevant Coursework": ["Data Structures & Algorithms", "OOP", "DBMS"],
  "Areas of Interest": ["Web Design & Development", "Cloud Security"],
  "Soft Skills": ["Problem Solving", "Self-learning", "Presentation", "Adaptability"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Technical Skills & Interests
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                {category}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
