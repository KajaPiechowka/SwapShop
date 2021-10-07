import React from 'react';

const fourStepsData = [
  'Wybierz rzeczy',
  'Spakuj je w worki',
  'Wybierz fundację',
  'Zamów kuriera',
];

const FourSteps = (): JSX.Element => (
  <div className="four-steps">
    <h2 className="four-steps__title">Wystarczą 4 proste kroki:</h2>
    <div className="four-steps__steps">
      {fourStepsData.map((step, index) => (
        <div className="four-steps__step" key={step}>
          <span>{index + 1}</span>
          <p>{step}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FourSteps;
