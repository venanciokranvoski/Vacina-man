/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, useState} from 'react';
import {UserDTO} from '~/@types/dtos/user';
import {AuthContextProp, asyncUserKeys} from './types';
import axios from 'axios';
import { RequestSignInData, ResponseSignInData } from '~/services/resource/auth/types';
import { checkIfExistUserResource, signInResource } from '~/services/resource/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import api from '~/services/api';
import { RequestCreateUserData } from '~/services/resource/user/types';
import { createUserResource } from '~/services/resource/user';

export const AuthContext = createContext<AuthContextProp>(
  {} as AuthContextProp,
);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<UserDTO>();
  const [loading, setLoading] = useState(false);
  const [isSigned, setisSigned] = useState(false);

  /**
   * Callbacks
   */

  const saveUserToStorageAndConfigToken = async (data: UserDTO)=> {
    api.defaults.headers.Authorization = `Bearer ${data.token}`
    await AsyncStorage.setItem(asyncUserKeys.user, JSON.stringify(data));
  }

  
  const signOut = async () => {
    setisSigned(false);
    setUser(undefined);
    api.defaults.headers.Authorization = `Baerer`;
    await AsyncStorage.clear();
  };

  const signIn = async (data: RequestSignInData) => {
    try {
      setLoading(true);  
      const response = await signInResource(data);
      setUser(response[0]);
      setisSigned(true)
      saveUserToStorageAndConfigToken(response[0])
    } catch (error) {
       Alert.alert('NOP', 'não foi possivel realizar o login, tente novamente mais tarde!');  
       console.log(error);
    } finally {
      setLoading(false)
    }
  };


  const signUp = async (data: RequestCreateUserData) => {
    try {
      setLoading(true);  
      const response = await createUserResource(data);
      setUser(response);
      setisSigned(true)
      console.log(response);
      
      await saveUserToStorageAndConfigToken(response)
    } catch (error) {
       Alert.alert('NOP', 'não foi possivel realizar o Cadastro, tente novamente mais tarde!');  
       console.log(error);
    } finally {
      setLoading(false)
    }
  }

  const checkIfExistsUser = async (data: Partial<UserDTO>) => {
    try {
      setLoading(true);  
      const response = await checkIfExistUserResource(data);
      if(response.length > 0){
        return true;
      }
      return false;
    } catch (error) {
         return false;
    } finally {
      setLoading(false)
    }
  }




  return (
    <AuthContext.Provider value={{user, loading, isSigned, checkIfExistsUser, signIn,signUp, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
