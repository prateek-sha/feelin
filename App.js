import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomBar } from "./components/AppBar/AppBar";

//Setting up font
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Home } from "./pages/home/Home";
import { Profile } from "./pages/profile/Profile";
import { Add } from "./pages/add/Add";
import { View } from "react-native";

const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-bold": require("./assets/font/Roboto-Bold.ttf"),
    "roboto-italic": require("./assets/font/Roboto-Italic.ttf"),
    "roboto-regular": require("./assets/font/Roboto-Regular.ttf"),
  });
};

const Stack = createStackNavigator();

export default function App() {
  const [dataLoaded, setdataLoaded] = useState(false);

  if (!dataLoaded) {
    <AppLoading startAsync={fetchFonts} onFinish={() => setdataLoaded(true)} />;
  }

  return (
    <NavigationContainer theme={{ colors: { background: "#000" } }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#000" },
          animationEnabled: false,
        }}
        >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
