import React from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Jobs", path: "/jobs" },
  { name: "Companies", path: "/companies" },
  { name: "About", path: "/about" },
  { name: "Sign In", path: "/signIn" },
];

const Navbar = ({ isMobile, closeMenu }) => {
  return (
    <>
      <nav
        className={`flex  items-center ${
          isMobile ? "flex-col items-start gap-3" : "gap-6"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.name} className="list-none">
            <NavLink
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) => `
              text-lg font-medium transition-colors duration-200
              ${
                isActive
                  ? "text-brand-blue"
                  : "text-brand-dark hover:text-brand-blue"
              }
            `}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
