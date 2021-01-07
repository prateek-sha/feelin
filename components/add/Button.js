import React from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";

export const Button = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableWithoutFeedback>
        <View style={styles.Button}>
          <Text style={styles.text}>Post</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginTop: 20,
  },
  Button: {
    backgroundColor: "white",
    borderRadius: 14,
    width: 226,
    height: 50,
    justifyContent: "center",
  },
  text: {
    color: "#1A2C4B",
    textAlign: "center",
    fontSize: 18,
  },
});
