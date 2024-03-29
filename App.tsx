import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components';
import useApperance from '~/hooks/useApperance';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '~/navigation/index';
import {AuthProvider} from '~/context/Auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const App: React.FC = () => {
  const {theme} = useApperance();

  useEffect(()=> {
    GoogleSignin.configure({
      offlineAccess: true,
      scopes: ['profile', 'email'],
      webClientId:  '670283818061-qibpvi242q4i91a3uurpll0vt744n9jg.apps.googleusercontent.com',
    })
  },[])

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};
export default App;
