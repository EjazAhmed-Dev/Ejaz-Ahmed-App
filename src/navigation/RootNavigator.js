import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import WelcomeScreen from '../screens/WelcomeScreen';

const RootStack = createStackNavigator();

export default function RootNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Welcome" component={WelcomeScreen} />
      <RootStack.Screen name="MainTabs" component={TabNavigator} />
    </RootStack.Navigator>
  );
}