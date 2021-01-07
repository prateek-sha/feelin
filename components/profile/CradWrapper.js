import React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "./Card";

export const CradWrapper = () => {
  return (
    <View style={styles.wrapper}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    flexWrap: "wrap",
    flexDirection: "row"
  }
});
