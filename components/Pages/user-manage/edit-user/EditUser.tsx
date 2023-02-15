// libs
import { user } from '@models';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
// api
import { controllApi } from '@api';
// components
import { EditUserForm } from '../edit-user-form/EditUserForm';

interface IEditUserProps {
  handleClose: () => void;
  user: user;
}

export const EditUser = ({ handleClose, user }: IEditUserProps) => {
  const router = useRouter();

  const [error, setError] = useState('');

  const handleSubmit = async (values: any) => {
    try {
      delete values.password;

      const data: any = await controllApi.postEditUser(values);

      if (data && data.errCode === 0) {
        handleClose();
        router.push('/user-manage');
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Box py={5} px={4}>
      <EditUserForm onSubmit={handleSubmit} error={error} handleClose={handleClose} user={user} />
    </Box>
  );
};
