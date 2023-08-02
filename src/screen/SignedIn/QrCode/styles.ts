import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
   flex: 1px;
`;

export const Content = styled.View`
    padding: ${({theme})=> theme.spacing.md}px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
`;