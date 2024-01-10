import { Redirect, Stack, SplashScreen } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  PaperProvider,
  configureFonts,
  MD2LightTheme,
} from "react-native-paper";
import { useFonts } from "expo-font";
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import {RobotoMono_400Regular,RobotoMono_600SemiBold, RobotoMono_700Bold} from '@expo-google-fonts/roboto-mono'
import {Roboto_400Regular, Roboto_500Medium, Roboto_300Light, Roboto_700Bold} from '@expo-google-fonts/roboto'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    robotoRegular:Roboto_400Regular,
    robotoMedium:Roboto_500Medium,
    robotoLight: Roboto_300Light,
    robotoBold:Roboto_700Bold,
    robotoMono:RobotoMono_400Regular,
    robotoMonoBold:RobotoMono_700Bold,
    robotoMonoSemiBold:RobotoMono_600SemiBold,
    ...FontAwesome.font,
    ...MaterialCommunityIcons.font
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
 

  return (
    <PaperProvider>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
        <Stack.Screen name="List/[id]" options={{ headerShown: true }} />
        <Stack.Screen name="AddItem" options={{presentation: 'modal' }} />
      {/* <Redirect href="/(tabs)/Home" /> */}
      </Stack>
    </PaperProvider>
  );
}
