import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TabNavigator } from "./src/navigation/TabNavigator";

const App = () => {
  const [fontsLoaded] = useFonts({
    "PlayfairDisplay-Regular": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf"),
    "PlayfairDisplay-Bold": require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf"),
    "Inter_18pt-Regular": require("./assets/fonts/Inter/static/Inter_18pt-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={36} color="#E74C3C" />
      </View>
    );
  }

  // Bypass authentication for development: always show the main app
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
