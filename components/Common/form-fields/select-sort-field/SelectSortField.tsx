// libs
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React, { useMemo } from 'react'
import { Control, useController } from 'react-hook-form'
// others
import styles from './SelectSortField.module.css'

interface SelectSortFieldProps {
  name: string
  control: Control<any>
  disabled?: boolean
  options: any
  width: string
  placeholder?: any
  isBorder?: boolean
}

const NewIcon = (props: any) => (
  <svg
    {...props}
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 6.33301L0 0.333008H12L6 6.33301Z"
      fill="#303C42"
    />
  </svg>
)

const Placeholder = ({ children }: any) => {
  return <div className={styles.placeholder}>{children}</div>
}

export const SelectSortField = ({
  name,
  control,
  width,
  options,
  disabled,
  placeholder,
  isBorder,
}: SelectSortFieldProps) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  })

    const getName = useMemo(() => {
      return options?.filter((item: any) => Number(item.id) === Number(value))
    }, [options, value])

  return (
    <FormControl disabled={disabled} error={invalid} sx={{ width: `${width}` }}>
      <div className={styles.wrapper}>
        <div className={styles.label}>{placeholder}</div>
        <Select
          id="country"
          labelId="country"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          IconComponent={NewIcon}
          defaultValue={value}
          
          displayEmpty
          sx={{
            '& .MuiSelect-icon': {
              top: 20,
              right: 16,
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderLeft: isBorder
                ? '0px solid #C4C4C4 !important'
                : '1px solid #C4C4C4 !important',
              width: `${width}`,
              '& .MuiSelect-select': {
                display: 'flex',
                alignItems: 'center',
              }
            },
          }}
          renderValue={(value: any) => getName[0].name }
        >
          {options?.map((option: any, index: number) => (
            <MenuItem key={index} value={Number(option.id)}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </div>
    </FormControl>
  )
}
