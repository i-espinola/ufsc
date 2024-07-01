import React from 'react';

import { CheckboxLabel } from './Styled';

export interface CheckboxProps {
  id?: string;
  name: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => any;
}

const Checkbox = (props) => {
  const { label, checked, id, name, onChange, disabled } = props;

  return (
    <CheckboxLabel htmlFor={name}>
      <input
        type="checkbox"
        id={id || name}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <div />
      {label}
    </CheckboxLabel>
  );
};

Checkbox.defaultProps = {
  id: '',
  disabled: false,
};

export default Checkbox;
export { Checkbox };
