import React from 'react';
import Button from '~/components/Button';
import useAuth from '~/hooks/useAuth';

import { Container, ScrollViewItems } from './styled';
import Header from './localComponents/Header';
import SmallCard from './SmallCard';
import Separator from '~/components/Separator';
import { useTheme } from 'styled-components';



const Home: React.FC = () => {
   const { spacing } = useTheme();
   const {signOut} = useAuth();
  return ( 
        <Container>
          <Header />
          <ScrollViewItems horizontal>
            <SmallCard icon='vacinaAgulha' title={'Minhas\nVacinas'} />
            <Separator width={15} />
            <SmallCard icon='plus' title={'Adicionar\nCacinas'} />
            <Separator width={15} />
            <SmallCard icon='localiza' title={'Procurar local\n de Vacinas'} />
          </ScrollViewItems>
          <Separator height={50} />
          <Button onPress={signOut}>Sair da Sessão</Button> 
        </Container>
  );
};

export default Home;
