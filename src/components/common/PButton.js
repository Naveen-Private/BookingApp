import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const PButton = ({ textInput, onClickEvent }) => {
  return (
    <TouchableOpacity onPress={onClickEvent}>
      <View style={styles.viewStyleButton}>
        <Text style={styles.textStyle}> {textInput} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  viewStyleButton: {
    backgroundColor: "#ED2D23",
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    borderWidth: 1,
    marginTop: 12,
    borderColor: "#ED2D23"
  },

  textStyle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold"
  }
};

export { PButton };
