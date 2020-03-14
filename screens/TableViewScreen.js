import OperationQuestion from '../components/OperationQuestion';
import React from 'react';
import {
  Button,
  Text,
  View,
  ScrollView,
} from 'react-native';

import styles from '../styles';
import variables from '../styles/variables';

export default function TableViewScreen({navigation}) {
  const base = parseInt(navigation.getParam('base'), 10);
  return (
      <ScrollView style={[styles.container, { flex: 1, flexDirection: 'column'}]}>
        { [...Array(11)].map((empty, index) => (
            <OperationQuestion
              key={index}
              x={base}
              y={index}
              answer
              style={{flex: 1, flexDirection: 'row', paddingTop: variables.gutterWidth/2, paddingBottom: variables.gutterWidth/2}}
            />
        )) }
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 8, marginBottom: 8}}>
          <Button title="S'entrainer" onPress={() => navigation.navigate('TablePractice', { base })}/>
          <Button title="Challenge" onPress={() => navigation.navigate('ChallengePractice', { table: base })}/>
        </View>
      </ScrollView>
  );
}
TableViewScreen.navigationOptions = ({navigation}) => ({
  title: `Table des ${navigation.getParam('base')}`,
});
