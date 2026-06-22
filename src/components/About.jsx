import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, FolderGit2, Briefcase } from "lucide-react";

import networkImg from "../assets/neural_network.png";

const stats = [
  {
    icon: <GraduationCap size={20} className="text-purple-400" />,
    label: "Academic Excellence",
    value: "8.8",
    subtext: "Cumulative GPA",
  },
  {
    icon: <FolderGit2 size={20} className="text-green-400" />,
    label: "Active Repository",
    value: "6+",
    subtext: "Production-Ready Projects",
  },
  {
    icon: <Briefcase size={20} className="text-blue-400" />,
    label: "Professional Exp",
    value: "Full Stack",
    subtext: "1 internship experience",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 relative bg-[#0F141E]"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#171D2D] border border-gray-800 p-6 rounded-2xl flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-gray-800/50 w-10 h-10 rounded-xl flex items-center justify-center">
                  {stat.icon}
                </div>
                <span className="text-xs font-semibold tracking-wide text-gray-400">{stat.label}</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-100 mb-1">{stat.value}</h3>
                <p className="text-xs text-gray-500 font-medium">{stat.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6 leading-tight">
              Architecting Enterprise Solutions
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
              Specializing in Spring Boot and Microservices, I bridge the gap between robust backend logic and fluid frontend interactions. Every project is an opportunity to implement clean code and AI-driven efficiency.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "React.js", "PostgreSQL", "Python (AI)"].map((tag, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-gray-800/80 border border-gray-700 text-gray-300 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="bg-[#171D2D] border border-gray-800 p-2 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 z-10 mix-blend-overlay"></div>
              <img src={networkImg} alt="Enterprise Architecture" className="w-full h-auto rounded-xl object-cover relative z-0" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
