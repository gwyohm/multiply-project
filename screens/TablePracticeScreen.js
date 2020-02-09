import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

import styles from '../styles';
import Operation from '../components/Operation';

export default function TablePracticeScreen({navigation}) {
  const base = parseInt(navigation.getParam('base'), 10);
  return (
    <View style={styles.container}>
      <Operation base={base}/>
    </View>
  );
}
TablePracticeScreen.navigationOptions = ({navigation}) => ({
  title: `Table des ${navigation.getParam('base')}`,
});
