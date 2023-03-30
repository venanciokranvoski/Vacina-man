import {NavigatorScreenParams} from '@react-navigation/core';
// eslint-disable-next-line prettier/prettier
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

declare global {
  export type BottomTabParamList = {
    home: NavigatorScreenParams<HomeStackParamList> | undefined;
    profile: NavigatorScreenParams<ProfileStackParamList> | undefined;
  };

  export type StartBottomTabNavigatorProps = BottomTabNavigationProp<
    BottomTabParamList,
    'home'
  >;
}
