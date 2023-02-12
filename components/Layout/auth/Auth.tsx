// libs
import React from 'react';
// import { Grid } from '@mui/material';
// models
import { LayoutProps } from '@models';
// other
import styles from './Auth.module.css';

export const AuthLayout = ({ children }: LayoutProps) => {
  return <div className={styles.authLayoutWrapper}>{children}</div>;
};
