import React from 'react';
import { Text, View, Image } from 'react-native';
import ActionButton from './ActionButton';
// import {home} from '../../assets';

const Finish = ({navigation}) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    };
    return (
        <View style={styles.wrapper.page}>
            {/* <Image source={home} style={styles.wrapper.illustration}/> */}
            {/* <Text style={styles.text}>Selamat datang!</Text> */}
            <ActionButton 
                desc="Apakah berat badanmu sudah ideal?" 
                title='Hitung' 
                onPress={ () => handleGoTo('Home')}
            />
            
        </View>
    );
};

const styles = {
    wrapper: {
        page: {
            alignItems: 'center',
            justifyContent: 'center',
            flex:1,
            backgroundColor: 'white',
        },
        illustration: {
            width: 219, 
            height: 117, 
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

export default Finish;