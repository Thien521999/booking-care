// libs
import React from 'react';
import { Control, Controller } from 'react-hook-form';
// hooks
import { useLang } from 'hooks/useLang';
// others
import styles from './TextAreaField.module.css';

export interface TextAreaFieldProps {
  control: Control<any>;
  name: any;
  width?: string;
  height?: string;
  errors: any;
  placeholder?: any;
}

export const TextAreaField = ({ errors, control, name, width, height, placeholder }: TextAreaFieldProps) => {
  const lang = useLang();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <textarea
          {...field}
          id="message"
          name={name}
          style={{
            width: `${width}`,
            height: `${height}`,
            fontFamily: lang === 'en' ? `'AvantGarde Md BT', sans-serif` : `'ABeeZee', sans-serif`,
          }}
          className={styles.textArea}
          placeholder={placeholder}
        />
      )}
    />
  );
};
