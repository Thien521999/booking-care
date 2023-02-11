// libs
import React from 'react';
import { Control, Controller } from 'react-hook-form';
// others
import styles from './SearchField.module.css';

interface SearchFieldProps {
  control: Control<any>;
  name: string;
  width?: string;
  placeholder?: string;
}

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" fill="transparent" />
    <g clipPath="url(#clip0_2523_163841)">
      <path
        d="M15.8645 14.3208H15.0515L14.7633 14.0429C15.7719 12.8696 16.3791 11.3465 16.3791 9.68954C16.3791 5.99485 13.3842 3 9.68954 3C5.99485 3 3 5.99485 3 9.68954C3 13.3842 5.99485 16.3791 9.68954 16.3791C11.3465 16.3791 12.8696 15.7719 14.0429 14.7633L14.3208 15.0515V15.8645L19.4666 21L21 19.4666L15.8645 14.3208V14.3208ZM9.68954 14.3208C7.12693 14.3208 5.05832 12.2521 5.05832 9.68954C5.05832 7.12693 7.12693 5.05832 9.68954 5.05832C12.2521 5.05832 14.3208 7.12693 14.3208 9.68954C14.3208 12.2521 12.2521 14.3208 9.68954 14.3208Z"
        fill="#4A4A4A"
      />
    </g>
    <defs>
      <clipPath id="clip0_2523_163841">
        <rect width="24" height="24" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
);

export const SearchField = ({ control, name, placeholder, width }: SearchFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={styles.wrapper} style={{ width: `${width}` }}>
          <input {...field} type="text" name={name} placeholder={placeholder} />
          <span className={styles.searchIcon}>
            <SearchIcon />
          </span>
        </div>
      )}
    />
  );
};
