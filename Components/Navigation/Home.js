import { StyleSheet, Text, View,Button,Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = ({ navigation }) => {

 const [data,setData]=useState(null)
 useEffect(()=>{
  fetch('https://dummyjson.com/products').then(response=>{
    if(!response.ok){
      throw new Error('Network response was not ok')
    }
    return response.json()
  }).then(data=>{
    setData(data)
  }).catch(error=>{
    console.log(error)
  })
 },[])

 useEffect(()=>{
  setProductData()
 
 })

 const setProductData=async()=>{
  try{
    await AsyncStorage.setItem('allProducts',JSON.stringify(data))
    const showData=await AsyncStorage.getItem('allProducts')
    console.log("hjhjhj",JSON.parse(showData))
  }
  catch(error){
    console.log(error)
  }
 }

 const Product=async(product)=>{
  try{
    await AsyncStorage.setItem('product',JSON.stringify(product))
    navigation.navigate('SingleProduct')
  }catch(error){
    console.log(error)
  }
  
 }
  return (
    <ScrollView>
     
      <AntDesign name="menu-unfold" size={25} color='black' onPress={() => navigation.openDrawer()} />
      
      {
        data && data.products ? (
          data.products.map((product, idx) => (
            <TouchableOpacity key={idx} onPress={()=>Product(product)} >
                        <View key={idx} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Image source={{ uri: product.thumbnail }} style={{ width: 100, height: 100, marginRight: 10 }} />
              <Text>{product.title}</Text>
            </View>
            </TouchableOpacity>
            
          ))
        ) : (
          <Text>Loading...</Text>
        )
      }
    
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})