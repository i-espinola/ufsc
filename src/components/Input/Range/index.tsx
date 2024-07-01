import React, { useState } from 'react';
import { RangeContainer, RangeNumber, RangeSlider } from './Styled';

export interface RangeProps {
  id?: string;
  name?: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  valueDefault?: number;
  onChange?: (number: number) => void;
}

const Range = (props: RangeProps) => {
  const { id, name, valueDefault, min, max, step, onChange } = props;
  const [value, setValue] = useState(valueDefault || props.value);
  const width = (max / 100) * value;

  const handleChange = (e) => {
    e.preventDefault();
    let val: number = Number(e.target.value);
    if (val < min || !val) val = min;
    else if (val > max) val = max;

    setValue(val);
  };

  return (
    <RangeContainer>
      <RangeSlider theme={{ width }}>
        <input
          type="range"
          id={`${id}_id_rangeSlider`}
          name={`${name}_name_rangeSlider`}
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={handleChange}
        />
      </RangeSlider>
      <RangeNumber>
        <input
          type="number"
          id={`${id}_id_inputNumber`}
          name={`${name}_name_inputNumber`}
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={handleChange}
        />
      </RangeNumber>
    </RangeContainer>
  );
};

Range.defaultProps = {
  id: '',
  name: '',
  step: 1,
  value: 50,
  min: 0,
  max: 100,
  valueDefault: 0,
  onChange: () => null,
};

export default Range;
export { Range };
