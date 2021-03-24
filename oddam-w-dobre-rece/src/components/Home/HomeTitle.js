import React from 'react';

import { Link } from 'react-router-dom';
import DecorationImg from '../repetable/DecorationImg';

const HomeTitle = () => (
  <div className="home-page-title">
    <h1>
      Zacznij pomagać!
      Oddaj niechciane rzeczy w zaufane ręce
    </h1>
    <DecorationImg />
    <div>
      <Link className="home-page-title__link link-button" to="/login">
        Oddaj
        rzeczy
      </Link>
      <Link className="home-page-title__link link-button" to="/login">
        zorganizuj
        zbiórkę
      </Link>
    </div>
  </div>
);

export default HomeTitle;
