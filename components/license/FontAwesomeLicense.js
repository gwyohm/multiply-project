import React from 'react';
import {Button, Linking, Text, View, StyleSheet} from "react-native";
import LinkButton from '../LinkButton';

const defaultStyles = StyleSheet.create({
  main: {
    justifyContent: 'flex-start',
  },
  name: {
    fontWeight: 'bold',
  },
  changes: {
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  resourceLnkStyle: {
    textDecorationLine: 'underline',
  },
  licenseLnkStyle: {
  },
})

export default function({
  style = defaultStyles.main,
  nameStyle = defaultStyles.name,
  changesStyle = defaultStyles.changes,
  buttonsStyle = defaultStyles.buttons,
  resourceBtnStyle = defaultStyles.resourceBtnStyle,
  licenseBtnStyle = defaultStyles.licenseBtnStyle,
  name,
  changes,
  resourceUrl,
  licenseUrl = 'https://fontawesome.com/license',
}) {
  return (
    <View style={style}>
      <Text style={nameStyle}>{ name }</Text>
      <Text style={changesStyle}>{ changes }</Text>
      <View style={buttonsStyle}>
        <LinkButton
          style={resourceBtnStyle}
          onPress={() => Linking.openURL(resourceUrl)}
          text="Voir la resource"
        >
        </LinkButton>
        <LinkButton
          style={licenseBtnStyle}
          onPress={() => Linking.openURL(licenseUrl)}
          text="Voir la licence"
        />
      </View>
    </View>
  );
}
