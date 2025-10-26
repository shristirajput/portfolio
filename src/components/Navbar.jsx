import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer">
          Shristi Singh
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {["hero", "about", "skills", "projects", "experience", "contact"].map(
            (section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-70} // accounts for sticky navbar
                  spy={true} // 👈 track scroll position
                  activeClass="text-indigo-600 font-semibold border-b-2 border-indigo-600" // 👈 highlight style
                  className="cursor-pointer hover:text-indigo-600 transition"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
