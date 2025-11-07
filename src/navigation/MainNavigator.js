import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import MyFarmsScreen from '../screens/MyFarmsScreen';
import LearnScreen from '../screens/LearnScreen';
import LedgerScreen from '../screens/LedgerScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Farms" component={MyFarmsScreen} />
      <Tab.Screen name="Learn" component={LearnScreen} />
      <Tab.Screen name="Ledger" component={LedgerScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
