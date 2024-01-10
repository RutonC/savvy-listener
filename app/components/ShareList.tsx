import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { color } from "@/utils/colors";
import CircleProgress from "./CircleProgress";
import { dados } from "@/utils/DataSet";
import { Link } from "expo-router";

const ShareList = () => {
  
  return (
    <>
      {dados.map((item, index) => (
        <Link key={index} href={`/List/${index}`} asChild>
        <TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.subContainer}>
          <View>
            <Text style={styles.sharedTitle}>{item.title}</Text>
            <Text style={styles.sharedData}>{item.data}</Text>
            <View style={styles.avatar}>
              {item.friends.map((item1, index1) => (
                <View key={index1} style={{ flexDirection: "row" }}>
                  <Avatar.Image
                    source={{ uri: item1.url }}
                    size={20}
                    style={index1 > 0 && { marginLeft: -10 }}
                  />
                </View>
              ))}
            </View>
          </View>

          <View>
            <CircleProgress progress={item.value}/>
          </View>
          </View>
        </View>
        </TouchableOpacity>
        </Link>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("11%"),
    backgroundColor: color.backgr,
    marginBottom: 8,
    borderRadius: 4,
    padding: 9,
  },
  sharedTitle: {
    fontFamily:'robotoBold',
    fontSize: 16,
    color: color.textPrimay,
    lineHeight: 24,
  },
  sharedData: {
    fontFamily:'robotoLight',
    fontSize: 12,
    color: color.textTh,
  },
  avatar: {
    flexDirection: "row",
    marginTop: 4,
  },
  subContainer:{
    flexDirection:"row",
    justifyContent:"space-between"
  }
});

export default ShareList;
