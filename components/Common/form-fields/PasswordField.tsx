// libs
import React from 'react';
import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Control, Controller } from 'react-hook-form';

interface IPasswordFieldProps {
  errors: any;
  name: string;
  disabled?: boolean;
  width: string;
  control: Control<any>;
  placeholder: string;
}

export const PasswordField = ({ errors, name, width, disabled, control, placeholder }: IPasswordFieldProps) => {
  const hasError = !!errors[name];

  return (
    <FormControl sx={{ width: `${width}` }} error={hasError} fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <OutlinedInput
            {...field}
            id={name}
            type='password'
            disabled={disabled}
            placeholder={placeholder}
            inputProps={{
              autoComplete: 'new-password',
            }}
            fullWidth
          />
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
};
