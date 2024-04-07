import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Redirect, SplashScreen, Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { TamaguiProvider } from "tamagui";
import { Provider } from "react-redux";
import Store from "../store/Store";
import "../tamagui-web.css";
import { config } from "../tamagui.config";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [interLoaded, interError]);

  if (!interLoaded && !interError) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Provider store={Store}>
      <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="homes/index" options={{ headerShown: false }} />
            <Stack.Screen name="login/index" options={{ headerShown: false }} />

            <Stack.Screen name="signup" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="notification"
              options={{ presentation: "modal", title: "Notification" }}
            />
            <Stack.Screen
              name="leavestatus/index"
              options={{ headerShown: true, title: "Leave Request Status" }}
            />
            <Stack.Screen
              name="leavehistory/index"
              options={{ headerShown: true, title: "Leave History" }}
            />
            <Stack.Screen
              name="edit_profile"
              options={{ headerShown: true, title: "Leave History" }}
            />
            <Stack.Screen
              name="my_progess"
              options={{ headerShown: true, title: "My Progress" }}
            />
          </Stack>
        </ThemeProvider>
      </TamaguiProvider>
    </Provider>
  );
}
