import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PracticeScreen from './screens/PracticeScreen';
import TablePracticeScreen from './screens/TablePracticeScreen';
import LicenceScreen from './screens/LicenceScreen';

const Stack = createStackNavigator({
  Practice: PracticeScreen,
  TablePractice: TablePracticeScreen,
  License: LicenceScreen,
});


export default createAppContainer(Stack);
