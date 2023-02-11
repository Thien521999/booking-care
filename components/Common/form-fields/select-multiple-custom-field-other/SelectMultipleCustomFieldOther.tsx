// libs
import React, { useMemo, useState } from 'react';
import { Box, Chip, InputAdornment, ListSubheader, TextField } from '@mui/material';
import { FormattedMessage } from 'react-intl';
// components
import { ButtonCommon } from '@components';
// utils
import { containsText } from '@utils';
// others
import styles from './SelectMultipleCustomFieldOther.module.css';

interface ISelectCustomMultipleFieldProps {
  name: string;
  options: any[];
  placeholderSearch: () => void;
  placeholderSearchDropDown: string;
  setIsNoAssignee: (value: boolean) => void;
  setValue: (name: string, listStaff: number[]) => void;
  handleChangeSelect: (istStaff: number[]) => void;
}

const SearchIcon = () => (
  <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.10352 6.66433L0.103516 0.734375H12.1035L6.10352 6.66433Z"
      fill="#303C42"
    />
  </svg>
);

const Placeholder = ({ children }: any) => {
  return <div className={styles.placeholder}>{children}</div>;
};

export const SelectMultipleCustomFieldOther = ({
  name,
  options,
  placeholderSearch,
  placeholderSearchDropDown,
  setIsNoAssignee,
  setValue,
  handleChangeSelect,
}: ISelectCustomMultipleFieldProps) => {
  const [isActive, setIsActive] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [listSelectApply, setListSelectApply] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState<any>([]);

  const displayedOptions = useMemo(
    () => options.filter((option) => containsText(option, searchText)),
    [options, searchText]
  );

  const handleDelete = (e: React.MouseEvent, value: any) => {
    e.preventDefault();

    setIsActive(!isActive);

    const filterSelectedOption = (selectedOption: any[]) =>
      selectedOption.filter((hashtag: any) => hashtag.sid !== value.sid);

    setSelectedOption(filterSelectedOption(selectedOption));
    setListSelectApply((listSelectApply: any[]) =>
      listSelectApply.filter((hashtag: any) => hashtag.sid !== value.sid)
    );

    handleChangeSelect(getStaff(filterSelectedOption(selectedOption)));
  };

  const handleClickActive = () => {
    if (options.length <= 0) {
      setIsActive(false);
      setIsNoAssignee(true);
    } else {
      setIsActive(!isActive);
    }
    setListSelectApply([]);
  };

  const handleClickBlur = () => {
    setIsActive(false);
  };

  let getStaff = (listStaff: any[]) => {
    let data: number[] = [];
    listStaff.map((staff: any) => data.push(staff.sid));
    return data;
  };

  const handleApply = () => {
    if (name) {
      setSelectedOption([...selectedOption, ...listSelectApply]);
      setListSelectApply([...selectedOption, ...listSelectApply]);
      setValue(name, getStaff([...selectedOption, ...listSelectApply]));
      handleChangeSelect(getStaff([...selectedOption, ...listSelectApply]));
    }

    setIsActive(!isActive);
  };

  const isCheck = (selectedOption: any[], id: number) => {
    return selectedOption.some((item: any) => (item.sid === id ? true : undefined)) || undefined;
  };

  return (
    <div>
      <div
        className={options.length <= 0 ? styles.inputSelectDisable : styles.inputSelect}
        onClick={handleClickActive}
        onBlur={handleClickBlur}
      >
        {selectedOption.length > 0 ? (
          <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5 }}>
            {selectedOption?.map((value: any) => (
              <Chip
                key={value.name}
                label={value.name}
                onDelete={(e) => handleDelete(e, value)}
                onMouseDown={(event) => {
                  event.stopPropagation();
                }}
                sx={{ borderRadius: '4px', position: 'relative', zIndex: '100' }}
              />
            ))}
          </Box>
        ) : (
          <Placeholder>{placeholderSearch()}</Placeholder>
        )}
        <SearchIcon />
      </div>

      {isActive && (
        <div className={styles.dropdownSelect}>
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

          <Box mb={2} className={listSelectApply.length >= 4 ? styles.disabelDropDown : ''}>
            {displayedOptions.map((option: any, i: number) => (
              <div
                key={i}
                className={
                  listSelectApply.some((item: any) => item.sid === option.sid)
                    ? styles.checkboxChecked
                    : styles.checkbox
                }
              >
                <label className={styles.label}>
                  <input
                    className={styles.inputCheckox}
                    type="checkbox"
                    value={option?.sid}
                    checked={isCheck(selectedOption, option.sid)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        if (listSelectApply.length <= 4) {
                          listSelectApply.push({
                            name: option?.sn,
                            sid: option?.sid,
                          });
                          setListSelectApply(listSelectApply);
                        }
                        setListSelectApply(listSelectApply.slice(0, 4));
                      } else {
                        setSelectedOption((selectedOption: any[]) =>
                          selectedOption.filter((hashtag: any) => hashtag.sid !== Number(e.target.value))
                        );
                        setListSelectApply((listSelectApply: any[]) =>
                          listSelectApply.filter((hashtag: any) => hashtag.sid !== Number(e.target.value))
                        );
                      }
                    }}
                  />
                  <span className={styles.checkmark}>{option?.sn}</span>
                </label>
              </div>
            ))}
          </Box>

          <Box>
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
              isDisabled={
                listSelectApply.length > 0 && listSelectApply.length <= 4 && selectedOption.length < 4 ? true : false
              }
              type="button"
              handleClick={handleApply}
            />
          </Box>
        </div>
      )}
    </div>
  );
};
