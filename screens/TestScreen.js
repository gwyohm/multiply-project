import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../components/common/buttons';

export default function() {
  return (
    <View style={{flex: 1}}>
      <Text>OK - before</Text>
      <Button title="Test"/>
      <Text>OK -after</Text>
    </View>
  );
}
