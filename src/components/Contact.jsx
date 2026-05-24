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
    <section
      id="contact"
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: "var(--bg-section)" }}
    >
      {/* Blob */}
      <div
        className="blob"
        style={{
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(196,114,138,0.3), transparent)",
          bottom: "-10%",
          right: "-5%",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Let's Bloom Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          Drop a message to brighten my day 🌸
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3">
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                style={{ background: "rgba(196,114,138,0.15)", color: "var(--accent)" }}
              >
                📧
              </span>
              <div>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Email</p>
                <a
                  href={`mailto:${process.env.REACT_APP_EMAIL}`}
                  className="text-sm font-medium hover:underline"
                  style={{ color: "var(--accent-light)" }}
                >
                  {process.env.REACT_APP_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                style={{ background: "rgba(196,114,138,0.15)", color: "var(--accent)" }}
              >
                📞
              </span>
              <div>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Phone</p>
                <a
                  href={`tel:${process.env.REACT_APP_PHONE}`}
                  className="text-sm font-medium hover:underline"
                  style={{ color: "var(--accent-light)" }}
                >
                  {process.env.REACT_APP_PHONE}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                style={{ background: "rgba(196,114,138,0.15)", color: "var(--accent)" }}
              >
                🔗
              </span>
              <div>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>LinkedIn</p>
                <a
                  href={process.env.REACT_APP_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline"
                  style={{ color: "var(--accent-light)" }}
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                style={{ background: "rgba(196,114,138,0.15)", color: "var(--accent)" }}
              >
                🐙
              </span>
              <div>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>GitHub</p>
                <a
                  href={process.env.REACT_APP_GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline"
                  style={{ color: "var(--accent-light)" }}
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="dark-input"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="dark-input"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              className="dark-input"
              rows="5"
              required
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-accent w-full text-center"
              style={{ padding: "0.85rem 1.6rem" }}
            >
              Send Some Sunshine
            </motion.button>
          </motion.form>
        </div>

        {/* Status Message */}
        {statusMessage && (
          <p
            className="mt-6 text-center text-sm font-medium"
            style={{ color: "var(--accent-light)" }}
          >
            {statusMessage}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
