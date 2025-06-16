import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo1.png";
import { FiChevronDown, FiX, FiMenu } from "react-icons/fi";
import BookingPopup from "./BookingPopup";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const MainHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [showBookingPopup, setShowBookingPopup] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "Restaurants",
      subNav: [
        { label: "Lookout Beach", path: "/lookout-beach" },
        { label: "Cafe Beach", path: "/cafe-beach" },
      ],
    },
    { label: "Menus", path: "/#our-menus", isHash: true },
    {
      label: "Wedding Ceremony",
      subNav: [
        { label: "Wedding Lookout Beach", path: "/wedding-lookout-beach" },
        { label: "Wedding Cafe Beach", path: "/wedding-cafe-beach" },
      ],
    },
    { label: "Events", path: "/events" },
    { label: "Contact Us", path: "/#contact-us", isHash: true },
  ];

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const toggleBookingPopup = () => {
    setShowBookingPopup(!showBookingPopup);
  };

  const renderLink = (item) =>
    item.isHash ? (
      <HashLink
        smooth
        to={item.path}
        className="px-2 py-2 text-gray-800 hover:text-primary transition-colors duration-300 font-medium"
        onClick={() => setMobileMenuOpen(false)}
      >
        {item.label}
      </HashLink>
    ) : (
      <Link
        to={item.path}
        className="px-2 py-2 text-gray-800 hover:text-primary transition-colors duration-300 font-medium"
        onClick={() => setMobileMenuOpen(false)}
      >
        {item.label}
      </Link>
    );

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
            <Link to="/">
              <img src={logo} alt="Company Logo" className="h-12 md:h-16" />
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.subNav ? (
                  <>
                    <button className="flex items-center px-2 py-2 text-gray-800 hover:text-primary transition-colors duration-300 font-medium">
                      {item.label}
                      <FiChevronDown className="ml-1 transform group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 w-56 bg-white shadow-lg rounded-md py-2 z-50 hidden group-hover:block"
                    >
                      {item.subNav.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-[#ff2709] hover:text-white transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  </>
                ) : (
                  renderLink(item)
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
                  {item.subNav ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full py-3 text-gray-800 font-medium"
                        onClick={() => toggleSubmenu(index)}
                      >
                        <span>{item.label}</span>
                        <FiChevronDown
                          className={`ml-2 transition-transform duration-200 ${
                            activeSubmenu === index
                              ? "transform rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      {activeSubmenu === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4"
                        >
                          {item.subNav.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="block py-2 text-gray-600 hover:text-[#ff2709] transition-colors duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    renderLink(item)
                  )}
                </div>
              ))}
              <div className="pt-4 pb-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleBookingPopup}
                  className="w-full bg-gradient-to-r from-[#ff2709] to-[#ffaa13] text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Book Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBookingPopup && <BookingPopup onClose={toggleBookingPopup} />}
      </AnimatePresence>
    </header>
  );
};

export default MainHeader;
