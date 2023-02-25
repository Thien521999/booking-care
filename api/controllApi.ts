// api
import axiosClient from './axiosClient';
// models
import { payloadLogin, payloadNewUser, user } from '@models';

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
  postDeleteUser(id: number) {
    const url = `/delete-user`;
    return axiosClient.delete(url, { data: { id } });
  },
  postEditUser(inputData: user) {
    const url = `/edit-user`;
    return axiosClient.put(url, inputData);
  },
  getAllCodeUser(inputType: string) {
    const url = `/allcode?type=${inputType}`;
    return axiosClient.get(url);
  },
};
