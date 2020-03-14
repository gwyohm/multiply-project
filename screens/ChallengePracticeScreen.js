import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  ImageBackground,
} from 'react-native';

import styles from '../styles';
import Series from '../components/Series';
import win from '../assets/images/win.png'
import lost from '../assets/images/lost.png'

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
      <View style={{flex: 1}}>
        <ImageBackground source={lost} style={{width: '100%', height: '100%'}}>
          <View style={styles.container}>

          </View>
        </ImageBackground>
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
      <View style={{flex: 1}}>
        <ImageBackground source={win} style={{width: '100%', height: '100%'}}>
          <View style={{...styles.container, flexDirection: 'column-reverse'}}>
            <View style={{flex: 2}}>
              <Text style={{fontSize: 26, flex: 1, color: '#fff', textAlign: 'center'}}>
                Tu as réussi le challenge de la table des {table} en {((challengeEnd - challengeStart) / 1000).toFixed(1)} secondes.
              </Text>
            </View>
            <View style={{flex: 6}}/>
          </View>
        </ImageBackground>
      </View>
  );

}
ChallengePracticeScreen.navigationOptions = ({navigation}) => ({
  title: `Challenge de la table des ${navigation.getParam('table')}`,
});
