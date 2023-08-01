import styled from "styled-components/native";
import {SafeAreaView} from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
   flex: 1px;
   padding : 0 ${({theme})=> theme.spacing.md}px;
`;

export const Avatar = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;