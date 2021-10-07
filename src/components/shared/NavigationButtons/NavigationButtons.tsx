import React from 'react';

interface NavigationButtonsProps {
  actionPrev: () => void;
  actionNext?: () => void;
  prevText?: string;
  nextText?: string;
  submit?: boolean;
}

const NavigationButtons = ({
  actionPrev,
  actionNext,
  prevText,
  nextText,
  submit,
}: NavigationButtonsProps) => (
  <div className="give-away__buttons">
    <button
      type="button"
      className="link-button button-medium background-inherit"
      onClick={actionPrev}
    >
      {prevText ? prevText : 'Wstecz'}
    </button>
    <button
      type={submit ? 'submit' : 'button'}
      className="link-button button-medium background-inherit"
      onClick={actionNext}
    >
      {nextText ? nextText : 'Dalej'}
    </button>
  </div>
);

export default NavigationButtons;
