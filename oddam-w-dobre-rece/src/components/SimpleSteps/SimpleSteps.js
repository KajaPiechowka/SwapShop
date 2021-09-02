import React from 'react';
import DecorationImg from '../shared/DecorationImg';
import Step from './Step';
import TShirt from '../../assets/icons/TShirt.png';
import Bag from '../../assets/icons/Bag.png';
import Glass from '../../assets/icons/Glass.png';
import Recycle from '../../assets/icons/Recycle.png';
import LinkButton from '../shared/LinkButton/LinkButton';

const SimpleSteps = () => (
  <section id="what-about" className="container simple-steps">
    <div className="simple-steps__header">
      <h4>Wystarczą 4 proste kroki</h4>
      <DecorationImg />
    </div>
    <div className="simple-steps__steps">
      <Step
        image={TShirt}
        alt="T-Shirt Image"
        title="Wybierz rzeczy"
        descriptin="ubrania, zabawki, sprzęt i inne"
      />
      <Step
        image={Bag}
        alt="Bag Image"
        title="Spakuj je"
        descriptin="skorzystaj z worków na śmieci"
      />
      <Step
        image={Glass}
        alt="Glass Image"
        title="Zdecyduj komu chcesz pomóc"
        descriptin="wybierz zaufane miejsce"
      />
      <Step
        image={Recycle}
        alt="Recycle Image"
        title="Zamów kuriera"
        descriptin="kurier przyjedzie w dogodnym terminie"
      />
    </div>
    <div className="simple-steps__link">
      <LinkButton text="Oddaj Rzeczy" link="/login" size="big" />
    </div>
  </section>
);

export default SimpleSteps;
