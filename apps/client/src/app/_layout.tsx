import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as RNThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemeProvider } from "@/styles/ThemeProvider";
import { createTheme } from "@/styles/creators";
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
    <RNThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ThemeProvider
        theme={createTheme({
          palette: {
            primary: {
              main: "#007aff",
              light: "#80bfff",
              dark: "#004080",
              contrastText: "#fff",
            },
          },
          shape: { borderRadius: 8 },
        })}
      >
        <Stack>
          <Stack.Screen name="(views)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
      <StatusBar style="auto" />
    </RNThemeProvider>
  );
}
