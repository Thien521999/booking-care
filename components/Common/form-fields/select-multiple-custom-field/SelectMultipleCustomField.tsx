// libs
import React, { useMemo, useState } from 'react';
import { Control } from 'react-hook-form';
import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  InputAdornment,
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { FormattedMessage } from 'react-intl';
import SearchIcon from '@mui/icons-material/Search';
// components
import { ButtonCommon } from '@components';
// utils
import { containsText } from '@utils';
// others
import styles from './SelectMultipleCustomField.module.css';

interface ISelectCustomMultipleFieldProps {
  name: string;
  control: Control<any>;
  options: Array<any>;
  placeholderSearch: string;
  placeholderSearchDropDown: string;
  width?: string;
  selectedOption: Array<any>;
  setSelectedOption: (value: any) => void;
}

const Placeholder = ({ children }: any) => {
  return <div className={styles.placeholder}>{children}</div>;
};

export const SelectMultipleCustomField = ({
  name,
  control,
  options,
  placeholderSearch,
  placeholderSearchDropDown,
  selectedOption,
  setSelectedOption,
}: ISelectCustomMultipleFieldProps) => {
  const [searchText, setSearchText] = useState('');

  const displayedOptions = useMemo(
    () => options.filter((option) => containsText(option, searchText)),
    [options, searchText]
  );

  const handleDelete = (e: React.MouseEvent, value: any) => {
    e.preventDefault();
    setSelectedOption((selectedOption: any) => selectedOption.filter((hashtag: any) => hashtag !== value));
  };

  return (
    <Box>
      <FormControl fullWidth>
        <Select
          multiple
          displayEmpty
          labelId={name}
          id={name}
          value={selectedOption}
          disabled={false}
          onChange={(e: any) => setSelectedOption(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <Placeholder>{placeholderSearch}</Placeholder>;
            }
            return (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.length > 0 &&
                  selected.map((value: any) => (
                    <Chip
                      key={value}
                      label={value}
                      onDelete={(e) => handleDelete(e, value)}
                      onMouseDown={(event) => {
                        event.stopPropagation();
                      }}
                      sx={{ borderRadius: '4px', position: 'relative', zIndex: '100' }}
                    />
                  ))}
              </Box>
            );
          }}
          sx={{
            'MuiPaper-root': {
              maxWidth: '500px !important',
            },
          }}
        >
          <ListSubheader>
            <TextField
              size="small"
              sx={{ width: '55%' }}
              autoFocus
              placeholder={placeholderSearchDropDown}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </ListSubheader>

          {displayedOptions.map((option: any, i: number) => (
            <MenuItem
              key={i}
              value={option}
              sx={{
                display: 'inline-flex',
                width: '50%',
                // marginTop: '8px'
              }}
              disabled={selectedOption?.length === 4}
            >
              <Checkbox checked={selectedOption.indexOf(option) > -1} />
              <ListItemText
                primary={
                  <Typography style={{ color: '#6C6C6C', fontSize: '12px', lineHeight: '14px' }}>{option}</Typography>
                }
              />
            </MenuItem>
          ))}

          <Box mt={2}>
            <ButtonCommon
              label={<FormattedMessage id="Apply" defaultMessage="Apply" />}
              padding="10px"
              width="100%"
              bgColor="#EB342E"
              color="#ffffff"
              fontSize="16px"
              lineHeight="20px"
              fontWeight="400"
              styleBorder="none"
              isDisabled={true}
              type="button"
            />
          </Box>
        </Select>
      </FormControl>
    </Box>
  );
};
