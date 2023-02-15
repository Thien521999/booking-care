// api
import axiosClient from './axiosClient';
// models
import { payloadLogin, payloadNewUser } from '@models';

export const controllApi = {
  postLogin(data: payloadLogin) {
    const url = `/login`;
    return axiosClient.post(url, data);
  },
  getAllUser(id: string) {
    const url = `/get-all-users?id=${id}`;
    return axiosClient.get(url);
  },
  postCreateNewlUser(data: payloadNewUser) {
    const url = `/create-new-user`;
    return axiosClient.post(url, data);
  },
  postDeleteUser(id: any) {
    const url = `/delete-user`;
    return axiosClient.delete(url, { data: { id } });
  },
  postEditUser(inputData: any) {
    console.log('inputData', inputData);
    const url = `/edit-user`;
    return axiosClient.put(url, inputData);
  },
};
