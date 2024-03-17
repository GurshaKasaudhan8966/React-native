import React, { useState } from 'react'
import { Text,View,StyleSheet, TextInput, Button } from 'react-native'

const Forms = () => {
   const [name,setName]=useState("");
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("") 
   const [display,setDisplay]=useState(false)

   const reset=()=>{
    setDisplay(false)
    setEmail("");
    setName("");
    setPassword("");
   }
  return (
   <View>
    <Text style={{fontSize:30}}>Simple Form in React Native</Text>
    <TextInput style={styles.textInput} placeholder='Enter User Name'
    onChangeText={(text)=>setName(text)}
    value={name}/>
     <TextInput style={styles.textInput} placeholder='Enter User Email'
    onChangeText={(text)=>setEmail(text)}
    value={email}/>
     <TextInput style={styles.textInput} placeholder='Enter User Password'
    onChangeText={(text)=>setPassword(text)}
    secureTextEntry={true}
    value={password}/>
    <View style={{marginBottom:10}}>
    <Button  title='Print value' onPress={()=>setDisplay(true)}/>
    </View>

    <Button title='Clear value' onPress={reset}/>

    {
        display?
        <View>
            <Text style={{fontSize:18}}>Name is {name}</Text>
            <Text style={{fontSize:18}}>Email is {email}</Text>
            <Text style={{fontSize:18}}>password is {password}</Text>
        </View>
        : null
    }

   </View>
  )
}

const styles=StyleSheet.create({
    textInput:{fontSize:18,color:'red',borderWidth:2,borderColor:'black',margin:10}
})


export default Forms
