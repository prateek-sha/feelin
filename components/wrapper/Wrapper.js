import React, { useEffect } from "react";
import { Animated, Easing, StatusBar, StyleSheet, View } from "react-native";
import { AppBar } from "../AppBar/AppBar";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Wrapper = props => {
  let Radius = new Animated.Value(0);

  const ease = Easing.ease;

  Animated.timing(Radius, {
    toValue: 40,
    duration: 1200,
    ease,
    useNativeDriver: false
  }).start();

  const animatedStyles = [
    styles.top,
    {
      borderBottomLeftRadius: Radius,
      borderBottomRightRadius: Radius
    }
  ];

  return (
    <View style={styles.wapper}>
      <StatusBar backgroundColor="#1A2C4B" />
      <Animated.View style={animatedStyles}>{props.children}</Animated.View>
      <View style={styles.appbar}>
        <AppBar navigation={props.navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wapper: {
    flex: 1,
    backgroundColor: "white"
  },
  top: {
    height: windowHeight - 100,
    marginBottom: 80,
    backgroundColor: "#1A2C4B"
  },
  appbar: {
    position: "absolute",
    left: 0,
    top: windowHeight - 100,
    width: windowWidth
  }
});
