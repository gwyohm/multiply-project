import React from 'react';
import styles from '../styles';
import {
  Text,
    View,
} from 'react-native';

export default function({ x, y, style }) {
  return (
    <View style={style}>
      <Text style={[{fontSize: 40, padding: 5, width: 60, textAlign: 'center'}, styles[`num${x}`]]}>{x}</Text>
      <Text style={{fontSize: 40, padding: 5}}>x</Text>
      <Text style={[{fontSize: 40, padding: 5, width: 60, textAlign: 'center'}, styles[`num${y}`]]}>{y}</Text>
    </View>
  );
}
