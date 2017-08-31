import React, { Component } from "react";
import { View, Text } from "react-native";
import { TextField, TwoButtonHComp } from "../components/common";
import { NavigationActions } from "react-navigation";

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.viewMainStyle}>
        <View style={styles.viewTexGroup}>
          <View style={styles.textBoxBackGround}>
            <TextField label={"Name"} highlightColor={"#FF5722"} />
          </View>
          <View style={styles.textBoxBackGround}>
            <TextField
              label={"Password"}
              labelColor={"#999999"}
              highlightColor={"#FF5722"}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.viewHButtonStyle}>
          <TwoButtonHComp
            PButtonText="LOGIN"
            PButtonEvent={() => {
              console.log("Login Action");
            }}
            SButtonText="REGISTER"
            SButtonEvent={() => {
              console.log("Regsiter Action");
              navigate("Register")
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  viewMainStyle: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#FFB121",
    height: "100%"
  },
  textBoxBackGround: {
    backgroundColor: "#FFFFFF",
    marginTop: 9,
    height: 62,
    borderRadius: 3,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    borderColor: "#FFFFFF"
  },
  viewTexGroup: {
    marginTop: 50
  },

  viewHButtonStyle: {
    marginTop: 50
  }
};

export default LoginScreen;
