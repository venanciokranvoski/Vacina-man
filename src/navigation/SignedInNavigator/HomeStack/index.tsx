import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AddVaccine from '~/screen/SignedIn/AddVaccine';
import AddVaccineManually from '~/screen/SignedIn/AddVaccineManually';
import Home from '~/screen/SignedIn/Home';
import QrCode from '~/screen/SignedIn/QrCode';
import VaccineOnMaps from '~/screen/SignedIn/VaccineOnMaps';

const Stack = createNativeStackNavigator()

const HomeStack: React.FC = () => {
  return( 
        <Stack.Navigator>
          <Stack.Screen  name='homeStack'  component={Home}       options={{header: () => null}} />
          <Stack.Screen  name='addVaccine' component={AddVaccine} options={{header: () => null}} />
          <Stack.Screen  name='qrCode'     component={QrCode}     options={{header: () => null}} />
          <Stack.Screen  name='addVaccineManually' component={AddVaccineManually}  options={{header: () => null}} />
          <Stack.Screen  name='vaccineOnMaps' component={VaccineOnMaps}  options={{header: () => null}} />
        </Stack.Navigator>    
    );
}

export default HomeStack;