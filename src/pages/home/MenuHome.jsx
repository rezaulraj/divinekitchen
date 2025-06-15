import React from "react";
import manestach from "../../assets/images/home/divinebird2.png?url";
import menu1 from "../../assets/images/menu/me1.jpg?url";
import menu2 from "../../assets/images/menu/ba.jpg?url";
import menu3 from "../../assets/images/menu/me3.jpg?url";
import menu4 from "../../assets/images/menu/me4.jpg?url";
import { FaArrowRight } from "react-icons/fa6";

const MenuHome = () => {
  const menuList = [
    {
      image: menu1,
      text: "Full Menu",
      pdf: "/pdfs/main-menu.pdf",
    },
    {
      image: menu2,
      text: "Beverage Menu",
      pdf: "/pdfs/wine-list.pdf",
    },
    {
      image: menu3,
      text: "Cocktail List",
      pdf: "/pdfs/cocktail-menu.pdf",
    },
    {
      image: menu4,
      text: "Wine Experts",
      pdf: "/pdfs/sommeliers.pdf",
    },
  ];

  const handleDownload = (pdfUrl) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdfUrl.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="our-menus" className="bg-thirary py-16 px-4 ">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-merriweather uppercase tracking-widest font-bold text-white mb-4">
            Our Menus
          </h1>
          <img
            src={manestach}
            alt="Divine Kitchen decorative element"
            className="mx-auto h-20 w-auto opacity-80"
          />
          <p className="mt-4 text-gray-600 italic">
            "Where every dish tells a story"
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuList.map((menu, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Menu Image */}
              <div className="h-72 overflow-hidden">
                <img
                loading="lazy"
                  src={menu.image}
                  alt={menu.text}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-3xl font-medium text-white mb-2 font-lobster">
                  {menu.text}
                </h3>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(menu.pdf)}
                  className="flex items-center justify-center gap-2 bg-[#ff2709] hover:bg-[#e62208] text-white py-2 px-4 rounded-full transition-colors duration-300 uppercase italic text-sm font-semibold"
                >
                  <span>View Menu</span>
                  <FaArrowRight className="text-lg" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-10 space-x-6">
          {/* Gradient Background Button */}
          <button className=" uppercase text-white px-8 py-3 bg-secondary rounded-md text-lg font-semibold hover:-translate-y-2 transition-transform duration-300 hover:scale-105">
            reservations
          </button>

          {/* Gradient Border Button */}
          <div className="p-[2px] border-white border rounded-md hover:-translate-y-2 transition-transform duration-300 hover:scale-105">
            <button className=" text-white px-8 py-3 uppercase text-lg font-semibold ">
              More information
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuHome;
