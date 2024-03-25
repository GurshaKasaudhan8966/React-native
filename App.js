/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  Text,
  View,
} from 'react-native';
import Login from './Components/Login';
import SignUp from './Components/AsyncStorage/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Homepage from './Components/AsyncStorage/Homepage';
import LoginPage from './Components/AsyncStorage/LoginPage';
import Drawer from './Components/Navigation/Drawer';
const Stack = createStackNavigator();


function fruit(){
  return "hello"
}
const App=()=>{

  return(
   
     
     <NavigationContainer>
    <Drawer/>
    </NavigationContainer>
    
     
      
    
  )
  
}


export default App;
