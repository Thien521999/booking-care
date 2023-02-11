import { useRouter } from 'next/router';

export const useLang = () => {
  const router = useRouter();
  return router.locale || 'en';
};
