// libs
import React from 'react';
import { Control, Controller } from 'react-hook-form';
// others
import styles from './InputField.module.css';

interface InputFieldProps {
  control: Control<any>;
  name: string;
  width?: string;
  placeholder?: string;
  errors?: any;
  onclick?: (value: any) => void;
  isDisable?: boolean;
}

export const InputField = ({ control, name, width, placeholder, errors, onclick, isDisable }: InputFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={styles.wrapper} style={{ width: `${width}` }}>
          <input {...field} type="text" name={name} placeholder={placeholder} onClick={onclick} disabled={isDisable}/>
          <div className={styles.error}>{ errors && errors[name]?.message}</div>
        </div>
      )}
    />
  );
};
