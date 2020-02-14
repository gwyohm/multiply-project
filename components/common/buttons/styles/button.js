import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  button: Platform.select({
    ios: {},
    android: {},
  }),
});
