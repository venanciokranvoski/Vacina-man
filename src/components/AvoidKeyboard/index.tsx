import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';

const AvoidKeyboard: React.FC = ({children}) => {
  return (<Container>
            {children}
         </Container>);
}

export default AvoidKeyboard;