import React from 'react'
import { useState } from 'react'
import { View ,Text, Button} from 'react-native';

const ExampleState=()=> {
    const [name,setName]=useState("Anil");
    function testName()
    {
       setName("Sidhu") 
    }
  return (
   <View>
    <Text style={{fontSize:30}}>{name}</Text>
    <Button title='Update Name' onPress={testName}></Button>
   </View>
  )
}

export default ExampleState
