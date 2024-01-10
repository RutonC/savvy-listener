import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { VictoryBar, VictoryChart } from "victory-native";
import HomeChart from "@/components/HomeChart";
import { FlatList } from "react-native-gesture-handler";
import { color } from "@/utils/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {ProgressBar, MD2Colors} from 'react-native-paper'
import ShareList from "@/components/ShareList";


const Home = () => {
  const data = [
    { quantity: "20", value: 34/100, title: "Listas Pessoais, que so pertence a mim" },
    { quantity: "20", value: 74/100, title: "Listas Familia" },
    { quantity: "20", value: 88/100, title: "Minhas compras" },
  ];
  

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: color.white }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1, marginBottom:hp('2%'), paddingHorizontal: 24 }}>
      <View style={{ marginVertical: hp("4%")}}>
        <Text
          style={{fontFamily:'robotoBold',fontSize: 24, color: color.textPrimay }}
        >
          Como está, Ruton
        </Text>
        <Text
          style={{fontFamily:'robotoBold',fontSize: 14, color: color.textSec }}
        >
          19 de Setembro
        </Text>
      </View>
      <HomeChart />
      </View>

      <View style={{ flex: 1 }}>
        <ScrollView
          horizontal
          contentContainerStyle={{
              gap:19,
              marginLeft:24,
              marginBottom:30
            }}
          showsHorizontalScrollIndicator={false}
          >
          {data.map((item,key) => (
            <View key={key} style={styles.container}>
              <View>
                <Text style={styles.categoryQuantity}>{item.quantity} Listas</Text>
                <Text numberOfLines={1} style={styles.categoryTitle}>{item.title}</Text>
              </View>
                <ProgressBar progress={item.value} color={color.progress} style={{height:15, borderRadius:4,backgroundColor:color.white}}/>
              <View />
            </View>
          ))}
        </ScrollView>
        <ScrollView style={{paddingHorizontal: 24}}>
          <Text style={styles.sectionTitle}>Listas Compartilhadas</Text>
          {/* Shared list component */}
          <ShareList/>
        </ScrollView>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 161,
    height:88,
    backgroundColor: color.backgr,
    borderRadius:4,
    paddingHorizontal:7,
    paddingVertical:14
  },
  categoryTitle:{
    fontFamily:'robotoBold',
    fontSize:16,
    color:color.textPrimay,
    lineHeight:20,
    marginBottom:9
  },
  categoryQuantity:{
    fontFamily:'robotoMonoSemiBold',
    fontSize:12,
    color:color.textTh,
    lineHeight:14
  },
  sectionTitle:{
    fontFamily:'robotoBold',
    fontSize:24,
    color:color.textPrimay,
    marginBottom:8
  }
});

export default Home;
