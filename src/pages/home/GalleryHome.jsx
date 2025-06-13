import React from "react";
import gallery1 from "../../assets/images/menu/gal1.jpg?url";
import gallery2 from "../../assets/images/menu/gal2.jpg?url";
import gallery3 from "../../assets/images/menu/gal3.jpg?url";
import gallery4 from "../../assets/images/menu/gal4.jpg?url";
import gallery5 from "../../assets/images/menu/gal5.jpg?url";
import gallery6 from "../../assets/images/menu/gal6.jpg?url";

const GalleryHome = () => {
  const galleryImages = [
    { id: 1, src: gallery1, alt: "Gallery 1", size: "md:col-span-2" },
    { id: 2, src: gallery2, alt: "Gallery 2", size: "md:col-span-1" },
    { id: 3, src: gallery3, alt: "Gallery 3", size: "md:col-span-1" },
    { id: 4, src: gallery4, alt: "Gallery 4", size: "md:col-span-2" },
    { id: 5, src: gallery5, alt: "Gallery 5", size: "md:col-span-2" },
    { id: 6, src: gallery6, alt: "Gallery 6", size: "md:col-span-1" },
  ];

  return (
    <section className="max-w-screen-lg mx-auto px-4 py-8">
      <div className="text-center mb-8 space-y-2">
        <h1 className="text-primary  text-3xl md:text-4xl lg:text-6xl font-lobster font-semibold mb-2">
          Our Gallery
        </h1>
        <p className="text-gray-700 max-w-md mx-auto text-lg">
          A collection of our special moments
        </p>
      </div>

      {/* Compact image gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className={`relative group overflow-hidden rounded-md ${image.size}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-96 object-cover transition-all duration-300 group-hover:scale-102"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center transition-all duration-300">
              <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.alt}
              </span>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryHome;
