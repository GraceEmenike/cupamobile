import 'react-native-gesture-handler';
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Drawer/HomeScreen';
import NotificationsScreen from './Drawer/NotificationScreen'

const Drawer = createDrawerNavigator();
export default function BusinessApp() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen options={{headerTitle:'Pause Cafe'}} name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  )
}