import { StyleSheet } from 'react-native';
import variables from './variables';
import * as grid from './grid';
import * as numbers from './numbers';

export default StyleSheet.create({
  ...grid,
  ...numbers,
});
