// libs
import React from 'react';
import { Box, Stack } from '@mui/material';
// components
// import { Header } from '@components';
// models
import { LayoutProps } from '@models';
// others
import styles from './Main.module.css';

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <Stack minHeight="100vh">
      {/* <Header /> */}
      <Box component="main" flexGrow={1} className={styles.main}>
        {children}
      </Box>
    </Stack>
  );
};
