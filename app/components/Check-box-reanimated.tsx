import { View, Text, Pressable, SafeAreaView } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import Svg, { Path } from "react-native-svg";
import {ScrollView} from 'react-native-gesture-handler'

import AnimatedCheckbox from "react-native-checkbox-reanimated";
import { color } from "@/utils/colors";
import { Box } from "native-base";
import ListItem from "./ListItem";
import {AnimatedFAB} from 'react-native-paper'
import { Link, Navigator, useNavigation } from "expo-router";

const TITLES = [
  {
    index:1,
    title: "Unlocking the Power",
    description: "Unlocking the Power of Code: A Guide",
    category:"Power",
    price:0,
    date: "12 of Setember",
    time: "12:00"
  },
  {
    index:2,
    title: "Unlocking the Power",
    description: "Unlock the Power of Code: A Guide to Unleashing Your Creative Potential",
    category:"Power",
    price:0,
    date: "12 of Setember",
    time: "12:00"
  },
  {
    index:3,
    title: "A Comprehensive",
    description: "A Comprehensive Guide to Code Development",
    category:"Code",
    price:0,
    date: "12 of Setember",
    time: "12:00"
  },
  {
    index:4,
    title: "A Comprehensive",
    description: "Unlock the Power of Code: A Guide to Creative Problem-Solving",
    category:"Code",
    price:0,
    date: "12 of Setember",
    time: "12:00"
  },
  {
    index:5,
    title: "Mastering",
    description: "Mastering the Art of Code: A Guide",
    category:"Code",
    price:0,
    date: "19 of Setember",
    time: "12:00"
  },
  {
    index:6,
    title: "Mastering",
    description: "Mastering the Art of Code: A Guide",
    category:"Code",
    price:0,
    date: "19 of Setember",
    time: "12:00"
  },
  {
    index:7,
    title: "Mastering",
    description: "Mastering the Art of Code: A Guide",
    category:"Code",
    price:0,
    date: "19 of Setember",
    time: "12:00"
  },
  {
    index:8,
    title: "Mastering",
    description: "Mastering the Art of Code: A Guide",
    category:"Code",
    price:0,
    date: "19 of Setember",
    time: "12:00"
  },
  {
    index:9,
    title: "Mastering",
    description: "Mastering the Art of Code: A Guide",
    category:"Code",
    price:0,
    date: "19 of Setember",
    time: "12:00"
  },
  {
    index:10,
    title: "Mastering",
    description: "Mastering the Art of Code: A Guide",
    category:"Code",
    price:0,
    date: "19 of Setember",
    time: "12:00"
  },
  {
    index:11,
    title: "Mastering",
    description: "Mastering the Art of Code: A Guide",
    category:"Code",
    price:0,
    date: "19 of Setember",
    time: "12:00"
  },
];

export interface TasksInterface {
  title: string;
  description:string;
  price:number;
  category:string;
  date:string;
  time:string;
  index: number;
}

const TASKS: TasksInterface[] = TITLES.map(({title, description, price,category,date,time,index}) => ({
  title,
  description,
  price,
  category,
  date,
  time,
  index,
}));

const CheckBoxReanimated = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [isExtended, setIsExtended] = useState(true);

  const onDimiss = useCallback((task:TasksInterface)=>{
    setTasks((tasks)=>tasks.filter((item)=>item.index !== task.index))
  },[])

  const scrollRef = useRef(null)
  const onScroll = ({ nativeEvent }:any) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };

  const navigate = useNavigation();
  return (
    <View style={{flex:1}}>
      <View style={{marginBottom:10}}>
        {/* title of category */}
      <Text style={{fontSize:20, color:color.textPrimay, paddingHorizontal:24, fontFamily:'robotoBold'}}>Rancho do mês</Text>
      {/* date end category */}
      <Text style={{fontSize:14,fontFamily:'robotoRegular', color:color.textTh,paddingHorizontal:24}}>29 de Setembro, Sexta-Feira</Text>
      </View>
      <ScrollView onScroll={onScroll}>
        <View style={{paddingHorizontal:24}}>
          {tasks.map((task) => (
            <ListItem key={task.index} task={task} onDimiss={onDimiss}  simultaneousHandlers={scrollRef}/>
          ))}
        </View>
      </ScrollView>
      <Link href="/AddItem" asChild>
      <AnimatedFAB
        icon={'plus'}
        label="Novo item"
        visible
        animateFrom="right"
        // iconMode="static"
        color={color.textPrimay}
        extended={isExtended}
        style={{position:"absolute", bottom:'5%', right:'2%', backgroundColor:color.white}}
        />
      </Link>
    </View>
  );
};

export default CheckBoxReanimated;
