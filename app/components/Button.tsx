import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '@/utils/colors'

interface ButtonProps{
  label:string;
  styleBtnContainer?:any;
  styleBtnText?:any;
  onPress:any;
}


const Button = ({label, styleBtnText,styleBtnContainer, onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container,styleBtnContainer]} onPress={onPress}>
      <Text style={[styles.btnText,styleBtnText]}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container:{
    height:44,
    backgroundColor:color.primary,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4
  }, 
  btnText:{
    fontFamily:'robotoBold',
    color:color.white,
    textTransform:'uppercase',
    letterSpacing:2
  }
})
