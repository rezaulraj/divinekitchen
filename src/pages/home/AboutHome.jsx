import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import about1 from "../../assets/images/home/a1.jpg";
import about2 from "../../assets/images/home/a2.jpg";
import about3 from "../../assets/images/home/a3.jpg";
import about4 from "../../assets/images/home/a4.jpg";
import about5 from "../../assets/images/home/a5.jpg";
import about6 from "../../assets/images/home/a6.jpg";

const AboutHome = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const imageGallery = [
    { image: about1, alt: "Beach view of Divine Kitchen Café" },
    { image: about2, alt: "Oceanfront dining area" },
    { image: about3, alt: "Private function venue" },
    { image: about4, alt: "Cocktail bar at sunset" },
    { image: about5, alt: "On-beach dining experience" },
    { image: about6, alt: "Majestic Atlantic Ocean view" },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % imageGallery.length
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isHovered, imageGallery.length]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
    },
    tap: { scale: 0.98 },
  };

  return (
    <section className="max-w-screen-xl mx-auto my-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="order-2 lg:order-1"
        >
          <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold mb-4 font-merriweather">
            About The Divine Kitchen Café & Beach
          </h2>

          <p className="font-lobster leading-relaxed text-3xl md:text-5xl lg:text-6xl text-[#ff2709] mb-6">
            Cape Town's Favorite
          </p>

          <div className="space-y-4">
            {[
              "Divine Kitchen Café & Beach embraces a free-spirited beach café culture, nestled poignantly on the sea-front shoreline and flaunting her majestic views of the mighty Atlantic and Robben Island.",
              "With iconic style and playful luxury, Divine Kitchen Café & Beach captures the quintessential charm and colloquial effervescence of the bustling city vibe while offering a quaint and relaxing escape, 'a world away' in the heart of Cape Town's social mile.",
              "With a choice of five bars, ocean-view decks, nine private function venue areas, and on-beach dining, you're sure to find the perfect spot to capture that unforgettable magic, that is simply Divine Kitchen Café & Beach.",
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="font-lato text-justify text-gray-700 text-base md:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            className="bg-gradient-to-r mt-10 from-[#ff2709] to-[#ffaa13] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
          >
            Reserve a Table
          </motion.button>
        </motion.div>

        <div
          className="order-1 lg:order-2 relative h-96 lg:h-[500px] w-full rounded-xl overflow-hidden shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${imageGallery[currentImageIndex].image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {imageGallery.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentImageIndex === index
                    ? "bg-[#ffaa13] w-6"
                    : "bg-white/50"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center px-4"
          >
            <p className="text-sm md:text-base font-lato font-medium drop-shadow-md">
              {imageGallery[currentImageIndex].alt}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
