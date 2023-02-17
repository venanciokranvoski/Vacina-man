import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
 border-width: 1px;
 border-color: ${props => props.theme.colors.primary.main};
 padding: 10px;
 border-radius: 4px;
 background-color: ${props => props.theme.colors.primary};
`;

export const Title = styled.Text`
  color: ${(props: any)=> {
   return props.theme.colors.primary.onMain;
  }};
  font-weight: bold;
`;

export const Name = styled(Title)`
  font-size: 30px;
`;