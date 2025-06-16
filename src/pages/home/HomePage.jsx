import React from "react";
import { motion } from "framer-motion";
import Heropage from "./Heropage";
import AboutHome from "./AboutHome";
import MenuHome from "./MenuHome";
import GalleryHome from "./GalleryHome";

const HomePage = () => {
  // Animation variants for section transitions
  const sectionVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - No animation needed as it's the first view */}
      <Heropage />

      {/* About Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <AboutHome />
      </motion.div>

      {/* Menu Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ delay: 0.2 }}
      >
        <MenuHome />
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ delay: 0.4 }}
      >
        <GalleryHome />
      </motion.div>
    </div>
  );
};

export default HomePage;
