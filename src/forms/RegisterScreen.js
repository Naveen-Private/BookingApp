import React, { Component } from "react";
import { View, Text } from "react-native";
import { PButtonComp } from "../components/common";

class RegisterScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.viewMainStyle}>
      <Text style={{top:50}} > RegisterScreen </Text>
      <View style={{top:50}} >
      <PButtonComp textInput='Login Screen' onClickEvent={() =>{
        this.props.navigation.goBack()
         } }/>
      <PButtonComp textInput='Profile Screen' onClickEvent={() =>{
        navigate("Profile")
        } }/>
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

export default RegisterScreen;