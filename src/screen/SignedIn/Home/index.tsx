import React from 'react';
import Button from '~/components/Button';
import useAuth from '~/hooks/useAuth';

import { Container, Content, ScrollViewItems } from './styled';
import Header from './localComponents/Header';
import SmallCard from './SmallCard';
import Separator from '~/components/Separator';
import VaccineCard from '~/components/VaccineCard';
import TextMain from '~/components/Text';
import Banner from './localComponents/Banner';
import { useNavigation } from '@react-navigation/native';



const Home: React.FC = () => {
   const {navigate} = useNavigation()
   const {signOut} = useAuth();
   const handleAddVaccine = ()=> {
      navigate('addVaccine') 
   } 
  return ( 
        <Container>
          <Header />
          <ScrollViewItems horizontal>
            <SmallCard icon='vacinaAgulha' title={'Minhas\nVacinas'} onPress={handleAddVaccine} />
            <Separator width={15} />
            <SmallCard icon='plus' title={'Adicionar\nCacinas'} />
            <Separator width={15} />
            <SmallCard icon='localiza' title={'Procurar local\n de Vacinas'} />
          </ScrollViewItems>
          <Content>
            <TextMain typography="h6">Próxima Vacinas</TextMain>
            <Separator height={15} />
             <VaccineCard
                  shot='single-dose'
                  date={new Date(2023, 7, 1).toISOString()} 
                  title='Triplice viral'
              />      
             <Separator height={5} />
             <VaccineCard 
                  title='Febre Amarela'
                  shot='first-dose' 
                  date={new Date().toISOString()} 
              />
              <Separator height={5} />  
              <VaccineCard 
                  title='Corona Virus'
                  shot='second-dose' 
                  date={new Date().toISOString()} 
              />  
              <Separator height={15} />
              <TextMain typography="h6">Campanhas de Vacinação</TextMain>
              <Separator height={15} />
              <Banner source={require('~/assets/image/banner/Banner.png')} />
          </Content>

          <Separator height={15} />
          <Button onPress={signOut}>Sair da Sessão</Button> 
        </Container>
  );
};

export default Home;
