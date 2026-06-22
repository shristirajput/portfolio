import React from "react";
import { motion } from "framer-motion";
import { User, Code2, Rocket } from "lucide-react";

const aboutCards = [
  {
    icon: <User size={24} className="text-purple-400" />,
    title: "Who I Am",
    desc: "I am a Full Stack Developer and Information Science Engineering student (2022–2026) at Adichunchanagiri Institute of Technology with an 8.8 CGPA. I specialize in building robust backend systems and engaging frontend interfaces.",
  },
  {
    icon: <Code2 size={24} className="text-blue-400" />,
    title: "My Approach",
    desc: "I focus on writing clean, maintainable code and architecting scalable solutions. I believe in continuous learning and applying best practices to deliver high-quality software.",
  },
  {
    icon: <Rocket size={24} className="text-green-400" />,
    title: "Beyond Coding",
    desc: "When I'm not building applications, I enjoy exploring new technologies, participating in hackathons, and solving complex algorithmic challenges to sharpen my problem-solving skills.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 relative bg-[#0F141E]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulseGreen"></span>
            About Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-100 mb-6 tracking-tight"
          >
            A glimpse into the person <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">behind the code</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {aboutCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#171D2D] border border-gray-800 hover:border-gray-700 transition-colors p-8 rounded-2xl text-center group"
            >
              <div className="bg-gray-800/50 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-gray-100 text-lg font-semibold mb-4">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
