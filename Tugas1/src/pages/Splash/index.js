import React from 'react';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 3000);
    });

    return (
        <View>
            <Text>Splash Screen ini</Text>
        </View>
    )
}

export default Splash;