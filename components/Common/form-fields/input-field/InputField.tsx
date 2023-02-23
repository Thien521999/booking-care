// libs
import { TextField } from '@mui/material';
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
  disabled?: boolean;
}

export const InputField = ({ control, name, width, placeholder, errors, disabled }: InputFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          helperText={errors[name]?.message}
          placeholder={placeholder}
          style={{ width: width }}
          disabled={disabled}
          inputProps={{
            autoComplete: 'off',
          }}
          autoComplete="chrome-off"
        />
      )}
    />
  );
};

{
  /* <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={styles.wrapper} style={{ width: `${width}` }}>
          <input {...field} type="text" name={name} placeholder={placeholder} onClick={onclick} disabled={isDisable}/>
          <div className={styles.error}>{ errors && errors[name]?.message}</div>
        </div>
      )}
    /> */
}
