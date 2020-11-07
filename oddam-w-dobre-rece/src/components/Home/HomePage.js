import React from "react";
import HomeHeader from "./HomeHeader";
import Navigation from "./Navigation";
import HomeTitle from "./HomeTitle";
import ThreeColumns from "../ThreeColumns/ThreeColumns";
import SimpleSteps from "../SimpleSteps/SimpleSteps";
import AboutUs from "../AboutUs/AboutUs";

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
    <>
      <HeaderWrapper>
        <HomeHeader />
        <Navigation />
        <HomeTitle />
      </HeaderWrapper>
      <ThreeColumns />
      <SimpleSteps />
      <AboutUs />
    </>
  );
};

export default HomePage;
