import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import PhotoUpload from "react-native-photo-upload";

class ProfileScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.viewMainStyle}>
        <Text> Profile Screen </Text>
        <PhotoUpload
          onPhotoSelect={avatar => {
            if (avatar) {
              console.log("Image base64 string: ", avatar);
            }
          }}
        >
          <Image
            style={{
              paddingVertical: 30,
              width: 150,
              height: 150,
              borderRadius: 75
            }}
            resizeMode="cover"
            source={{
              uri:
                "https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg"
            }}
          />
        </PhotoUpload>
      </View>
    );
  }
}

const styles = {
  viewMainStyle: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#B79E83",
    height: "100%"
  }
};

export default ProfileScreen;
