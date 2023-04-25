import {Pressable} from 'react-native';
import styled from 'styled-components/native';
import TextMain from '~/components/Text';

export const Container = styled.SafeAreaView`
  flex: 1px;
  margin: 0 ${({theme}) => theme.spacing.md}px;
`;

export const PressebleX = styled(Pressable)`
  padding: ${({theme}) => theme.spacing.sm}px;
`;

export const TextAcess = styled(TextMain)`
  align-self: center;
`;
