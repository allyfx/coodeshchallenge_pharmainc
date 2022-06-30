import React from 'react';
import {TextInputProps} from 'react-native';

import {useTheme} from 'styled-components';

import {Container} from './styles';

export function Input({...rest}: TextInputProps) {
  const theme = useTheme();

  return (
    <Container
      style={theme.shadows.elevation_5}
      placeholderTextColor={theme.colors.dark_blue_60}
      {...rest}
    />
  );
}
