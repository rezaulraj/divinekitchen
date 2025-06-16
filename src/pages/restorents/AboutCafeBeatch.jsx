import React from "react";
import {
  FaRegClock,
  FaMapMarkerAlt,
  FaPhone,
  FaUtensils,
  FaWineGlassAlt,
  FaWineBottle,
  FaCoffee,
  FaBirthdayCake,
} from "react-icons/fa";
import cafeImage from "../../assets/images/restorant/cafe.jpg?url";
import breakfast from "../../assets/images/restorant/breakfast.jpg?url";
import lunch from "../../assets/images/restorant/lunch.jpg?url";
import evening from "../../assets/images/restorant/evening.jpg?url";
import Wine from "../../assets/images/restorant/wine-dinner.webp?url";
import coffee from "../../assets/images/restorant/coffee.jpg?url";

const AboutCafeBeatch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden order-1 md:order-2">
          <img
            src={cafeImage}
            alt="Divine Kitchen restaurant"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 md:bg-gradient-to-l md:from-black md:to-transparent"></div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center md:hidden">
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-xl">
              Book Now
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 md:p-12 bg-white order-2 md:order-1">
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-600 mb-6 font-serif">
              Cafe Beach
            </h1>
            <p className="text-xl text-amber-500 italic mb-8">
              Zandvoort's Favorite
            </p>

            <div className="space-y-6 text-gray-700 mb-10">
              <p>
                Divine Kitchen embraces a free-spirited dining culture. It is
                perfectly situated along the beautiful coastline of Zandvoort,
                offering stunning views and a tranquil atmosphere.
              </p>

              <p>
                With its unique charm and welcoming vibe, Divine Kitchen
                captures the essence of Zandvoort's lively energy while
                providing a peaceful escape,{" "}
                <span className="italic text-amber-600 font-medium">
                  'A world away'
                </span>{" "}
                in the heart of this seaside town.
              </p>

              <div className="flex items-center text-amber-800">
                <FaMapMarkerAlt className="mr-2 text-amber-600" />
                <span>Zandvoort Beach, Netherlands</span>
              </div>
            </div>

            <div className="hidden md:block text-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
                Book Now
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-12">
              <div className="flex items-center">
                <FaRegClock className="text-amber-600 mr-2" />
                <span>12PM - 11PM</span>
              </div>
              <div className="flex items-center">
                <FaUtensils className="text-amber-600 mr-2" />
                <span>Ocean View</span>
              </div>
              <div className="flex items-center">
                <FaWineGlassAlt className="text-amber-600 mr-2" />
                <span>Wine Pairing</span>
              </div>
              <div className="flex items-center">
                <FaBirthdayCake className="text-amber-600 mr-2" />
                <span>Private Events</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-amber-600 mb-6 font-serif">
              Our Philosophy
            </h2>
            <div className="space-y-6 text-gray-700">
              <p>
                Founded with a passion for culinary excellence, Divine Kitchen
                brings together the freshest local ingredients with
                international flavors. Our chefs create dishes that tell a story
                of the sea and the land.
              </p>
              <p>
                Voted Zandvoort's most beloved dining spot three years running,
                we pride ourselves on warm hospitality and memorable dining
                experiences that keep guests coming back.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-amber-600 mb-6 font-serif">
              Dining Experiences
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-xl font-medium text-amber-600">
                  Chef's Table
                </h3>
                <p className="text-gray-700">
                  An intimate culinary journey with personalized menu creations.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-xl font-medium text-amber-600">
                  Sunset Dining
                </h3>
                <p className="text-gray-700">
                  Reserve our prime ocean-view tables for golden hour.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-xl font-medium text-amber-600">
                  Private Events
                </h3>
                <p className="text-gray-700">
                  Customized menus and dedicated service for special occasions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-amber-600 text-center mb-16 font-serif">
            Our Cafe Services
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 bg-amber-200 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12 md:space-y-24">
              {/* Breakfast Service */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-6 md:pr-12 order-2 md:order-1">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 p-3 rounded-full mr-4">
                        <FaCoffee className="text-amber-600 text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-800">
                        Morning Bliss
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Start your day right with our sunrise breakfast service
                      featuring artisanal pastries, organic eggs, and specialty
                      coffee blends.
                    </p>
                    <div className="flex items-center text-amber-600">
                      <FaRegClock className="mr-2" />
                      <span>7:00 AM - 11:00 AM</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 order-1 md:order-2">
                  <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={breakfast}
                      alt="Breakfast service"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Lunch Service */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-6 md:pl-12">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 p-3 rounded-full mr-4">
                        <FaUtensils className="text-amber-600 text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-800">
                        Midday Retreat
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Light lunches and refreshing drinks perfect for a
                      beachside break. Enjoy our signature salads, sandwiches,
                      and cold-pressed juices.
                    </p>
                    <div className="flex items-center text-amber-600">
                      <FaRegClock className="mr-2" />
                      <span>11:00 AM - 3:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={lunch}
                      alt="Lunch service"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Afternoon Service */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-6 md:pr-12 order-2 md:order-1">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 p-3 rounded-full mr-4">
                        <FaWineGlassAlt className="text-amber-600 text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-800">
                        Golden Hour
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Afternoon delights with our premium tea selection, wine
                      flights, and shareable small plates as the sun sets over
                      the ocean.
                    </p>
                    <div className="flex items-center text-amber-600">
                      <FaRegClock className="mr-2" />
                      <span>3:00 PM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 order-1 md:order-2">
                  <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={evening}
                      alt="Evening service"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Evening Service */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-6 md:pl-12">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 p-3 rounded-full mr-4">
                        <FaWineBottle className="text-amber-600 text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-800">
                        Moonlight Dining
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Intimate evening dining with candlelit tables, chef's
                      specials, and an extensive wine list under the stars.
                    </p>
                    <div className="flex items-center text-amber-600">
                      <FaRegClock className="mr-2" />
                      <span>6:00 PM - 11:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={Wine}
                      alt="Evening dining"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
              {/* unlimite */}

              <div className="flex flex-col md:flex-row items-center bg-amber-50 rounded-2xl p-1">
                <div className="md:w-1/2 p-6 order-2 md:order-1">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-amber-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 p-3 rounded-full mr-4">
                        <FaCoffee className="text-amber-600 text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-800">
                        The Perpetual Brew
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Our 24/7 coffee and tea bar features single-origin beans,
                      rare tea leaves, and artisanal brewing methods. Enjoy
                      complimentary biscotti with every pour.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                        Ethiopian Yirgacheffe
                      </span>
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                        Matcha Ceremonial Grade
                      </span>
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                        Cold Brew Tasting Flights
                      </span>
                    </div>
                    <div className="flex items-center text-amber-600 mt-4">
                      <FaRegClock className="mr-2" />
                      <span className="font-medium">Available anytime</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 order-1 md:order-2">
                  <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                    <img
                      src={coffee}
                      alt="Coffee and tea service"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <p className="text-white text-sm font-light">
                        "The sea air makes our espresso taste sweeter" - Marco,
                        Head Barista
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBirthdayCake className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">
                Special Events
              </h3>
              <p className="text-gray-600">
                Host your celebrations with our customizable event packages and
                dedicated service teams.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">
                Seasonal Specials
              </h3>
              <p className="text-gray-600">
                Rotating menu featuring the best seasonal ingredients and
                limited-time creations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">
                Members Club
              </h3>
              <p className="text-gray-600">
                Exclusive benefits for members including priority booking and
                special tasting events.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-amber-800 mb-6 font-serif">
            Ready for your culinary journey?
          </h3>
          <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-4 px-16 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Reserve Your Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCafeBeatch;
