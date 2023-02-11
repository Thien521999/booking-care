// libs
import React from 'react';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
// orthers
import styles from './ButtonCommon.module.css';
import iconUp from '@public/images/iconUp.png';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

interface Props {
  label?: any;
  color: string;
  bgColor: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  colorLabel?: string;
  styleBorder: string;
  children?: any;
  type?: any;
  isDisabled: boolean;
  handleClick?: (value?: any) => void;
  isIconBefore?: boolean;
  form?: string;
}

export const ButtonCommon = ({
  label,
  color,
  bgColor,
  margin,
  padding,
  width,
  height,
  fontSize,
  fontWeight,
  lineHeight,
  colorLabel,
  styleBorder,
  type,
  children,
  isDisabled,
  handleClick,
  isIconBefore,
  form,
}: Props) => {
  return (
    <button
      className={isDisabled ? styles.btn : styles.btnDisable}
      style={{
        margin: margin,
        padding: padding,
        width: width,
        height: height,
        color: color,
        backgroundColor: bgColor,
        border: styleBorder,
      }}
      onClick={handleClick}
      type={type || 'button'}
      disabled={!isDisabled}
      form={form}
    >
      {children}
      <span
        style={{
          marginLeft: children ? '5px' : '0',
          fontSize: fontSize,
          fontWeight: fontWeight,
          lineHeight: lineHeight,
          color: colorLabel,
        }}
        className={styles.text}
      >
        {label || ''}
      </span>
      {isIconBefore ? (
        <div className={styles.icon}>
          A
          {/* <Image src={iconUp} alt="" width="15px" height="7.5px" /> */}
        </div>
      ) : (
        ''
      )}
    </button>
  );
};
