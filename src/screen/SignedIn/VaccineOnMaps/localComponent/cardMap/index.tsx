import React from 'react';
import { View } from 'react-native';
import { CardMapProps } from './types';
import { Container, ContainerDescription, ImageLocal } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';
import TextMain from '~/components/Text';
import Separator from '~/components/Separator';

const cardMap =  ({title, distance, image}: CardMapProps) => {
    const {bottom} = useSafeAreaInsets()
    const {spacing} = useTheme()
  return ( <Container bottom={bottom}>
              <ImageLocal source={image}  />
              <ContainerDescription>
                <TextMain>{title}</TextMain>
                <Separator height={spacing.md} />
                <TextMain>{distance}</TextMain>
              </ContainerDescription>
          </Container>
        );
}

export default cardMap;