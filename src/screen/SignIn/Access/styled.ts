import styled from 'styled-components/native';
import Icon from '~/components/Icon';

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
`;

export const ContainerRounded = styled.View`
  padding: 0 ${({theme}) => theme.spacing.md}px;
  background-color: ${({theme}) => theme.colors.background.main};
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
`;

export const Column = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const IconRoundedVacina = styled.View`
  background-color: ${({theme}) => theme.colors.primary.main};
  height: 145px;
  width: 145px;
  border-radius: 73px;
  align-items: center;
  justify-content: center;
`;

export const IconVector = styled(Icon)``;
