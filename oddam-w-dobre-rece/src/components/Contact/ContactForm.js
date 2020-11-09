import React from "react";
import DecorationImg from "../repetable/DecorationImg";

const ContactForm = () => {
  return (
    <form className="contact__form">
      <h4 className="contact__title">Skontaktuj się z nami</h4>
      <DecorationImg />
      <div className="contact__names">
        <div>
          <label className="contact__label" htmlFor="name">
            Wpisz swoje imię
          </label>
          <input
            className="contact__input"
            type="text"
            id="name"
            name="name"
            placeholder="Krzysztof"
          />
        </div>
        <div>
          <label className="contact__label" htmlFor="email">
            Wpisz swój email
          </label>
          <input
            className="contact__input"
            type="email"
            id="email"
            name="email"
            placeholder="abc@xyz.pl"
          />
        </div>
      </div>
      <div className="contact__message">
        <label className="contact__label" htmlFor="message">
          Wpisz swoją wiadomość
        </label>
        <textarea
          className="contact__textaeria"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
      <div className="contact__send">
        <button type="submit" className="contact__button">
          Wyślij
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
