import React from 'react';
import Footer from '../Footer/Footer';
import ContactForm from './ContactForm';

const ContactSection = (): JSX.Element => (
  <div className="container contact">
    <ContactForm />
    <Footer />
  </div>
);

export default ContactSection;
