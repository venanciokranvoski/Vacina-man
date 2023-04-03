import api from '~/services/api';
import {RequestSignInData} from './types';

export const signInResource = async ({email, password}: RequestSignInData) => {
  const {data} = await api.post('/auth', {email, password});
};
