import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaRegClock,
  FaUmbrellaBeach,
  FaCocktail,
  FaMapMarkerAlt,
  FaWineGlassAlt,
  FaUtensils,
  FaWineBottle,
} from "react-icons/fa";
import beachImage from "../../assets/images/menu/gal2.jpg?url";
import foodImage from "../../assets/images/menu/me1.jpg?url";
import wineImage from "../../assets/images/menu/ba.jpg?url";
import cocktailImage from "../../assets/images/menu/me3.jpg?url";
import sommelierImage from "../../assets/images/menu/me4.jpg?url";

const fullMenuPDF = "/pdfs/full-menu.pdf";
const beverageMenuPDF = "/pdfs/beverage-menu.pdf";
const cocktailMenuPDF = "/pdfs/cocktail-menu.pdf";
const wineListPDF = "/pdfs/wine-list.pdf";

const AboutLockOutBeach = () => {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);

  const handleDownload = (pdfPath, fileName) => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = fileName || "menu.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardHover = {
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      <div className="flex flex-col md:flex-row h-screen relative">
        <motion.div
          className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden"
          style={{ y: y1 }}
        >
          <img
            src={beachImage}
            alt="LockOut Beach club with ocean view"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 md:bg-gradient-to-r md:from-black md:to-transparent"></div>
          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-12 rounded-full text-lg transition duration-300 shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve Now
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 md:p-12 bg-white"
          style={{ y: y2 }}
        >
          <motion.div
            className="max-w-md mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-amber-500 mb-6 font-serif"
              variants={fadeIn}
            >
              LockOut Beach
            </motion.h1>
            <motion.p
              className="text-xl text-amber-600 italic mb-8"
              variants={fadeIn}
            >
              Zandvoort's Premier Beach Club
            </motion.p>

            <motion.div
              className="space-y-6 text-gray-700 mb-10"
              variants={staggerContainer}
            >
              <motion.p variants={fadeIn}>
                LockOut Beach embodies the vibrant spirit of coastal living.
                Perfectly positioned along Zandvoort's golden shoreline, we
                offer breathtaking ocean vistas and an electrifying atmosphere.
              </motion.p>

              <motion.p variants={fadeIn}>
                With its dynamic energy and welcoming ambiance, LockOut Beach
                captures the essence of Zandvoort's coastal charm while
                providing an exhilarating escape,{" "}
                <span className="italic text-amber-600 font-medium">
                  'Where waves meet wonder'
                </span>
                .
              </motion.p>

              <motion.div
                className="flex items-center text-blue-900"
                variants={fadeIn}
              >
                <FaMapMarkerAlt className="mr-2 text-amber-500" />
                <span>Zandvoort Beach, Netherlands</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden md:block text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reserve Now
              </motion.button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4 mt-12"
              variants={staggerContainer}
            >
              {[
                {
                  icon: <FaRegClock className="text-amber-500 mr-2" />,
                  text: "10AM - 10PM",
                },
                {
                  icon: <FaUmbrellaBeach className="text-amber-500 mr-2" />,
                  text: "Daybeds",
                },
                {
                  icon: <FaCocktail className="text-amber-500 mr-2" />,
                  text: "Cocktails",
                },
                {
                  icon: (
                    <svg
                      className="w-5 h-5 text-amber-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  text: "Ocean View",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  variants={fadeIn}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl font-bold text-amber-500 mb-6 font-serif">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-700">
              <p>
                Founded in 2015, LockOut Beach began as a dream to create
                Zandvoort's most exclusive yet welcoming beachfront destination.
                Our founders envisioned a space where luxury meets the raw
                beauty of the North Sea coast.
              </p>
              <p>
                Today, we're proud to be rated the #1 beach club in the region,
                known for our exceptional service, curated cocktails, and
                unforgettable sunset experiences.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-3xl font-bold text-amber-500 mb-6 font-serif">
              Signature Experiences
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Sunset Sessions",
                  description:
                    "Daily live music performances as the sun dips below the horizon.",
                },
                {
                  title: "Beachfront Dining",
                  description:
                    "Fresh seafood and Mediterranean-inspired cuisine with toes in the sand.",
                },
                {
                  title: "VIP Cabanas",
                  description:
                    "Private oceanfront retreats with dedicated service.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-amber-500 pl-4"
                  whileHover={{ x: 5 }}
                >
                  <h3 className="text-xl font-medium text-amber-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold text-primary text-center mb-16 font-serif"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Menu
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                image: foodImage,
                icon: <FaUtensils className="text-amber-500 mr-3 text-xl" />,
                title: "Full Menu",
                description:
                  "Explore our exquisite selection of coastal-inspired dishes crafted with locally-sourced ingredients.",
                pdf: fullMenuPDF,
                fileName: "LockOutBeach-FullMenu.pdf",
              },
              {
                image: wineImage,
                icon: <FaWineBottle className="text-amber-500 mr-3 text-xl" />,
                title: "Beverage Menu",
                description:
                  "Premium selection of wines, spirits, and non-alcoholic beverages to complement your experience.",
                pdf: beverageMenuPDF,
                fileName: "LockOutBeach-BeverageMenu.pdf",
              },
              {
                image: cocktailImage,
                icon: <FaCocktail className="text-amber-500 mr-3 text-xl" />,
                title: "Cocktail List",
                description:
                  "Our award-winning mixologists craft innovative cocktails using fresh, seasonal ingredients.",
                pdf: cocktailMenuPDF,
                fileName: "LockOutBeach-CocktailMenu.pdf",
              },
              {
                image: sommelierImage,
                icon: (
                  <FaWineGlassAlt className="text-amber-500 mr-3 text-xl" />
                ),
                title: "Wine Experts",
                description:
                  "Consult with our sommeliers to find the perfect wine pairing for your meal or occasion.",
                pdf: wineListPDF,
                fileName: "LockOutBeach-WineList.pdf",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                variants={fadeIn}
                whileHover="hover"
                // variants={cardHover}
              >
                <div className="h-48 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    {item.icon}
                    <h3 className="text-xl font-bold text-blue-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <motion.button
                    onClick={() => handleDownload(item.pdf, item.fileName)}
                    className="text-amber-600 font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    View Menu →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 font-serif">
            Ready for your beachfront escape?
          </h3>
          <motion.button
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-4 px-16 rounded-full text-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(to right, #f59e0b, #d97706)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve Your Spot
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutLockOutBeach;
