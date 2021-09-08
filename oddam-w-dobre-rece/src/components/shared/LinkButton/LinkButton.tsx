import React from 'react';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
  text: string;
  link: string;
  size: 'small' | 'medium' | 'big';
  border: string | undefined;
}

const LinkButton = ({
  text,
  link,
  size,
  border,
}: LinkButtonProps): JSX.Element => (
  <Link
    className={`link-button button-${size}`}
    to={link}
    style={border ? { border: border } : undefined}
  >
    {text}
  </Link>
);

export default LinkButton;
