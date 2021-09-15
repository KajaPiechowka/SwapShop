import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import { FirebaseContext } from '../Firebase';

import DecorationImg from '../shared/DecorationImg';
import LinkButton from '../shared/LinkButton/LinkButton';

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
      <DecorationImg />
      <div>
        <LinkButton
          text="Oddaj rzeczy"
          link={firebase?.auth.currentUser ? '/swap-shop' : '/login'}
          size="big"
        />
        <LinkButton text="zorganizuj zbiórkę" link="login" size="big" />
      </div>
    </div>
  );
};

export default HomeTitle;
