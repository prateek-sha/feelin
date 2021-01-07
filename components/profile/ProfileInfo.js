import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ProfileInfo = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.name}>prateek sharma</Text>
      <Text style={styles.bioWrapper}>
        bio......... collllllllllllllllllllllllllllllllllllll asdasd asd a sd
        asd a asd a sd as da sd loream
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    color: "white"
  },
  bioWrapper: {
    color: "white",
    maxWidth: 200,
    fontSize: 14
  },
  wrapper: {
    marginTop: 10,
    marginLeft: 20
  }
});
