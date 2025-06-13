import React from "react";
import heroRestorant from "../../assets/images/restorant/lockouthero.jpg?url";
import logoimg from "/logo2.png";
import { motion } from "framer-motion";
const HeroLockoutBatch = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10"></div>

      {/* Background image with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroRestorant})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>

      {/* Logo positioned at top center */}
      <motion.div
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <img
          src={logoimg}
          alt="Company Logo"
          className="h-16 md:h-24 lg:h-32 w-auto drop-shadow-lg"
        />
      </motion.div>

      {/* Hero content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg font-lobster"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Welcome to Lockout Beach
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white max-w-2xl mb-8 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Discover serenity by the waves and golden sands.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroLockoutBatch;
