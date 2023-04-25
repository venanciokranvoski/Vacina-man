import React from 'react';

import {Container, PressebleX} from './styled';
import HeaderOption from '~/components/HeaderOption';
import Icon from '~/components/Icon';
import TextMain from '~/components/Text';
import Separator from '~/components/Separator';
import {useTheme} from 'styled-components';
import Input from '~/components/Input';
import Button from '~/components/Button';
import {StatusBar} from 'react-native';
import useSignInNavigation from '~/hooks/useSignInNavigation';

const Login: React.FC = () => {
  const {spacing} = useTheme();
  const navigation = useSignInNavigation();
  /**
   * useCallback
   */
  const handleGoBack = () => navigation.goBack();

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <HeaderOption
        left={
          <PressebleX onPress={handleGoBack}>
            <Icon icon="closeX" size={15} />
          </PressebleX>
        }
        rigth={
          <TextMain color="primary" typography="body3">
            Esqueci minha senha
          </TextMain>
        }
      />
      <Separator height={spacing.md} />
      <TextMain typography="h3">Login</TextMain>
      <Separator height={spacing.md} />
      <Input label="Email" icon="checkCircle" iconColor="primary" />
      <Input label="Senha" secureTextEntry iconColor="primary" />
      <Separator height={spacing.md} />
      <Button>Login</Button>
      <Separator height={spacing.md} />
      <TextMain typography="body3">ou acesse com login social</TextMain>
      <Separator height={spacing.md} />
      <Button icons={<Icon icon="apple" />} color="secondary" mode="outlined">
        Continuar com a Apple
      </Button>
      <Separator height={spacing.md} />
      <Button icons={<Icon icon="google" />} color="secondary" mode="outlined">
        Continuar com o Google
      </Button>
    </Container>
  );
};

export default Login;
