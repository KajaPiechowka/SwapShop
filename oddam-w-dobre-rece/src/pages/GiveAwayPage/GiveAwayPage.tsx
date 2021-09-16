import React from 'react';
import ContactSection from '../../components/Contact/ContactSection';
import HomeTitle from '../../components/Home/HomeTitle';
import Navigation from '../../components/Navigation/Navigation';
import GiveAwayForm from '../../components/GiveAwayForm/GiveAwayForm';

const GiveAwayPage = (): JSX.Element => (
  <>
    <Navigation>
      <>
        <div className="hero-image-aside" />
        <HomeTitle />
      </>
    </Navigation>
    <GiveAwayForm />
    <ContactSection />
  </>
);

export default GiveAwayPage;
