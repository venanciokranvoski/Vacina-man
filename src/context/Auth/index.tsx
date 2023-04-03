/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, useState} from 'react';
import {UserDTO} from '~/@types/dtos/user';
import {AuthContextProp} from './types';
import axios from 'axios';

export const AuthContext = createContext<AuthContextProp>(
  {} as AuthContextProp,
);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<UserDTO>();
  const [loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(true);

  /**
   * Callbacks
   */

  const signIn = async (data?: {email: string; password: string}) => {
    setIsLogged(false);
  };

  const signOut = () => {
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider value={{user, loading, isLogged, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
