import React from 'react';
import { useForm } from 'react-hook-form';
import Navigation from '../../components/Navigation/Navigation';
import DecorationImg from '../../components/shared/DecorationImg';
import LinkButton from '../../components/shared/LinkButton/LinkButton';
import Register from './Register';

interface FormData {
  email: string;
  password: string;
}

const Login = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <Navigation>
      <div className="liginPannel">
        <h3 className="loginPannel__title">Zaloguj Się</h3>
        <DecorationImg mariginBottom={0} />
        <form
          className="loginPannel__form"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <label className="loginPannel__label" htmlFor="email">
            Email
            <input className="loginPannel__input" {...register('email')} />
          </label>
          <label className="loginPannel__label" htmlFor="email">
            Hasło
            <input className="loginPannel__input" {...register('password')} />
          </label>
          <div className="loginPannel__send">
            <LinkButton text="Załóż konto" link="/register" size="small" />
            <button type="submit" className="loginPannel__button">
              Zaloguj się
            </button>
          </div>
        </form>
      </div>
    </Navigation>
  );
};

export default Login;
