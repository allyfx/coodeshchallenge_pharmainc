import React from 'react';

import {useTheme} from 'styled-components';

import Clipboard from '@react-native-community/clipboard';

import {Clipboard as ClipBoardIcon} from 'lucide-react-native';
import {Gap} from '../Gap';

import {Container, Content, Label, Value} from './styles';

interface IClipButtonProps {
  label: string;
  value: string;
  valueToCopy: string;
}

export function ClipButton({label, value, valueToCopy}: IClipButtonProps) {
  const theme = useTheme();

  function handleCopyToClipboard() {
    Clipboard.setString(valueToCopy);
  }

  return (
    <Container activeOpacity={0.8} onPress={handleCopyToClipboard}>
      <Content>
        <Label>{label}</Label>
        <Value>{value}</Value>
      </Content>

      <Gap value={16} />

      <ClipBoardIcon color={theme.colors.orange} />
    </Container>
  );
}
