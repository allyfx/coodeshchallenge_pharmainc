import React from 'react';

import {useTheme} from 'styled-components';

import {Filter} from 'lucide-react-native';

import {Container} from './styles';

interface IFilterButtonProps {
  onPress?: () => void;
}

export function FilterButton({onPress}: IFilterButtonProps) {
  const theme = useTheme();

  return (
    <Container
      onPress={onPress}
      activeOpacity={0.8}
      style={theme.shadows.elevation_5}>
      <Filter color={theme.colors.orange} />
    </Container>
  );
}
