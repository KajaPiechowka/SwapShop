import React from 'react';
import PropTypes from 'prop-types';


import HomeTitle from './HomeTitle';
import ThreeColumns from '../ThreeColumns/ThreeColumns';
import SimpleSteps from '../SimpleSteps/SimpleSteps';
import AboutUs from '../AboutUs/AboutUs';
import PartnersSection from '../Partners/PartnersSection';
import ContactSection from '../Contact/ContactSection';
import Menu from '../Navigation/Menu'
import Footer from '../Footer/Footer';

const HeaderWrapper = ({ children }) => (
  <div className="container">
    <div className="hero-image" />
    {children}
  </div>
);

const HomePage = () => (
  <>
    <HeaderWrapper>
      <Menu />
      <HomeTitle />
    </HeaderWrapper>
    <ThreeColumns />
    <SimpleSteps />
    <AboutUs />
    <PartnersSection />
    <ContactSection />
    <Footer/>
  </>
);

HeaderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomePage;
