// libs
import React from 'react';
import { Grid } from '@mui/material';
// models
import { LayoutProps } from '@models';

export const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid item xs={12} sm={8} md={6} component="main" sx={{ position: 'relative' }}>
        {children}
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: 'url(https://res.cloudinary.com/dmj3asaf3/image/upload/v1664031092/Inchcape/loginbg_edu285.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
  );
};
