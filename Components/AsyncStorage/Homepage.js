import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Homepage = ({navigation}) => {
  const [name,setName]=useState('')
  const [lastName,setLastName]=useState('')

  useEffect(()=>{
    //getData()
    foundData()
  },[])


  const handleLogout=async()=>{
    try{
      await AsyncStorage.setItem('isLogin','false')
      navigation.navigate('LoginPage')
      
    }catch(error){
      console.log(error)
    }

  }

   const foundData=async()=>{
    try{
      let userData=await AsyncStorage.getItem('data')
      userData=JSON.parse(userData)
      let getIsLogin=await AsyncStorage.getItem('isLogin')
      userData.map((item,idx)=>{
      if(item.username===getIsLogin){

              setName(item.username)
              setLastName(item.lastName)
      }
    }) 

    }catch(error)
    {
      console.log(error)
    }
   
   // console.log(userData)
  //  userData.map((item,idx)=>(
    


  //  ))

   }

  const getData=async()=>{
    let getIsLogin;
    try{
       getIsLogin=await AsyncStorage.getItem('isLogin')
    }catch(error){
      console.log(error)
    }
    console.log("Login Data",getIsLogin)
  }
  return (
    <View>
      <Text>Homepage</Text>
      <Text>{name}</Text>
      <Text>{lastName}</Text>

      <Button title='logout' onPress={()=>handleLogout()}/>
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({})