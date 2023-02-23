// libs
import { Container } from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
// components
import { LoginForm } from '@components';
// api
import { controllApi } from '@api';
// hooks
import { useAppDispatch } from 'app/hooks';
// models
import { payloadLogin } from '@models';
// constants
import { StoreKeys } from '@constants';
// slice
import { addUserCurrent } from 'redux/slice/authSlice';
// other
import styles from './Login.module.css';

export const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  
  const [error, setError] = useState('');

  const handleSubmitLogin = async (values: payloadLogin) => {
    try {
      const data: any = await controllApi.postLogin(values);
      if (data && data.errCode === 1) {
        setError(data.message);
      } else if (data && data.errCode === 0) {
        localStorage.setItem(StoreKeys.TOKEN, JSON.stringify(data.user));

        const action = addUserCurrent(data.user);
        dispatch(action);
        
        router.push('/crud-user');
      }
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
