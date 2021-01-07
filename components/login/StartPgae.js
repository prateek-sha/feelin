import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { PatternButton } from "../button/Button";

export const StartPgae = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1A2C4B" />
      <View style={styles.imageCover}>
        <Image
          style={styles.image}
          source={require("../../assets/MainPattern.png")}
        />
      </View>
      <Text style={styles.text}>Let's get</Text>
      <Text style={styles.text}>Started </Text>
      <View style={styles.button}>
        <PatternButton name="Start Now" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 0,
  },
  imageCover: {
    position: "relative",
    width: "80%",
    height: "60%",
    maxHeight: "60%",
    maxWidth: "80%",
    marginLeft: -25,
    marginBottom: 25,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  text: {
    position: "relative",
    fontSize: 48,
    fontWeight: "400",
    marginLeft: 50,
    marginBottom: 10,
  },
  button: {
    position: "relative",
    marginTop: 20,
    marginBottom: 30,
    marginBottom: 10,
  },
});
