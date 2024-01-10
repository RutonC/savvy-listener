import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const Page = () => {
  return (
    <Redirect href="/(tabs)/Home"/>
  )
}

export default Page
