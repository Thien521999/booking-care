// libs
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import { Control, useController } from 'react-hook-form';
// utils
import { filterName } from '@utils';
// others
import styles from './SelectMultipleField.module.css';

export interface SelectMultipleFieldProps {
  name: string;
  control: Control<any>;
  disabled?: boolean;
  options: Array<any>;
  placeholder: any;
  width?: String;
  isBorderLeft?: boolean;
  isBorderRight?: boolean;
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      // width: 250,
    },
  },
};

const NewIcon = (props: any) => (
  <svg {...props} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M6 6.33301L0 0.333008H12L6 6.33301Z" fill="#303C42" />
  </svg>
);

const Placeholder = ({ children }: any) => {
  return <div className={styles.placeholder}>{children}</div>;
};

export const SelectMultipleField = ({
  name,
  control,
  width,
  options,
  placeholder,
  disabled,
  isBorderLeft,
  isBorderRight,
}: SelectMultipleFieldProps) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl error={invalid} sx={{ width: `${width}` }}>
      <Select
        id={name}
        labelId={name}
        value={value}
        multiple
        onChange={onChange}
        onBlur={onBlur}
        IconComponent={NewIcon}
        displayEmpty
        renderValue={(value: any) =>
          value.length > 0 ? filterName(options, value).join(', ') : <Placeholder>{placeholder}</Placeholder>
        }
        MenuProps={MenuProps}
        sx={{
          '& .MuiSelect-icon': {
            top: 18,
            right: 16,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderRight: isBorderRight ? '0px solid #C4C4C4 !important' : '1px solid #C4C4C4 !important',
            borderLeft: isBorderLeft ? '0px solid #C4C4C4 !important' : '1px solid #C4C4C4 !important',
          },
        }}
      >
        {options?.map((option: any, index: number) => (
          <MenuItem key={index} value={Number(option?.id)}>
            {option?.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
