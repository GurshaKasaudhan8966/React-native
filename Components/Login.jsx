import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from './Redux/Features/AuthSlice';

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const dispatch=useDispatch();
    const {userData,isLoading}=useSelector(state=>state.auth);
    const handleLogin=()=>{
        const params={
            username:email,
            password:password
        }
        console.log('params',params)
        dispatch(login(params))
    }
    
    console.log('userdata',userData)
  return (
    <View>
      <Text>Login</Text>
      <TextInput
      placeholder='enter email'
      value={email}
      onChangeText={setEmail}
      />
       <TextInput
      placeholder='enter email'
      value={password}
      onChangeText={setPassword}
      />
      <Button isLoading={isLoading} title='login' onPress={handleLogin}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})