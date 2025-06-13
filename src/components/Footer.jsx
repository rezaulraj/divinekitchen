import React from "react";
import logo from "/logo1.png?url";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-secondary/20 pt-12 pb-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Logo and Social Media */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-400 pb-8 mb-8">
          <img
            src={logo}
            alt="Restaurant Logo"
            className="h-16 md:h-20 mb-4 md:mb-0"
          />
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <FaFacebook className="text-2xl md:text-3xl" />
            </a>
            <a
              href="#"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <FaInstagram className="text-2xl md:text-3xl" />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Address and Map Section */}
          <div className="col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d9742.268666784183!2d4.520172962552425!3d52.37826795119799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47c5ec1449efa40d%3A0xdeece6e308e70b52!2sDoctor%20Johannus%20G.%20Mezgerstraat%2C%20Zandvoort%2C%20Netherlands!3m2!1d52.3782553!2d4.5304727!5e0!3m2!1sen!2sbd!4v1749796675108!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Address
                </h3>
                <p className="text-gray-700">
                  Doctor Johannus G. Mezgerstraat,
                  <br />
                  2041 HR Zandvoort,
                  <br />
                  Netherlands
                  <br />
                  Email: LookoutBeach@divinekichen.com
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Working Hours
                </h3>
                <p className="text-gray-700">
                  Monday to Sunday:
                  <br />
                  12.00 AM - 11.00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="col-span-5">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Send us a message
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Reason
                </label>
                <select
                  id="reason"
                  className="w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Select a reason</option>
                  <option value="reservation">Reservation</option>
                  <option value="event">Event Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Write your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-400 text-center text-gray-600 text-sm ">
          © {new Date().getFullYear()} Divine Kitchen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
