import React, { useState, useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import { Svg, Path } from 'react-native-svg';
import LinkButton  from '../components/LinkButton';
import styles from '../styles'

export default function GraphicTableScreen({ }) {
  const [table, setTable] = useState(0);
  const speed = 50;
  const modulo = 150;
  const dAngle = 2 * Math.PI / modulo;
  const res = [...Array(modulo)]
    .map(
      (e, i) => [
        'M',
        [
          Math.cos(i * dAngle),
          Math.sin(i * dAngle),
        ].join(' '),
        'L',
        [
          Math.cos(i * table * dAngle),
          Math.sin(i * table * dAngle),
        ].join(' '),
    ].join(''),
  ).join('');
  const cancelTimeout = setTimeout((() => setTable(table + 0.01)), speed);
  useEffect(() => () => clearTimeout(cancelTimeout));

  return (
    <View style={[styles.container, {flex: 1, justifyContent: 'space-between', alignItems: 'center'}]}>
      <View style={{flex: 1, paddingTop: 10}}>
        <Svg viewBox="-1 -1 2 2" width={200} height={200}>
          <Path transform="rotate(-90)" strokeWidth="0.01" stroke="rgba(0,0,0,0.2)" d={res}/>
        </Svg>
        <Text style={{paddingTop: 20}}>table des { table.toFixed(2) } modulo {modulo}</Text>
      </View>
      <View style={{paddingTop: 20}}>
        <Text>
          Pour plus d'informations sur cette animation, rendez-vous sur la chaîne
          <LinkButton
            onPress={() => Linking.openURL('https://www.youtube.com/user/Micmaths')}
            text="Micmaths"
          />
          de Mickaël Launay...
          <LinkButton
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=-X49VQgi86E')}
            text="La face cachée des tables de multiplication"
          />
        </Text>
      </View>
    </View>
  );
}
GraphicTableScreen.navigationOptions = {
  title: 'Bonus'
}
