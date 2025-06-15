import React from 'react';

import styles from './Select.module.scss';

export interface SelectOption {
  label: string;
  value: number;
}

export interface ISelectProps {
  id?: string;
  placeholder?: string;
  options: SelectOption[];
  value: number | '';
  onChange: (value: number) => void;
}

export const Select = ({
  id,
  placeholder = 'Выберите значение',
  options,
  value,
  onChange,
}: ISelectProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (selectedValue !== '') {
      onChange(Number(selectedValue));
    }
  };

  return (
    <div className={styles.selectWrapper}>
      <select id={id} className={styles.select} value={value} onChange={handleChange}>
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
