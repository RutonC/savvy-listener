import { Platform, StyleSheet, Text, View } from 'react-native'
import {Controller, useForm} from 'react-hook-form'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { color } from '@/utils/colors';

interface InputPros {
  name:string;
  rules?:any;
  label:string;
  placeholder:string;
  keyboardType?: any;
  error?:boolean;
  styles?:any;
}

const Input = ({name, rules,label, placeholder, keyboardType,error,styles}:InputPros) => {
  const {control, handleSubmit,formState:{errors}, formState} = useForm();
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [dateTime,setDateTime] = useState();

  const toggleDatePicker = () =>{
    setShowPicker(!showPicker);
  }

  const onChange = ({type}:any,selectedDate:any) => {
    if(type === "set"){
      const currentDate = selectedDate;
      setDate(selectedDate);
      if(Platform.OS === "android"){
        toggleDatePicker();
        setDateTime(currentDate.toDateString())
      }
    }else{
      toggleDatePicker();
    }
  }
  
  return (
    <Controller 
      name={name}
      control={control}
      rules={rules}
      render={()=>(
        <TextInput
          label={label}
          mode='outlined'
          dense
          error={error}
          keyboardType={keyboardType}
          placeholder={placeholder}
          style={[{
            height:44,
            backgroundColor:color.backgr,
          }, styles]}
        />
      )}
      />
  )
}

export default Input

const styles = StyleSheet.create({})