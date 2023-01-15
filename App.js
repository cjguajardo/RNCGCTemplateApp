import React, { useState, useEffect, useCallback } from "react";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import "react-native-gesture-handler";
import theme from "./constants/theme";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import CGCDrawer from "./layout/drawer";
import { getLocales } from "expo-localization";
import useString from "./hooks/useStrings";
import useStorage from "./hooks/useStorage";
import CGCMainContext from "./context/CGCMainContext";
import { useKeepAwake } from "expo-keep-awake";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  useKeepAwake();
  const [appIsReady, setAppIsReady] = useState(false);
  const { setStringsLanguage, getLabel, getError, availableLanguages, language } =
    useString();
  const stor = useStorage();

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        const deviceLanguage = getLocales()[0].languageCode;
        const storedLanguage = await stor.get("language");
        const storedColorMode = await stor.get("colorMode");
        console.log({ storedColorMode, storedLanguage });
        if (storedColorMode && ["light", "dark"].includes(storedColorMode)) {
          theme.config.initialColorMode = storedColorMode;
        }
        if (storedLanguage) {
          setStringsLanguage(storedLanguage);
        } else {
          setStringsLanguage(deviceLanguage);
        }

        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ width: "100%", height: "100%" }}>
      <CGCMainContext.Provider
        value={{ setStringsLanguage, getLabel, getError, availableLanguages, language }}
      >
        <NativeBaseProvider theme={theme}>
          <SafeAreaProvider>
            <CGCDrawer />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </CGCMainContext.Provider>
    </View>
  );
}
