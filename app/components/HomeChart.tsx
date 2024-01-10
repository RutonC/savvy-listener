import { VictoryPie } from "victory-native";
import { Text, View, StyleSheet, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { color } from "@/utils/colors";
import { RobotoMono_700Bold } from "@expo-google-fonts/roboto-mono";
import { useFonts } from "expo-font";

const HomeChart = () => {
  useFonts({
    RobotoMono_700Bold,
  });

  return (
    <View style={styles.chartContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Este mês</Text>
        <Text style={styles.subTitle}>MZN 6000</Text>
      </View>
      <VictoryPie
        colorScale={["#4A3AFF", "#C893FD"]}
        animate={{ easing: "exp" }}
        startAngle={90}
        endAngle={-90}
        height={360}
        data={[{ y: 34 }, { y: 56 }]}
      />
      <View style={{ marginTop: hp("3%") }} />
      <View style={styles.chartLegendContainer}>
        <View style={styles.product}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.dot} />
            <Text style={styles.textName}>Produtos comprados</Text>
          </View>
          <Text style={styles.textValue}>MZN 6000</Text>
        </View>

        <View style={styles.product}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={[styles.dot, { backgroundColor: "#C893FD" }]} />
            <Text style={styles.textName}>Não comprados</Text>
          </View>
          <Text style={styles.textValue}>MZN 6000</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeChart;

const styles = StyleSheet.create({
  chartContainer: {
    height: 299,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    paddingBottom: 20,
    paddingTop: 20,
    ...Platform.select({
      android: {
        elevation: 8,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
      },
      ios: {
        elevation: 8,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
      },
    }),
  },
  titleContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: wp("7%"),
  },
  title: {
    fontFamily: "robotoRegular",
    fontSize: 14,
    color: color.textTh,
  },
  subTitle: {
    fontFamily: "robotoMonoSemiBold",
    fontSize: 22,
  },
  chartLegendContainer: {
    position: "relative",
    marginTop: hp("-23%"),
    alignSelf: "flex-start",
    width: "100%",
  },
  product: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("7%"),
    justifyContent: "space-between",
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 50,
    backgroundColor: "#4A3AFF",
    marginRight: 8.24,
  },
  textValue: {
    fontFamily: "robotoMono",
    fontSize: 16,
    color: color.textTh,
  },
  textName: {
    fontFamily: "robotoRegular",
    fontSize: 16,
    color: color.primary,
  },
});
