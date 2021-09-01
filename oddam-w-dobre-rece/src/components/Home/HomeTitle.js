import React from 'react';

import DecorationImg from '../atoms/DecorationImg';
import LinkButton from '../atoms/LinkButton/LinkButton';

const HomeTitle = () => (
  <div className="home-page-title">
    <h1>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
    <DecorationImg />
    <div>
      <LinkButton text="Oddaj rzeczy" link="/login" size="big" />
      <LinkButton text="zorganizuj zbiórkę" link="login" size="big" />
    </div>
  </div>
);

export default HomeTitle;
