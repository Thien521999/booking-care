// libs
import { Container } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
// components
import { LoginForm } from '@components';
// api
import { controllApi } from '@api';
// models
import { payloadLogin } from '@models';
// other
import styles from './Login.module.css';

export const Login = () => {
  const [error, setError] = useState('');
  
  const handleSubmitLogin = async (values: payloadLogin) => {
    try {
      const data: any = await controllApi.postLogin(values);
      setError(data.message);
    } catch (error: any) {
      console.log('error', error);
      setError(error.message);
    }
  };
  return (
    <div className={styles.loginWrapper}>
      <Container component="main" maxWidth="xs" sx={{ margin: '18px' }}>
        <LoginForm onSubmit={handleSubmitLogin} error={error} />
      </Container>
    </div>
  );
};
