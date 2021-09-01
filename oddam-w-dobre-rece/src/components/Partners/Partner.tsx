import React from 'react';

interface PartnerProps {
  name: String;
  description: String;
  needs: String;
}

const Partner = ({ name, description, needs }: PartnerProps): JSX.Element => (
  <li className="partners__partner">
    <div className="partners__partner-left">
      <span>{name}</span>
      <p>{description}</p>
    </div>
    <span className="partners__partner-right">{needs}</span>
  </li>
);

export default Partner;
