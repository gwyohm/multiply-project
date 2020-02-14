import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PracticeScreen from './screens/PracticeScreen';
import TablePracticeScreen from './screens/TablePracticeScreen';
import LicenceScreen from './screens/LicenceScreen';
import ChallengeScreen from './screens/ChallengeScreen';
import ChallengePracticeScreen from './screens/ChallengePracticeScreen';
import TableViewScreen from './screens/TableViewScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ChooseTableScreen from './screens/ChooseTableScreen';
import GraphicTableScreen from './screens/GraphicTableScreen';
import TestScreen from './screens/TestScreen';

const Stack = createStackNavigator({
  Welcome: WelcomeScreen,
  ChooseTable: ChooseTableScreen,
  Practice: PracticeScreen,
  TableView: TableViewScreen,
  TablePractice: TablePracticeScreen,
  Challenge: ChallengeScreen,
  ChallengePractice: ChallengePracticeScreen,
  License: LicenceScreen,
  GraphicTable: GraphicTableScreen,
  Test: TestScreen,
}, { initialRouteName: 'Welcome' });


export default createAppContainer(Stack);
