import React from "react";
import Heropage from "./Heropage";
import AboutHome from "./AboutHome";
import MenuHome from "./MenuHome";
import GalleryHome from "./GalleryHome";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Heropage />
      <AboutHome />
      <MenuHome />
      <GalleryHome />
    </div>
  );
};

export default HomePage;
