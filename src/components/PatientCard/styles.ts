import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  border: 1.5px solid ${({theme}) => theme.colors.green};
  border-radius: 8px;

  padding: 16px 18px;
`;

export const Picture = styled.Image`
  width: 64px;
  height: 64px;

  border: 1.5px solid ${({theme}) => theme.colors.yellow};
  border-radius: 32px;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Column = styled.View``;

export const PatientName = styled.View`
  flex-direction: column;
`;

export const NameTitle = styled.Text`
  font-family: 'Inter';
  font-size: 14px;
  color: ${({theme}) => theme.colors.dark_blue_80};
`;

export const Name = styled.Text`
  font-family: 'Inter';
  font-size: 18px;
  color: ${({theme}) => theme.colors.dark_blue};
`;

export const SubText = styled.Text`
  font-family: 'Inter';
  font-size: 12px;
  color: ${({theme}) => theme.colors.dark_blue_80};

  text-transform: capitalize;
`;
