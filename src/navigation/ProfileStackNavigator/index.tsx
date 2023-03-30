import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '~/screen/Profile';
import Posts from '~/screen/Posts';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileHomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="profileStack">
      <Stack.Screen name="profileStack" component={Profile} />
      <Stack.Screen name="post" component={Posts} />
    </Stack.Navigator>
  );
};

export default ProfileHomeStackNavigator;
