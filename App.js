import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

// Import components
import Header from './components/Header';
import Community from './components/Community';
import SnapPhoto from './components/SnapPhoto';
import Leaderboard from './components/Leaderboard';
import Help from './components/Help';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#2196F3',
            headerShown: false,
          }}>
          <Tab.Screen
            name="Community"
            component={Community}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="people" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Snap Photo"
            component={SnapPhoto}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="camera-alt" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Leaderboard"
            component={Leaderboard}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="emoji-events" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Help"
            component={Help}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="help" size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});