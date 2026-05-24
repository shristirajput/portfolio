import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const navLinks = ["hero", "about", "skills", "projects", "experience", "certificates", "contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(26,21,37,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(61,45,85,0.5)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <span
          className="font-display text-xl font-bold"
          style={{ color: "var(--accent-light)" }}
        >
          Shristi Singh
        </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-7 items-center">
          {navLinks.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="active-nav"
                className="cursor-pointer text-sm font-medium transition-all duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--accent-light)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5" style={{ background: "var(--accent-light)" }} />
          <span className="block w-6 h-0.5" style={{ background: "var(--accent-light)" }} />
          <span className="block w-4 h-0.5" style={{ background: "var(--accent-light)" }} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-4"
          style={{ background: "rgba(26,21,37,0.97)", borderTop: "1px solid var(--border)" }}
        >
          {navLinks.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-sm font-medium"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
