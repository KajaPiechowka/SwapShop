import React from 'react';
import { FieldValues } from 'react-hook-form';
import classNames from 'classnames';

interface SelectProps
  extends Partial<Pick<FieldValues, 'register' | 'errors'>> {
  options: string[];
  name: string;
  register: any;
  className?: string;
}

const Select = ({
  register,
  options,
  name,
  className,
  ...rest
}: SelectProps): JSX.Element => {
  return (
    <div className="select">
      <select
        {...register(name)}
        className={classNames('select__classic', { className: `${className}` })}
        defaultValue=""
      >
        <option
          className="select__option"
          value=""
          disabled
          style={{ display: 'none' }}
        >
          --wybierz--
        </option>
        {options.map((option) => (
          <option className="select__classic" key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
