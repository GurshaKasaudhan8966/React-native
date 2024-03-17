import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Redux/Features/CounterSlice'

const Counter = () => {

    const dispatch=useDispatch()
    const count=useSelector(state => state.counter);
    console.log(count)
  return (
    <View>
      <Text>{count.Value}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}} >
      <Button title='increment' onPress={()=>dispatch(increment())}/>
      <Button title='decrement' onPress={()=>dispatch(decrement())}/>
      </View>
     
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})