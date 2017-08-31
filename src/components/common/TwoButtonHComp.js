import React from "react";
import { View } from "react-native";
import { PButton, SButton } from ".";

const TwoButtonHComp = ({
  PButtonText,
  PButtonEvent,
  SButtonText,
  SButtonEvent
}) => {
  return (
    <View style={styles.stylesView}>
      <View style={{ flex: 1, marginLeft: 10, marginRight: 5 }}>
        <SButton textInput={SButtonText} onClickEvent={SButtonEvent} />
      </View>
      <View style={{ flex: 1, marginRight: 10, marginLeft: 5 }}>
        <PButton textInput={PButtonText} onClickEvent={PButtonEvent} />
      </View>
    </View>
  );
};

const styles = {
  stylesView: {
    flexDirection: "row",
    backgroundColor: "transparent"
  }
};

export { TwoButtonHComp };
