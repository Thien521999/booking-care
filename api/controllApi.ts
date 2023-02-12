// api
import axiosClient from './axiosClient';
// models
import { payloadLogin } from '@models';

export const controllApi = {
  postLogin(data: payloadLogin) {
    const url = `/login`;
    return axiosClient.post(url, data);
  },
};
