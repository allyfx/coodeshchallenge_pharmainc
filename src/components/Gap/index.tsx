import React from 'react';
import {View} from 'react-native';

interface IGapProps {
  value: number;
  orientation?: 'horizontal' | 'vertical';
}

export function Gap({value, orientation = 'horizontal'}: IGapProps) {
  return (
    <View
      style={{
        marginHorizontal: orientation === 'horizontal' ? value / 2 : 0,
        marginVertical: orientation === 'vertical' ? value / 2 : 0,
      }}
    />
  );
}
