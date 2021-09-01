import React, { useState, useEffect } from 'react';
import { PartnerData } from './models/PartnerData';
import Partners from './Partners';

interface PartnerWrappperProps {
  currentPartners: PartnerData[];
}

const PartnerWrappper = ({ currentPartners }: PartnerWrappperProps): JSX.Element => (
  <div className="partners__wrapper">
    {console.log(currentPartners.length)}
    <Partners partners={currentPartners} />
  </div>
);

export default PartnerWrappper;
