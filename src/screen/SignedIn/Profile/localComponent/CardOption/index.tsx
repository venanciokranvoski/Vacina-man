import React from 'react';

 import { Circle, Container } from './styled';
import Icon from '~/components/Icon';
import { useTheme } from 'styled-components';
import Separator from '~/components/Separator';
import { spacing } from '~/constants/styles/theme/common';
import TextMain from '~/components/Text';
import { Row } from '../../styled';
import { OptionProps } from './types';

const CardOption = ({title, icon, onPress}: OptionProps) => {
    const {colors} = useTheme();
  return(   <Container onPress={onPress}>
                <Row>
                    <Circle>
                        <Icon icon={icon} size={15} activeColor={colors.background.main} />
                    </Circle>
                    <Separator width={spacing.sm} />
                    <TextMain>{title}</TextMain>
                </Row>
                <Icon icon='arrowRight' size={13} activeColor={colors.primary.main} />
            </Container>
  )
}

export default CardOption;