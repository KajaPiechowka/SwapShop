import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from '../shared/Select/Select';
import TShirt from '../../assets/icons/TShirt.png';
import Recycle from '../../assets/icons/Recycle.png';

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
  helpGroups:
    | 'dzieciom'
    | 'samotnym matkom'
    | 'bezdomnym'
    | 'niepełnosprawnym'
    | 'osobom starszym';
  customHelpGroups?: string;
  street: string;
  city: string;
  postCode: string;
  phoneNumber: number;
  date: string;
  hour: string;
  message: string;
}

interface ShowUserFormDataProps {
  data: FormData;
  prevFunction: () => void;
}

const ShowUserFormData = ({
  data,
  prevFunction,
}: ShowUserFormDataProps): JSX.Element => (
  <div className="give-away__form-content">
    <h3 className="give-away__form-title">Podsumowanie Twojej darowizny</h3>
    <p className="summary__label">Oddajesz: </p>
    <div className="summary__row">
      <img className="give-away__img" src={TShirt} alt="T-Shirt" />
      <span>{data.bagsCount},</span>
      <span>{data.whatToGive},</span>
      <span>{data.helpGroups}</span>
    </div>
    <div className="summary__row">
      <img className="give-away__img" src={Recycle} alt="Recycle" />
      <span>W lokalizacji:</span>
      <span>{data.location}</span>
    </div>
    <div className="summary">
      <div className="summary__wrapper">
        <span className="summary__label">Adres odbioru:</span>
        <p>
          Ulica <span>{data.street}</span>
        </p>

        <p>
          Miasto
          <span>{data.city}</span>
        </p>

        <p>
          Kod pocztowy
          <span>{data.postCode}</span>
        </p>

        <p>
          Numer telefonu
          <span>{data.phoneNumber}</span>
        </p>
      </div>
      <div className="summary__wrapper">
        <span className="summary__label">Termin odbioru:</span>
        <p>
          Data
          <span>{data.date}</span>
        </p>

        <p>
          Godzina
          <span>{data.hour}</span>
        </p>

        <p>
          Uwagi dla kuriera
          <span>{data.message}</span>
        </p>
      </div>
    </div>
    <div className="give-away__buttons">
      <button
        type="button"
        className="link-button button-medium background-inherit"
        onClick={prevFunction}
      >
        Wstecz
      </button>
      <button
        type="button"
        className="link-button button-medium background-inherit"
      >
        Potwierdzam
      </button>
    </div>
  </div>
);

const GiveAwayForm = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    whatToGive: '',
    bagsCount: 1,
    location: 'Warszawa',
    helpGroups: 'dzieciom',
    customHelpGroups: '',
    street: '',
    city: 'Warszawa',
    postCode: '',
    phoneNumber: 0,
    date: '',
    hour: '',
    message: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      whatToGive: '',
      bagsCount: 1,
      location: 'Warszawa',
      helpGroups: 'dzieciom',
      customHelpGroups: '',
      street: '',
      city: 'Warszawa',
      postCode: '',
      phoneNumber: 0,
      date: '',
      hour: '',
      message: '',
    },
  });

  const goToNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const goToPrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = (data: FormData): void => {
    console.log(data);
    setFormData(data);
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

            <label htmlFor="bagsCount" className="select__label flex wrap">
              Liczba 60l. worków:
              <Select
                options={['1', '2', '3', '4', '5']}
                name="bagsCount"
                register={register}
                className="margin-left-30"
              />
              {}
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
              <p className="help-groups__label">Komu chcesz pomóc? </p>
              <div className="help-groups__checkboxes">
                {helpGroupsArray.map((group) => (
                  <label
                    htmlFor="helpGroups"
                    className="help-groups__checkbox-label"
                  >
                    {group}
                    <input
                      className="help-groups__checkbox"
                      type="radio"
                      {...register('helpGroups')}
                    />
                  </label>
                ))}
              </div>
              <label htmlFor="customHelpGroups" className="help-groups__label">
                Wpisz nazwę konkretnej organizacji (opcjonalne)
                <input {...register('customHelpGroups')} type="text" />
              </label>
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
        return (
          <div className="give-away__form-content">
            <h3 className="give-away__form-title">
              Podaj adres oraz termin odbioru rzeczy przez kuriera
            </h3>
            <div className="personal-data">
              <div className="personal-data__wrapper">
                <p>Adres odbioru:</p>
                <label htmlFor="street">
                  <p> Ulica</p>
                  <input type="text" {...register('street')} />
                </label>
                <label htmlFor="city">
                  <p> Miasto</p>
                  <input type="text" {...register('city')} />
                </label>
                <label htmlFor="postCode">
                  <p> Kod pocztowy</p>
                  <input type="text" {...register('postCode')} />
                </label>
                <label htmlFor="phoneNumber">
                  <p> Numer telefonu</p>
                  <input type="tel" {...register('phoneNumber')} />
                </label>
              </div>
              <div className="personal-data__wrapper">
                <p>Termin odbioru:</p>
                <label htmlFor="date">
                  <p>Data</p>
                  <input type="date" {...register('date')} />
                </label>
                <label htmlFor="hour">
                  <p>Godzina</p>
                  <input type="time" {...register('hour')} />
                </label>
                <label htmlFor="message">
                  <p> Uwagi dla kuriera</p>
                  <textarea {...register('message')} />
                </label>
              </div>
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
                type="submit"
                className="link-button button-medium background-inherit"
                onClick={goToNext}
              >
                Dalej
              </button>
            </div>
          </div>
        );
      default:
        return <ShowUserFormData data={formData} prevFunction={goToPrev} />;
    }
  };

  return (
    <div className="container form-container">
      {currentStep > 4 ? null : <ImportantInfo />}
      <div className="give-away">
        {currentStep > 4 ? (
          <p className="give-away__step-couter"> </p>
        ) : (
          <p className="give-away__step-couter">Krok {currentStep}/4</p>
        )}
        <form
          className="give-away__form"
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          {renderSwitch()}
        </form>
      </div>
    </div>
  );
};

export default GiveAwayForm;
