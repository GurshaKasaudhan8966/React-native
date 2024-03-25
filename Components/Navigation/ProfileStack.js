import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile';
const Stackk = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stackk.Navigator
    screenOptions={{headerShown:false}}
    >
      <Stackk.Screen name="Profile" component={Profile} />
     
    </Stackk.Navigator>
  )
}

export default ProfileStack

const styles = StyleSheet.create({})