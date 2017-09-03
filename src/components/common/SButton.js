import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const SButton = ({ textInput, onClickEvent }) => {
  return (
    <View style={styles.ViewStyleG4}>
      <TouchableOpacity onPress={onClickEvent}>
        <View style={styles.viewStyleButton}>
          <Text style={styles.textStyle}> {textInput} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  viewStyleButton: {
    backgroundColor: "#FFFFFF90",
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#837089"
  },
  ViewStyleG4: {
    backgroundColor: "transparent",
    height: 68
  },
  textStyle: {
    color: "#333333",
    fontSize: 18,
    fontWeight: "bold"
  }
};
export { SButton };
