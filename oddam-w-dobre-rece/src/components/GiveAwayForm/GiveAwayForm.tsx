import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ImportantInfo from './ImportantInfo';

const whatToGiveArray = [
  'ubrania,które nadają się do podobnego użycia',
  'ubrania, do wyrzucenia',
  'zabawki',
  'książki',
  'inne',
];

interface FormData {
  whatToGive: string;
}

const GiveAwayForm = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <div className="container form-container">
      <ImportantInfo />
      <div className="give-away">
        <p>Krok {currentStep}/4</p>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <label className="give-away__label" htmlFor="whatToGive">
            Zaznacz co chcesz oddać
            {whatToGiveArray.map((option) => (
              <>
                <input type="radio" name="whatToGive" value={option} />
                {option}
              </>
            ))}
          </label>
        </form>
      </div>
    </div>
  );
};

export default GiveAwayForm;
