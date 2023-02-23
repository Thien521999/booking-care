// libs
import { controllApi } from '@api';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
// components
import { CreateNewUserForm } from '../create-new-user-form/CreateNewUserForm';
// other
import styles from './CreateNewUser.module.css';

interface ICreateNewUserProps {
  handleClose: () => void;
}

export const CreateNewUser = ({ handleClose }: ICreateNewUserProps) => {
  const router = useRouter();

  const [error, setError] = useState('');

  const handleSubmit = async (values: any) => {
    try {
      const data: any = await controllApi.postCreateNewlUser(values);
      if (data && data.errCode === 0) {
        handleClose();
        router.push('/crud-user');
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <Box py={5} px={4}>
      <CreateNewUserForm onSubmit={handleSubmit} error={error} handleClose={handleClose} />
    </Box>
  );
};
