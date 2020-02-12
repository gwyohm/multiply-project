import React from 'react';
import {
  View,
} from 'react-native';
import styles from '../styles';
import variables from '../styles/variables';
import BigButton from '../components/BigButton';

export default function ChooseTableScreen({navigation}) {
  return (
      <View style={[styles.container, {justifyContent: 'space-between'}]}>
        <View style={styles.row}>
          {[...Array(11)].map((item, index) => (
              <View
                  key={index}
                  style={[styles.col, styles.col4]}
              >
                <BigButton
                    stretch
                    textSize={40}
                    textColor={variables.numbersColors[`num${index}`].fg}
                    onPress={() => navigation.navigate('TableView', { base: index })}
                    backgroundColor={variables.numbersColors[`num${index}`].bg}
                    text={index}
                />
              </View>
          ))}
        </View>
      </View>
  );
}
ChooseTableScreen.navigationOptions = {
  title: 'Choisis une table à réviser',
};
