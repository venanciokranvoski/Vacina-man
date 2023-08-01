import React from 'react';
import { Pressable, StatusBar, View } from 'react-native';

 import { Card, Container, RowCard } from './styles';
import Separator from '~/components/Separator';
import { useTheme } from 'styled-components';
import Icon from '~/components/Icon';
import TextMain from '~/components/Text';
import { useNavigation } from '@react-navigation/native';

const AddVaccine: React.FC = () => {
    const { spacing } = useTheme();
    const { goBack } = useNavigation()
  return  (
    <Container>
        <StatusBar barStyle={'dark-content'} />
        <Separator height={spacing.md} />
        <Pressable onPress={goBack}>
            <Icon icon='back' size={20}  />
        </Pressable>
        <Separator height={spacing.md} />
        <TextMain typography='h6'>Adicionar vacina</TextMain>
        <Separator height={spacing.sm} />
        <TextMain typography="caption">Gostaria de adicionar por meio de qual método?  </TextMain>
        <Separator height={spacing.lg} />
        <View>
           <Card>
             <RowCard>
                <Icon icon='lapis' size={22} />
                <Separator width={spacing.md} />
                <TextMain typography="caption">Inserção Manual</TextMain>
             </RowCard>
             <Icon icon='arrowRight' size={12}/>
           </Card>
        </View>
        <Separator height={spacing.lg} />
        <View>
           <Card>
             <RowCard>
                <Icon icon='qrcode' size={22} />
                <Separator width={spacing.md} />
                <TextMain typography="caption">Leitura de Qr Code</TextMain>
             </RowCard>
             <Icon icon='arrowRight' size={12}/>
           </Card>
        </View>
        <Separator height={spacing.lg} />
    </Container>
  )
}

export default AddVaccine;