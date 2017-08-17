import React from 'react';
import { View } from 'react-native';
import { SButton } from '.';

const SButtonComp = ({ textInput, onClickEvent }) => {
    return (
        <View style={styles.ViewStyle}>
            <SButton 
                
                textInput={textInput}
                onClickEvent={onClickEvent}
            />
        </View>
    );
};

const styles = {
    ViewStyle: {
        height: 68,
        backgroundColor: 'transparent',
        paddingLeft: 10,
        paddingRight: 10
       
    }
};

export { SButtonComp };
