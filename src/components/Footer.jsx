import React from "react";

const Footer = () => {
  return (
    <footer
      className="py-8 px-6 text-center"
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Social Links */}
      <div className="flex justify-center gap-5 mb-5">
        {[
          { icon: "🐙", href: process.env.REACT_APP_GITHUB, label: "GitHub" },
          { icon: "🔗", href: process.env.REACT_APP_LINKEDIN, label: "LinkedIn" },
          { icon: "📧", href: `mailto:${process.env.REACT_APP_EMAIL}`, label: "Email" },
        ].map((social, i) => (
          <a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:scale-110"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.boxShadow = "0 0 15px rgba(196,114,138,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Credit */}
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          color: "var(--text-secondary)",
        }}
      >
        <span>🌸</span>
        <span>
          Built with passion by{" "}
          <span style={{ color: "var(--accent-light)" }}>Shristi</span>
        </span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
