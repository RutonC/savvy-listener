import React, { useEffect } from 'react'
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedProps,
  withTiming,
  interpolateColor
} from 'react-native-reanimated'
import Svg, { Path, Defs, ClipPath, G } from 'react-native-svg'
import AnimatedStroke from '@/components/animated-stroke'
import {Text, View, SafeAreaView} from 'react-native'
import CheckBoxReanimated from '@/components/Check-box-reanimated'

const MARGIN = 10
const vWidth = 64 + MARGIN
const vHeight = 64 + MARGIN
const checkMarkPath =
  'M15 31.1977C23.1081 36.4884 29.5946 43 29.5946 43C29.5946 43 37.5 25.5 69 1.5'
const outlineBoxPath =
  'M24 0.5H40C48.5809 0.5 54.4147 2.18067 58.117 5.88299C61.8193 9.58532 63.5 15.4191 63.5 24V40C63.5 48.5809 61.8193 54.4147 58.117 58.117C54.4147 61.8193 48.5809 63.5 40 63.5H24C15.4191 63.5 9.58532 61.8193 5.88299 58.117C2.18067 54.4147 0.5 48.5809 0.5 40V24C0.5 15.4191 2.18067 9.58532 5.88299 5.88299C9.58532 2.18067 15.4191 0.5 24 0.5Z'

const AnimatedPath = Animated.createAnimatedComponent(Path)

interface Props {
  checked?: boolean
  highlightColor: string
  checkmarkColor: string
  boxOutlineColor: string
}

import AnimatedCheckbox from "react-native-checkbox-reanimated";
import { useSearchParams } from "expo-router";
import { color } from "@/utils/colors";
import { useToken, useColorModeValue } from "native-base";
import { AnimatedFAB } from 'react-native-paper'

const Lists = (props: Props) => {
  const { id } = useSearchParams();

  return (
    <SafeAreaView style={{flex:1}}>
      <CheckBoxReanimated />
{/*       
      <AnimatedFAB
        icon={'plus'}
        label="Adicionar um item"
        visible
        animateFrom="right"
        iconMode="static"
        extended
        style={{position:"absolute", bottom:0}}
      /> */}
    </SafeAreaView>
  );
};

export default Lists;
