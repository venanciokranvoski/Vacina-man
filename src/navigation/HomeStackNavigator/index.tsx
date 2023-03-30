import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed from '~/screen/Feed';
import Stories from '~/screen/Stories';
import {HomeStackParamList} from '~/@types/routes/HomeStackNavigation';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="feed">
      <Stack.Screen name="feed" component={Feed} />
      <Stack.Screen name="stories" component={Stories} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
