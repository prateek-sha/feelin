import React from "react";
import {
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  Image,
  View,
} from "react-native";

export const PatternButton = ({ name }) => {
  return (
    <TouchableWithoutFeedback onPress={() => alert("im clicked")}>
      <View style={styles.button}>
        <Image
          style={styles.image}
          source={require("../../assets/MainPattern.png")}
        />
        <View style={styles.blue}>
          <Text style={styles.text}>{name}</Text>
          <Image
            style={styles.imageArrow}
            source={require("../../assets/Arrow.png")}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  blue: {
    height: 48,
    width: 180,
    flexDirection: "row",
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    backgroundColor: "#1A2C4B",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
  },
  image: {
    width: 53,
    height: 47.73,
    borderBottomLeftRadius: 14,
    borderTopLeftRadius: 14,
  },
  text: {
    color: "white",
    fontSize: 20,
    marginLeft: 20,
    fontWeight: "100",
  },
  imageArrow: {
    width: 40,
    height: 9,
    marginLeft: 10,
  },
});
