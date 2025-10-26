import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 max-w-5xl mx-auto px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg text-gray-600 leading-relaxed"
      >
        Hi, I’m an Information Science and Engineering graduate passionate about blending technology with creativity.
I enjoy coding, problem-solving, and bringing ideas to life through innovative projects.
Always curious about new trends in tech, I love exploring and learning beyond the classroom.
As I start my journey, I’m excited to grow, collaborate, and make a difference with my skills.
      </motion.p>
    </section>
  );
};

export default About;
