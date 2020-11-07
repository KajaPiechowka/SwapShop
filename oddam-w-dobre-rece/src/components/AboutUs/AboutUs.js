import React from "react";
import Signature from "../../assets/icons/Signature.svg";
import DecorationImg from "../repetable/DecorationImg";

const AboutUs = () => {
  return (
    <section id="about-us" className="container about-us">
      <article>
        <span>O nas</span>
        <DecorationImg />
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img className="about-us__signature" src={Signature} alt="signature" />
      </article>
      <div className="about-us__image" />
    </section>
  );
};

export default AboutUs;
