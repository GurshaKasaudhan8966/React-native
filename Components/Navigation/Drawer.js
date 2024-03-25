import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile';
import Cart from './Cart';
import Bottom from './Bottom';
import Stack from './Stack';
const Drawerr = createDrawerNavigator();
const Drawer = () => {
  return (
    <View style={{flex: 1}}>
    <Drawerr.Navigator
    screenOptions={{headerShown:false}}
    >
      <Drawerr.Screen name="Home" component={Stack} />
      <Drawerr.Screen name="Profile" component={Profile} />
      <Drawerr.Screen name="Cart" component={Cart} />


    </Drawerr.Navigator>
    </View>
  )
}

export default Drawer

const styles = StyleSheet.create({})