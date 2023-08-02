import React from 'react';
import { Container } from './styles';
import Icon from '~/components/Icon';
import { SelectProps } from './types';
import Separator from '~/components/Separator';
import { useTheme } from 'styled-components';
import TextMain from '~/components/Text';

const Select = ({ isSelect, title, onPress }: SelectProps) => {
    const {spacing} = useTheme()
  return (<Container onPress={onPress}>
           <Icon icon={ isSelect ? 'marcado' : 'noMarcado'} />
           <Separator width={spacing.sm}></Separator>
           <TextMain  typography="body3">{title}</TextMain>        
          </Container>
  );
}

export default Select;