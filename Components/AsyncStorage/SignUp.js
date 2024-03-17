import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';



const SignUp = ({navigation}) => {
    const [isSelected, setSelection] = useState(false);
    const [firstName,setfirstName]=useState('')
    const [lastName,setlastName]=useState('')
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
    const [error,setError]=useState('')

    useEffect(()=>{
      //  getData()
      //   geyAll()
    })

    const handleSave=async()=>{

       var dataString=await AsyncStorage.getItem('data')
       const existingData=dataString?JSON.parse(dataString):[]
        
      if(existingData.some(user=>user.username===username))
      {
       setError('UserName already exits')
      return;
      }

        const data={
            firstName:firstName,
            lastName:lastName,
            username:username,
            password:password,
            isSelected:isSelected

        }
        existingData.push(data)
        try{
            await AsyncStorage.setItem('data',JSON.stringify(existingData))
            await AsyncStorage.setItem('isLogin',username)
            navigation.navigate('Homepage')
           
        }catch(error){
            console.log(error)
        }

    }

    const getData=async()=>{
      
        let jsonData
        try{
            const data=await AsyncStorage.getItem('data')
            jsonData=JSON.parse(data)
        }catch(error)
        {
            console.log(error)
        }
        console.log(jsonData)

    }

    const geyAll=async()=>{
      let keys=[]
      keys=await AsyncStorage.getAllKeys()
      console.log(keys)
    }


  return (
    <View>
      <Text style={{fontSize:20,color:'black',alignSelf:'center'}}>SignUp</Text>
      <Text>{error}</Text>
      <View style={styles.view}>
        <TextInput 
        style={styles.inputBox} 
        placeholder='enter your firtname'
        value={firstName}
        onChangeText={(text)=>setfirstName(text)}/>
      </View>
      <View style={styles.view}>
        <TextInput 
        style={styles.inputBox} 
        placeholder='enter your lastName'
        value={lastName}
        onChangeText={(text)=>setlastName(text)}
        />
      </View>
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
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      <View>
        <Button title='signUp' onPress={()=>handleSave()}/>
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    inputBox:{
      padding:10,
      backgroundColor:'green', 
    color:'white',
    marginHorizontal:20,
    marginVertical:10
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: 'center',
      },
      label: {
        margin: 8,
      },
   
})