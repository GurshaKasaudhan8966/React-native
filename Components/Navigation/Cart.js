import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Cart = ({navigation}) => {
  const [data,setData]=useState(null)
  useEffect(()=>{
    const unsubscribe=navigation.addListener('focus',()=>{
      cartItems()
    })
    return unsubscribe
  },[navigation])
  const cartItems=async()=>{
    try{
     const val= await AsyncStorage.getItem('cart')
        //console.log("cart",JSON.parse(val))
        setData(JSON.parse(val))

    
    }catch(error)
    {
      console.log(error)
    }
  }
  return (
    <View>
     
     <View>
      <TouchableOpacity>
        <FlatList
        data={data}
        renderItem={({item,index})=>(
        
          <View>
            <Image source={{uri:item.thumbnail}} height={100} width={100}/>
          </View>
        )}
        />
      </TouchableOpacity>
     </View>
    </View>
  )
  
}

export default Cart

const styles = StyleSheet.create({})