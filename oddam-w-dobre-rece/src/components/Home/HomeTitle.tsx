import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import { FirebaseContext } from '../Firebase';

import DecorationImg from '../shared/DecorationImg';
import LinkButton from '../shared/LinkButton/LinkButton';
import FourSteps from './FourSteps';

const HomeTitle = (): JSX.Element => {
  const firebase = useContext(FirebaseContext);
  const location = useLocation();

  return (
    <div className="home-page-title">
      {location.pathname === '/' ? (
        <h1>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
      ) : (
        <h1>
          {`Oddaj rzeczy, których już nie chcesz ${'potrzebującym'.toUpperCase()}`}
        </h1>
      )}
      <DecorationImg
        mariginBottom={location.pathname === '/oddaj-rzeczy' ? 15 : 55}
      />
      {location.pathname === '/' ? (
        <div className="home-page-title__buttons">
          <LinkButton
            text="Oddaj rzeczy"
            link={firebase?.auth.currentUser ? '/oddaj-rzeczy' : '/login'}
            size="big"
          />
          <LinkButton text="zorganizuj zbiórkę" link="login" size="big" />
        </div>
      ) : (
        <FourSteps />
      )}
    </div>
  );
};

export default HomeTitle;
