import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  border: 1px solid ${({theme}) => theme.colors.orange};
  border-radius: 8px;

  padding: 4px 16px;
`;

export const Content = styled.View``;

export const Label = styled.Text`
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 300;
  color: ${({theme}) => theme.colors.orange};
`;

export const Value = styled.Text`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.dark_blue};
`;
