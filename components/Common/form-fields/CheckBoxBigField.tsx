// libs
import React from 'react';
import { Checkbox, FormControl, FormControlLabel } from '@mui/material';
import { Controller, Control } from 'react-hook-form';

export interface CheckBoxBigFieldProps {
  name: string;
  defaultValue?: any;
  width?: string;
  control: Control<any>;
  label?: any;
  disabled?: boolean;
  values?: boolean;
}

const NewIcon = (props: any) => (
  <svg {...props} width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="14" height="14" fill="white" stroke="#979797" />
  </svg>
);

const NewIconChecked = (props: any) => (
  <svg {...props} width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_3253_59257)">
      <rect width="24" height="24" fill="#EB342E" />
      <path d="M5.5 10.125L2.875 7.5L2 8.375L5.5 11.875L13 4.375L12.125 3.5L5.5 10.125Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_3253_59257">
        <rect width="15" height="15" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const CheckBoxBigField = ({ name, width, disabled, control, label, values }: CheckBoxBigFieldProps) => {
  return (
    <FormControl component="fieldset" sx={{ width: `${width}` }}>
      <Controller
        name={name}
        control={control}
        defaultValue={values}
        render={({ field: { onChange, value } }: any) => (
          <FormControlLabel
            value="end"
            control={
              <Checkbox
                sx={{
                  color: '#979797',
                  '&.Mui-checked': {
                    color: '#000000',
                  },
                }}
                icon={<NewIcon />}
                checkedIcon={<NewIconChecked />}
              />
            }
            label={label}
            disabled={disabled}
            checked={value}
            onChange={onChange}
          />
        )}
      />
    </FormControl>
  );
};
