import React from 'react';

import styles, { Circle, Container, Title } from './styles';
import Icon from '~/components/Icon';
import TextMain from '~/components/Text';
import Separator from '~/components/Separator';
import { View, Pressable } from 'react-native';
import { Props } from './types';

const SmallCard = ({icon, title, onPress}: Props) => {
  return (
        <Pressable style={styles.shadow} onPress={onPress}>
            <Container>
               <Circle>
                    <Icon icon={icon} size={20} activeColor='white' />
                </Circle>  
                <Separator height={16} />
                <Title>{title}</Title>
            </Container>
        </Pressable>

        )
}

export default SmallCard;