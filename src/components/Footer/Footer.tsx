import React from 'react';
import facebook from '../../assets/icons/Facebook.svg';
import instagram from '../../assets/icons/Instagram.svg';

const Footer = (): JSX.Element => (
  <div className="footer">
    <p className="footer__text">Copyright by Coders Lab</p>
    <div className="footer__social">
      <a href="https://facebook.com" className="footer__link">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="https://instagram.com" className="footer__link">
        <img src={instagram} alt="instagram" />
      </a>
    </div>
  </div>
);

export default Footer;
