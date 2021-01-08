import React, { useEffect } from "react";
import {
  StyleSheet,
  Animated,
  Text,
  Image,
  View,
  TouchableWithoutFeedback
} from "react-native";

import { Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;

export const PullDown = props => {
  const heightMultipier = props.heightMultipier;
  let animateHeight = new Animated.Value(0);
  let animateOpacity = new Animated.Value(0);
  let animateBlueScreen = new Animated.Value(0);

  const handlBack = () => {
    props.setClicked(false);
  };
  useEffect(() => {
    playAnimation();
  }, [props.clicked]);
  const playAnimation = () => {
    Animated.spring(animateOpacity, {
      toValue: props.clicked ? 1 : 0,
      duration: 1000,
      useNativeDriver: false
    }).start();

    Animated.spring(animateHeight, {
      toValue: props.clicked ? windowHeight - 100 : 0,
      speed: 1,
      useNativeDriver: false
    }).start();

    Animated.spring(animateBlueScreen, {
      speed: 1,
      toValue: props.clicked ? windowHeight * heightMultipier : 0,
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

  let Radius = animateBlueScreen.interpolate({
    inputRange: [0, windowHeight * heightMultipier],
    outputRange: [0, 40]
  });
  const animateBlue = [
    styles.blueWrapper,
    {
      height: animateBlueScreen,
      borderBottomLeftRadius: Radius,
      borderBottomRightRadius: Radius
    }
  ];
  return (
    <Animated.View style={animateStyle}>
      <Animated.View style={animateBlue}>
        <Animated.View style={animateFade}>
          <View style={styles.backWrapper}>
            <TouchableWithoutFeedback onPress={handlBack}>
              <Image
                style={styles.backImage}
                source={require("../../assets/back.png")}
              />
            </TouchableWithoutFeedback>
          </View>
          <Text style={styles.heading}>{props.heading}</Text>
        </Animated.View>
      </Animated.View>
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
  },
  heading: {
    color: "white",
    fontSize: 36,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  backImage: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 20
  },
  backWrapper: {},
  blueWrapper: {
    //height: windowHeight*.2,
    backgroundColor: "#1A2C4B"
  }
});
