import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {ColorsType} from 'styled-components';

export type Mode = 'outlined' | 'contained';

export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  icons?: React.ReactNode;
  color?: ColorsType;
  mode?: Mode;
  loading?: boolean;
}
