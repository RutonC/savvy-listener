import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TasksInterface } from "@/components/Check-box-reanimated";
import { color } from "@/utils/colors";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Checkbox } from "react-native-paper";

interface ListItemProps
  extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  task: TasksInterface;
  onDimiss?: (task: TasksInterface) => void;
}
const LISTITEM_HEIGHT = 70;
const ListItem: React.FC<ListItemProps> = ({
  task,
  onDimiss,
  simultaneousHandlers,
}) => {
  const AnimatedViewItem = Animated.createAnimatedComponent(View);
  const { width: WIDTH_SCREEN } = Dimensions.get("window");
  const [isChecked, setIsChecked ] = useState(false);

  const TRANSLATE_X_TRESHOLD = -WIDTH_SCREEN * 0.3;

  const translationX = useSharedValue(0);
  const itemHeight = useSharedValue(LISTITEM_HEIGHT);
  const marginVertical = useSharedValue(10);
  const opactiy = useSharedValue(1);

  //handleGesture component
  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translationX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDimissed = translationX.value < TRANSLATE_X_TRESHOLD;
      if (shouldBeDimissed) {
        translationX.value = withTiming(-WIDTH_SCREEN);
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opactiy.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished && onDimiss) {
            runOnJS(onDimiss)(task);
          }
        });
      } else {
        translationX.value = withTiming(0);
      }
    },
  });

  //ReStyle the animated component listItem
  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translationX.value,
      },
    ],
  }));

  const rStyleIcon = useAnimatedStyle(() => {
    const opacity = withTiming(
      translationX.value < TRANSLATE_X_TRESHOLD ? 1 : 0
    );
    return { opacity };
  });

  const rStyleContainer = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginVertical: marginVertical.value,
      opacity: opactiy.value,
    };
  });

  return (
    <AnimatedViewItem style={[styles.container, rStyleContainer]}>
      <AnimatedViewItem style={[styles.iconContainer, rStyleIcon]}>
        <MaterialCommunityIcons name="delete" color={"red"} size={70 * 0.4} />
      </AnimatedViewItem>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}
      >
        <AnimatedViewItem style={[styles.Item, rStyle]}>
          <View style={styles.itemSubContainer}>

          {/* left side */}
          <View style={styles.leftSide}>
            <View style={styles.itemCheckBox_title}>
              <Checkbox status={isChecked ? "checked" : "unchecked"} onPress={()=>setIsChecked(!isChecked)} />
              <Text numberOfLines={1} style={[styles.title, isChecked && {textDecorationLine:"line-through"}]}>{task.title}</Text>
            </View>
            {/* <Text numberOfLines={1} style={styles.desc}>{task.description}</Text> */}
          </View>

          {/* right side */}
          <View style={styles.rightSide}>
            <Text style={styles.prices}>MZN {task.price} 
            <Text style={[styles.prices,{color:color.textTh}]}> ( 7 )</Text></Text>
          </View>
          </View>
        </AnimatedViewItem>
      </PanGestureHandler>
    </AnimatedViewItem>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  Item: {
    height: LISTITEM_HEIGHT,
    backgroundColor: color.backgr,
    paddingLeft: 10,
    justifyContent: "center",
    borderRadius: 4,
    elevation: 5,
    paddingHorizontal:10
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  iconContainer: {
    height: LISTITEM_HEIGHT,
    width: LISTITEM_HEIGHT,
    position: "absolute",
    right: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  itemSubContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  leftSide:{
    width:'55%',
  },
  desc: {
    fontSize:13,
    color:color.textTh,
    marginLeft:"23%"
  },
  category: {

    
  },
  dateTime: {

  },
  itemCheckBox_title: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightSide:{
    flexDirection:"row",
  },
  prices:{
    fontSize:12,
    fontWeight:'bold',
    color:color.textSec
  }
});
