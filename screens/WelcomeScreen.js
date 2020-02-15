import React from 'react';
import { Button, View, Text } from 'react-native';
import LinkButton from '../components/LinkButton';
import styles from '../styles';

export default function WelcomeScreen({ navigation }) {

  return (
      <View
        style={[styles.container, {
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'column',
          paddingBottom: 4,
        }]}
      >
        <View>
          <View style={{ paddingTop: 8, paddingBottom: 8 }}>
            <Text style={{fontSize: 20, alignSelf: 'center', fontWeight:'bold'}}>Multiplications</Text>
          </View>
          <View style={{ paddingTop: 8, paddingBottom: 8 }}>
            <Button title="Réviser" onPress={() => navigation.navigate('ChooseTable')}/>
          </View>
          <View style={{ paddingTop: 8, paddingBottom: 8 }}>
            <Button title="S'entrainer" onPress={() => navigation.navigate('Practice')}/>
          </View>
          <View style={{ paddingTop: 8, paddingBottom: 8 }}>
            <Button title="Challenge !" onPress={() => navigation.navigate('Challenge')}/>
          </View>
          <View style={{ paddingTop: 8, paddingBottom: 8 }}>
            <Button title="Bonus !" onPress={() => navigation.navigate('GraphicTable')}/>
          </View>
        </View>
        <View style={{alignItems: 'center', paddingBottom: 8}}>
          <LinkButton text="Crédits" onPress={() => navigation.navigate('License')}/>
        </View>
      </View>
  );
}

WelcomeScreen.navigationOptions = {
  headerShown: false,
};
