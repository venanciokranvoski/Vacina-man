/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, useState} from 'react';
import {UserDTO} from '~/@types/dtos/user';
import {AuthContextProp, asyncUserKeys} from './types';
import axios from 'axios';
import { RequestSignInData, ResponseSignInData } from '~/services/resource/auth/types';
import { signInResource } from '~/services/resource/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import api from '~/services/api';
import { RequestCreateUserData } from '~/services/user/types';
import { createUserResource } from '~/services/user';

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
      setUser(response.user);
      setisSigned(true)
      saveUserToStorageAndConfigToken(response.user)
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
      setUser(response.user);
      setisSigned(true)
      console.log(response.user);
      
      await saveUserToStorageAndConfigToken(response.user)
    } catch (error) {
       Alert.alert('NOP', 'não foi possivel realizar o Cadastro, tente novamente mais tarde!');  
       console.log(error);
    } finally {
      setLoading(false)
    }
  }




  return (
    <AuthContext.Provider value={{user, loading, isSigned, signIn,signUp, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
