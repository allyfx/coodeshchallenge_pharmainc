import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const NameInfo = styled.View`
  align-items: center;

  margin-top: 16px;
`;

export const Title = styled.Text`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.dark_blue_90};
`;

export const Name = styled.Text`
  font-family: 'Inter';
  font-size: 20px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.dark_blue};
`;

export const Code = styled.View`
  align-items: center;

  padding: 6px 8px;
  margin-top: 8px;

  background-color: ${({theme}) => theme.colors.light_green};
  border-radius: 8px;
`;

export const CodeValue = styled.Text`
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.green};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 24px;
`;

export const Divider = styled.View`
  width: 247px;
  height: 1px;

  background-color: ${({theme}) => theme.colors.dark_blue_20};

  margin: 24px 0;
`;

export const AddressContainer = styled.View`
  align-items: center;

  margin-top: 50px;
`;

export const AddressTitle = styled.Text`
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.dark_blue_80};

  margin-bottom: 6px;
`;

export const Address = styled.Text`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.dark_blue};

  text-align: center;
`;
