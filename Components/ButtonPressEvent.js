import React from 'react'
import { Button, Text ,View} from 'react-native'

function ButtonPressEvent() {
    const fruit=()=>{
        console.warn("Function called")
    }

    const fruits=(value)=>{
        console.warn(value);

    }
  return (
   <View>
    {/* <Button title='On Press' onPress={fruit}></Button> */}
    <Button title='On Press' onPress={()=>fruits("Hello")}></Button>
   </View>
  )
}

export default ButtonPressEvent
