import React from 'react';
import { Text, View, Image } from 'react-native';
import ActionButton from './ActionButton';
import {home} from '../../assets';
import {Input} from '../../components';

const Home = ({navigation}) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <View style={styles.wrapper.page}>
            <Image source={home} style={styles.wrapper.illustration}/>
            <Text style={styles.text}>Selamat datang!</Text>
            
            <Text style={{ fontSize: 15, color: 'black', textAlign: 'center' }}>
                Masukkan Berat Badan
            </Text>
            <Input placeholder="Berat Badan (kg)" />
            
            <Text style={{ fontSize: 15, color: 'black', textAlign: 'center' }}>
                Masukkan Tinggi Badan
            </Text>
            <Input placeholder="Tinggi Badan (cm)"/>
            
            <ActionButton 
                desc="Apakah berat badanmu sudah ideal?" 
                title='Hitung' 
                onPress={ () => handleGoTo('Finish')}
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

export default Home;