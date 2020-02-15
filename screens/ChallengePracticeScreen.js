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
  const [challengeFailed, setChallengeFailed] = useState(false);
  const [challengeEnd, setChallengeEnd] = useState(null);
  const table = parseInt(navigation.getParam('table'), 10);
  const series = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  if (challengeFailed) {
    return (
      <View style={styles.container}>
        <Text>Perdu !</Text>
      </View>);
  }
  if (challengeEnd === null) {
    return (
        <View style={styles.container}>
          <Series
              table={table}
              series={series}
              onStart={() => setChallengeStart(new Date().getTime())}
              onMistake={() => setChallengeFailed(true)}
              onEnd={() => setChallengeEnd(new Date().getTime())}
          />
        </View>
    );
  }
  return (
      <View style={styles.container}>
        <Text>Gagné ! Tu as réussi le challenge de la table des {table}
        en {((challengeEnd - challengeStart) / 1000).toFixed(2)} secondes.
        </Text>
      </View>
  );

}
ChallengePracticeScreen.navigationOptions = ({navigation}) => ({
  title: `Challenge de la table des ${navigation.getParam('table')}`,
});
