import React, { useState } from "react";
import profilePic from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Gradient blobs */}
      <div
        className="blob"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(196,114,138,0.5), transparent)",
          top: "-80px",
          right: "10%",
        }}
      />
      <div
        className="blob"
        style={{
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(160,80,140,0.4), transparent)",
          bottom: "10%",
          left: "-5%",
          animationDelay: "3s",
        }}
      />

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left z-10"
      >
        <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
          Welcome to my portfolio
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Hi there, I'm{" "}
          <span style={{ color: "var(--accent-light)" }}>Shristi Singh</span>
        </h1>
        <p className="max-w-lg text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
          Full Stack Java Developer building scalable web applications and intuitive user interfaces
        </p>
        <Link to="projects" smooth={true} duration={500} offset={-70}>
          <button className="btn-accent">
            Explore Projects
          </button>
        </Link>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <div
          className="relative w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden cursor-pointer animate-float"
          style={{
            border: "3px solid var(--accent)",
            boxShadow: "0 8px 40px rgba(196,114,138,0.3)",
          }}
          onClick={() => setIsOpen(true)}
        >
          <img
            src={profilePic}
            alt="Shristi Singh"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      </motion.div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={profilePic}
              alt="Shristi Singh"
              className="max-w-[90vw] max-h-[80vh] rounded-2xl"
              style={{ border: "3px solid var(--accent)", boxShadow: "0 0 50px rgba(196,114,138,0.3)" }}
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-lg font-bold"
              style={{ background: "var(--accent)" }}
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;
