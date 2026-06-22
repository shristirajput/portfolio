import React from "react";
import { motion } from "framer-motion";
import { Terminal, Code2, Sparkles, Network } from "lucide-react";

import ivfImg from "../assets/ivf_dashboard.png";
import fashionImg from "../assets/fashion_ecommerce.png";
import brainImg from "../assets/neon_brain.png";

const projects = [
  {
    title: "IVF Companion",
    desc: "AI-driven inference engine for fertility tracking using Spring Boot and React.",
    tags: ["Spring Boot", "React", "AI Inference"],
    github: "https://github.com/shristirajput/IVF-Companion.git",
    image: ivfImg,
  },
  {
    title: "FashionHub",
    desc: "Enterprise-grade e-commerce MVC application featuring secure checkout and admin workflows.",
    tags: ["MVC", "MySQL", "JSP"],
    github: "https://github.com/shristirajput/Fashion-Hub-",
    image: fashionImg,
  },
  {
    title: "Brain Tumor Detection",
    desc: "High-precision medical imaging classification using ResNet50 and deep learning.",
    tags: ["ResNet50", "Python", "TensorFlow"],
    github: "https://github.com/shristirajput/Brain-tumor-detection-and-classification-using-ResNet50",
    image: brainImg,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 relative"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <Sparkles size={14} /> Intelligent Discovery
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-sans text-4xl md:text-5xl font-bold text-gray-100 mb-8 tracking-tight"
          >
            Project Explorer
          </motion.h2>

          {/* Terminal Input Mock */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl mx-auto bg-[#0a0e17] border border-gray-800 rounded-lg p-4 flex items-center gap-3 text-left shadow-inner"
          >
            <Terminal size={18} className="text-green-500" />
            <span className="text-green-500 font-mono text-sm hidden sm:inline">shristi@portfolio:~$</span>
            <span className="text-gray-400 font-mono text-sm">Ask about</span>
            <span className="w-2 h-4 bg-gray-400 animate-blink"></span>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 group"
            >
              {/* Image Area */}
              <div className="h-48 md:h-64 w-full relative flex items-center justify-center overflow-hidden bg-[#0a0e17]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent z-10 opacity-60"></div>
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8">
                <h3 className="font-sans text-2xl font-bold text-gray-100 mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {p.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <button className="w-full py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-colors">
                      View Details
                    </button>
                  </a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-2.5 rounded-lg border border-gray-700 hover:border-gray-500 text-gray-300 transition-colors flex items-center justify-center">
                      <Code2 size={18} />
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
