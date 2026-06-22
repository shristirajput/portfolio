import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center bg-[#0A0E17] border-t border-gray-800">
      {/* Social Links */}
      <div className="flex justify-center gap-5 mb-6">
        {[
          { icon: <Github size={20} />, href: process.env.REACT_APP_GITHUB || "#", label: "GitHub" },
          { icon: <Linkedin size={20} />, href: process.env.REACT_APP_LINKEDIN || "#", label: "LinkedIn" },
          { icon: <Mail size={20} />, href: `mailto:${process.env.REACT_APP_EMAIL || "contact@example.com"}`, label: "Email" },
        ].map((social, i) => (
          <a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-12 h-12 rounded-full flex items-center justify-center text-gray-400 bg-[#171D2D] border border-gray-800 hover:border-purple-500/50 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Credit */}
      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-[#171D2D] border border-gray-800 text-gray-400">
        <span className="text-purple-400">⚡</span>
        <span>
          Architected by <span className="text-gray-200 font-semibold">Shristi</span>
        </span>
        <span className="text-gray-600">|</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
