// libs
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
// hooks
import { useToken } from './useToken';

export const useAuthentication = () => {
  const token = useToken();
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push('/crud-user');
    }
  }, [token, router]);
  return <></>;
};
