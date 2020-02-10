// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PracticeScreen from './screens/PracticeScreen';
import TablePracticeScreen from './screens/TablePracticeScreen';

const Stack = createStackNavigator({
  Practice: PracticeScreen,
  TablePractice: TablePracticeScreen,
});


export default createAppContainer(Stack);
