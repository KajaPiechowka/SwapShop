import React from "react";
import facebookIcon from "../../assets/icons/Facebook.png";
import instagramIcon from "../../assets/icons/Instagram.png";

const Footer = () => (
  <div className="footer">
    <p>Copyright by Coders Lab</p>
    <div className="footer__media">
      <img src={facebookIcon} alt="facebookIcon" />
      <img src={instagramIcon} alt="instagramIcon" />
    </div>
  </div>
);

export default Footer;