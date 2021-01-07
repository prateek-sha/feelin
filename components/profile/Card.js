import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
export const Card = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.date}>12</Text>
      <Text style={styles.month}>Jan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    width: (windowWidth - 60) / 3,
    height: 100,
    borderRadius: 14,
    margin:5,
    justifyContent:'center',
    alignItems:'center'
  },
  date: {
    fontSize: 24,
  },
  month: {
    fontSize: 18
  }
});
