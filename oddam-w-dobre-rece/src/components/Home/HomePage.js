import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";

const HeaderWrapper = ({ children }) => {
  return (
    <div className="container">
      <div className="hero-image" />
      {children}
    </div>
  );
};

const HomePage = () => {
  return (
    <HeaderWrapper>
      <HomeHeader />
      <HomeThreeColumns />
    </HeaderWrapper>
  );
};

export default HomePage;
