import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type Props={
    name:string;
    onPress():void;
    email:string;
}

const CustomListItem = (props:Props) => {
    const {onPress, name, email}=props
  return (
    <TouchableOpacity onPress={()=>onPress()}  style={{width:'100%', backgroundColor:'gray', marginBottom:10}}>
      <Text>Adi:{name}</Text>
      <Text>Email:{email}</Text>
    </TouchableOpacity>
  )
}

export default CustomListItem