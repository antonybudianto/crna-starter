import { StackNavigator } from 'react-navigation';

import IntroScreen from '../screens/IntroScreen/IntroScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

const AppNavigator = StackNavigator({
  IntroScreen: { screen: IntroScreen },
  LoginScreen: { screen: LoginScreen }
}, {
  headerMode: 'screen'
});

export default AppNavigator;
