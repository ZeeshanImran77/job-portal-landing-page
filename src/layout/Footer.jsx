import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Find Jobs", path: "/" },
  { name: "Companies", path: "/companies" },
  { name: "About", path: "/about" },
  { name: "Sign In", path: "/signIn" },
];

const Footer = () => {
  return (
    <>
      <footer className="border-t border-slate-300 bg-surface-gray">
        <ul className="mx-auto max-w-7xl px-6 py-8  flex gap-5 flex-wrap md:gap-7 justify-center md:justify-start">
          {navLinks.map((link) => (
            <li key={link.name} className="list-none">
              <NavLink
                to={link.path}
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
        </ul>
      </footer>
    </>
  );
};

export default Footer;
