import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo1.png";
import { FiChevronDown, FiX, FiMenu } from "react-icons/fi";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const navItems = [
    { label: "Home", path: "/home" },
    {
      label: "Restaurants",
      path: "/restaurants",
      subNav: [
        { label: "Lookout Beach", path: "/lookout-beach" },
        { label: "Cafe Beach", path: "/cafe-beach" },
      ],
    },
    { label: "Our Menu", path: "/#our-menus" },
    {
      label: "Wedding Ceremony",
      path: "/wedding-ceremony",
      subNav: [
        { label: "Wedding Lookout Beach", path: "/wedding-lookout-beach" },
        { label: "Wedding Cafe Beach", path: "/wedding-cafe-beach" },
      ],
    },
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

  return (
    <header className="w-full bg-white shadow-md">
      <div className="bg-gradient-to-r from-[#ff2709] to-[#ffaa13] text-white py-2 px-4 text-center text-sm md:text-base">
        <p>✨ Special Offer: 20% off on all weekend bookings! ✨</p>
      </div>

      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
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
              className="bg-gradient-to-r from-[#ff2709] to-[#ffaa13] text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              Book Now
            </motion.button>
          </div>

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
                  <div className="flex items-center justify-between w-full">
                    <a
                      href={!item.subNav ? item.path : "#"}
                      className="py-3 text-gray-800 font-medium flex-1"
                      onClick={(e) => {
                        if (item.subNav) {
                          e.preventDefault();
                          toggleSubmenu(index);
                        }
                      }}
                    >
                      {item.label}
                    </a>
                    {item.subNav && (
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="p-2 focus:outline-none"
                      >
                        <FiChevronDown
                          className={`transition-transform duration-200 ${
                            activeSubmenu === index
                              ? "transform rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  <AnimatePresence>
                    {item.subNav && activeSubmenu === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 overflow-hidden"
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
                  </AnimatePresence>
                </div>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-gradient-to-r from-[#ff2709] to-[#ffaa13] text-white px-6 py-3 rounded-full font-medium shadow-md mb-4"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
