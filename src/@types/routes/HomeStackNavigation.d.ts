/* eslint-disable prettier/prettier */
import {RouteProp} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  export type HomeStackParamList = {
    feed: undefined;
    stories: {para: string};
  };

  /**
   * useNavigation type
   */

  export type HomeStackNavigatorProps = NativeStackNavigationProp<
    HomeStackParamList,
    'feed'
  >;

  /**
   * useRoute type
   */

  export type StoriesHomeStackRouteProp = RouteProp<
  HomeStackParamList,
  'stories'
>;

}


