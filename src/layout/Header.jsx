import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

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
            <h2 className="text-xl md:text-3xl text-brand-blue font-bold">
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
            <Link to="/signup">
              <Button
                children="Sign Up Now"
                variant="primary"
                className="!py-1 !px-3.5 md:hidden"
              />
            </Link>

            <button
              className="md:hidden text-brand-dark"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              className="md:hidden fixed top-16 left-0 w-full bg-surface-gray shadow-xl p-8 flex flex-col gap-8 z-50"
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Navbar isMobile closeMenu={() => setIsOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
