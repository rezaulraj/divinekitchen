import React from "react";
import { motion } from "framer-motion";
import gallery1 from "../../assets/images/menu/gal1.jpg?url";
import gallery2 from "../../assets/images/menu/gal2.jpg?url";
import gallery3 from "../../assets/images/menu/gal3.jpg?url";
import gallery4 from "../../assets/images/menu/gal4.jpg?url";
import gallery5 from "../../assets/images/menu/gal5.jpg?url";
import gallery6 from "../../assets/images/menu/gal6.jpg?url";

const GalleryHome = () => {
  const galleryImages = [
    { id: 1, src: gallery1, size: "md:col-span-2" },
    { id: 2, src: gallery2, size: "md:col-span-1" },
    { id: 3, src: gallery3, size: "md:col-span-1" },
    { id: 4, src: gallery4, size: "md:col-span-2" },
    { id: 5, src: gallery5, size: "md:col-span-2" },
    { id: 6, src: gallery6, size: "md:col-span-1" },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const imageHover = {
    scale: 1.03,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  };

  return (
    <section className="max-w-screen-lg mx-auto px-4 py-16 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="text-center mb-12 space-y-2"
      >
        <motion.h1
          variants={item}
          className="text-primary text-3xl md:text-4xl lg:text-6xl font-lobster font-semibold mb-2"
        >
          Our Gallery
        </motion.h1>

        <motion.p
          variants={fadeIn}
          className="text-gray-700 max-w-md mx-auto text-lg"
        >
          A collection of our special moments
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={container}
        className="grid grid-cols-1 md:grid-cols-3 gap-3"
      >
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            variants={item}
            className={`relative group overflow-hidden rounded-lg ${image.size}`}
            whileHover="hover"
          >
            <motion.img
              src={image.src}
              alt="Gallery image"
              className="w-full h-96 object-cover"
              initial={{ scale: 1 }}
              whileHover={imageHover}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GalleryHome;
