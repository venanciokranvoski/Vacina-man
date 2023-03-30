/* eslint-disable prettier/prettier */
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  export type ProfileStackParamList = {
    profileStack: undefined;
    post: undefined;
  };

  /**
   * useNavigation type
   */
  export type HomeStackNavigatorProps = NativeStackNavigationProp<
    ProfileStackParamList,
    'profileStack'
  >;
}
