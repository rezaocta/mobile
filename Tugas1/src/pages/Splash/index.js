import React from 'react';
import { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import {home} from '../../assets';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 3000);
    });

    return (
        <View style={styles.wrapper.page}>
            <Image source={home} style={styles.wrapper.illustration}/>
        </View>
    );
    
    
}
const styles = {
    wrapper: {
        page: {
            alignItems: 'center',
            justifyContent: 'center',
            flex:1,
            backgroundColor: '#3cb49e',
        },
        illustration: {
            width: 400, 
            height: 200, 
            marginBottom: 10 
        },
        
    },
    text: {
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#3cb49e', 
        marginBottom: 50 
    },
}
export default Splash;