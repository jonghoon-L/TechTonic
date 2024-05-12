import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Rectangle3 = () => {
  return (
    <ImageBackground
      style={styles.icon}
      resizeMode="cover"
      source={require("../assets/01.png")}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default Rectangle3;