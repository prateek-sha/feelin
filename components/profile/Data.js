import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Data = ({ heading, number }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.numberHeading}> {heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center"
  },
  number: {
    color: "white",
    fontWeight: "bold"
  },
  numberHeading: {
    color: "white"
  }
});
