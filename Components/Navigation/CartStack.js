import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Cart from './Cart';
const Stackk = createStackNavigator();

const CartStack = () => {
  return (
    <Stackk.Navigator
    screenOptions={{headerShown:false}}
    >
      <Stackk.Screen name="Cart" component={Cart} />
     
    </Stackk.Navigator>
  )
}

export default CartStack

const styles = StyleSheet.create({})