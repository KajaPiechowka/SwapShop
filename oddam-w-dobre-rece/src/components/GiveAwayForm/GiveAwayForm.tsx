import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from '../shared/Select/Select';

import {
  helpGroupsArray,
  locationArray,
  whatToGiveArray,
} from './formData.mock';
import ImportantInfo from './ImportantInfo';

interface FormData {
  whatToGive: string;
  bagsCount: 1 | 2 | 3 | 4 | 5;
  location: 'Poznań' | 'Warszawa' | 'Kraków' | 'Wrocław' | 'Katowice';
  helpGroups: Partial<typeof helpGroupsArray>;
}

const GiveAwayForm = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);
  const [savedFormData, setSavedFormData] = useState({
    whatToGive: '',
    bagsCount: 0,
    location: '',
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const goToNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const goToPrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const renderSwitch = (): JSX.Element => {
    switch (currentStep) {
      case 1:
        return (
          <div className="give-away__form-content">
            <h3 className="give-away__form-title">Zaznacz co chcesz oddać:</h3>
            {whatToGiveArray.map((option) => (
              <label htmlFor="whatToGive" className="give-away__label">
                <input
                  {...register('whatToGive')}
                  type="radio"
                  name="whatToGive"
                  className="give-away__input-radio"
                  value={option}
                />
                {option}
                <span className="give-away__checkmark" />
              </label>
            ))}
            <button
              style={{ marginTop: '60px' }}
              type="button"
              className="link-button button-medium background-inherit"
              onClick={goToNext}
            >
              Dalej
            </button>
          </div>
        );
      case 2:
        return (
          <div className="give-away__form-content">
            <h3 className="give-away__form-title">
              Podaj liczbę 60l worków, w które spakowałeś/łaś rzeczy:
            </h3>

            <label htmlFor="bagsCount" className="select__label flex">
              Liczba 60l. worków:
              <Select
                options={['1', '2', '3', '4', '5']}
                name="bagsCount"
                register={register}
              />
              {/* <div className="give-away__select">
                <select
                  {...register('bagsCount')}
                  name="bagsCount"
                  className="give-away__select"
                >
                  <option
                    value=""
                    disabled
                    selected
                    style={{ display: 'none' }}
                  >
                    --wybierz--
                  </option>

                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div> */}
            </label>

            <div className="give-away__buttons">
              <button
                type="button"
                className="link-button button-medium background-inherit"
                onClick={goToPrev}
              >
                Wstecz
              </button>
              <button
                type="button"
                className="link-button button-medium background-inherit"
                onClick={goToNext}
              >
                Dalej
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="give-away__form-content">
            <h3 className="give-away__form-title">Lokalizacja:</h3>
            <Select
              options={locationArray}
              name="location"
              register={register}
            />
            <div className="help-groups">
              <h5>Komu chcesz pomóc? </h5>
              {helpGroupsArray.map((group) => (
                <label htmlFor="helpGroups">
                  {group}
                  <input type="checkbox" {...register('helpGroups')} />
                </label>
              ))}
            </div>
            <div className="give-away__buttons">
              <button
                type="button"
                className="link-button button-medium background-inherit"
                onClick={goToPrev}
              >
                Wstecz
              </button>
              <button
                type="button"
                className="link-button button-medium background-inherit"
                onClick={goToNext}
              >
                Dalej
              </button>
            </div>
          </div>
        );
      case 4:
        return <div>Step 4</div>;
      default:
        return <div>Deafault</div>;
    }
  };

  return (
    <div className="container form-container">
      <ImportantInfo />
      <div className="give-away">
        <p className="give-away__step-couter">Krok {currentStep}/4</p>
        <form
          className="give-away__form"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          {renderSwitch()}
        </form>
      </div>
    </div>
  );
};

export default GiveAwayForm;
