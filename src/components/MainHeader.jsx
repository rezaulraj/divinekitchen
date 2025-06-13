import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo1.png";
import { FiChevronDown, FiX, FiMenu } from "react-icons/fi";
import BookingPopup from "./BookingPopup";
const MainHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [showBookingPopup, setShowBookingPopup] = useState(false);
  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "Restaurants",
      // path: "/restaurants",
      subNav: [
        { label: "Lookout Beach", path: "/lookout-beach" },
        { label: "Cafe Beach", path: "/cafe-beach" },
      ],
    },
    { label: "Menus", path: "/#our-menus" },
    { label: "Wedding Ceremony", path: "/wedding-ceremony" },
    {
      label: "Events",
      path: "/events",
      subNav: [
        { label: "Gallery Boutique", path: "/events/gallery-boutique" },
        { label: "Milestone Moments", path: "/events/milestone-moments" },
        { label: "Legacy", path: "/events/awards" },
      ],
    },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const toggleBookingPopup = () => {
    setShowBookingPopup(!showBookingPopup);
  };
  return (
    <header className="w-full bg-white shadow-md">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#ff2709] to-[#ffaa13] text-white py-2 px-4 text-center text-sm md:text-base">
        <p>✨ Special Offer: 20% off on all weekend bookings! ✨</p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a href="/">
              <img src={logo} alt="Company Logo" className="h-12 md:h-16" />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  href={item.path}
                  className="flex items-center px-2 py-2 text-gray-800 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                  {item.subNav && (
                    <FiChevronDown className="ml-1 transform group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </a>

                {item.subNav && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 w-56 bg-white shadow-lg rounded-md py-2 z-50 hidden group-hover:block"
                  >
                    {item.subNav.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-[#ff2709] hover:text-white transition-colors duration-200"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleBookingPopup}
              className="bg-gradient-to-r from-[#ff2709] to-[#ffaa13] text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              Book Now
            </motion.button>

            <AnimatePresence>
              {showBookingPopup && (
                <BookingPopup onClose={toggleBookingPopup} />
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-2">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100">
                  <button
                    className="flex items-center justify-between w-full py-3 text-gray-800 font-medium"
                    onClick={() => item.subNav && toggleSubmenu(index)}
                  >
                    <a
                      href={!item.subNav ? item.path : "#"}
                      className="flex-1 text-left"
                    >
                      {item.label}
                    </a>
                    {item.subNav && (
                      <FiChevronDown
                        className={`ml-2 transition-transform duration-200 ${
                          activeSubmenu === index ? "transform rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {item.subNav && activeSubmenu === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4"
                    >
                      {item.subNav.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.path}
                          className="block py-2 text-gray-600 hover:text-[#ff2709] transition-colors duration-200"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleBookingPopup}
                className="bg-gradient-to-r from-[#ff2709] to-[#ffaa13] text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                Book Now
              </motion.button>

              <AnimatePresence>
                {showBookingPopup && (
                  <BookingPopup onClose={toggleBookingPopup} />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MainHeader;
