import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginPage = ({navigation}) => {
    useEffect(()=>{
        
    })
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
    const [error,setError]=useState('')

    const handleSave = async () => {
        let userData = await AsyncStorage.getItem('data');
        userData = JSON.parse(userData);
        try {
            const foundUser = userData.find(user => user.username === username && user.password === password);
            if (foundUser) {
                // Login successful
                await AsyncStorage.setItem('isLogin', username);
                navigation.navigate('Homepage');
            } else {
                // Username or password incorrect
                setError('Username or password incorrect');
            }
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <View>
    <Text style={{fontSize:20,color:'black',alignSelf:'center'}}>Login</Text>
    <Text>{error}</Text>
   
   
    <View style={styles.view}>
      <TextInput 
      style={styles.inputBox} 
      placeholder='enter your userName'
      value={username}
      onChangeText={(text)=>setusername(text)}
      />
    </View>
    <View style={styles.view}>
      <TextInput 
      style={styles.inputBox} 
      placeholder='enter your password'
      value={password}
      onChangeText={(text)=>setpassword(text)}
      />
    </View>
    
    <View>
      <Button title='Login' onPress={()=>handleSave()}/>
    </View>
  </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({})