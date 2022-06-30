import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  background-color: ${({theme}) => theme.colors.white};

  border: 1px solid ${({theme}) => theme.colors.orange};
  border-radius: 8px;
`;
