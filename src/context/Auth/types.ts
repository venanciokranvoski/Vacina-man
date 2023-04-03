import {UserDTO} from '~/@types/dtos/user';

interface RequestSignData {
  email: string;
  passowrd: string;
}

export interface AuthContextProp {
  isSigned: boolean;
  loading: boolean;
  user?: UserDTO;
  signIn: (data: RequestSignData) => Promise<void>;
  signOut: () => void;
}

export const asyncUserKeys = {
  user: 'vacinadx:user',
};
