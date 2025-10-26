import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatusMessage("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Contact Me
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-6"
        >
          Let’s connect! Feel free to reach out for collaborations or just a chat.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 max-w-md mx-auto"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-300"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg border border-gray-300"
            rows="5"
            required
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Status Message */}
        {statusMessage && (
          <p className="mt-4 text-lg font-medium text-gray-700">{statusMessage}</p>
        )}

        {/* Direct Contact Links */}
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-6 text-gray-700">
          <a
            href={`mailto:${process.env.REACT_APP_EMAIL}`}
            className="hover:text-indigo-600 transition"
          >
            📧 {process.env.REACT_APP_EMAIL}
          </a>
          <a
            href={`tel:${process.env.REACT_APP_PHONE}`}
            className="hover:text-indigo-600 transition"
          >
            📞 {process.env.REACT_APP_PHONE}
          </a>
          <a
            href={process.env.REACT_APP_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            🔗 LinkedIn
          </a>
          <a
            href={process.env.REACT_APP_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            🐱 GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
