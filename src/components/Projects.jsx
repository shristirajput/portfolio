import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    icon: "🌷",
    title: "IVF Companion",
    desc: "A comprehensive full-stack platform for IVF patients and doctors. Features include role-based portals, AI clinical inference using Gemini LLM, real-time doctor chat, medical file management, and Stripe payments.",
    tech: "React, Tailwind CSS, Java, Spring Boot, MySQL, WebSockets, Gemini API, Stripe",
    link: "#",
    github: "https://github.com/shristirajput/IVF-Companion.git",
  },
  {
    icon: "👗",
    title: "FashionHub – Smart Fashion Marketplace",
    desc: "Developed a full stack Java web application based on MVC architecture for fashion product management and online shopping. Built a coin-based used product marketplace with user auth, cart, and admin workflows.",
    tech: "JSP, Servlets, JDBC, MySQL, HTML, CSS, Apache Tomcat",
    link: "#",
    github: "https://github.com/shristirajput/Fashion-Hub-",
  },
  {
    icon: "🧠",
    title: "Brain Tumor Detection",
    desc: "Built a deep learning model using ResNet50 for detecting and classifying brain tumors from MRI images. Applied transfer learning and preprocessing techniques to achieve high model accuracy.",
    tech: "Python, Machine Learning, ResNet50",
    link: "#",
    github: "https://github.com/shristirajput/Brain-tumor-detection-and-classification-using-ResNet50",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
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
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          A curated collection of my favorite creations
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="dark-card flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl mb-3 block">{p.icon}</span>
                <h3
                  className="font-display text-xl font-semibold mb-3"
                  style={{ color: "var(--accent-light)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {p.desc}
                </p>
                <p className="text-xs mb-5" style={{ color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--accent)" }} className="font-semibold">
                    Tools:
                  </span>{" "}
                  {p.tech}
                </p>
              </div>
              <div className="flex gap-3">
                {p.github && p.github !== "#" && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent text-xs"
                    style={{ padding: "0.45rem 1.1rem" }}
                  >
                    🐙 GitHub
                  </a>
                )}
                {p.link && p.link !== "#" && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent text-xs"
                    style={{
                      padding: "0.45rem 1.1rem",
                      background: "transparent",
                      border: "1px solid var(--accent)",
                      color: "var(--accent-light)",
                    }}
                  >
                    Visit Site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
