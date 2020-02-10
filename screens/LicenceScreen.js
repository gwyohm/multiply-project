import React from 'react';
import { View, Text, Button, Linking } from 'react-native';
import FontAwesomeLicense from '../components/license/FontAwesomeLicense';
import styles from '../styles'

export default function LicenseScreen() {
  return (
    <View
      style={[styles.container, {justifyContent: 'flex-start'}]}
    >
      <Text style={{ textAlign: 'center', fontStyle: 'italic' }}>
        Cette application est développée par Guillaume Lepicard, pendant son temps libre,
        pour aider ses enfants à apprendre les tables de multiplications de manière ludique.
      </Text>
      <Text style={{ paddingTop: 10 }}>
        Cette application utilise les resources suivantes
      </Text>
      <View style={{flex: 1, paddingTop:10, justifyContent: 'flex-start', flexDirection: 'column'}}>
        <Text style={{  fontWeight: 'bold' }}>
            Fontawesome
        </Text>
        <View style={{paddingLeft: 5}}>
        <FontAwesomeLicense
          name="smile (far fa-smile)"
          changes="SVG exporté en PNG, couleur changée"
          resourceUrl="https://fontawesome.com/icons/smile?style=regular"
        />
        <FontAwesomeLicense
          name="frown (far fa-frown)"
          changes="SVG exporté en PNG, couleur changée"
          resourceUrl="https://fontawesome.com/icons/frown?style=regular"
        />
        <FontAwesomeLicense
            name="check (far fa-check-circle)"
            changes="SVG exporté en PNG, couleur changée"
            resourceUrl="https://fontawesome.com/icons/check-circle?style=regular"
        />
          <FontAwesomeLicense
            name="backspace (fas fa-backspace)"
            changes="SVG exporté en PNG, couleur changée"
            resourceUrl="https://fontawesome.com/icons/backspace?style=solid"
          />
        </View>
      </View>
    </View>
  );
};

LicenseScreen.navigationOptions = {
  title: 'Licences'
}
