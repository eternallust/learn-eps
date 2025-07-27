import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { SplashScreen } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("../src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../src/assets/fonts/Poppins-Bold.ttf"),
    "Obvia-Regular": require("../src/assets/fonts/obvia/obvia-400.otf"),
    "Obvia-Bold": require("../src/assets/fonts/obvia/obvia-900.otf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned)
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Prevent rendering until the font has loaded or an error was returned
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="homescreen/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="lesson/index" options={{ headerShown: false }} />
        <Stack.Screen name="quiz/index" options={{ headerShown: false }} />
        <Stack.Screen
          name="vocabulary/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="profile/index" options={{ headerShown: false }} />
        <Stack.Screen name="simulation/index" options={{ headerShown: false }} />
        <Stack.Screen name="grammar/index" options={{ headerShown: false }} />
        <Stack.Screen name="info/index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
