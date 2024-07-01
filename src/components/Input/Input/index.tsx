import React, { useState } from 'react';

import { FieldBox, FieldDefault } from './Styled';

// import EyesOff from '@app/assets/svg/eyes-hidden.svg';
// import EyesOn from '@app/assets/svg/eyes.svg';

export interface InputProps {
  id: string;
  name?: string;
  value: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  autoComplete?: 'on' | 'off';
  variant?: 'out-label' | 'in-label';
  type?: 'text' | 'number' | 'date' | 'email' | 'tel';
  onBlur?: (event: React.SyntheticEvent<HTMLElement>) => void;
  onChange: (event: React.SyntheticEvent<HTMLElement>) => void;
}

const Input = (props, ref) => {
  const {
    label,
    id,
    name,
    type,
    value,
    placeholder,
    required,
    disabled,
    autoComplete,
    variant,
    onBlur,
    onChange,
  } = props;

  const [dinamicType, setDinamicType] = useState(type);
  const isPasswordType = dinamicType === 'password';

  const toggleEyes = () => setDinamicType(isPasswordType ? 'text' : 'password');

  const buttonEyes = (
    <button type="button" onClick={toggleEyes}>
      {/* {isPasswordType ? <EyesOn /> : <EyesOff />} */}
    </button>
  );

  const fieldGroup = (
    <>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type={dinamicType}
          id={id}
          name={name || id}
          value={value}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          autoComplete={autoComplete}
          onBlur={onBlur}
          onChange={onChange}
        />
        {type === 'password' ? buttonEyes : false}
      </div>
    </>
  );

  const labelIn = (
    <FieldBox htmlFor={name} theme={{ disabled }}>
      {fieldGroup}
    </FieldBox>
  );
  const labelOut = (
    <FieldDefault theme={{ disabled }}>{fieldGroup}</FieldDefault>
  );

  return variant === 'out-label' ? labelOut : labelIn;
};

Input.defaultProps = {
  id: '',
  name: '',
  label: '',
  value: '',
  type: 'text',
  placeholder: '',
  required: false,
  disabled: false,
  autoComplete: 'on',
  variant: 'out-label',
  onBlur: (e) => e,
  onChange: (e) => e,
};

export default Input;
export { Input };
