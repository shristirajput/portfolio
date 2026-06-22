import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Bot, Paperclip, Send, Users, Code, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_id",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_id",
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "public_key"
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent! Shristi will get back to you soon.");
          form.current.reset();
          setIsSending(false);
        },
        (error) => {
          console.error(error.text);
          setStatusMessage("❌ Failed to send. Please try the direct email below.");
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 relative"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulseGreen"></span>
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">AI-Powered Inquiry</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-sans text-5xl md:text-6xl font-bold text-gray-100 mb-6 tracking-tight leading-tight"
          >
            Let's architect the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400">future</span> together.
          </motion.h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Whether you have a complex enterprise project or a creative AI integration, I'm ready to bring technical precision to your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
          {/* Left Column: AI Chat Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-[#111827] border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-6">
              <div className="bg-purple-600 p-2.5 rounded-xl">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-gray-100 font-semibold">Shristi's Concierge</h3>
                <p className="text-xs text-green-400 font-medium">AI ACTIVE</p>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <div className="bg-gray-800/50 p-3 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Bot size={18} className="text-gray-400" />
              </div>
              <div className="bg-gray-800/80 border border-gray-700 text-gray-300 rounded-2xl rounded-tl-sm p-4 text-sm leading-relaxed max-w-[85%]">
                Hello! I'm Shristi's AI assistant. To help her understand your needs better, could you describe the project or inquiry you have in mind?
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="mt-auto pt-6">
              <div className="bg-[#0a0e17] border border-gray-700 rounded-xl p-2 transition-colors focus-within:border-purple-500">
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-none text-gray-200 p-3 text-sm focus:outline-none resize-none min-h-[120px]"
                  required
                ></textarea>
                
                <div className="flex items-center justify-between p-2 mt-2">
                  <div className="flex gap-2">
                    <button type="button" className="p-2 text-gray-500 hover:text-gray-300 transition-colors rounded-lg hover:bg-gray-800">
                      <Paperclip size={18} />
                    </button>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSending}
                    className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSending ? "Sending..." : "SEND MESSAGE"} <Send size={14} />
                  </button>
                </div>
              </div>
              {statusMessage && (
                <p className="mt-4 text-sm text-center font-medium text-gray-400">
                  {statusMessage}
                </p>
              )}
            </form>
          </motion.div>

          {/* Right Column: Status & Channels */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Direct Channels */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#111827] border border-gray-800 rounded-2xl p-6"
            >
              <h4 className="text-gray-100 font-semibold mb-5">Direct Channels</h4>
              <div className="space-y-3">
                <a href={process.env.REACT_APP_LINKEDIN || "#"} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-[#0a0e17] border border-gray-800 hover:border-gray-600 transition-colors group">
                  <div className="flex items-center gap-3">
                    <Users size={18} className="text-blue-400" />
                    <span className="text-gray-300 text-sm font-medium">LinkedIn</span>
                  </div>
                  <ArrowUpRight size={16} className="text-gray-500 group-hover:text-gray-300 transition-colors" />
                </a>
                <a href={process.env.REACT_APP_GITHUB || "#"} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-[#0a0e17] border border-gray-800 hover:border-gray-600 transition-colors group">
                  <div className="flex items-center gap-3">
                    <Code size={18} className="text-gray-400" />
                    <span className="text-gray-300 text-sm font-medium">GitHub</span>
                  </div>
                  <ArrowUpRight size={16} className="text-gray-500 group-hover:text-gray-300 transition-colors" />
                </a>
                <a href={`mailto:${process.env.REACT_APP_EMAIL || "contact@example.com"}`} className="flex items-center justify-between p-4 rounded-xl bg-[#0a0e17] border border-gray-800 hover:border-gray-600 transition-colors group">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-purple-400" />
                    <span className="text-gray-300 text-sm font-medium">Email</span>
                  </div>
                  <ArrowUpRight size={16} className="text-gray-500 group-hover:text-gray-300 transition-colors" />
                </a>
              </div>
            </motion.div>

            {/* Status Widget */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111827] border border-gray-800 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <MapPin size={16} className="text-gray-400" />
                <h4 className="text-gray-100 font-semibold">Status</h4>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Current Availability:</span>
                  <span className="text-green-400 font-medium bg-green-500/10 px-2 py-1 rounded">Open to Roles</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Local Time:</span>
                  <span className="text-gray-300 font-mono">GMT+5:30</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-800 flex items-center gap-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> BENGALURU, INDIA
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
