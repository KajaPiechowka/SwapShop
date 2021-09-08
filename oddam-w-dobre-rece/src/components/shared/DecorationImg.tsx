import React from 'react';
import Decoration from '../../assets/icons/Decoration.svg';

interface DecorationImgProps {
  mariginBottom?: number;
  scale?: number;
}

const DecorationImg = ({
  mariginBottom,
  scale,
}: DecorationImgProps): JSX.Element => (
  <img
    className="decoration"
    src={Decoration}
    alt="decoration"
    style={{ marginBottom: mariginBottom, transform: `scale(${scale})` }}
  />
);

export default DecorationImg;
