import React, { useState } from 'react';
import '@/styles/form/radioButtons.css';

interface Option {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface RadioButtonsProps {
  name: string;
  options: Option[];
  onChange: (value: string) => void;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({ name, options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className="radio-group">
      {options.map((option) => (
        <label key={option.value} className="radio-option">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => handleChange(option.value)}
            className="radio-input"
          />
          <span className="radio-custom">
            {option.icon ? option.icon : (
              <span className={`radio-circle ${selectedValue === option.value ? 'selected' : ''}`} />
            )}
          </span>
          <span className="radio-label">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;