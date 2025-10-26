import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const certificateData = [
  {
    id: 1,
    title: "Udemy CSS,JavaScript, PHP And Python Programming",
    img: "/certificates/Udemy CSS,JavaScript, PHP And Python Programming.png",
  },
  {
    id: 2,
    title: "Advaya 2025 hackathon",
    img: "/certificates/fullstack-cert.jpg",
  },
  {
    id: 3,
    title: "InAmigos Graphic Designer Internship",
    img: "/certificates/InAmigos Internship.jpeg",
  },
  {
    id: 4,
    title: "Smart India Internal Hackathon Participation",
    img: "/certificates/SIH Participation.jpeg",
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
    setCurrentIndex((prev) => (prev === 0 ? certificateData.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === certificateData.length - 1 ? 0 : prev + 1));
  };

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    trackMouse: true,
  });

  return (
    <section className="py-16 bg-white" id="certificates">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificateData.map((cert, idx) => (
            <div
              key={cert.id}
              className="cursor-pointer border rounded-lg shadow hover:shadow-lg overflow-hidden"
              onClick={() => openModal(idx)}
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center font-semibold">{cert.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          {...swipeHandlers}
        >
          <div className="relative max-w-3xl w-full">
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold z-50"
              onClick={closeModal}
            >
              ×
            </button>

            <img
              src={certificateData[currentIndex].img}
              alt={certificateData[currentIndex].title}
              className="w-full h-auto rounded shadow-lg"
            />

            {/* Navigation */}
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-3xl font-bold px-3 py-1 bg-black bg-opacity-50 rounded hover:bg-opacity-70"
              onClick={prevImage}
            >
              ‹
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-3xl font-bold px-3 py-1 bg-black bg-opacity-50 rounded hover:bg-opacity-70"
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
