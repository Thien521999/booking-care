import { StoreKeys } from '@constants';

export const useToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage && localStorage?.getItem(StoreKeys.TOKEN);
  }
};
