import { ThemeProvider as NavThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { createNavTheme } from "@/styles/creators/createNavTheme";
import { ThemeProvider } from "@/styles/ThemeProvider";
import { dark } from "@/themes/dark";
import { light } from "@/themes/light";
import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  // const [loaded] = useFonts({
  //   SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  // });

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <NavThemeProvider
      value={
        colorScheme === "dark" ? createNavTheme(dark) : createNavTheme(light)
      }
    >
      <ThemeProvider theme={colorScheme === "dark" ? dark : light}>
        <Stack>
          <Stack.Screen name="(views)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
      <StatusBar style="auto" />
    </NavThemeProvider>
  );
}
