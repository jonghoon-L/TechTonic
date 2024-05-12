import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Group19 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <Text style={styles.text}>수술전후</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    width: 103,
    position: "absolute",
    height: 46,
  },
  text: {
    top: 12,
    left: 20,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 21,
    fontFamily: FontFamily.notoSansKRRegular,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    width: 62,
    height: 22,
    position: "absolute",
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 46,
  },
});

export default Group19;