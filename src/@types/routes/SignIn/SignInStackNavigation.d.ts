/* eslint-disable prettier/prettier */
import {RouteProp} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  export type SignInStackParamList = {
    access: undefined;
    login: undefined;
    onboarding: undefined;
    signup: undefined;
    signupstep2: {
      email: string;
      firstName: string;
      lastName:  string;
    };
  };

  /**
   * useNavigation type
   */

  export type SignInStackNavigatorProps = NativeStackNavigationProp<
    SignInStackParamList,
    'access'
  >;

  /**
   * useRoute type
   */

  export type StoriesSignInStackRouteProp = RouteProp<
  SignInStackParamList,
  'access'
  >;

  export type SignUpStep2SignInStackRouteProp = RouteProp<SignInStackParamList, 'signupstep2'>

}


