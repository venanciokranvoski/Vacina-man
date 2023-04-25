import React from 'react';
import {
  Container,
  ContainerRounded,
  IconRoundedVacina,
  IconVector,
  Column,
} from './styled';

import SplashScreen from '~/assets/image/Splash/splashScreen.png';
import {StatusBar} from 'react-native';
import Text from '~/components/Text';
import Button from '~/components/Button';
import Separator from '~/components/Separator';
import {useTheme} from 'styled-components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useSignInNavigation from '~/hooks/useSignInNavigation';

const Access: React.FC = () => {
  const {spacing} = useTheme();
  const {bottom} = useSafeAreaInsets();
  const navigation = useSignInNavigation();

  /**
   * callBacks
   */
  const handleNavigationToLogin = () => navigation.navigate('login');
  const handleNavigationToSignUp = () => navigation.navigate('signup');

  return (
    <Container source={SplashScreen}>
      <StatusBar barStyle="light-content" />
      <Column>
        <IconRoundedVacina>
          <IconVector icon="vacina" size={80} />
        </IconRoundedVacina>
        <Separator height={spacing.md} />
        <Text typography="h2" color="background">
          Vacinadx{' '}
        </Text>
      </Column>
      <ContainerRounded>
        <Separator height={spacing.xl} />
        <Text style={{left: 20}} typography="h3">
          Bem vindo
        </Text>
        <Separator height={spacing.sm} />
        <Text style={{left: 20}}>Acesse ao App</Text>
        <Separator height={spacing.xxl} />
        <Button onPress={handleNavigationToLogin}>Login</Button>
        <Separator height={spacing.sm} />
        <Button onPress={handleNavigationToSignUp} mode="outlined">
          {' '}
          Cadastro
        </Button>
        <Separator height={bottom + spacing.xxxl} />
      </ContainerRounded>
    </Container>
  );
};

export default Access;
