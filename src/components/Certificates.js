import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { X, ChevronLeft, ChevronRight, Award } from "lucide-react";

const certificateData = [
  {
    id: 1,
    title: "Udemy CSS, JavaScript, PHP And Python Programming",
    img: process.env.PUBLIC_URL + "/certificates/Udemy CSS,JavaScript, PHP And Python Programming.png",
  },
  {
    id: 2,
    title: "Advaya 2025 Hackathon",
    img: process.env.PUBLIC_URL + "/certificates/fullstack-cert.jpg",
  },
  {
    id: 3,
    title: "InAmigos Graphic Designer Internship",
    img: process.env.PUBLIC_URL + "/certificates/InAmigos Internship.jpeg",
  },
  {
    id: 4,
    title: "Smart India Internal Hackathon Participation",
    img: process.env.PUBLIC_URL + "/certificates/SIH Participation.jpeg",
  },
  {
    id: 5,
    title: "PALS Think2Impact Workshop Participation",
    img: process.env.PUBLIC_URL + "/certificates/PALS Think2Impact.png",
  },
];

const Certificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificateData.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === certificateData.length - 1 ? 0 : prev + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    trackMouse: true,
  });

  return (
    <section
      id="certificates"
      className="py-24 px-6 relative bg-[#0F141E]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Award size={14} />
            Certificates
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-100 mb-6 tracking-tight"
          >
            Recognition of my <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">learning journey</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificateData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#171D2D] border border-gray-800 hover:border-blue-500/50 cursor-pointer overflow-hidden rounded-2xl group transition-all"
              onClick={() => openModal(idx)}
            >
              <div className="h-44 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="bg-gray-900/80 text-white text-xs px-3 py-1.5 rounded-full font-medium">View Full Size</span>
                </div>
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className="p-5 text-center bg-[#171D2D] border-t border-gray-800">
                <p className="text-sm font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-md"
          {...swipeHandlers}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <button
              className="absolute -top-12 right-0 text-gray-400 hover:text-white p-2 transition-colors cursor-pointer"
              onClick={closeModal}
            >
              <X size={32} />
            </button>

            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={certificateData[currentIndex].img}
              alt={certificateData[currentIndex].title}
              className="w-full h-auto rounded-xl border border-gray-800 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
            />

            <p className="text-center mt-6 text-base font-medium text-gray-300">
              {certificateData[currentIndex].title}
            </p>

            {/* Nav buttons */}
            <button
              className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-gray-400 hover:text-white bg-gray-900 border border-gray-700 hover:border-gray-500 cursor-pointer transition-colors"
              onClick={prevImage}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-gray-400 hover:text-white bg-gray-900 border border-gray-700 hover:border-gray-500 cursor-pointer transition-colors"
              onClick={nextImage}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
