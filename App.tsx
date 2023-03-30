import React from 'react';
import {ThemeProvider} from 'styled-components';
import useApperance from '~/hooks/useApperance';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '~/navigation/index';

const App: React.FC = () => {
  const {theme} = useApperance();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};
export default App;
