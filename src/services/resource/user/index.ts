import api from '~/services/api';
import {ResponseCreateUserData, RequestCreateUserData} from './types';

export const createUserResource = async (
  createUser: RequestCreateUserData,
  ): Promise<ResponseCreateUserData>  => {
  const {data} = await api.post<ResponseCreateUserData>('/users', createUser);
  return data;
};
