import React from "react";
import HomeHeader from "./HomeHeader";
import Navigation from "./Navigation";
import HomeTitle from "./HomeTitle";

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
      <Navigation />
      <HomeTitle />
    </HeaderWrapper>
  );
};

export default HomePage;
