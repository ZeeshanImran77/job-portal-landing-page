import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-surface-gray sticky top-0 z-50 shadow-md ">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-10 w-10 object-contain mr-2"
            />
            <h2 className="text-3xl text-[--color-brand-blue] font-bold">
              Find Jobs
            </h2>
          </div>

          {/* Desktop Navigation (Hidden on Mobile < 768px) */}
          <div className="hidden md:flex gap-6 items-center">
            <Navbar />
            <Link to="/signup">
              <Button children="Sign Up Now" variant="primary" />
            </Link>
          </div>

          {/* Mobile Toggle Button (Hidden on Desktop > 768px) */}
          <div className="md:hidden flex gap-4">
            <Button
              children="Sign Up Now"
              variant="primary"
              className="md:hidden"
            />
            <button
              className="md:hidden text-[--color-brand-dark]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl p-8 flex flex-col gap-8 transition-all duration-300">
            <Navbar isMobile closeMenu={() => setIsOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
