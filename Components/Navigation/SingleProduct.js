import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SingleProduct = ({navigation}) => {
    const [Product,setProduct]=useState([])
    const [error,setError]=useState('')

    useEffect(()=>{

        const unsubscribe=navigation.addListener('focus',()=>{
            getProduct()
        })
        return unsubscribe
      
    },[navigation])

    const getProduct=async()=>{
        try{
           const get= await AsyncStorage.getItem('product')
           console.log(JSON.parse(get))
           setProduct(JSON.parse(get))

        }catch(error){
            console.log(error)
        }
    }

    const renderProduct = ({ item, index }) => {
        return (
          <View style={{width:200,height:200,alignItems:'center',justifyContent:'center'}}> 
           <Image
           source={{ uri: item }}
           style={{width:'100%',height:'100%',resizeMode:'contain'}}
           />
          </View>
        );
      };

    
      const addtoCart=async(products,id)=>{
      try{
        const jsonData=await AsyncStorage.getItem('cart');
        let existingData=jsonData?JSON.parse(jsonData):[]
        if(existingData.some(user=>user.id===id))
        {
            setError('this product is already in the cart')
            return;
        }
        existingData.push(products)
        await AsyncStorage.setItem('cart', JSON.stringify(existingData));

        navigation.navigate('Home')


      }catch(error)
      {
        console.log(error)
      }
        
        
      }
      
  return (
    <View>
      
      <FlatList
      data={Product.images}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderProduct}
      keyExtractor={(item, index) => index.toString()} 
      />
      <View>
        <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>{Product.title}</Text>
        <Text style={{fontSize:20,color:'black'}}>{Product.description}</Text>
        <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>Price:{Product.price}</Text>

      </View>
      <TouchableOpacity 
      onPress={()=>addtoCart(Product,Product.id)}
      style={{backgroundColor:'red',margin:10,paddingVertical:20,alignItems:'center',borderRadius:10}}>
        <Text style={{color:'white'}}>Add to Cart</Text>
       
      </TouchableOpacity>
      <Text>{error}</Text> 
    </View>
  )
}

export default SingleProduct

const styles = StyleSheet.create({})