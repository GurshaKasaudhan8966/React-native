import React, { useState } from 'react'
import { Button, Text, TextInput, View,StyleSheet } from 'react-native'

const Props = () => {
    const [name,setName]=useState("")
  return (
   <View>
    <Text>Props in React js</Text>
    {/* <Button title='Update Name' onPress={()=>setName("kkkkk")}></Button>
    <Child name={name}/> */}
    <Text style={{fontSize:30}}>Your name is:{name}</Text>
    <TextInput style={styles.textInput} onChangeText={(text)=>setName(text)} placeholder='Enter Your Name'></TextInput>
   </View>
  )
}

const Child=(props)=>{
    console.warn(props)
    return(
        <View>
            <Text style={{fontSize:30}}>Child Components {props.name}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    textInput:{fontSize:18,color:'red',borderWidth:2,borderColor:'black',margin:10}
})


export default Props
