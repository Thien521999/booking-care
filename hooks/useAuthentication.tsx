// libs
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
// constants
import { StoreKeys } from '@constants';
// hooks
import { useToken } from './useToken';

export const useAuthentication = () => {
  const token = useToken();
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push('/');
    }
  }, [token, router]);
  return <></>;
};
