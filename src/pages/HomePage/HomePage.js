import React from 'react';

import HomeTitle from '../../components/Home/HomeTitle';
import ThreeColumns from '../../components/ThreeColumns/ThreeColumns';
import SimpleSteps from '../../components/SimpleSteps/SimpleSteps';
import AboutUs from '../../components/AboutUs/AboutUs';
import PartnersSection from '../../components/Partners/PartnersSection';
import ContactSection from '../../components/Contact/ContactSection';
import Navigation from '../../components/Navigation/Navigation';

const HomePage = () => (
  <>
    <Navigation>
      <div className="hero-image-main" />
      <HomeTitle />
    </Navigation>
    <ThreeColumns />
    <SimpleSteps />
    <AboutUs />
    <PartnersSection />
    <ContactSection />
  </>
);

export default HomePage;
