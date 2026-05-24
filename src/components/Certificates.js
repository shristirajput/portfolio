import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

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
          Certificates
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          Recognition of my learning journey
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificateData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="dark-card cursor-pointer overflow-hidden p-0"
              onClick={() => openModal(idx)}
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className="p-4 text-center">
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--accent-light)" }}
                >
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
          className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 backdrop-blur-sm"
          {...swipeHandlers}
        >
          <div className="relative max-w-3xl w-full mx-4">
            <button
              className="absolute -top-10 right-0 text-2xl font-bold cursor-pointer"
              style={{ color: "var(--accent-light)" }}
              onClick={closeModal}
            >
              ✕
            </button>

            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={certificateData[currentIndex].img}
              alt={certificateData[currentIndex].title}
              className="w-full h-auto rounded-xl"
              style={{ border: "2px solid var(--accent)", boxShadow: "0 0 40px rgba(196,114,138,0.2)" }}
            />

            <p
              className="text-center mt-4 text-sm font-semibold"
              style={{ color: "var(--accent-light)" }}
            >
              {certificateData[currentIndex].title}
            </p>

            {/* Nav buttons */}
            <button
              className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold cursor-pointer"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--accent-light)",
              }}
              onClick={prevImage}
            >
              ‹
            </button>
            <button
              className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold cursor-pointer"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--accent-light)",
              }}
              onClick={nextImage}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
