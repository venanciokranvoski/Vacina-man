import { ImageBackgroundProps } from "react-native";
import styled from "styled-components/native";





export const Container = styled.ImageBackground.attrs(({theme}) => ({
  imageStyle: {
    borderBottomLeftRadius: theme.borders.radius.sm,
    borderBottomRightRadius:theme.borders.radius.sm},
}) as ImageBackgroundProps)`
height: 181px;
padding: ${({theme})=> theme.spacing.md}px;
justify-content: flex-end;

`;

export const Avatar = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 35px;
`;

export const Area = styled.View``;
export const Row = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`