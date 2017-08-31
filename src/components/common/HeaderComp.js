import React from "react";
import { Text, View } from "react-native";

const HeaderComp = ({ HeaderText }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{HeaderText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 48,
    backgroundColor: "#370141",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    color: "#FFFFFF",
    fontSize: 16
  }
};
export { HeaderComp };
