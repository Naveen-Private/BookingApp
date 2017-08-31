import React from "react";
import { View } from "react-native";
import { PButton } from ".";

const PButtonComp = ({ textInput, onClickEvent }) => {
  return (
    <View style={styles.pButtonView}>
      <PButton textInput={textInput} onClickEvent={onClickEvent} />
    </View>
  );
};

const styles = {
  pButtonView: {
    backgroundColor: "transparent",
    height: 68,
    paddingLeft: 10,
    paddingRight: 10
  }
};

export { PButtonComp };
