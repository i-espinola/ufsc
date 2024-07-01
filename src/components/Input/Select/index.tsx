import React from 'react';
import Image from 'next/image';
import { InsideLabel, OutsideLabel, StyleError, StyledChevron } from './Styled';

export interface SelectProps {
  id: string;
  name: string;
  label: string;
  variant: 'outside-label' | 'inside-label';
  status: boolean;
  disabled: boolean;
  value: string;
  placeholder: string;
  required: boolean;
  onChange: () => any;
}

const Select = (props: any) => {
  const {
    id,
    label,
    name,
    status,
    value,
    placeholder,
    required,
    onChange,
    disabled,
    variant,
    options,
  } = props;
  const idName = name || label.replace(/ /g, '-').toLowerCase();
  const elementSelect = (
    <>
      <select
        id={idName}
        name={idName}
        value={value}
        disabled={disabled}
        // placeholder={placeholder}s
        required={required}
        onChange={onChange}
      >
        {options.map((option: any) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </>
  );

  const insideBox = (
    <InsideLabel htmlFor={idName}>
      <label htmlFor={idName}>{label}</label>
      <div>{elementSelect}</div>
    </InsideLabel>
  );

  const outside = (
    <OutsideLabel>
      <label htmlFor={idName}>{label}</label>
      {elementSelect}
    </OutsideLabel>
  );

  if (variant === 'outside-label') return outside;
  return insideBox;
};

Select.defaultProps = {
  name: '',
  label: '',
  variant: 'outside-label',
  status: false,
  disabled: false,
  value: '',
  placeholder: '',
  required: false,
  onChange: () => null,
};

export default Select;
export { Select };
