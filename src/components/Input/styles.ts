import styled from 'styled-components/native';
import {TextInput} from 'react-native';

export const Container = styled(TextInput)`
  flex: 1;

  height: 48px;

  font-family: 'Inter';
  font-weight: 500;
  color: ${({theme}) => theme.colors.dark_blue};

  background-color: ${({theme}) => theme.colors.white};
  border-radius: 8px;

  padding: 0 18px;
`;
