import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PracticeScreen from './screens/PracticeScreen';
import TablePracticeScreen from './screens/TablePracticeScreen';
import LicenceScreen from './screens/LicenceScreen';
import TableViewScreen from './screens/TableViewScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ChooseTableScreen from './screens/ChooseTableScreen';
import GraphicTableScreen from './screens/GraphicTableScreen';

const Stack = createStackNavigator({
  Welcome: WelcomeScreen,
  ChooseTable: ChooseTableScreen,
  Practice: PracticeScreen,
  TableView: TableViewScreen,
  TablePractice: TablePracticeScreen,
  License: LicenceScreen,
  GraphicTable: GraphicTableScreen,
}, { initialRouteName: 'Welcome' });


export default createAppContainer(Stack);
