import { Tabs } from "expo-router";
import {MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'
import {View,Text} from 'react-native'
import Animated from "react-native-reanimated";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
      <Tabs.Screen name="Home" options={{
        tabBarIcon:({focused,size,color})=>(
          <MaterialCommunityIcons name="home-outline" size={size} color={color}/>
        ) 
      }}/>
      <Tabs.Screen name="Search"  options={{
        tabBarIcon:({focused,size,color})=>(
          <MaterialCommunityIcons name="magnify" size={size} color={color}/>
        ) 
      }}/>
      <Tabs.Screen  name="profile" options={{
        tabBarIcon:({focused,size,color})=>(
          <MaterialCommunityIcons name="account-circle-outline" size={size} color={color}/>
        ),
        
      }}/>
    </Tabs>
  );
}
