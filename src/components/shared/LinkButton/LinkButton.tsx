import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
  text: string;
  link: string;
  size: 'small' | 'medium' | 'big';
  noBorder?: true | undefined;
  color?: string | undefined;
}

const LinkButton = ({
  text,
  link,
  size,
  noBorder,
  color,
}: LinkButtonProps): JSX.Element => (
  <Link
    className={classNames(`link-button button-${size}`, {
      'no-border': noBorder,
    })}
    to={link}
    style={color ? { backgroundColor: color } : undefined}
  >
    {text}
  </Link>
);

export default LinkButton;
