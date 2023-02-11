// libs
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
// hooks
import { useToken } from './useToken';

export const useUnAuthentication = () => {
  const token = useToken();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/auth');
    }
  }, [token, router]);
  return <></>;
};
