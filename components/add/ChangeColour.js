import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SelectColour } from "./SelectColour";
import { Button } from "./Button";

export const ChangeColour = ({ setcolor }) => {
  const colours = ["#FFFFFF", "#4653AD", "#EF3251", "#F7960F"];

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Change color</Text>
      <View style={styles.colorWrapper}>
        {colours.map((color) => (
          <SelectColour key={color} color={color}  setcolor={setcolor} />
        ))}
      </View>
      <Button style={styles.buttonWrapper} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  heading: {
    color: "white",
    fontSize: 18,
    marginLeft: 20,
    marginTop: 10,
    fontWeight: "500",
  },
  colorWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  buttonWrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
