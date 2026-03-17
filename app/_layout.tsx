import backgroundApp from "@/assets/images/background-app";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { SvgXml } from "react-native-svg";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("../src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../src/assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <View style={styles.root}>
          <SvgXml
            xml={backgroundApp}
            width="100%"
            height="100%"
            style={StyleSheet.absoluteFillObject}
            preserveAspectRatio="xMidYMid slice"
          />
          <SafeAreaView style={{ flex: 1 }}>
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: "transparent" },
                animation: "slide_from_right",
              }}
            >
              <Stack.Screen name="index" />
              <Stack.Screen name="homescreen/index" />
              <Stack.Screen name="lesson/index" />
              <Stack.Screen name="quiz/index" />
              <Stack.Screen name="vocabulary/index" />
              <Stack.Screen name="vocabulary/vocabulary-flash-card/index" />
              <Stack.Screen name="profile/index" />
              <Stack.Screen name="simulation/index" />
              <Stack.Screen name="simulation/quiz/index" />
              <Stack.Screen name="grammar/index" />
              <Stack.Screen name="info/index" />
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="dark" />
          </SafeAreaView>
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F3F2F9",
  },
});
