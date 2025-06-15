import React from "react";
import heroImage from "../../assets/images/wedding/wedding.jpg?url";
import { FaHeart, FaGlassCheers, FaRing, FaCamera } from "react-icons/fa";

const HeroWeddingBeatch = () => {
  return (
    <section className="relative">
      {/* Hero Image with Overlay */}
      <div className="relative h-screen max-h-[800px] overflow-hidden">
        <img
          src={heroImage}
          alt="Elegant wedding at Divine Kitch"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            Weddings at <span className="text-amber-200">Divine Kitch</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Where dreams meet the ocean, and love stories begin
          </p>
          <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg">
            Plan Your Special Day
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white mt-2 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
          <FaHeart className="text-4xl text-amber-500 mx-auto mb-4" />
          <h3 className="text-xl font-serif font-bold mb-2">
            Romantic Settings
          </h3>
          <p className="text-gray-600">
            Breathtaking ocean views and intimate beachfront venues
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
          <FaGlassCheers className="text-4xl text-amber-500 mx-auto mb-4" />
          <h3 className="text-xl font-serif font-bold mb-2">
            Gourmet Catering
          </h3>
          <p className="text-gray-600">
            Exquisite menus crafted by our award-winning chefs
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
          <FaRing className="text-4xl text-amber-500 mx-auto mb-4" />
          <h3 className="text-xl font-serif font-bold mb-2">Custom Packages</h3>
          <p className="text-gray-600">
            Tailored experiences for your perfect celebration
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
          <FaCamera className="text-4xl text-amber-500 mx-auto mb-4" />
          <h3 className="text-xl font-serif font-bold mb-2">Photo Ready</h3>
          <p className="text-gray-600">
            Stunning backdrops for unforgettable wedding photos
          </p>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-amber-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-8 text-gray-800">
            Love Stories
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <p className="text-lg italic mb-4">
              "Our wedding at Divine Kitch was beyond perfect. The team
              anticipated our every need and created magic we'll remember
              forever."
            </p>
            <p className="font-semibold text-amber-600">- Sarah & Michael</p>
          </div>
          <button className="px-6 py-2 border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white rounded-full transition-colors">
            View More Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroWeddingBeatch;
