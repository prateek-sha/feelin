import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

export const SelectColour = ({ setcolor, color }) => {
  const handlePress = () => {
    setcolor(color);
  };

  const colorStyle = [
    styles.wrapper,
    {
      backgroundColor: color,
    },
  ];

  return (
    <View>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={colorStyle}></View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
