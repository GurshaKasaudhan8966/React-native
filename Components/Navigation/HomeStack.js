import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
const Stackk = createStackNavigator();


const HomeStack = () => {
  return (
    <Stackk.Navigator
    screenOptions={{headerShown:false}}
    >
      <Stackk.Screen name="Home" component={Home} />
     
    </Stackk.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})