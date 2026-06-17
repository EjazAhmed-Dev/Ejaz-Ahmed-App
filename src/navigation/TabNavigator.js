import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

import { AboutStackNavigator, AddStackNavigator, CompletedStackNavigator, HomeStackNavigator, QuotesStackNavigator } from './StackNavigator';
import { theme } from '../styles/theme';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: '#B9ACA1',
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
          marginBottom: 2,
        },
        tabBarStyle: {
          position: 'absolute',
          left: 16,
          right: 16,
          bottom: 16,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          borderRadius: 24,
          height: 74,
          paddingTop: 8,
          paddingBottom: 8,
          shadowColor: theme.shadow.color,
          shadowOpacity: theme.shadow.opacity,
          shadowRadius: theme.shadow.radius,
          shadowOffset: theme.shadow.offset,
          elevation: theme.shadow.elevation,
        },
        tabBarIcon: ({ focused, color, size }) => {
          const iconName =
            route.name === 'HomeTab'
              ? focused
                ? 'home'
                : 'home-outline'
              : route.name === 'DoneTab'
                ? focused
                  ? 'checkmark-done'
                  : 'checkmark-done-outline'
                : route.name === 'AddTab'
                  ? focused
                    ? 'add'
                    : 'add-outline'
                  : route.name === 'AboutTab'
                    ? focused
                      ? 'person'
                      : 'person-outline'
                  : focused
                    ? 'sparkles'
                    : 'sparkles-outline';

          return (
            <View style={styles.iconWrap}>
              <Ionicons
                name={iconName}
                size={size}
                color={focused ? theme.colors.secondary : '#B9ACA1'}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="DoneTab"
        component={CompletedStackNavigator}
        options={{ title: 'Done Exercise' }}
      />
      <Tab.Screen
        name="AddTab"
        component={AddStackNavigator}
        options={{ title: 'Add Exercise' }}
      />
      <Tab.Screen
        name="AboutTab"
        component={AboutStackNavigator}
        options={{ title: 'About' }}
      />
      <Tab.Screen
        name="QuotesTab"
        component={QuotesStackNavigator}
        options={{ title: 'Quotes' }}
      />
      
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconWrap: {
    width: 34,
    height: 34,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -2,
  },
});