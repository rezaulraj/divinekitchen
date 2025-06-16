import React from "react";
// import beach from "../../assets/images/lockout/beach.jpg";
import { FaRegClock, FaUmbrellaBeach, FaCocktail } from "react-icons/fa";

const AboutLockOutBeach = () => {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 font-sans">
      <div className="relative h-96 overflow-hidden">
        {/* <img
        //   src={beach}
          alt="LockOut Beach club with ocean view"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-thirary bg-opacity-40 flex items-center justify-center">
          <div className="text-center p-6">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-50 mb-4 font-serif">
              LockOut Beach
            </h1>
            <p className="text-xl text-blue-100 italic">
              Zandvoort's Premier Beach Club
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-lg leading-relaxed mb-6">
            LockOut Beach embodies the vibrant spirit of coastal living.
            Perfectly positioned along Zandvoort's golden shoreline, we offer
            breathtaking ocean vistas and an electrifying atmosphere.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            With its dynamic energy and welcoming ambiance, LockOut Beach
            captures the essence of Zandvoort's coastal charm while providing an
            exhilarating escape,{" "}
            <span className="italic text-amber-600">
              'Where waves meet wonder'
            </span>{" "}
            at the heart of the beachfront.
          </p>

          <p className="text-lg leading-relaxed">
            Featuring luxurious daybeds, oceanfront cabanas, and premium
            cocktail service, you'll discover the perfect spot to enjoy
            unforgettable moments under the sun and stars.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-500">
            <h3 className="flex items-center text-2xl font-serif mb-4">
              <FaRegClock className="mr-3 text-amber-600" />
              Operating Hours
            </h3>
            <p className="text-gray-700 mb-2">Monday to Sunday:</p>
            <p className="text-xl font-medium text-amber-700">
              10:00 AM - 10:00 PM
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-500">
            <h3 className="flex items-center text-2xl font-serif mb-4">
              <FaUmbrellaBeach className="mr-3 text-amber-600" />
              Beach Club Features
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Luxury daybeds
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Oceanfront cabanas
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Signature cocktails
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutLockOutBeach;
