import React from 'react';

import {Container, Label, Line, Value} from './styles';

interface IDefaultInfoProps {
  label: string;
  value: string;
}

export function DefaultInfo({label, value}: IDefaultInfoProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Line />
      <Value>{value}</Value>
    </Container>
  );
}
