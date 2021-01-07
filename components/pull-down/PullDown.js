import React, { useEffect } from "react";
import { StyleSheet, Animated } from "react-native";

import { Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;

export const PullDown = props => {
  let animateHeight = new Animated.Value(0);
  let animateOpacity = new Animated.Value(0);

  useEffect(() => {
    playAnimation();
  }, [props.clicked]);
  const playAnimation = () => {
    Animated.timing(animateOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false
    }).start();

    Animated.spring(animateHeight, {
      toValue: props.clicked ? windowHeight - 100 : 0,
      speed: 1,
      useNativeDriver: false
    }).start();
  };

  const animateStyle = [
    styles.wrapper,
    {
      height: animateHeight
    }
  ];

  const animateFade = [
    styles.child,
    {
      opacity: animateOpacity
    }
  ];

  return (
    <Animated.View style={animateStyle}>
      <Animated.View style={animateFade}>{props.children}</Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    backgroundColor: "#EF3251",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  child: {
    zIndex: 2
  }
});
