import React from 'react';
import {Container, Person, ContenText} from './styled';
import Tx from '~/components/Text';
import Button from '~/components/Button';
import Separator from '~/components/Separator';

const OnBoarding: React.FC = () => {
  return (
    <Container>
      <Person size={300} icon="doctor" />
      <ContenText>
        <Tx typography="h4">
          Bem vindo ao <Tx typography="h3">Vacinadx</Tx>
        </Tx>
        <Separator height={45} />
        <Tx typography="subtitle1">
          Sua carteira digital de vacinação de maneira fácil e prática de
          carregar!
        </Tx>
      </ContenText>

      <Button>Começar</Button>
    </Container>
  );
};

export default OnBoarding;
