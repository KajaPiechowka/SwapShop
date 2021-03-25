import React from 'react';
import { useForm } from 'react-hook-form';
import DecorationImg from '../atoms/DecorationImg';

const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //eslint-disable-line

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: data,
    // });
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
      <h4 className="contact__title">Skontaktuj się z nami</h4>
      <DecorationImg />
      <div className="contact__names">
        <div>
          <label className="contact__label" htmlFor="name">
            Wpisz swoje imię
            <input
              className="contact__input"
              type="text"
              id="name"
              name="name"
              placeholder="Krzysztof"
              ref={register({ required: true, minLength: 2 })}
              style={errors.name ? { borderBottom: '1px solid red' } : null}
            />
            {errors.name && <p className="error">Imię jest za krótkie!</p>}
          </label>
        </div>
        <div>
          <label className="contact__label" htmlFor="email">
            Wpisz swój email
            <input
              className="contact__input"
              type="email"
              id="email"
              name="email"
              placeholder="abc@xyz.pl"
              ref={register({
                required: true,
                pattern: re,
              })}
              style={errors.email ? { borderBottom: '1px solid red' } : null}
            />
            {errors.email && <p className="error">Email jest nieprawidłowy!</p>}
          </label>
        </div>
      </div>
      <div className="contact__message">
        <label className="contact__label column" htmlFor="message">
          Wpisz swoją wiadomość
          <textarea
            name="message"
            className="contact__textarea"
            ref={register({ required: true, min: 120 })}
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            style={errors.message ? { borderBottom: '1px solid red' } : null}
          />
          {errors.message && <p className="error">Wiadomość musi mieć conajmniej 120 znaków</p>}
        </label>
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
