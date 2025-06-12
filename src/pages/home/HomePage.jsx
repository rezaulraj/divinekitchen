import React from "react";
import Heropage from "./Heropage";
import AboutHome from "./AboutHome";
import MenuHome from "./MenuHome";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Heropage />
      <AboutHome />
      <MenuHome />
    </div>
  );
};

export default HomePage;
