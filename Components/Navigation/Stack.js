import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Bottom from './Bottom';
import SingleProduct from './SingleProduct';
const Stackk = createStackNavigator();
const Stack = () => {
  return (
    <Stackk.Navigator
    screenOptions={{headerShown:false}}
    >
      <Stackk.Screen name="Home" component={Bottom} />
      <Stackk.Screen name='SingleProduct' component={SingleProduct}/>
     
    </Stackk.Navigator>
  )
}

export default Stack

const styles = StyleSheet.create({})