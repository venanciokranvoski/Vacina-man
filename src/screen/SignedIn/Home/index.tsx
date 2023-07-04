import React from 'react';
import Button from '~/components/Button';
import useAuth from '~/hooks/useAuth';

import { Container } from './styled';
import Header from './localComponents/Header';



const Home: React.FC = () => {
   const {signOut} = useAuth();
  return ( 
        <Container>
          <Header />
          <Button onPress={signOut}>Sair da Sessão</Button> 
        </Container>
  );
};

export default Home;
