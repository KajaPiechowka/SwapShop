import React from 'react';
import PropTypes from 'prop-types';

import HomeHeader from './HomeHeader';
import Navigation from './Navigation';
import HomeTitle from './HomeTitle';
import ThreeColumns from '../ThreeColumns/ThreeColumns';
import SimpleSteps from '../SimpleSteps/SimpleSteps';
import AboutUs from '../AboutUs/AboutUs';
import PartnersSection from '../Partners/PartnersSection';
import ContactSection from '../Contact/ContactSection';

const HeaderWrapper = ({ children }) => (
  <div className="container">
    <div className="hero-image" />
    {children}
  </div>
);

const HomePage = () => (
  <>
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
  </>
);

HeaderWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}


export default HomePage;
