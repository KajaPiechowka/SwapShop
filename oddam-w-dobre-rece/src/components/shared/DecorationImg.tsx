import React from 'react';
import classNames from 'classnames';
import Decoration from '../../assets/icons/Decoration.svg';

interface DecorationImgProps {
  mariginBottom?: number;
}

const DecorationImg = ({ mariginBottom }: DecorationImgProps): JSX.Element => (
  <img
    className="decoration"
    src={Decoration}
    alt="decoration"
    style={{ marginBottom: mariginBottom }}
  />
);

export default DecorationImg;
