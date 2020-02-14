import React from 'react';
import { Button, View, Text } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function ({ navigation }) {

  return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <View>
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
