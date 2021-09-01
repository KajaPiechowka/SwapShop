import React from 'react';
import PropTypes from 'prop-types';

import HomeHeader from '../../components/Home/HomeHeader';
import Navigation from '../../components/Home/Navigation';
import HomeTitle from '../../components/Home/HomeTitle';
import ThreeColumns from '../../components/ThreeColumns/ThreeColumns';
import SimpleSteps from '../../components/SimpleSteps/SimpleSteps';
import AboutUs from '../../components/AboutUs/AboutUs';
import PartnersSection from '../../components/Partners/PartnersSection';
import ContactSection from '../../components/Contact/ContactSection';

const HeaderWrapper = ({ children }) => (
  <div className="container">
    <div className="hero-image" />
    {children}
  </div>
);

const HomePage = () => (
  <div className="root">
    <HeaderWrapper>
      <HomeHeader />
      <Navigation />
      <HomeTitle />
    </HeaderWrapper>
    <ThreeColumns />
    <SimpleSteps />
    <AboutUs />
    <PartnersSection />
    <ContactSection />
  </div>
);

HeaderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomePage;
