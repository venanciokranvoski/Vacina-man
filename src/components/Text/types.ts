import {TextProps} from 'react-native';
import {ColorsTypes, TypographyType} from 'styled-components';

export interface Props extends TextProps {
  children: string;
  color?: ColorsTypes;
  typography?: TypographyType;
}
