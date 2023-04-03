import styled from 'styled-components/native';
import Icon from '~/components/Icon';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-left: ${({theme}) => theme.spacing.md}px;
  margin-right: ${({theme}) => theme.spacing.md}px;
  justify-content: space-between;
`;
export const Person = styled(Icon)`
  align-self: center;

`;

export const ContenText = styled.View`
  align-self: center;
`;
