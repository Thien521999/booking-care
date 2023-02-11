// libs
import { LoginForm } from '@components';
import { Container } from '@mui/material';
import React, { useState } from 'react';
// components
// import { LoginForm } from './login-form/LoginForm';
// other
import styles from './Login.module.css';

export const Login = () => {
  const [error, setError] = useState('');
  const handleSubmitLogin = () => {};
  return (
    <div className={styles.loginWrapper}>
      <Container component="main" maxWidth="xs" sx={{margin: '18px'}}>
        <LoginForm onSubmit={handleSubmitLogin} error={error} />
      </Container>
    </div>
  );
};
