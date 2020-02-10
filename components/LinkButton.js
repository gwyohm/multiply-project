import React from 'react';
import { Text, StyleSheet } from 'react-native';
import variables from '../styles/variables';

const defaultStyle = {
  textDecorationLine: 'underline',
  marginLeft: 2,
  marginRight: 2,
  color: variables.colors.denim,
}

export default function ({ style = defaultStyle, text, onPress = () => {} }) {
  return (
    <Text style={style} onPress={onPress}>{text}</Text>
  );
}
