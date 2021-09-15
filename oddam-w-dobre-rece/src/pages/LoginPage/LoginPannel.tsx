import React, { useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router';
import { reEmail } from '../../assets/variables/regex';
import Navigation from '../../components/Navigation/Navigation';
import DecorationImg from '../../components/shared/DecorationImg';
import LinkButton from '../../components/shared/LinkButton/LinkButton';
import { FirebaseContext } from '../../components/Firebase';
import RegisterForm, { RegisterFormProps } from './RegisterForm';
import LoginForm from './LoginForm';

interface FormData {
  email: string;
  password: string;
  password2?: string;
}

const FormOption = ({ firebase }: RegisterFormProps): JSX.Element => {
  const location = useLocation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const password = useRef({});
  password.current = watch('password', '');

  if (location.pathname === '/logout') {
    return (
      <div className="loginPannel__wrapper">
        <h3 className="loginPannel__title">Wylogowanie nastąpiło pomyślnie!</h3>
        <DecorationImg scale={0.8} />
        <LinkButton text="Strona Główna" link="/" size="medium" />
      </div>
    );
  }
  if (location.pathname === '/register') {
    return <RegisterForm firebase={firebase} />;
  }
  return <LoginForm firebase={firebase} />;
};

const LoginPannel = (): JSX.Element => {
  const firebase = useContext(FirebaseContext);
  return (
    <Navigation>
      <div className="loginPannel">
        <FormOption firebase={firebase} />
      </div>
    </Navigation>
  );
};

export default LoginPannel;
