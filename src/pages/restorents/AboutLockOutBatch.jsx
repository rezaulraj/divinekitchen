import React from "react";
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
  const handleDownload = (pdfPath, fileName) => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = fileName || "menu.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Split Hero Section */}
      <div className="flex flex-col md:flex-row h-screen">
        {/* Image Side (Left on desktop, top on mobile) */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
          <img
            src={beachImage}
            alt="LockOut Beach club with ocean view"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 md:bg-gradient-to-r md:from-black md:to-transparent"></div>

          {/* Floating Reserve Button on Image */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center md:hidden">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-xl">
              Reserve Now
            </button>
          </div>
        </div>

        {/* Text Side (Right on desktop, bottom on mobile) */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 md:p-12 bg-white">
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-500 mb-6 font-serif">
              LockOut Beach
            </h1>
            <p className="text-xl text-amber-600 italic mb-8">
              Zandvoort's Premier Beach Club
            </p>

            <div className="space-y-6 text-gray-700 mb-10">
              <p>
                LockOut Beach embodies the vibrant spirit of coastal living.
                Perfectly positioned along Zandvoort's golden shoreline, we
                offer breathtaking ocean vistas and an electrifying atmosphere.
              </p>

              <p>
                With its dynamic energy and welcoming ambiance, LockOut Beach
                captures the essence of Zandvoort's coastal charm while
                providing an exhilarating escape,{" "}
                <span className="italic text-amber-600 font-medium">
                  'Where waves meet wonder'
                </span>
                .
              </p>

              <div className="flex items-center text-blue-900">
                <FaMapMarkerAlt className="mr-2 text-amber-500" />
                <span>Zandvoort Beach, Netherlands</span>
              </div>
            </div>

            {/* Reserve Button - Hidden on mobile (shown on image instead) */}
            <div className="hidden md:block text-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
                Reserve Now
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              <div className="flex items-center">
                <FaRegClock className="text-amber-500 mr-2" />
                <span>10AM - 10PM</span>
              </div>
              <div className="flex items-center">
                <FaUmbrellaBeach className="text-amber-500 mr-2" />
                <span>Daybeds</span>
              </div>
              <div className="flex items-center">
                <FaCocktail className="text-amber-500 mr-2" />
                <span>Cocktails</span>
              </div>
              <div className="flex items-center">
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
                <span>Ocean View</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
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
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-3xl font-bold text-amber-500 mb-6 font-serif">
              Signature Experiences
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-xl font-medium text-amber-600">
                  Sunset Sessions
                </h3>
                <p className="text-gray-700">
                  Daily live music performances as the sun dips below the
                  horizon.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-xl font-medium text-amber-600">
                  Beachfront Dining
                </h3>
                <p className="text-gray-700">
                  Fresh seafood and Mediterranean-inspired cuisine with toes in
                  the sand.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-xl font-medium text-amber-600">
                  VIP Cabanas
                </h3>
                <p className="text-gray-700">
                  Private oceanfront retreats with dedicated service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-primary text-center mb-16 font-serif">
            Our Menu
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Full Menu */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={foodImage}
                  alt="Gourmet dishes"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <FaUtensils className="text-amber-500 mr-3 text-xl" />
                  <h3 className="text-xl font-bold text-blue-900">Full Menu</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Explore our exquisite selection of coastal-inspired dishes
                  crafted with locally-sourced ingredients.
                </p>
                <button
                  onClick={() =>
                    handleDownload(fullMenuPDF, "LockOutBeach-FullMenu.pdf")
                  }
                  className="text-amber-600 font-semibold hover:text-amber-700 transition-colors cursor-pointer"
                >
                  View Menu →
                </button>
              </div>
            </div>

            {/* Beverage Menu */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={wineImage}
                  alt="Wine selection"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <FaWineBottle className="text-amber-500 mr-3 text-xl" />
                  <h3 className="text-xl font-bold text-blue-900">
                    Beverage Menu
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Premium selection of wines, spirits, and non-alcoholic
                  beverages to complement your experience.
                </p>
                <button
                  onClick={() =>
                    handleDownload(
                      beverageMenuPDF,
                      "LockOutBeach-BeverageMenu.pdf"
                    )
                  }
                  className="text-amber-600 font-semibold hover:text-amber-700 transition-colors cursor-pointer"
                >
                  View Selection →
                </button>
              </div>
            </div>

            {/* Cocktail List */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={cocktailImage}
                  alt="Signature cocktails"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <FaCocktail className="text-amber-500 mr-3 text-xl" />
                  <h3 className="text-xl font-bold text-blue-900">
                    Cocktail List
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our award-winning mixologists craft innovative cocktails using
                  fresh, seasonal ingredients.
                </p>
                <button
                  onClick={() =>
                    handleDownload(
                      cocktailMenuPDF,
                      "LockOutBeach-CocktailMenu.pdf"
                    )
                  }
                  className="text-amber-600 font-semibold hover:text-amber-700 transition-colors cursor-pointer"
                >
                  Discover Drinks →
                </button>
              </div>
            </div>

            {/* Wine Experts */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={sommelierImage}
                  alt="Wine expert"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <FaWineGlassAlt className="text-amber-500 mr-3 text-xl" />
                  <h3 className="text-xl font-bold text-blue-900">
                    Wine Experts
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Consult with our sommeliers to find the perfect wine pairing
                  for your meal or occasion.
                </p>
                <button
                  onClick={() =>
                    handleDownload(wineListPDF, "LockOutBeach-WineList.pdf")
                  }
                  className="text-amber-600 font-semibold hover:text-amber-700 transition-colors cursor-pointer"
                >
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 font-serif">
            Ready for your beachfront escape?
          </h3>
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-16 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Reserve Your Spot
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutLockOutBeach;
