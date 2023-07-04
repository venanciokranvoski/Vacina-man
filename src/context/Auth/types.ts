import {UserDTO} from '~/@types/dtos/user';
import { RequestCreateUserData } from '~/services/user/types';

interface RequestSignData {
  email: string;
  password: string;
}

export interface AuthContextProp {
  isSigned: boolean;
  loading: boolean;
  user?: UserDTO;
  signIn: (data: RequestSignData) => Promise<void>;
  signUp: (data: RequestCreateUserData) => Promise<void>
  signOut: () => void;
}

export const asyncUserKeys = {
  user: 'vacinadx:user',
};
