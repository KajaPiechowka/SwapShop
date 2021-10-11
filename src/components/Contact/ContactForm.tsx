import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { reEmail, reName } from '../../assets/variables/regex';
import DecorationImg from '../shared/DecorationImg';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const API = process.env.REACT_APP_API ? process.env.REACT_APP_API : '';

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const postData = (data: FormData) => {
    fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(() =>
        setStatus('Wiadomość zoatała wysłana! Wkrótce się skontaktujemy.'),
      )
      .catch(() =>
        setStatus('Nie udało się wysłać wiadomości. Spróbuj ponownie później.'),
      );
  };

  return (
    <form onSubmit={handleSubmit(postData)} className="contact__form">
      <h4 className="contact__title">Skontaktuj się z nami</h4>
      <DecorationImg mariginBottom={0} />
      <p className="contact__info">{status}</p>
      <div className="contact__names">
        <div>
          <label className="contact__label" htmlFor="name">
            Wpisz swoje imię
            <input
              className="contact__input"
              type="text"
              id="name"
              {...register('name', {
                required: { value: true, message: 'Imię nie może być puste!' },
                pattern: {
                  value: reName,
                  message: 'Imię musi być jednym wyrazem!',
                },
              })}
              placeholder="Krzysztof"
              style={
                errors.name ? { borderBottom: '1px solid red' } : undefined
              }
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </label>
        </div>
        <div>
          <label className="contact__label" htmlFor="email">
            Wpisz swój email
            <input
              className="contact__input"
              id="email"
              {...register('email', {
                required: { value: true, message: 'Email nie może być pusty!' },
                pattern: {
                  value: reEmail,
                  message: 'Email jest nieprawidłowy',
                },
              })}
              placeholder="abc@xyz.pl"
              style={
                errors.email ? { borderBottom: '1px solid red' } : undefined
              }
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </label>
        </div>
      </div>
      <div className="contact__message">
        <label className="contact__label" htmlFor="message">
          Wpisz swoją wiadomość
          <textarea
            {...register('message', {
              required: {
                value: true,
                message: 'Wiadomość nie może być pusta!',
              },
              minLength: {
                value: 120,
                message: 'Wiadomość musi mieć minimum 120 znaków!',
              },
            })}
            className="contact__textaeria"
            placeholder="Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            style={
              errors.message ? { borderBottom: '1px solid red' } : undefined
            }
          />
          {errors.message && <p className="error">{errors.message?.message}</p>}
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
