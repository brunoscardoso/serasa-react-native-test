import LinearGradient from 'react-native-linear-gradient';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient).attrs({
  colors: ['#1f4e91', '#ad1785'],
})`
  height: ${Platform.OS === 'ios' ? '70px' : '40px'};
  align-items: center;
`;
