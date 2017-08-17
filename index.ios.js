import React, { Component } from 'react';
import codePush from "react-native-code-push";

import LoginScreen from './src/forms/LoginScreen';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

export default class BookingApp extends Component {
  onButtonPress() {
    codePush.sync({
        updateDialog: true,
        installMode: codePush.InstallMode.IMMEDIATE
    });
}

  render() {
    return (
      <View style={styles.viewMainStyle}>
        <LoginScreen />
        <TouchableOpacity onPress={this.onButtonPress} style={styles.buttonStyle }>
                <Text style={styles.textStyle}> Click here for updates</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  viewMainStyle: {
    backgroundColor:'#F7F2EB',
    position: 'absolute',
    top: 0,
    left: 0,
    right:0,
    bottom:0
  },
  buttonStyle: {
    position: 'absolute',
    bottom:0,
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    color:'#370141',
    backgroundColor:'transparent',
    fontSize: 20
  }

}
BookingApp = codePush(codePushOptions)(BookingApp);
AppRegistry.registerComponent('BookingApp', () => BookingApp);
