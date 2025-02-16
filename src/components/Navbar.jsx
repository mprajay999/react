import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);

  // Framer Motion variants for dropdown animations
  const dropdownVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.2 } },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) setMenuDropdownOpen(false);
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-heading">
              Tsuki Izakaya
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="/#home"
                  className="px-3 py-2 hover:text-accent transition-colors"
                  aria-label="Home"
                >
                  Home
                </a>
              </li>
              <li className="relative">
                <button
                  onClick={() => setMenuDropdownOpen(!menuDropdownOpen)}
                  className="px-3 py-2 hover:text-accent transition-colors focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={menuDropdownOpen}
                >
                  Menu
                </button>
                <AnimatePresence>
                  {menuDropdownOpen && (
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10"
                    >
                      {['Small Plates', 'Yakitori', 'Ramen', 'Sushi', 'Drinks'].map(
                        (item) => (
                          <li key={item}>
                            <a
                              href={`/menu#${item.toLowerCase().replace(' ', '-')}`}
                              className="block px-4 py-2 hover:bg-secondary transition-colors"
                            >
                              {item}
                            </a>
                          </li>
                        )
                      )}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <a
                  href="/#about"
                  className="px-3 py-2 hover:text-accent transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/reservations"
                  className="px-3 py-2 hover:text-accent transition-colors"
                >
                  Reservations
                </a>
              </li>
              <li>
                <a
                  href="/#location"
                  className="px-3 py-2 hover:text-accent transition-colors"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="/#events"
                  className="px-3 py-2 hover:text-accent transition-colors"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>
          {/* Mobile Hamburger Menu */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background"
          >
            <ul className="px-2 pt-2 pb-3 space-y-1">
              <li>
                <a
                  href="/#home"
                  className="block px-3 py-2 hover:bg-secondary rounded-md transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={() => setMenuDropdownOpen(!menuDropdownOpen)}
                  className="w-full text-left px-3 py-2 hover:bg-secondary rounded-md transition-colors focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={menuDropdownOpen}
                >
                  Menu
                </button>
                <AnimatePresence>
                  {menuDropdownOpen && (
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="pl-4"
                    >
                      {['Small Plates', 'Yakitori', 'Ramen', 'Sushi', 'Drinks'].map(
                        (item) => (
                          <li key={item}>
                            <a
                              href={`/menu#${item.toLowerCase().replace(' ', '-')}`}
                              className="block px-3 py-2 hover:bg-secondary rounded-md transition-colors"
                              onClick={toggleMobileMenu}
                            >
                              {item}
                            </a>
                          </li>
                        )
                      )}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <a
                  href="/#about"
                  className="block px-3 py-2 hover:bg-secondary rounded-md transition-colors"
                  onClick={toggleMobileMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/reservations"
                  className="block px-3 py-2 hover:bg-secondary rounded-md transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Reservations
                </a>
              </li>
              <li>
                <a
                  href="/#location"
                  className="block px-3 py-2 hover:bg-secondary rounded-md transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="/#events"
                  className="block px-3 py-2 hover:bg-secondary rounded-md transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Events
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
