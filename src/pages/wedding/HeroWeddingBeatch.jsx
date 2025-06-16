import React, { useState, useEffect } from "react";
import heroImage from "../../assets/images/wedding/wedding.jpg?url";
import {
  FaHeart,
  FaGlassCheers,
  FaRing,
  FaCamera,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import weddinggalry1 from "../../assets/images/wedding/w1.jpg?url";
import weddinggalry2 from "../../assets/images/wedding/w2.jpeg?url";
import weddinggalry3 from "../../assets/images/wedding/w3.jpeg?url";
import weddinggalry4 from "../../assets/images/wedding/w4.jpeg?url";
import weddinggalry5 from "../../assets/images/wedding/w5.webp?url";
import weddinggalry6 from "../../assets/images/wedding/w6.jpeg?url";
import venueImage from "../../assets/images/wedding/vanue.jpg?url";

const HeroWeddingBeatch = () => {
  const weddingImages = [
    weddinggalry1,
    weddinggalry2,
    weddinggalry3,
    weddinggalry4,
    weddinggalry5,
    weddinggalry6,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    venue: "",
    request: "",
  });

  const getVisibleCount = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        goToNext();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, visibleCount]);

  const goToNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (weddingImages.length - visibleCount + 1)
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? weddingImages.length - visibleCount : prevIndex - 1
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
  };

  const visibleImages = weddingImages.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <section className="relative">
      <div className="relative h-screen max-h-[800px] overflow-hidden">
        <img
          src={heroImage}
          alt="Elegant wedding at Divine Kitchen"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            Weddings at <span className="text-amber-200">Divine Kitchen</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Where dreams meet the ocean, and love stories begin
          </p>
          <button
            onClick={() => {
              const section = document.querySelector("#wedding-batch");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-gradient-to-r from-[#ff2709] to-[#ffaa13] text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Plan Your Special Day
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6 text-amber-800">
          Weddings at Divine Kitchen
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Divine Kitchen offers intimate and memorable wedding celebrations
          along the beautiful Zandvoort coastline. Enjoy the soothing sounds of
          the waves and stunning seaside views to make your special day truly
          Divine.
        </p>
      </div>

      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center text-amber-800">
            Some images of weddings on the beach
          </h2>

          <div className="relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {visibleImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-2 ${
                    visibleCount === 1
                      ? "w-full"
                      : visibleCount === 2
                      ? "w-1/2"
                      : "w-1/3"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md h-64 md:h-80 lg:h-96 group">
                    <img
                      src={image}
                      alt={`Wedding at Divine Kitchen ${
                        currentIndex + index + 1
                      }`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-serif">
                        Wedding Photo {currentIndex + index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {currentIndex > 0 && (
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white opacity-80 hover:opacity-100 p-2 rounded-full shadow-md ml-2 z-10"
              >
                <FaChevronLeft className="text-gray-800" />
              </button>
            )}

            {currentIndex < weddingImages.length - visibleCount && (
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white opacity-80 hover:opacity-100 p-2 rounded-full shadow-md mr-2 z-10"
              >
                <FaChevronRight className="text-gray-800" />
              </button>
            )}
          </div>

          <div className="flex justify-center mt-6">
            {Array.from({
              length: weddingImages.length - visibleCount + 1,
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? "bg-amber-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div id="wedding-batch" className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={venueImage}
              alt="Lookout Beach venue at Divine Kitchen"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4 text-amber-800">
              Our Venue
            </h2>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-amber-600">
              Lookout Beach
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Situated along the beautiful Zandvoort coastline, Divine Kitchen
              is ideal for seated celebrations of 40 to 150 guests.
            </p>
            <div className="mb-8">
              <h4 className="text-xl font-serif font-semibold mb-2">
                Exclusive Use:
              </h4>
              <p className="text-gray-600">40 - 150 Guests</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="number"
                    name="guests"
                    placeholder="Number of guests"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <select
                    name="venue"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.venue}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Venue</option>
                    <option value="Lookout Beach">Lookout Beach</option>
                    <option value="Ocean Terrace">Ocean Terrace</option>
                    <option value="Sunset Pavilion">Sunset Pavilion</option>
                  </select>
                </div>
              </div>
              <div>
                <textarea
                  name="request"
                  placeholder="Special Request"
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={formData.request}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-serif font-bold mb-16 text-center text-amber-800">
          Why Choose Divine Kitchen
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-16 px-4 max-w-6xl mx-auto">
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
            <h3 className="text-xl font-serif font-bold mb-2">
              Custom Packages
            </h3>
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
      </div>

      <div className="bg-amber-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-8 text-gray-800">
            Love Stories
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <p className="text-lg italic mb-4">
              "Our wedding at Divine Kitchen was beyond perfect. The team
              anticipated our every need and created magic we'll remember
              forever."
            </p>
            <p className="font-semibold text-amber-600">- Sarah & Michael</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWeddingBeatch;
