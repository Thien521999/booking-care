// libs
import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

interface InputFieldLabelProps {
  control: Control<any>;
  name: string
  width?: string
  errors: any
  placeholder?: any
  disabled?: boolean
  isBorder?: boolean
  label?: string
  isLabel?: string
}

export const InputFieldLabel = ({
  control,
  name,
  width,
  placeholder,
  errors,
  disabled,
  isBorder,
  label,
}: InputFieldLabelProps) => {
  const hasError = errors[name]

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          // error={!!hasError}
          helperText={errors[name]?.message}
          // placeholder={placeholder}
          style={{ width: width}}
          disabled={disabled}
          inputProps={{
            autoComplete: 'off',
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">{placeholder}</InputAdornment>,
          }}
          autoComplete="chrome-off"
        />
      )}
    />
  )
}