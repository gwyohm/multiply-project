import React from 'react';
import { Button, View, Text } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function ({ navigation }) {

  return (
      <View
        style={{flex: 1}}
      >
        <Button title="Réviser" onPress={() => navigation.navigate('ChooseTable')}/>
        <Button title="S'entrainer" onPress={() => navigation.navigate('Practice')}/>
        <Button title="Challenge !"/>
        <LinkButton text="Licences" onPress={() => navigation.navigate('License')}/>
      </View>
  );
}
