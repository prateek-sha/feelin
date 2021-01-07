import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

export const JarHeading = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>My Jars</Text>
      <TouchableWithoutFeedback>
        <Text style={styles.coolDown}>Cool Down Time?</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  heading: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },
  coolDown: {
    color: "white",
    fontSize: 18
  }
});
