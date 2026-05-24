import React from "react";
import { motion } from "framer-motion";

const skills = {
  "Programming": ["Java", "JavaScript", "SQL"],
  "Frontend": ["HTML5", "CSS3", "React.js"],
  "Backend": ["Spring Boot", "REST APIs"],
  "Database": ["MySQL"],
  "Data Analysis & Visualization": ["Power BI", "Tableau", "Excel"],
  "Web Dev Tools": ["NodeJS", "VSCode", "Git", "GitHub"],
  "Core": [
    "OOP",
    "DSA",
    "Operating Systems",
    "Computer Networks",
    "Problem Solving",
    "API Integration",
    "Client-Server Architecture",
  ],
  "Soft Skills": ["Problem Solving", "Self-learning", "Presentation", "Adaptability"],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Technical Skills & Interests
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          My toolkit for crafting calm, thoughtful, and beautifully detailed
          digital experiences.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="dark-card"
            >
              <h3
                className="font-display text-lg font-semibold mb-4"
                style={{ color: "var(--accent-light)" }}
              >
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--accent)" }}
                    />
                    {item}
                  </li>
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
