import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';

 import { Avatar, Container, Row } from './styled';
import TextMain from '~/components/Text';
import Separator from '~/components/Separator';
import { useTheme } from 'styled-components';
import useAuth from '~/hooks/useAuth';
import CardOption from './localComponent/CardOption';

const Profile: React.FC = () => {
  const {spacing} = useTheme();
  const {user} = useAuth();
  return (
          <Container>
            <ScrollView>
              <StatusBar barStyle={'dark-content'} />
              <TextMain typography={'h5'} >Perfil</TextMain>
              <Separator height={spacing.lg} />
              <Row> 
                <Avatar source={{uri: user?.avatar}} />
                <Separator width={spacing.sm} />
                <View>
                  <TextMain typography={'h6'}>{user?.firstName}</TextMain>
                  <TextMain typography={'h6'} >{user?.lastName}</TextMain>
                </View>
              </Row>
              <Separator height={spacing.lg} />
              <View>
                <CardOption title='Informações Pessoais' icon='profile' onPress={()=> {}} />
                <CardOption title='Suporte' icon='notification' onPress={()=> {}} />
                <CardOption title='Sair' icon='logout' onPress={()=> {}} />
              </View>
            </ScrollView>
          </Container>
         ) 
};

export default Profile;
