import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { reEmail } from '../../assets/variables/regex';
import DecorationImg from '../../components/shared/DecorationImg';
import LinkButton from '../../components/shared/LinkButton/LinkButton';
import Firebase from '../../components/Firebase';

interface FormData {
  email: string;
  password: string;
  password2?: string;
}

export interface LoginFormProps {
  firebase: Firebase | null;
}

const LoginForm = ({ firebase }: LoginFormProps): JSX.Element => {
  const [showError, setShowError] = useState<JSX.Element | null>(null);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const password = useRef({});
  password.current = watch('password', '');

  const loginUser = (data: FormData) => {
    firebase?.auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        history.push('/oddaj-rzeczy');
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        setShowError(
          <p className="error" style={{ marginTop: 10 }}>
            {errorMessage}
          </p>,
        );
      });
  };

  return (
    <form
      onSubmit={handleSubmit((data) => loginUser(data))}
      className="loginPannel__wrapper"
    >
      <h3 className="loginPannel__title">Zaloguj się</h3>
      <DecorationImg mariginBottom={0} scale={0.8} />
      <div className="loginPannel__form">
        <label className="loginPannel__label" htmlFor="email">
          Email
          <input
            className="loginPannel__input"
            {...register('email', {
              required: {
                value: true,
                message: 'Email nie może być pusty!',
              },
              pattern: {
                value: reEmail,
                message: 'Email jest nieprawidłowy!',
              },
            })}
            style={errors.email ? { borderBottom: '1px solid red' } : undefined}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </label>
        <label className="loginPannel__label" htmlFor="password">
          Hasło
          <input
            className="loginPannel__input"
            type="password"
            {...register('password', {
              required: 'Hasło nie może być puste!',
              minLength: {
                value: 6,
                message: 'Hasło musi mieć co najmniej 6 znaków!',
              },
            })}
            style={
              errors.password ? { borderBottom: '1px solid red' } : undefined
            }
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </label>
      </div>
      {showError}
      <div className="loginPannel__send">
        <LinkButton
          text="Załóż konto"
          link="/register"
          size="small"
          border="none"
        />
        <button
          type="submit"
          className="loginPannel__button link-button button-small"
        >
          Zaloguj się
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
