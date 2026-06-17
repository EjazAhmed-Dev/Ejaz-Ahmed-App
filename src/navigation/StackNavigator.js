import { createStackNavigator } from '@react-navigation/stack';

import AddExerciseScreen from '../screens/AddExerciseScreen';
import AboutMeScreen from '../screens/AboutMeScreen';
import CompletedScreen from '../screens/CompletedScreen';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
import QuotesScreen from '../screens/QuotesScreen';
import { theme } from '../styles/theme';

const Stack = createStackNavigator();

const sharedOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: theme.colors.background },
};

export function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={sharedOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Quotes" component={QuotesScreen} />
    </Stack.Navigator>
  );
}

export function AddStackNavigator() {
  return (
    <Stack.Navigator screenOptions={sharedOptions}>
      <Stack.Screen name="AddExercise" component={AddExerciseScreen} />
    </Stack.Navigator>
  );
}

export function CompletedStackNavigator() {
  return (
    <Stack.Navigator screenOptions={sharedOptions}>
      <Stack.Screen name="Completed" component={CompletedScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export function QuotesStackNavigator() {
  return (
    <Stack.Navigator screenOptions={sharedOptions}>
      <Stack.Screen name="Quotes" component={QuotesScreen} />
    </Stack.Navigator>
  );
}

export function AboutStackNavigator() {
  return (
    <Stack.Navigator screenOptions={sharedOptions}>
      <Stack.Screen name="About" component={AboutMeScreen} />
    </Stack.Navigator>
  );
}