import React from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export  const AppBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
        <View>
          <Image
            style={styles.icon}
            source={require("../../assets/home.png")}
          ></Image>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Add")}>
        <View style={styles.add}>
          <Image
            style={styles.addImage}
            source={require("../../assets/add.png")}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile")}>
        <View>
          <Image
            style={styles.icon}
            source={require("../../assets/profile.png")}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
  add: {
    marginRight: 25,
    marginLeft: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  addImage: {
    transform: [{ scale: 0.5 }],
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
});
