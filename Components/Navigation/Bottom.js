import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile';
import Menu from './Menu';
import HomeStack from './HomeStack';
import CartStack from './CartStack';
import ProfileStack from './ProfileStack';
const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
    <Tab.Navigator
    screenOptions={{headerShown:false}}
    drawerContent={props => <Menu {...props} />}
    >
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="cart" component={CartStack} />
    <Tab.Screen name="profile" component={ProfileStack} />

  </Tab.Navigator>
  )
}

export default Bottom

const styles = StyleSheet.create({})