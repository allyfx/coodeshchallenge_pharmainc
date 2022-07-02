import styled from 'styled-components/native';

export const Container = styled.View``;

export const Label = styled.Text`
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.dark_blue_80};
`;

export const Line = styled.View`
  width: 21px;
  height: 1px;

  background-color: ${({theme}) => theme.colors.dark_blue_80};

  margin-bottom: 8px;
`;

export const Value = styled.Text`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.dark_blue};

  text-transform: capitalize;
`;
