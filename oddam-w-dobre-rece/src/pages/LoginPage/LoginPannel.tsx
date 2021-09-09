import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router';
import { reEmail } from '../../assets/variables/regex';
import Navigation from '../../components/Navigation/Navigation';
import DecorationImg from '../../components/shared/DecorationImg';
import LinkButton from '../../components/shared/LinkButton/LinkButton';
import { FirebaseContext } from '../../components/Firebase';

interface FormData {
  email: string;
  password: string;
  password2?: string;
}

const LoginPannel = (): JSX.Element => {
  const location = useLocation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const password = useRef({});
  password.current = watch('password', '');

  return (
    <FirebaseContext.Consumer>
      {(firebase) => {
        return (
          <Navigation>
            <div className="loginPannel">
              {location.pathname === '/logout' ? (
                <div className="loginPannel__wrapper">
                  <h3 className="loginPannel__title">
                    Wylogowanie nastąpiło pomyślnie!
                  </h3>
                  <DecorationImg scale={0.8} />
                  <LinkButton text="Strona Główna" link="/" size="medium" />
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit((data) =>
                    console.log(JSON.stringify(data)),
                  )}
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
                        style={
                          errors.email
                            ? { borderBottom: '1px solid red' }
                            : undefined
                        }
                      />
                      {errors.email && (
                        <p className="error">{errors.email.message}</p>
                      )}
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
                          errors.password
                            ? { borderBottom: '1px solid red' }
                            : undefined
                        }
                      />
                      {errors.password && (
                        <p className="error">{errors.password.message}</p>
                      )}
                    </label>
                    {location.pathname === '/register' ? (
                      <label className="loginPannel__label" htmlFor="password2">
                        Powtórz hasło
                        <input
                          className="loginPannel__input"
                          type="password"
                          {...register('password2', {
                            required: 'Hasło nie może być puste!',
                            minLength: {
                              value: 6,
                              message: 'Hasło musi mieć co najmniej 6 znaków!',
                            },
                            validate: (value) =>
                              value === password.current ||
                              'Hasła nie są takie same!',
                          })}
                          style={
                            errors.password2
                              ? { borderBottom: '1px solid red' }
                              : undefined
                          }
                        />
                        {errors.password2 && (
                          <p className="error">{errors.password2.message}</p>
                        )}
                      </label>
                    ) : null}
                  </div>
                  <div className="loginPannel__send">
                    <LinkButton
                      text={
                        location.pathname === '/register'
                          ? 'Zaloguj się'
                          : 'Załóż konto'
                      }
                      link={
                        location.pathname === '/register'
                          ? '/login'
                          : '/register'
                      }
                      size="small"
                      border="none"
                    />
                    <button
                      type="submit"
                      className="loginPannel__button link-button button-small"
                    >
                      {location.pathname === '/register'
                        ? 'Załóż konto'
                        : 'Zaloguj się'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Navigation>
        );
      }}
    </FirebaseContext.Consumer>
  );
};

export default LoginPannel;
