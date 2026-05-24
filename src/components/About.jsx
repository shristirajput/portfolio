import React from "react";
import { motion } from "framer-motion";

const aboutCards = [
  {
    icon: "🌸",
    title: "Who I Am",
    desc: "A B.E student in Information Science and Engineering at Adichunchanagiri Institute of Technology (2022–2026) with a CGPA of 8.8, passionate about blending technology with creativity.",
  },
  {
    icon: "💡",
    title: "What I Love",
    desc: "Crafting clean, elegant designs that dance with soft pastels and rosy hues. My inspiration comes from creativity, innovation and the endless world of technology.",
  },
  {
    icon: "✨",
    title: "Twilight Side",
    desc: "I enjoy coding, problem-solving, and bringing ideas to life through innovative projects. Always curious about new trends in tech, learning beyond the classroom.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6"
      style={{ background: "var(--bg-section)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          A glimpse into the person behind the code
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {aboutCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="dark-card text-center"
            >
              <span className="text-3xl mb-3 block">{card.icon}</span>
              <h3
                className="font-display text-lg font-semibold mb-3"
                style={{ color: "var(--accent-light)" }}
              >
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
