import React from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGlassCheers,
  FaUtensils,
  FaMusic,
} from "react-icons/fa";
import eventVideo from "../../assets/images/event/herovideo.mp4?url";
import event1 from "../../assets/images/event/e1.jpg?url";
import event2 from "../../assets/images/event/e2.jpg?url";
import event3 from "../../assets/images/event/e3.jpg?url";
import event4 from "../../assets/images/event/e4.jpg?url";
import event5 from "../../assets/images/event/e5.jpg?url";
import event6 from "../../assets/images/event/e6.jpg?url";

const HeroEventPage = () => {
  const events = [
    {
      image: event1,
    },
    {
      image: event2,
    },
    {
      image: event3,
    },
    {
      image: event4,
    },
    {
      image: event5,
    },
    {
      image: event6,
    },
  ];

  return (
    <div className="relative">
      {/* Hero Video */}
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={eventVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
          <div className="text-center px-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif tracking-tight">
              Unforgettable Events
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-8">
              Where golden sunsets meet exceptional celebrations along
              Zandvoort's coast
            </p>

            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-xl">
              Enquire About Events
            </button>
          </div>
        </div>
      </div>

      {/* Event Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 -mt-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-2xl h-96"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <FaCalendarAlt className="text-amber-300 mr-2" />
                    <span className="font-light">{event.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-serif mb-2">
                    {event.title}
                  </h3>
                  <p className="text-amber-100 mb-4">{event.description}</p>
                  <button className="text-white border border-amber-300 hover:bg-amber-600 hover:border-amber-600 px-4 py-2 rounded-full text-sm transition-all">
                    Learn More
                  </button>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-6 font-serif">
            Ready to Create Lasting Memories?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our event specialists will craft a completely personalized
            experience for your celebration
          </p>
          <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-4 px-16 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Plan Your Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroEventPage;
