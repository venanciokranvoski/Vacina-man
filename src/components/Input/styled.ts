import styled from 'styled-components/native';
import {Text} from 'react-native';
import {IconProps} from '../Icon/types';
import {InputProps} from './types';

export const Container = styled.View``;

export const InputInternal = styled.TextInput`
  flex: 1px;
  font-size: ${({theme}) => theme.typography.body3.fontSize}px;
  font-family: ${({theme}) => theme.typography.body3.fontFamily}px;
  color: ${({theme}) => theme.colors.surface.main};
  min-height: 48px;
`;

interface BorderProps {
  readonly color: string;
  readonly bordercolor: string;
}

export const Border = styled.View<BorderProps>`
  padding: 0 15px 0 15px;
  background-color: ${({colors}) => colors};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-direction: row;
  border-color: ${({borderColor}) => borderColor};
  border-width: 1px;
`;

export const Error = styled(Text)`
  margin-top: 10px;
`;

export const Label = styled(Text)`
  margin-top: 10px;
`;

export const IconContainer = styled.View<Pick<InputProps, 'iconPosition'>>`
  padding-left: ${({iconPosition}) => {
    return iconPosition === 'right' ? '10' : '0';
  }}px;

  padding-right: ${({iconPosition}) => {
    return iconPosition === 'left' ? '10' : '0';
  }}px;
`;
