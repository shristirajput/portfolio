import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "IVF Companion",
    desc: "Designed and developed a supportive website for individuals undergoing IVF treatment. Features include cycle tracking, medication reminders, mental wellness support, and expert resources. Prioritized user privacy and a calming, user-friendly interface to enhance patient experience.",
    tech: "HTML, CSS, JS, SQL, Alchemy, Python",
    link: "#",
    github: "https://github.com/shristirajput/IVF-Companion.git",
  },
  {
    title: "Show Tracker",
    desc: "A React-based web application allowing users to book tickets for shows in real time. Frontend built with React; backend using XAMPP (Apache, MySQL, PHP).",
    tech: "ReactJS, PHP, XAMPP, HTML, CSS",
    link: "#",
    github: "#",
  },
  {
    title: "Brain Tumor Detection and Classification (ResNet50)",
    desc: "Developed a deep learning model using ResNet50 to detect and classify brain tumors from MRI images. Achieved high accuracy using transfer learning and preprocessing techniques.",
    tech: "Python, Machine Learning, ResNet50, HTML, CSS",
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
            <p className="text-gray-600 mb-3">{p.desc}</p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Technologies Used:</strong> {p.tech}
            </p>
            <div className="flex gap-4">
              <a href={p.link} className="text-indigo-600 font-medium hover:underline">
                Live Demo
              </a>
              <a href={p.github} className="text-gray-600 font-medium hover:underline">
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
