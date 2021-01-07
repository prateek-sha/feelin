import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Data } from "./Data";
export const ProfileHeader = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.username}>Preuu_Prateek</Text>
      <View style={styles.headWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require("../../assets/profile.jpeg")}
          />
        </View>
        <View style={styles.dataWrapper}>
          <View style={{ marginRight: 15 }}>
            <Data heading="Follwing" number="23" />
          </View>
          <View style={{ marginRight: 15 }}>
            <Data heading="Follwing" number="23" />
          </View>
          <View>
            <Data heading="Follwing" number="23" />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  username: {
    color: "white",
    fontSize: 36
  },
  wrapper: {
    marginTop: 25,
    marginLeft: 20
  },
  imageWrapper: {
    marginTop: 10,
    maxHeight: 100,
    maxWidth: 100,
    width: 100,
    height: 100
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 100
  },
  headWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  dataWrapper: {
    flexDirection: "row",
    marginRight: 35,
    justifyContent: "space-evenly"
  }
});
