// libs
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useMemo } from 'react';
import { Control, useController } from 'react-hook-form';
// others
import styles from './SelectField.module.css';

export interface SelectFieldProps {
  name: string;
  control: Control<any>;
  disabled?: boolean;
  options: Array<any>;
  width: string;
  placeholder?: any;
  errors?: any;
  isBorder?: boolean;
}

const NewIcon = (props: any) => (
  <svg {...props} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M6 6.33301L0 0.333008H12L6 6.33301Z" fill="#303C42" />
  </svg>
);

export const Placeholder = ({ children }: any) => {
  return <div className={styles.placeholder}>{children}</div>;
};

export const SelectField = ({
  name,
  control,
  width,
  options,
  disabled,
  placeholder,
  errors,
  isBorder,
}: SelectFieldProps) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid },
  } = useController({
    name,
    control,
  });

  const getName = useMemo(() => {
    return options?.filter((item: any) => Number(item.id) === Number(value));
  }, [options, value]);

  return (
    <FormControl disabled={disabled} error={invalid} sx={{ width: `${width}` }}>
      <Select
        id={name}
        labelId={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        IconComponent={NewIcon}
        placeholder={placeholder}
        displayEmpty
        sx={{
          '& .MuiSelect-icon': {
            top: 18,
            right: 16,
          },
        }}
        renderValue={(value: any) => (value ? getName[0]?.name : <Placeholder>{placeholder}</Placeholder>)}
      >
        {options?.map((option: any, index: number) => (
          <MenuItem key={index} value={Number(option?.id)}>
            {option?.name}
          </MenuItem>
        ))}
      </Select>
      <div className={styles.error}>{errors?.district?.message}</div>
    </FormControl>
  );
};
