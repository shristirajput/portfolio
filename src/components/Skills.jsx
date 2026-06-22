import React from "react";
import { motion } from "framer-motion";
import { Server, Database, LayoutTemplate, LineChart } from "lucide-react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 relative"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-sans text-4xl md:text-5xl font-bold text-gray-100 mb-6 tracking-tight"
          >
            Architecture & <span className="text-purple-400">Execution</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-base md:text-lg"
          >
            A technical deep-dive into the stack and professional journey of a Full Stack Developer specialized in enterprise Java ecosystems and modern AI-driven interfaces.
          </motion.p>
        </div>

        <h3 className="text-2xl font-bold text-gray-200 mb-8 font-sans border-b border-gray-800 pb-4">Tech Stack</h3>

        <div className="flex flex-col gap-6">
          
          {/* Card 1: Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111827] border border-gray-800 rounded-xl p-6 md:p-8 hover:border-purple-500/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-2">Backend Architecture</p>
                <h4 className="text-xl font-bold text-gray-100">Enterprise Core</h4>
              </div>
              <Server className="text-gray-500" size={28} />
            </div>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Java 17+</span>
                  <span className="text-blue-400 text-xs">Advanced</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Spring Boot</span>
                  <span className="text-green-400 text-xs">Professional</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Database */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#111827] border border-gray-800 rounded-xl p-6 md:p-8 hover:border-purple-500/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-2">Database</p>
                <h4 className="text-xl font-bold text-gray-100">Relational Systems</h4>
              </div>
              <Database className="text-gray-500" size={28} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Expertise in MySQL, schema design, query optimization, and transaction management.
            </p>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> MySQL</span>
                <span className="text-purple-400 text-xs">90%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5">
                <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#111827] border border-gray-800 rounded-xl p-6 md:p-8 hover:border-purple-500/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-2">Frontend</p>
                <h4 className="text-xl font-bold text-gray-100">React Ecosystem</h4>
              </div>
              <LayoutTemplate className="text-gray-500" size={28} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building responsive, high-performance UIs using React, Tailwind CSS, and state management hooks.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded text-xs font-mono">React</span>
              <span className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded text-xs font-mono">Tailwind CSS</span>
              <span className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded text-xs font-mono">Context API</span>
            </div>
          </motion.div>

          {/* Card 4: Business Intelligence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#111827] border border-gray-800 rounded-xl p-6 md:p-8 hover:border-purple-500/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-2">Data Visualization</p>
                <h4 className="text-xl font-bold text-gray-100">Business Intelligence</h4>
              </div>
              <LineChart className="text-gray-500" size={28} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leveraging Power BI to transform raw complex datasets into actionable executive insights and dashboards.
            </p>
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Power BI Certified
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
