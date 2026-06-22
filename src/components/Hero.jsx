import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Sparkles, Bot } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background Glows */}
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(109, 40, 217, 0.15), transparent)",
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <div
        className="glow-bg"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent)",
          bottom: "10%",
          right: "-10%",
        }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 flex flex-col items-center max-w-3xl w-full"
      >
        {/* Availability Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-900/50 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulseGreen"></span>
          <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">Available for Innovative Roles</span>
        </div>

        <h1 className="font-sans text-5xl md:text-7xl font-extrabold mb-6 text-gray-100 tracking-tight">
          Shristi Singh
        </h1>
        
        <p className="text-lg md:text-xl leading-relaxed mb-10 text-gray-400 max-w-2xl">
          Full Stack Java Developer & AI Innovator crafting enterprise-grade solutions with a passion for machine learning and seamless user experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
          <Link to="projects" smooth={true} duration={500} offset={-70} className="w-full sm:w-auto">
            <button className="btn-accent w-full group">
              Explore My Work 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-70} className="w-full sm:w-auto">
            <button className="btn-outline w-full hover:border-purple-500 hover:text-purple-400">
              Get In Touch
            </button>
          </Link>
        </div>

        {/* AI Concierge Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full max-w-xl relative animate-float"
        >
          {/* Card Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-[#111827] border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center shadow-2xl">
            <div className="absolute -top-4 bg-[#111827] border border-gray-800 rounded-full p-2 text-purple-400">
              <Bot size={24} />
            </div>
            
            <p className="text-gray-300 text-center font-medium italic mt-4 mb-6">
              "Hi! I'm Shristi's AI assistant. Ready to see how she builds the future?"
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <Link to="skills" smooth={true} duration={500} offset={-70}>
                <button className="w-full px-4 py-2.5 rounded-lg bg-gray-800/80 hover:bg-gray-700 text-gray-300 text-sm font-medium transition-colors flex items-center justify-center gap-2 border border-gray-700">
                  <Sparkles size={16} className="text-purple-400" />
                  Tell me about her tech stack
                </button>
              </Link>
              <Link to="projects" smooth={true} duration={500} offset={-70}>
                <button className="w-full px-4 py-2.5 rounded-lg bg-gray-800/80 hover:bg-gray-700 text-gray-300 text-sm font-medium transition-colors flex items-center justify-center gap-2 border border-gray-700">
                  Show Java projects
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
