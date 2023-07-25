import styled from "styled-components/native";


export const Container = styled.ScrollView`
   flex: 1px;
`;

export const ScrollViewItems = styled.ScrollView`
   padding: ${({theme})=> theme.spacing.md}px;
`;