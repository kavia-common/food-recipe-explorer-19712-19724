import React from 'react';
import { View, type ViewProps } from 'react-native';
import { Colors } from '../theme/colors';

export function Surface(props: ViewProps) {
  return (
    <View
      {...props}
      style={[
        {
          backgroundColor: Colors.surface,
        },
        props.style,
      ]}
    />
  );
}
