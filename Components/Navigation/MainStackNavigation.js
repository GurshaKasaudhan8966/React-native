import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Drawer from './Drawer';
const Stack = createStackNavigator();
const MainStackNavigation = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
  </Stack.Navigator>
  )
}

export default MainStackNavigation

const styles = StyleSheet.create({})