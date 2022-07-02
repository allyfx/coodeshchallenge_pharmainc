import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.colors.white};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: ${getStatusBarHeight() + 126}px;

  background-color: ${({theme}) => theme.colors.light_green};
`;

export const Title = styled.Text`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 18px;
  color: ${({theme}) => theme.colors.green};

  margin-left: 6px;
`;

export const Form = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  padding: 0 16px;
  margin-top: -24px;
`;

export const Content = styled.View`
  flex: 1;

  padding: 0 16px;
  margin-top: 48px;
`;

export const Count = styled.View`
  align-items: flex-start;
`;

export const CountText = styled.Text`
  font-family: 'Inter';
  font-size: 16px;
  color: ${({theme}) => theme.colors.green};
`;

export const CountLine = styled.View`
  width: 12%;

  border: 0.6px solid ${({theme}) => theme.colors.green};

  margin-bottom: 24px;
`;

export const FlatlistLoadingContainer = styled.View`
  margin: 16px 0;
`;

export const FilterContainer = styled.View`
  flex-direction: row;

  padding: 0 16px;
  margin-top: 16px;
`;

type IFilterProps = {
  selected: boolean;
};

export const Filter = styled.TouchableOpacity<IFilterProps>`
  padding: 4px 6px;

  background-color: ${({theme}) => theme.colors.green};
  border-radius: 8px;

  opacity: ${({selected}) => (selected ? 1 : 0.6)};
`;

export const FilterValue = styled.Text`
  font-family: 'Inter';
  font-size: 14px;
  color: ${({theme}) => theme.colors.light_green};
`;
