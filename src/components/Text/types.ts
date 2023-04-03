import React from 'react';
import {TextProps} from 'react-native';
import {ColorsTypes, TypographyType} from 'styled-components';

export interface Props extends TextProps {
  children: string | React.ReactNode;
  color?: ColorsTypes;
  typography?: TypographyType;
}
