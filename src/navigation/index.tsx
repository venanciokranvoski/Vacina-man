import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '~/screen/home';
import Profile from '~/screen/Profile';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default Routes;
