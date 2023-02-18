// libs
import React from 'react';
import { Box, Stack } from '@mui/material';
// components
import { HeaderMain, FooterMain } from '@components';
// models
import { LayoutProps } from '@models';
// others
import styles from './Main.module.css';

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <Stack minHeight="100vh">
      <HeaderMain />
      <Box component="main" flexGrow={1} className={styles.main}>
        {children}
      </Box>
      <FooterMain />
    </Stack>
  );
};
