import {UserDTO} from '~/@types/dtos/user';

export interface RequestSignInData {
  email: string;
  //Caso o Acesso seja por login social
  password?: string;
}

export type ResponseSignInData = Array<UserDTO>
