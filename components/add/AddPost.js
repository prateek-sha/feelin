import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Easing,
  Image,
  Text
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { ChangeColour } from "./ChangeColour";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const AddPost = () => {
  const [color, setcolor] = useState("#FFFFFF");
  const [post, setpost] = useState("");
  const [delayColor, setdelayColor] = useState("#FFFFFF");

  const [dragDown, setdragDown] = useState(false);

  let Radius = new Animated.Value(0);
  let changeHeight = new Animated.Value(windowHeight - 320);

  const ease = Easing.ease;

  const handlePost = value => {
    setpost(value);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      if (gestureState.dy > 30) {
        setdragDown(true);
      }
      if (gestureState.dy < -30) {
        setdragDown(false);
      }
      Animated.spring(changeHeight, {
        toValue: dragDown ? windowHeight - 100 : windowHeight - 320,
        duration: 500,
        ease,
        useNativeDriver: false
      }).start();
      playAnimation();
      playCurveAnimation();
    }
  });
  useEffect(() => {
    playCurveAnimation();
  }, []);
  const playCurveAnimation = () => {
    Animated.spring(Radius, {
      toValue: 40,
      duration: 1200,
      ease,
      useNativeDriver: false
    }).start();
  };

  const animatedStyles = [
    styles.wrapper,
    {
      backgroundColor: delayColor,
      height: changeHeight,
      borderBottomLeftRadius: Radius,
      borderBottomRightRadius: Radius
    }
  ];
  const bounce = Easing.bounce;
  let postHeight = new Animated.Value(0);
  let postWidth = new Animated.Value(0);

  const playAnimation = () => {
    Animated.spring(postHeight, {
      toValue: dragDown ? windowHeight - 100 : windowHeight - 320,
      duration: 700,
      bounce,
      useNativeDriver: false
    }).start();

    Animated.spring(postWidth, {
      toValue: windowWidth,
      duration: 500,
      bounce,
      useNativeDriver: false
    }).start(() => setdelayColor(color));
  };
  useEffect(() => {
    playAnimation();
  }, [color]);

  const animateBackColor = [
    styles.scaleCol,
    {
      backgroundColor: color,
      height: postHeight,
      width: postWidth
    }
  ];
  const headingStyle = [
    styles.heading,
    {
      color: color === "#FFFFFF" ? "black" : "#FFFFFF"
    }
  ];

  const inputStyle = [
    styles.input,
    {
      color: color === "#FFFFFF" ? "black" : "#FFFFFF"
    }
  ];
  return (
    <View>
      <Animated.View style={animatedStyles} {...panResponder.panHandlers}>
        <Animated.View style={animateBackColor}></Animated.View>
        <View style={styles.headingWrapper}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.backImage}
              source={require("../../assets/back.png")}
            />
          </View>
          <Text style={headingStyle}> Create Post</Text>
        </View>
        <View>
          <TextInput
            numberOfLines={4}
            multiline={true}
            value={post}
            onChangeText={handlePost}
            placeholder="write here..."
            placeholderTextColor={color === "#FFFFFF" ? "black" : "#FFFFFF"}
            style={inputStyle}
          />
        </View>
        <View style={styles.dragWrapper}>
          <Image
            style={styles.dragImage}
            source={require("../../assets/drag.png")}
          />
        </View>
      </Animated.View>
      <ChangeColour setcolor={setcolor} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.1)"
    // height: windowHeight - 320
  },
  scaleCol: {
    alignContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: -1,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  backImage: {
    width: 30,
    height: 30
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "500"
  },
  headingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 33
  },
  input: {
    fontSize: 24,
    marginLeft: 35,
    marginTop: 1,
    opacity: 0.8,
    marginRight: 30,
    marginBottom: 24
  },
  dragWrapper: {
    position: "absolute",
    zIndex: 99,
    left: windowWidth / 2 - 170,
    bottom: 10,
    transform: [{ scale: 0.5 }]
  },
  dragImage: {
    borderRadius: 14,
    opacity: 0.2
  }
});
