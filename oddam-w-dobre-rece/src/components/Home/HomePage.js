import React from "react";
import HomeHeader from "./HomeHeader";
import Navigation from "./Navigation";
import HomeTitle from "./HomeTitle";
import ThreeColumnsPage from "../ThreeColumns/ThreeColumnsPage";

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
      <ThreeColumnsPage />
    </>
  );
};

export default HomePage;
