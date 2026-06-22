import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Terminal, Radio, Menu, X } from "lucide-react";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

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
        background: scrolled ? "rgba(10, 14, 23, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Terminal size={22} className="text-blue-500" />
          <span className="font-sans text-xl font-bold tracking-tight text-gray-100">
            Shristi<span className="text-purple-500">.dev</span>
          </span>
        </div>

        {/* Desktop Links & Right Icons */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-8 items-center mr-4">
            {navLinks.map((section) => (
              <li key={section.id}>
                <Link
                  to={section.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="text-purple-400 font-semibold"
                  className="cursor-pointer text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors"
                >
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Radar Icon */}
          <div className="relative flex items-center justify-center text-gray-400 hover:text-purple-400 cursor-pointer transition-colors">
            <Radio size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-pulseGreen"></span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-gray-400 hover:text-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-5 shadow-2xl"
          style={{ background: "rgba(15, 20, 30, 0.98)", borderTop: "1px solid var(--border)" }}
        >
          {navLinks.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-base font-medium text-gray-400 hover:text-purple-400"
              onClick={() => setMenuOpen(false)}
            >
              {section.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
