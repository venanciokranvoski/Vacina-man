/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {ThemeProvider} from 'styled-components';
import {Alert, View} from 'react-native';
import Header from '~/components/Header';
import useApperance from '~/hooks/useApperance';
import TextMain from '~/components/Text';
import Icon from '~/components/Icon';
import Button from '~/components/Button';
import Separator from '~/components/Separator';
import Input from '~/components/Input';
import {inputValueRef} from '~/components/Input/types';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  const {theme} = useApperance();

  const refEmail = useRef<inputValueRef>({value: ''});
  const refPassword = useRef<inputValueRef>({value: ''});

  const handlePress = () => {
    Alert.alert(
      refEmail.current?.value || 'nao tem nada',
      refPassword.current?.value || 'sem nenhuma senha ',
    );
  };
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <View>
          <Header />
          <TextMain typography="h4" color="primary">
            venancio
          </TextMain>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon icon="listening" size={130} />
            <Separator width={160} />
            <Icon icon="listening" size={130} />
          </View>
        </View>

        <View>
          <Input
            ref={refEmail}
            icon="listening"
            iconPosition="left"
            label="E-mail"
          />
          <Input
            ref={refPassword}
            label="User not exist"
            iconPosition="left"
            secureTextEntry
            label="Senha"
          />
        </View>

        <Button mode="contained" onPress={handlePress}>
          Change settings
        </Button>
      </NavigationContainer>
    </ThemeProvider>
  );
};
export default App;
