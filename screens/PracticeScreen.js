import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import styles from '../styles';
import variables from '../styles/variables';
import BigButton from '../components/BigButton';
import LinkButton from '../components/LinkButton';

export default function PracticeScreen({navigation}) {
  return (
    <View style={[styles.container, {justifyContent: 'space-between'}]}>
      <View style={styles.row}>
      {['*', 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <View
              key={index}
              style={[styles.col, styles.col4]}
          >
            <BigButton
              stretch
              textSize={40}
              textColor={variables.numbersColors[`num${item}`].fg}
              onPress={() => navigation.navigate('TablePractice', { base: item })}
              backgroundColor={variables.numbersColors[`num${item}`].bg}
              text={item}
            />
          </View>
      ))}
      </View>
    </View>
  );
}
PracticeScreen.navigationOptions = {
  title: 'Choisis une table',
};
