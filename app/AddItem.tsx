import { StyleSheet, Text, View, Pressable, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useForm, Controller,} from 'react-hook-form'
import {TextInput} from 'react-native-paper'
import { color } from '@/utils/colors'
import DateTimePicker from '@react-native-community/datetimepicker'
import Input from './components/Input'
import Button from './components/Button'
// import Button from './components/Button'


const AddItem = () => {
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
    <SafeAreaView style={styles.container}>

      <Input name='name' label='Nome do item' placeholder='Insira o nome do item' styles={{marginVertical:23}}/>
      
      <Input name='quantity' keyboardType={'numeric'} label='Quantidade' placeholder='Insira a quantidade do item'/>
      
      <Controller 
      name='Data'
      control={control}
      render={()=>(
        <>{!showPicker && (<Pressable onPress={toggleDatePicker}>
        <TextInput
          label={"Data"}
          mode='outlined'
          dense
          value={dateTime}
          onChangeText={(e:any)=>setDateTime(e)}
          placeholder='Sábado, 30 de 2023'
          style={{
            height:44,
            backgroundColor:color.backgr,
            marginVertical:23
          }}
          editable={false}
        />
        </Pressable>)}
        </>
      )}
      />
      {showPicker && (
      <DateTimePicker
        mode='date'
        display='spinner'
        value={date}
        onChange={onChange}
        minimumDate={new Date()}
      />)}

      <View style={styles.InputContainerFlex}>
      <Input name='price' label='Preço' keyboardType={'decimal-pad'} placeholder='Insira o preço do item' styles={{width:'48%'}} />

      <Input name='category' label='Categoria' placeholder='Insira a categoria para o item do item' styles={{width:'48%'}}/>
      </View>

      <Button label='Adicionar' onPress={()=>{console.log("Adicionar item")}} />
     
      
    </SafeAreaView>
  )
}

export default AddItem

const styles = StyleSheet.create({
  container:{
   flex:1,
   paddingHorizontal:24,
   backgroundColor:color.white
  },
  InputContainerFlex:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:23
  }
})
