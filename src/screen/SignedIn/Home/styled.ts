import styled from "styled-components/native";


export const Container = styled.ScrollView`
   flex: 1px;
`;

export const ScrollViewItems = styled.ScrollView`
   padding:   ${({theme})=> theme.spacing.md}px;
   margin-top : 5px;
`;

export const Content = styled.View`
  padding: 0 ${({theme})=> theme.spacing.md}px;

`;