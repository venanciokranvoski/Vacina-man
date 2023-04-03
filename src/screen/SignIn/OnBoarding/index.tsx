import React, {useState} from 'react';
import {Container, Person, ContenText} from './styled';
import Tx from '~/components/Text';
import Button from '~/components/Button';
import Separator from '~/components/Separator';
import {useTheme} from 'styled-components';
import {useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useSignInNavigation from '~/hooks/useSignInNavigation';

const OnBoarding: React.FC = () => {
  const {spacing} = useTheme();
  const [heighPerson, setHeighPerson] = useState(0);
  //pegando o valor da screen no Native
  const {height} = useWindowDimensions();
  //pegando as dimensoes de top e bottom
  const {bottom, top} = useSafeAreaInsets();
  const Nav = useSignInNavigation();

  /**
   *
   * CallBacks
   */
  const handleHeigthToPerson = (handleContainer: number) => {
    const freeSpace = height - (handleContainer + top + bottom);
    setHeighPerson(freeSpace);
  };

  const handleNavigateNextScreen = () => {
    Nav.navigate('access');
  };

  return (
    <Container>
      <Separator height={spacing.sm} />
      <Person size={heighPerson} icon="doctor" />
      <ContenText
        onLayout={e => handleHeigthToPerson(e.nativeEvent.layout.height)}>
        <Separator height={spacing.sm} />
        <Tx typography="h4">
          Bem vindo ao <Tx typography="h3">Vacinadx</Tx>
        </Tx>
        <Separator height={spacing.xxl} />
        <Tx typography="subtitle1">
          Sua carteira digital de vacinação de maneira fácil e prática de
          carregar!
        </Tx>

        <Separator height={spacing.xxl} />
        <Button onPress={handleNavigateNextScreen}>Começar</Button>
        <Separator height={spacing.xxl} />
      </ContenText>
    </Container>
  );
};

export default OnBoarding;
