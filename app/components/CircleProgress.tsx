import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { color } from '@/utils/colors';
import SVG, { Circle, CircleProps } from 'react-native-svg';
import Animated,{useAnimatedProps, useSharedValue, withTiming} from 'react-native-reanimated'

type ProgressProps = {
  radius?:number;
  strokeWidth?:number;
  progress?:number;
}

const CircleProgress = ({radius=30, strokeWidth=5, progress=0}:ProgressProps) => {

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const innerRadius = radius-strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius; 

  const fill = useSharedValue(0);
  
  useEffect(()=>{
    fill.value = withTiming(progress,{duration: 1500});
  },[progress])

  const animatedPros = useAnimatedProps(()=>({
    strokeDasharray:[circumference*fill.value,circumference],
  }))

  const circleDefaultProps:CircleProps = {
    r:innerRadius,
    cx:radius,
    cy:radius,
    strokeWidth:strokeWidth,
    stroke:color.progress,
    fill:color.backgr,
    originX:radius,
    originY:radius,
    strokeLinecap:'round',
    rotation: '-90'
  }

  return (
    <View
      style={{width: radius*2, height: radius*2}}
    >
      <SVG>
        {/* Background */}
        <Circle {...circleDefaultProps} opacity={0.4}  />
        {/* Foreground */}
        <AnimatedCircle animatedProps={animatedPros} {...circleDefaultProps} /> 
      </SVG>
      <Text style={{fontFamily:'robotoMonoBold',position:'absolute', alignSelf:'center', top:'35%', fontSize:14}}>{progress*100}%</Text>
    </View>
  )
}

export default CircleProgress