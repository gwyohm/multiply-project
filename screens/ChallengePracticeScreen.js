import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

import styles from '../styles';
import Series from '../components/Series';

function shuffle(unshuffled) {
  const shuffled = unshuffled.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function ChallengePracticeScreen({navigation}) {
  const [challengeStart, setChallengeStart] = useState(null);
  const [challengeEnd, setChallengeEnd] = useState(null);
  const table = parseInt(navigation.getParam('table'), 10);
  const series = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  if (challengeEnd === null) {
    return (
        <View style={styles.container}>
          <Series
              table={table}
              series={series}
              onStart={() => setChallengeStart(new Date().getTime())}
              onEnd={() => setChallengeEnd(new Date().getTime())}
          />
        </View>
    );
  }
  return (
      <View style={styles.container}>
        <Text>{((challengeEnd - challengeStart) / 1000).toFixed(2)}</Text>
      </View>
  );

}
ChallengePracticeScreen.navigationOptions = ({navigation}) => ({
  title: `Table des ${navigation.getParam('table')}`,
});
