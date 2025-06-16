import React from "react";
import cafe from "../../assets/images/restorant/cafe.jpg?url";
import {
  FaRegClock,
  FaMapMarkerAlt,
  FaPhone,
  FaUtensils,
} from "react-icons/fa";

const AboutDivineKitchen = () => {
  return (
    <div className="min-h-screen bg-amber-50 text-gray-800 font-sans">
      <div className="relative h-96 overflow-hidden">
        <img
          src={cafe}
          alt="Divine Kitchen restaurant with ocean view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-thirary bg-opacity-40 flex items-center justify-center">
          <div className="text-center p-6">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-50 mb-4 font-serif">
              Divine Kitchen
            </h1>
            <p className="text-xl text-amber-100 italic">
              Zandvoort's Favorite
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-lg leading-relaxed mb-6">
            Divine Kitchen embraces a free-spirited dining culture. It is
            perfectly situated along the beautiful coastline of Zandvoort,
            offering stunning views and a tranquil atmosphere.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            With its unique charm and welcoming vibe, Divine Kitchen captures
            the essence of Zandvoort's lively energy while providing a peaceful
            escape,{" "}
            <span className="italic text-amber-600">'A world away'</span> in the
            heart of this seaside town.
          </p>

          <p className="text-lg leading-relaxed">
            Featuring cozy indoor seating, ocean-view spaces, and options for
            private gatherings, you'll find the perfect spot to enjoy
            unforgettable moments that are simply divine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-500">
            <h3 className="flex items-center text-2xl font-serif mb-4">
              <FaRegClock className="mr-3 text-amber-600" />
              Trading Hours
            </h3>
            <p className="text-gray-700 mb-2">Monday to Sunday:</p>
            <p className="text-xl font-medium text-amber-700">
              12:00 PM - 11:00 PM
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-500">
            <h3 className="flex items-center text-2xl font-serif mb-4">
              <FaUtensils className="mr-3 text-amber-600" />
              Dining Options
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Cozy indoor seating
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Ocean-view dining
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Private gatherings
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutDivineKitchen;
