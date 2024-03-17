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
const Stack = createStackNavigator();


function fruit(){
  return "hello"
}
const App=()=>{

  return(
   
     
     <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: true}} />
      <Stack.Screen name="Homepage" component={Homepage} options={{headerShown: true}} />
      <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: true}} />
    </Stack.Navigator>
    </NavigationContainer>
    
     
      
    
  )
  
}


export default App;
