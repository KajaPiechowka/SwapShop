import React from 'react';

const YellowBar = (): JSX.Element => (
  <div className="important-info">
    <h4>Ważne!</h4>
    <p>
      {`Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawinie spakować rzeczy znajdziejsz ${'tutaj'.toUpperCase()}`}
    </p>
  </div>
);

export default YellowBar;
