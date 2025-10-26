import React, { useState } from "react";
import profilePic from "../assets/profile.jpg"; // match the file name
import { motion } from "framer-motion";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1); // 👈 zoom level

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3)); // max 3x
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 1)); // min 1x
  const handleReset = () => setZoom(1);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 bg-white"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-600">Shristi Singh</span>
        </h1>
        <p className="text-gray-600 max-w-lg">
          A passionate Information Science and Engineering fresher with skills
          in Web Development, AI, and Cloud Security.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={profilePic}
          alt="Shristi Singh"
          onClick={() => setIsOpen(true)} // open modal
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-indigo-600 animate-glow cursor-pointer hover:scale-105 transition-transform"
        />
      </motion.div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => {
            setIsOpen(false);
            setZoom(1); // reset zoom when closing
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
            onClick={(e) => e.stopPropagation()} // prevent closing on img click
          >
            <img
              src={profilePic}
              alt="Shristi Singh"
              style={{ transform: `scale(${zoom})` }} // 👈 apply zoom
              className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl border-4 border-indigo-600 transition-transform duration-300"
            />

            {/* Close button */}
            <button
              onClick={() => {
                setIsOpen(false);
                setZoom(1);
              }}
              className="absolute top-2 right-2 bg-white text-indigo-600 px-3 py-1 rounded-full shadow-md hover:bg-indigo-100 transition"
            >
              ✕
            </button>

            {/* Zoom controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
              <button
                onClick={handleZoomOut}
                className="bg-white text-indigo-600 px-3 py-1 rounded-full shadow-md hover:bg-indigo-100 transition"
              >
                ➖
              </button>
              <button
                onClick={handleReset}
                className="bg-white text-indigo-600 px-3 py-1 rounded-full shadow-md hover:bg-indigo-100 transition"
              >
                ⟳
              </button>
              <button
                onClick={handleZoomIn}
                className="bg-white text-indigo-600 px-3 py-1 rounded-full shadow-md hover:bg-indigo-100 transition"
              >
                ➕
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;
