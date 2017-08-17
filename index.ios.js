/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import codePush from "react-native-code-push";

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
      <View>
        <View style={styles.viewStyle}> 
          </View>
        
        <Text> Sample Text Before ... 3 </Text>
        <TouchableOpacity onPress={this.onButtonPress}>
                <Text>Check for updates</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {

  viewStyle: {
      height: 100,
      backgroundColor:'#D4D0CB'
  }

}
BookingApp = codePush(codePushOptions)(BookingApp);
AppRegistry.registerComponent('BookingApp', () => BookingApp);
